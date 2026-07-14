"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  Info,
  MapPin,
  Image as ImageIcon,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { Button } from "./ui/button";

const navLinks = [
  { name: "Home", href: "/", icon: <Home className="w-5 h-5" /> },
  { name: "About", href: "/about", icon: <Info className="w-5 h-5" /> },
  { 
    name: "Temples", 
    href: "/temples", 
    icon: <Image src="/images/mukti_dham.png" alt="Temples" width={24} height={24} className="object-cover rounded-full" /> 
  },
  { 
    name: "Canals & Dams", 
    href: "/canals", 
    icon: <Image src="/images/canal_dam.png" alt="Canals" width={24} height={24} className="object-cover rounded-full" /> 
  },
  { 
    name: "Rivers & Pools", 
    href: "/rivers", 
    icon: <Image src="/images/river_ghaghara.png" alt="Rivers" width={24} height={24} className="object-cover rounded-full" /> 
  },
  { 
    name: "Education", 
    href: "/education", 
    icon: <Image src="/images/college_1.png" alt="Education" width={24} height={24} className="object-cover rounded-full" /> 
  },
  { name: "Places", href: "/places", icon: <MapPin className="w-5 h-5" /> },
  { name: "Gallery", href: "/gallery", icon: <ImageIcon className="w-5 h-5" /> },
  { name: "Contact", href: "/contact", icon: <Mail className="w-5 h-5" /> },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glassmorphism py-3 shadow-lg"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif font-bold text-primary">
          DOHRIGHAT
        </Link>
        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-muted-foreground hover:text-white hover:text-primary transition-colors duration-300"
            >
              {link.icon}
            </Link>
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </Button>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden glassmorphism mt-2 mx-6 rounded-xl p-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 text-muted-foreground hover:text-white hover:text-primary transition-colors duration-300"
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
