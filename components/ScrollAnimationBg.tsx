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

  const { scrollYProgress } = useScroll();

  const frameIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, TOTAL_FRAMES - 1]
  );

  useEffect(() => {
    return frameIndex.onChange((latest) => {
      const newFrame = Math.round(latest);
      console.log("Current frame:", newFrame);
      setCurrentFrame(newFrame);
    });
  }, [frameIndex]);

  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      <img
        src={framePaths[currentFrame]}
        alt="Animated Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#050505]/60 backdrop-blur-sm" />
    </div>
  );
}
