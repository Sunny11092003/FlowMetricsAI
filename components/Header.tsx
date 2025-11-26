"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function HeaderAlt() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);

  // Hide header on scroll down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollY && window.scrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  // Navigation items with proper hrefs
  const navItems = [
    { label: "Product", href: "/product" },      // Product page
    { label: "Pricing", href: "/pricing" },      // Homepage section
    { label: "Integrations", href: "/integrations" },
    { label: "Resources", href: "/resources" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/Contact" },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-md z-50 transition-transform"
      initial={{ y: -50 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 p-2 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-md"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Logo */}
          <div className="flex-1 flex justify-center md:justify-start">
            <Link href="/">
              <motion.span
                className="text-2xl font-extrabold text-teal-600 cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                FlowMetrics AI
              </motion.span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-800 hover:text-teal-500 relative group transition"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-500 transition-all group-hover:w-full"></span>
              </Link>
            ))}

            {/* CTA */}
            <Link href="/request-demo">
              <button className="ml-4 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-500 transition">
                Request Demo
              </button>
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-white/95 shadow-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="flex flex-col space-y-3 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-800 hover:text-teal-500 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="#request-demo" onClick={() => setMenuOpen(false)}>
                <button className="mt-2 w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-500 transition">
                  Request Demo
                </button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
