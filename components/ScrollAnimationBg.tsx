"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { useScroll, useTransform } from "framer-motion";

const TOTAL_FRAMES = 100;
const PRELOAD_BATCH_SIZE = 10;
const PRELOAD_BUFFER = 5;

const framePaths = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
  const frameNumber = String(i + 1).padStart(3, "0");
  return `/images/bg-frames/frame_${frameNumber}.jpg`;
});

export default function ScrollAnimationBg() {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [loadedFrames, setLoadedFrames] = useState<Set<number>>(new Set());
  const [isInitialLoaded, setIsInitialLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const loadedFramesRef = useRef<Set<number>>(new Set());

  const { scrollYProgress } = useScroll();

  // Memoize the frame path for current frame to prevent unnecessary re-renders
  const currentFramePath = useMemo(() => {
    return framePaths[currentFrame];
  }, [currentFrame]);

  // Preload a single frame
  const preloadFrame = useRef((frameIndex: number) => {
    if (loadedFramesRef.current.has(frameIndex)) return;
    if (frameIndex < 0 || frameIndex >= TOTAL_FRAMES) return;

    const img = new Image();
    img.src = framePaths[frameIndex];
    img.onload = () => {
      loadedFramesRef.current.add(frameIndex);
      setLoadedFrames(new Set(loadedFramesRef.current));
    };
    img.onerror = () => {
      console.error(`Failed to load frame ${frameIndex + 1}`);
    };
  });

  // Preload initial frames and then preload frames near current scroll position
  useEffect(() => {
    // Preload first batch of frames
    const initialBatch = Array.from({ length: Math.min(PRELOAD_BATCH_SIZE, TOTAL_FRAMES) }, (_, i) => i);
    initialBatch.forEach(index => preloadFrame.current(index));

    // Mark initial loaded when first frame is ready
    const checkInitialLoad = setInterval(() => {
      if (loadedFramesRef.current.has(0)) {
        setIsInitialLoaded(true);
        clearInterval(checkInitialLoad);
      }
    }, 100);

    return () => clearInterval(checkInitialLoad);
  }, []);

  // Preload frames around current scroll position
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const newFrame = Math.max(0, Math.min(Math.round(latest * (TOTAL_FRAMES - 1)), TOTAL_FRAMES - 1));
      setCurrentFrame(newFrame);

      // Preload frames before and after current frame
      for (let i = Math.max(0, newFrame - PRELOAD_BUFFER); i <= Math.min(TOTAL_FRAMES - 1, newFrame + PRELOAD_BUFFER); i++) {
        preloadFrame.current(i);
      }
    });

    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      {error && (
        <div className="absolute inset-0 flex items-center justify-center text-white z-50 bg-black/90">
          <p className="text-xl">{error}</p>
        </div>
      )}
      {!isInitialLoaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center text-white z-50 bg-black/90">
          <p className="text-xl">Loading...</p>
        </div>
      )}
      {isInitialLoaded && (
        <>
          <img
            key={currentFrame}
            src={currentFramePath}
            alt="Animated Background"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-[#050505]/60 backdrop-blur-sm" />
        </>
      )}
    </div>
  );
}
