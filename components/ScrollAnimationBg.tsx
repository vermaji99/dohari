"use client";

import React, { useState, useEffect, useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

const TOTAL_FRAMES = 100;

const framePaths = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
  const frameNumber = String(i + 1).padStart(3, "0");
  return `/images/bg-frames/frame_${frameNumber}.jpg`;
});

export default function ScrollAnimationBg() {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const { scrollYProgress } = useScroll();

  const frameIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, TOTAL_FRAMES - 1]
  );

  // Preload all images
  useEffect(() => {
    let count = 0;
    framePaths.forEach((src, index) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        count++;
        setLoadedCount(count);
        console.log(`Loaded frame ${index + 1}/${TOTAL_FRAMES}:`, src);
        if (count === TOTAL_FRAMES) {
          console.log("All frames loaded!");
          setIsLoaded(true);
        }
      };
      img.onerror = (e) => {
        console.error(`Failed to load frame ${index + 1}:`, src, e);
        setError(`Failed to load frame ${index + 1}`);
      };
    });
  }, []);

  useEffect(() => {
    return frameIndex.onChange((latest) => {
      const newFrame = Math.round(latest);
      console.log("Current frame:", newFrame);
      setCurrentFrame(newFrame);
    });
  }, [frameIndex]);

  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      {error && (
        <div className="absolute inset-0 flex items-center justify-center text-red-500 z-50">
          {error}
        </div>
      )}
      {!isLoaded && !error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-50">
          <p>Loading background frames...</p>
          <p>{loadedCount}/{TOTAL_FRAMES}</p>
        </div>
      )}
      {isLoaded && (
        <>
          <img
            src={framePaths[currentFrame]}
            alt="Animated Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#050505]/50 backdrop-blur-sm" />
        </>
      )}
      {!isLoaded && (
        <>
          <img
            src={framePaths[0]}
            alt="Animated Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#050505]/50 backdrop-blur-sm" />
        </>
      )}
    </div>
  );
}
