"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function FoodPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="text-primary uppercase tracking-[0.3em] mb-4">
              Taste
            </p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">
              Food Guide
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Coming soon: Explore the authentic local flavors of Dohrighat!
            </p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
