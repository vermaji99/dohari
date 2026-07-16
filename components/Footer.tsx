import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#050505]/90 border-t border-white/10 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-16">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">
              DOHRIGHAT
            </h3>
            <p className="text-muted-foreground mb-6">
              Where Heritage Meets the River
            </p>
            <div className="flex gap-4">
              {["twitter", "instagram", "facebook", "youtube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full glassmorphism flex items-center justify-center hover:bg-primary/20 transition-all duration-300"
                >
                  <span className="sr-only">{social}</span>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Explore", href: "/explore" },
                { name: "Places", href: "/places" },
                { name: "Temples", href: "/temples" },
                { name: "Canals & Dams", href: "/canals" },
                { name: "Rivers & Pools", href: "/rivers" },
                { name: "Education", href: "/education" },
                { name: "Gallery", href: "/gallery" },
                { name: "Contact", href: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {["Food", "Business", "Emergency", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href="/"
                    className="text-muted-foreground hover:text-white transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-muted-foreground mb-4 text-sm">
              Subscribe for updates and news
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary"
              />
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Go
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-muted-foreground text-sm">
              © 2025 Dohrighat Official. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <p className="text-muted-foreground text-sm">
                Developed with ❤️ by
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="/images/developer-portrait.png"
                  alt="Developer"
                  className="w-10 h-10 rounded-full object-cover border border-white/20"
                />
                <span className="text-white font-medium text-sm">Your Name</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
