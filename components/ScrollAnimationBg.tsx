"use client";

import React, { useState, useEffect, useRef } from "react";
import { useScroll, useSpring, useTransform } from "framer-motion";

const TOTAL_FRAMES = 100;

const framePaths = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
  const frameNumber = String(i + 1).padStart(3, "0");
  return `/images/bg-frames/frame_${frameNumber}.jpg`;
});

export default function ScrollAnimationBg() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const prevFrameRef = useRef(0);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const frameIndex = useTransform(smoothProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

  const [displayFrame, setDisplayFrame] = useState(0);

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

  // Update display frame with smooth transitions
  useEffect(() => {
    const unsubscribe = frameIndex.on("change", (latest) => {
      const newFrame = Math.round(latest);
      if (newFrame !== prevFrameRef.current) {
        setDisplayFrame(Math.max(0, Math.min(newFrame, TOTAL_FRAMES - 1)));
        prevFrameRef.current = newFrame;
      }
    });

    return unsubscribe;
  }, [frameIndex]);

  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      {error && (
        <div className="absolute inset-0 flex items-center justify-center text-white z-50 bg-black/90">
          <p className="text-xl">{error}</p>
        </div>
      )}
      {!isLoaded && !error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-50 bg-black/90">
          <p className="text-xl mb-4">Loading...</p>
          <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${(loadedCount / TOTAL_FRAMES) * 100}%` }}
            />
          </div>
          <p className="mt-2 text-sm">{loadedCount}/{TOTAL_FRAMES} frames</p>
        </div>
      )}
      {isLoaded && (
        <>
          <img
            src={framePaths[displayFrame]}
            alt="Animated Background"
            className="w-full h-full object-cover transition-opacity duration-150"
          />
          <div className="absolute inset-0 bg-[#050505]/60 backdrop-blur-none" />
        </>
      )}
    </div>
  );
}
