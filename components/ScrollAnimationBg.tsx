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
  const [error, setError] = useState<string | null>(null);

  const { scrollYProgress } = useScroll();

  const frameIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, TOTAL_FRAMES - 1]
  );

  useEffect(() => {
    return frameIndex.onChange((latest) => {
      const newFrame = Math.round(latest);
      console.log("Current frame:", newFrame, "path:", framePaths[newFrame]);
      setCurrentFrame(newFrame);
    });
  }, [frameIndex]);

  const handleError = (e: any) => {
    console.error("Image load error:", e);
    setError(`Failed to load ${framePaths[currentFrame]}`);
  };

  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      {error && (
        <div className="absolute inset-0 flex items-center justify-center text-white z-50 bg-black/80">
          <p>{error}</p>
        </div>
      )}
      <img
        src={framePaths[currentFrame]}
        alt="Animated Background"
        className="w-full h-full object-cover"
        onError={handleError}
      />
      <div className="absolute inset-0 bg-[#050505]/60 backdrop-blur-sm" />
    </div>
  );
}
