"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function AboutPage() {
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
              Discover
            </p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">
              About Dohrighat
            </h1>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/images/mukti_dham.png"
                alt="Muktidham Dohrighat"
                className="w-full h-96 object-cover rounded-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-serif font-bold mb-4 text-primary">
                History & Heritage
              </h2>
              <p className="text-muted-foreground mb-4 text-lg">
                Dohrighat is a historic town and nagar panchayat in Mau district, Uttar Pradesh, India. Its name comes from the belief that Lord Rama and Lord Shiva met here.
              </p>
              <p className="text-muted-foreground mb-6 text-lg">
                Located on the banks of the sacred Ghaghara (also known as Saryu) River, Dohrighat has been a center of spirituality and culture for centuries.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { number: "26.26°N", label: "Latitude" },
              { number: "83.52°E", label: "Longitude" },
              { number: "66m", label: "Elevation" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glassmorphism p-8 rounded-2xl text-center"
              >
                <p className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
