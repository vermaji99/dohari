"use client";

import React from "react";
import { useLoading } from "./LoadingProvider";
import { motion } from "framer-motion";
import ScrollAnimationBg from "./ScrollAnimationBg";
import LenisProvider from "./LenisProvider";

const TOTAL_FRAMES = 100;

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const { isLoading, loadedCount } = useLoading();

  return (
    <LenisProvider>
      <ScrollAnimationBg />
      {isLoading ? (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center text-white bg-black">
          <p className="text-4xl font-serif mb-6">Dohrighat</p>
          <p className="text-lg mb-6 text-muted-foreground">Loading experience...</p>
          <div className="w-80 h-3 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-primary/80"
              initial={{ width: 0 }}
              animate={{ width: `${(loadedCount / TOTAL_FRAMES) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            {loadedCount}/{TOTAL_FRAMES} frames loaded
          </p>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      )}
    </LenisProvider>
  );
}
