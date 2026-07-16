"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { temples } from "@/lib/data";

export default function TemplesClient() {
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
              Spirituality
            </p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">
              Temples of Dohrighat
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore the sacred temples of Dohrighat, where spirituality meets serenity.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {temples.map((temple, i) => (
              <motion.div
                key={temple.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl glassmorphism"
              >
                <img
                  src={temple.images[0]}
                  alt={temple.imageAlt}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-bold mb-4 text-primary">
                    {temple.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {temple.description}
                  </p>
                  {temple.history && (
                    <p className="text-muted-foreground mb-4 text-sm">
                      <span className="text-white font-medium">History:</span> {temple.history}
                    </p>
                  )}
                  {temple.timings && (
                    <p className="text-muted-foreground mb-2 text-sm">
                      <span className="text-white font-medium">Timings:</span> {temple.timings}
                    </p>
                  )}
                  {temple.entryFee && (
                    <p className="text-muted-foreground mb-2 text-sm">
                      <span className="text-white font-medium">Entry Fee:</span> {temple.entryFee}
                    </p>
                  )}
                  {temple.nearbyAttractions && (
                    <p className="text-muted-foreground mb-4 text-sm">
                      <span className="text-white font-medium">Nearby Attractions:</span> {temple.nearbyAttractions.join(", ")}
                    </p>
                  )}
                  {temple.tips && (
                    <p className="text-primary text-sm">
                      💡 {temple.tips}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
