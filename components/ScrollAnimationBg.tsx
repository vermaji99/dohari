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

  const { scrollYProgress } = useScroll();

  const frameIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, TOTAL_FRAMES - 1]
  );

  // Preload all images
  useEffect(() => {
    let loadedCount = 0;
    const images = framePaths.map((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          setIsLoaded(true);
        }
      };
      return img;
    });
  }, []);

  useEffect(() => {
    return frameIndex.onChange((latest) => {
      setCurrentFrame(Math.round(latest));
    });
  }, [frameIndex]);

  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      {isLoaded && (
        <img
          src={framePaths[currentFrame]}
          alt="Animated Background"
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
}
