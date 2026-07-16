"use client";

import React, { useState, useEffect, useRef } from "react";
import { useScroll, useSpring, useTransform, motion } from "framer-motion";

const TOTAL_FRAMES = 100;

const framePaths = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
  const frameNumber = String(i + 1).padStart(3, "0");
  return `/images/bg-frames/frame_${frameNumber}.jpg`;
});

export default function ScrollAnimationBg() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();

  // Smooth scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
    restDelta: 0.0001
  });

  // Transform progress to frame index (clamped to 0-99)
  const frameIndex = useTransform(smoothProgress, [0, 1], [0, TOTAL_FRAMES - 1]);
  const [displayFrame, setDisplayFrame] = useState(0);
  const prevFrameRef = useRef(0);

  // Preload all images first
  useEffect(() => {
    let count = 0;
    let hasError = false;

    const preloadImage = (src: string, index: number) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          count++;
          setLoadedCount(count);
          resolve();
        };
        img.onerror = () => {
          hasError = true;
          reject(new Error(`Failed to load frame ${index + 1}`));
        };
      });
    };

    const preloadAll = async () => {
      try {
        const promises = framePaths.map((src, index) => preloadImage(src, index));
        await Promise.all(promises);
        if (!hasError) {
          setIsLoaded(true);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load frames");
      }
    };

    preloadAll();
  }, []);

  // Update display frame whenever the frame index changes
  useEffect(() => {
    const unsubscribe = frameIndex.on("change", (latest) => {
      const newFrame = Math.round(latest);
      const clampedFrame = Math.max(0, Math.min(newFrame, TOTAL_FRAMES - 1));
      if (clampedFrame !== prevFrameRef.current) {
        setDisplayFrame(clampedFrame);
        prevFrameRef.current = clampedFrame;
      }
    });
    return unsubscribe;
  }, [frameIndex]);

  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-full -z-10">
      {error && (
        <div className="absolute inset-0 flex items-center justify-center text-white z-50 bg-black/90">
          <p className="text-xl">{error}</p>
        </div>
      )}
      {!isLoaded && !error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-50 bg-black/90">
          <p className="text-2xl font-serif mb-6">Dohrighat</p>
          <p className="text-lg mb-4">Loading experience...</p>
          <div className="w-80 h-3 bg-white/20 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-primary to-primary/80"
              initial={{ width: 0 }}
              animate={{ width: `${(loadedCount / TOTAL_FRAMES) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            {loadedCount}/{TOTAL_FRAMES} frames loaded
          </p>
        </div>
      )}
      {isLoaded && (
        <>
          <motion.img
            key={displayFrame}
            src={framePaths[displayFrame]}
            alt="Dohrighat - Where Heritage Meets the River"
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15 }}
          />
          <div className="absolute inset-0 bg-[#050505]/60 backdrop-blur-none" />
        </>
      )}
    </div>
  );
}
