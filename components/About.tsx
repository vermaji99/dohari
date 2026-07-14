"use client";

import React from "react";
import { motion } from "framer-motion";
import { localStats } from "@/lib/data";

const aboutPoints = [
  {
    year: "History",
    title: "Ancient Heritage",
    description:
      "Dohrighat has a rich historical significance, with roots tracing back centuries, known for its cultural and religious importance.",
  },
  {
    year: "Culture",
    title: "Vibrant Traditions",
    description:
      "Experience the colorful festivals, traditional music, and authentic cuisine that define the local culture.",
  },
  {
    year: "River",
    title: "Ghaghara Riverside",
    description:
      "The majestic Ghaghara River flows through the heart of the town, providing breathtaking views and spiritual solace.",
  },
  {
    year: "Future",
    title: "Modern Vision",
    description:
      "Blending heritage with progress, Dohrighat is evolving while preserving its unique identity.",
  },
];

export default function About() {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-primary uppercase tracking-[0.3em] mb-4">Discover</p>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">About Dohrighat</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A town where history breathes, the river flows, and culture thrives
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {aboutPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glassmorphism p-8 rounded-2xl hover:shadow-premium transition-all duration-300"
            >
              <p className="text-primary font-bold text-sm uppercase tracking-wider mb-2">
                {point.year}
              </p>
              <h3 className="text-2xl font-serif font-semibold mb-4">{point.title}</h3>
              <p className="text-muted-foreground">{point.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Population", value: localStats.population },
            { label: "Literacy Rate", value: localStats.literacyRate },
            { label: "Elevation", value: localStats.elevation },
            { label: "Pincode", value: localStats.pincode },
          ].map((stat, i) => (
            <div
              key={i}
              className="glassmorphism p-6 rounded-2xl text-center"
            >
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
