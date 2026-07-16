"use client";

import React, { useState, useEffect, useRef } from "react";
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
  const [currentFrame, setCurrentFrame] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);
  const lastFrameRef = useRef(0);

  const { scrollYProgress } = useScroll();

  // Extremely stiff spring for instant response
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 1000,
    damping: 200,
    restDelta: 0.00000001
  });

  const frameIndex = useTransform(smoothProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

  // Preload all images and force browser to cache them
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
  }, [setIsLoading, setLoadedCount]);

  // Update frame using requestAnimationFrame
  useEffect(() => {
    const unsubscribe = frameIndex.on("change", (latest) => {
      const newFrame = Math.round(latest);
      const clampedFrame = Math.max(0, Math.min(newFrame, TOTAL_FRAMES - 1));

      if (clampedFrame !== lastFrameRef.current) {
        lastFrameRef.current = clampedFrame;
        requestAnimationFrame(() => {
          setCurrentFrame(clampedFrame);
        });
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
      <img
        ref={imgRef}
        src={framePaths[currentFrame]}
        alt="Dohrighat - Where Heritage Meets the River"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          willChange: 'contents',
          imageRendering: 'auto'
        }}
      />
      <div className="absolute inset-0 bg-[#050505]/60 backdrop-blur-none pointer-events-none" />
    </div>
  );
}
