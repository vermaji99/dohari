"use client";

import React from "react";
import { motion } from "framer-motion";
import { Waves, Building2, Landmark, Droplets, GraduationCap, Hospital, Utensils, Train } from "lucide-react";
import { exploreCards } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  waves: <Waves className="w-10 h-10 text-primary" />,
  building: <Building2 className="w-10 h-10 text-primary" />,
  temple: <Landmark className="w-10 h-10 text-primary" />,
  water: <Droplets className="w-10 h-10 text-primary" />,
  graduation: <GraduationCap className="w-10 h-10 text-primary" />,
  hospital: <Hospital className="w-10 h-10 text-primary" />,
  food: <Utensils className="w-10 h-10 text-primary" />,
  train: <Train className="w-10 h-10 text-primary" />,
};

export default function Explore() {
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
          <p className="text-primary uppercase tracking-[0.3em] mb-4">Experience</p>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Explore Dohrighat</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exploreCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.imageAlt}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
              </div>
              <div className="relative p-8 h-80 flex flex-col justify-end">
                <div className="mb-4">{iconMap[card.icon as keyof typeof iconMap]}</div>
                <h3 className="text-2xl font-serif font-semibold mb-2">{card.title}</h3>
                <p className="text-muted-foreground">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
