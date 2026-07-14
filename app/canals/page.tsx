"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { canals } from "@/lib/data";

export default function CanalsPage() {
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
              Engineering Marvel
            </p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">
              Canals & Dams of Dohrighat
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the impressive irrigation system of Dohrighat, a crucial part of the local economy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-1 gap-8">
            {canals.map((canal, i) => (
              <motion.div
                key={canal.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl glassmorphism"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative">
                    <img
                      src={canal.images[0]}
                      alt={canal.imageAlt}
                      className="w-full h-full min-h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-3xl font-serif font-bold mb-4 text-primary">
                      {canal.name}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-lg">
                      {canal.description}
                    </p>
                    {canal.history && (
                      <p className="text-muted-foreground mb-4 text-sm">
                        <span className="text-white font-medium">History:</span> {canal.history}
                      </p>
                    )}
                    {canal.nearbyAttractions && (
                      <p className="text-muted-foreground mb-4 text-sm">
                        <span className="text-white font-medium">Nearby Attractions:</span> {canal.nearbyAttractions.join(", ")}
                      </p>
                    )}
                    {canal.tips && (
                      <p className="text-primary text-sm">
                        💡 {canal.tips}
                      </p>
                    )}
                  </div>
                </div>
                {canal.images.length > 1 && (
                  <div className="grid grid-cols-3 gap-1 p-2">
                    {canal.images.slice(1).map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`${canal.name} - View ${idx + 2}`}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
