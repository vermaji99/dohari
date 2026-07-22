"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { healthcare } from "@/lib/data";

export default function HealthcareClient() {
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
              Care
            </p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">
              Healthcare
            </h1>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {healthcare.map((place, i) => (
              <motion.div
                key={place.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="w-full h-80 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  {place.images.length > 0 ? (
                    <img
                      src={place.images[0]}
                      alt={place.imageAlt || place.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <span className="text-6xl">🏥</span>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
                <div className="relative p-8 h-80 flex flex-col justify-end">
                  <h3 className="text-3xl font-serif font-bold mb-4 text-white">
                    {place.name}
                  </h3>
                  {place.description && (
                    <p className="text-muted-foreground text-lg mb-2">
                      {place.description}
                    </p>
                  )}
                  {place.address && (
                    <p className="text-muted-foreground mb-2">
                      📍 {place.address}
                    </p>
                  )}
                  {place.phone && (
                    <p className="text-muted-foreground mb-2">
                      📞 {place.phone}
                    </p>
                  )}
                  {place.openingHours && (
                    <p className="text-muted-foreground mb-2">
                      🕒 {place.openingHours}
                    </p>
                  )}
                  {place.rating && (
                    <p className="text-primary text-sm">
                      ⭐ {place.rating}
                      {place.reviewCount ? ` (${place.reviewCount} reviews)` : ""}
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground mt-2">
                    Status: {place.verificationStatus}
                  </p>
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
