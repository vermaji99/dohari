"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { riversPools } from "@/lib/data";

export default function RiversClient() {
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
              Nature
            </p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">
              Rivers & Pools of Dohrighat
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore the beautiful rivers and pools that define the natural beauty of Dohrighat.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-1 gap-8">
            {riversPools.map((place, i) => (
              <motion.div
                key={place.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl glassmorphism"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative">
                    <img
                      src={place.images[0]}
                      alt={place.imageAlt}
                      className="w-full h-full min-h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-3xl font-serif font-bold mb-4 text-primary">
                      {place.name}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-lg">
                      {place.description}
                    </p>
                    {place.history && (
                      <p className="text-muted-foreground mb-4 text-sm">
                        <span className="text-white font-medium">History:</span> {place.history}
                      </p>
                    )}
                    {place.nearbyAttractions && (
                      <p className="text-muted-foreground mb-4 text-sm">
                        <span className="text-white font-medium">Nearby Attractions:</span> {place.nearbyAttractions.join(", ")}
                      </p>
                    )}
                    {place.tips && (
                      <p className="text-primary text-sm">
                        💡 {place.tips}
                      </p>
                    )}
                  </div>
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
