"use client";

import React, { useState, useEffect } from "react";
import { useScroll, useSpring, useTransform } from "framer-motion";
import { useLoading } from "./LoadingProvider";

const TOTAL_FRAMES = 100;

const framePaths = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
  const frameNumber = String(i + 1).padStart(3, "0");
  return `/images/bg-frames/frame_${frameNumber}.jpg`;
});

export default function ScrollAnimationBg() {
  const { setIsLoading, setLoadedCount } = useLoading();
  const [error, setError] = useState<string | null>(null);
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const [nextFrameIndex, setNextFrameIndex] = useState(0);

  const { scrollYProgress } = useScroll();

  // Super smooth spring settings
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 500,
    damping: 100,
    restDelta: 0.0000001
  });

  const frameIndex = useTransform(smoothProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

  // Preload all images
  useEffect(() => {
    let count = 0;
    let hasError = false;

    const preloadImage = (src: string) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          count++;
          setLoadedCount(count);
          resolve();
        };
        img.onerror = () => {
          hasError = true;
          resolve();
        };
      };
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
  }, [setIsLoading, setLoadedCount]);

  // Update frames for cross-fade without remount
  useEffect(() => {
    const unsubscribe = frameIndex.on("change", (latest) => {
      const newFrame = Math.round(latest);
      const clamped = Math.max(0, Math.min(newFrame, TOTAL_FRAMES - 1));
      if (clamped !== currentFrameIndex) {
        setNextFrameIndex(clamped);
        setTimeout(() => {
          setCurrentFrameIndex(clamped);
        }, 75);
      }
    });

    return unsubscribe;
  }, [frameIndex, currentFrameIndex]);

  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      {error && (
        <div className="absolute inset-0 flex items-center justify-center text-white z-50 bg-black/90">
          <p className="text-xl">{error}</p>
        </div>
      )}
      <img
        src={framePaths[currentFrameIndex]}
        alt="Dohrighat - Where Heritage Meets the River"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 1, transition: 'opacity 0.35s ease-in-out' }}
      />
      <img
        src={framePaths[nextFrameIndex]}
        alt="Dohrighat"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: nextFrameIndex === currentFrameIndex ? 0 : 1, transition: 'opacity 0.35s ease-in-out' }}
      />
      <div className="absolute inset-0 bg-[#050505]/60 backdrop-blur-none pointer-events-none" />
    </div>
  );
}
