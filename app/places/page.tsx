"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { touristPlaces } from "@/lib/data";

export default function PlacesPage() {
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
              Visit
            </p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">
              Famous Places
            </h1>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {touristPlaces.map((place, i) => (
              <motion.div
                key={place.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <img
                  src={place.images[0]}
                  alt={place.imageAlt}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
                <div className="relative p-8 h-80 flex flex-col justify-end">
                  <h3 className="text-3xl font-serif font-bold mb-4 text-white">
                    {place.name}
                  </h3>
                  <p className="text-muted-foreground text-lg mb-2">
                    {place.description}
                  </p>
                  {place.history && (
                    <p className="text-muted-foreground text-sm">
                      <span className="text-primary">History:</span> {place.history}
                    </p>
                  )}
                  {place.tips && (
                    <p className="text-primary text-sm mt-2">
                      💡 {place.tips}
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
