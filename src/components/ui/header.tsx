"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

// Define navigation links
const navLinks = [
  { title: "Home", href: "/" },
  { title: "Department", href: "/department" },
  { title: "People", href: "/people" },
  { title: "Academics", href: "/academics" },
  { title: "Projects", href: "/projects" },
  { title: "Blogs", href: "/blogs" },
  { title: "Alumni", href: "/alumni" },
  { title: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Animation variants
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-card/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl md:text-2xl font-bold flex items-center">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-primary mr-2"
            >
              ✦
            </motion.span>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="title-gradient"
            >
              AISE
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <motion.nav
            className="hidden md:flex space-x-6"
            initial="hidden"
            animate="visible"
            variants={navVariants}
          >
            {navLinks.map((link) => (
              <motion.div key={link.href} variants={linkVariants}>
                <Link
                  href={link.href}
                  className="text-foreground/80 hover:text-foreground transition-colors relative group"
                >
                  {link.title}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* Login/Register Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-foreground/90 hover:text-foreground transition-colors"
            >
              Log In
            </Link>
            <Link
              href="/register"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md transition-colors"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-foreground p-2 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className={`md:hidden overflow-hidden ${mobileMenuOpen ? "block" : "hidden"}`}
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: mobileMenuOpen ? "auto" : 0,
          opacity: mobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-card/90 backdrop-blur-md px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                className="block text-foreground/80 hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            </div>
          ))}
          <div className="flex flex-col space-y-3 pt-4 border-t border-border/50">
            <Link
              href="/login"
              className="block text-foreground/90 hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Log In
            </Link>
            <Link
              href="/register"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md transition-colors text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Register
            </Link>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
