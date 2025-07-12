"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

export function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {/* Additional visual elements will be added by the cosmic background component */}
      </div>

      <div
        ref={ref}
        className="container mx-auto max-w-6xl pt-32 pb-20 relative z-10 lg:min-h-[calc(100vh-8rem)]"
      >
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Left side - Text content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-2">
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Department of Information Science and Engineering
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              Explore the <span className="title-gradient">AISE</span> frontiers of engineering
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-foreground/80 max-w-xl"
            >
              Discover innovative research, engaging programs, and a vibrant community of thinkers
              and creators shaping the future of technology.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/academics"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90"
              >
                Explore Programs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-card text-foreground font-medium border border-border transition-colors hover:bg-card/80"
              >
                Contact Us
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4">
              <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-foreground/70">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-accent mr-2" />
                  <span>Cutting-edge Research</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-2" />
                  <span>Expert Faculty</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-space-accent mr-2" />
                  <span>State-of-the-art Facilities</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right side - Visual element placeholder */}
          <motion.div
            variants={itemVariants}
            className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden bg-card/20 border border-border/30 backdrop-blur-sm flex items-center justify-center"
          >
            <div className="text-center p-6">
              <div className="inline-block p-6 rounded-full bg-card/30 mb-6">
                <div className="w-50 h-50 rounded-full bg-primary/20 flex items-center justify-center">
                  <Image 
                    src="/images/sudarshan.jpg"
                    alt="HOD Profile"
                    width={200}
                    height={200}
                    className="object-cover rounded-full"
                    priority
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Prof. Sudarshan K
              </h3>
              <p className="text-foreground/70 max-w-md mx-auto">
                HOD Information Science and Engineering
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.5,
          duration: 0.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <span className="text-sm text-foreground/70 mb-2">Scroll to explore</span>
        <ChevronDown className="w-5 h-5 text-foreground/70" />
      </motion.div>
    </section>
  );
}
