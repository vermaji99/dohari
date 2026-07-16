"use client";

import React, { useState, useEffect, useRef } from "react";
import { useScroll, useSpring, useTransform, motion } from "framer-motion";
import { useLoading } from "./LoadingProvider";

const TOTAL_FRAMES = 100;

const framePaths = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
  const frameNumber = String(i + 1).padStart(3, "0");
  return `/images/bg-frames/frame_${frameNumber}.jpg`;
});

export default function ScrollAnimationBg() {
  const { setIsLoading, setLoadedCount } = useLoading();
  const [error, setError] = useState<string | null>(null);

  // Track current and previous frame for cross-fade
  const [currentFrame, setCurrentFrame] = useState(0);
  const [previousFrame, setPreviousFrame] = useState(0);

  const { scrollYProgress } = useScroll();

  // Very smooth spring for scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 60,
    restDelta: 0.00001
  });

  const frameIndex = useTransform(smoothProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

  // Preload all images first
  useEffect(() => {
    let count = 0;
    let hasError = false;

    const preloadImage = (src: string) => {
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
          reject(new Error("Failed to load frame"));
        };
      });
    };

    const preloadAll = async () => {
      try {
        const promises = framePaths.map(preloadImage);
        await Promise.all(promises);
        if (!hasError) {
          setIsLoading(false);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load frames");
      }
    };

    preloadAll();
  }, [setIsLoading]);

  // Update current and previous frames for cross-fade
  useEffect(() => {
    const unsubscribe = frameIndex.on("change", (latest) => {
      const newFrame = Math.round(latest);
      const clampedFrame = Math.max(0, Math.min(newFrame, TOTAL_FRAMES - 1));
      if (clampedFrame !== currentFrame) {
        setPreviousFrame(currentFrame);
        setCurrentFrame(clampedFrame);
      }
    });
    return unsubscribe;
  }, [frameIndex, currentFrame]);

  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      {error && (
        <div className="absolute inset-0 flex items-center justify-center text-white z-50 bg-black/90">
          <p className="text-xl">{error}</p>
        </div>
      )}
      {/* Loading screen is now handled in the provider wrapper */}
      <motion.img
        key={`prev-${previousFrame}`}
        src={framePaths[previousFrame]}
        alt="Dohrighat"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />
      <motion.img
        key={`current-${currentFrame}`}
        src={framePaths[currentFrame]}
        alt="Dohrighat - Where Heritage Meets the River"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[#050505]/60 backdrop-blur-none" />
    </div>
  );
}
