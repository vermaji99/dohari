"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { realImages, type ImageData } from "@/lib/data";

const categoryLabels: Record<string, string> = {
  rivers: "Rivers & Ghats",
  temples: "Temples",
  canals: "Canals & Dam",
  education: "Schools & Colleges",
  transport: "Transport",
  healthcare: "Healthcare",
  food: "Food & Sweets",
  markets: "Markets & Marts",
};

const categoryOrder = [
  "rivers",
  "temples",
  "canals",
  "education",
  "healthcare",
  "food",
  "markets",
  "transport",
];

function GallerySection({
  category,
  images,
}: {
  category: string;
  images: ImageData[];
}) {
  if (images.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <h2 className="text-3xl font-serif font-bold mb-8 text-primary">
        {categoryLabels[category] ?? category}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group"
          >
            <img
              src={img.url}
              alt={img.alt}
              className="w-full h-72 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
            />
            <p className="text-muted-foreground mt-2 text-center">
              {img.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function GalleryClient() {
  const allCategories = Array.from(
    new Set(realImages.map((img) => img.category))
  );

  const orderedCategories = [
    ...categoryOrder.filter((c) => allCategories.includes(c)),
    ...allCategories.filter((c) => !categoryOrder.includes(c)),
  ];

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
              Gallery
            </p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">
              Photo Gallery
            </h1>
          </motion.div>

          {orderedCategories.map((cat) => (
            <GallerySection
              key={cat}
              category={cat}
              images={realImages.filter((img) => img.category === cat)}
            />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
