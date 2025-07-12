"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  MapPin,
  Phone
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/80 backdrop-blur-md border-t border-border/20 relative">
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle at 25% 70%, hsl(var(--space-purple) / 0.4) 0%, transparent 50%), radial-gradient(circle at 75% 20%, hsl(var(--space-blue) / 0.4) 0%, transparent 50%)"
        }}
      />

      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Department Info */}
          <div className="space-y-4">
            <Link href="/" className="text-xl font-bold flex items-center">
              <span className="text-primary mr-2">✦</span>
              <span className="title-gradient">AISE</span>
            </Link>
            <p className="text-foreground/70 max-w-xs">
              Advancing the frontiers of engineering through innovation, education, and cosmic inspiration.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" aria-label="Facebook" className="text-foreground/60 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="text-foreground/60 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-foreground/60 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-foreground/60 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://youtube.com" aria-label="YouTube" className="text-foreground/60 hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/department" className="text-foreground/70 hover:text-foreground transition-colors">
                  About Department
                </Link>
              </li>
              <li>
                <Link href="/academics" className="text-foreground/70 hover:text-foreground transition-colors">
                  Academic Programs
                </Link>
              </li>
              <li>
                <Link href="/people" className="text-foreground/70 hover:text-foreground transition-colors">
                  Faculty & Staff
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-foreground/70 hover:text-foreground transition-colors">
                  Research Projects
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-foreground/70 hover:text-foreground transition-colors">
                  Department Blog
                </Link>
              </li>
              <li>
                <Link href="/alumni" className="text-foreground/70 hover:text-foreground transition-colors">
                  Alumni Network
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-foreground/70">
                  Srinivas Institute Of Technology
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                <span className="text-foreground/70">+91 Mobile </span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                <span className="text-foreground/70">Email</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-foreground/70 mb-4">
              Subscribe to our newsletter for the latest news and updates from our department.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              />
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Department of nformation Science and Engineering
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-foreground/60 hover:text-foreground text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-foreground/60 hover:text-foreground text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="text-foreground/60 hover:text-foreground text-sm transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
