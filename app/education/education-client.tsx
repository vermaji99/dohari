"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { educationalInstitutes } from "@/lib/data";

export default function EducationClient() {
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
              Education
            </p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">
              Schools & Colleges
            </h1>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {educationalInstitutes.map((institute, i) => (
              <motion.div
                key={institute.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glassmorphism p-8 rounded-2xl"
              >
                {institute.images.length > 0 ? (
                  <img
                    src={institute.images[0]}
                    alt={institute.name}
                    className="w-full h-64 object-cover rounded-xl mb-6"
                  />
                ) : (
                  <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center rounded-xl mb-6">
                    <span className="text-6xl">🎓</span>
                  </div>
                )}
                <h3 className="text-3xl font-serif font-bold mb-4 text-white">
                  {institute.name}
                </h3>
                <p className="text-muted-foreground mb-2">
                  <span className="text-primary">Type:</span> {institute.type}
                </p>
                <p className="text-muted-foreground mb-2">
                  <span className="text-primary">Address:</span> {institute.address}
                </p>
                {institute.board && (
                  <p className="text-muted-foreground mb-2">
                    <span className="text-primary">Board:</span> {institute.board}
                  </p>
                )}
                {institute.contact && (
                  <p className="text-muted-foreground">
                    <span className="text-primary">Contact:</span> {institute.contact}
                  </p>
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
