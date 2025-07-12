"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Users, FileText, Award, Rocket, BookOpen } from "lucide-react";

// Define features
const features = [
  {
    title: "World-Class Faculty",
    description: "Learn from industry pioneers and academic leaders pushing the boundaries of engineering.",
    icon: Users,
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Innovative Curriculum",
    description: "Experience a cutting-edge curriculum designed to prepare you for the future of engineering.",
    icon: BookOpen,
    color: "bg-accent/10 text-accent",
  },
  {
    title: "Research Opportunities",
    description: "Engage in groundbreaking research projects with real-world applications and impact.",
    icon: Rocket,
    color: "bg-space-accent/10 text-space-accent",
  },
  {
    title: "Advanced Degree Programs",
    description: "Pursue specialized graduate programs tailored to evolving industry demands.",
    icon: GraduationCap,
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Industry Partnerships",
    description: "Benefit from our strong connections with leading technology companies and organizations.",
    icon: Award,
    color: "bg-accent/10 text-accent",
  },
  {
    title: "Publication Support",
    description: "Get guidance and support for publishing your research in prestigious journals.",
    icon: FileText,
    color: "bg-space-accent/10 text-space-accent",
  },
];

export function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 bg-card/20 backdrop-blur-sm relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/20 to-background/40" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Department <span className="title-gradient">Features</span>
          </h2>
          <p className="text-lg text-foreground/80">
            Our department offers a wide range of resources and opportunities to help you excel in your engineering journey.
          </p>
        </div>

        <div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-card border border-border/40 rounded-lg p-6 hover:border-primary/40 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.a
            href="/department"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            Learn More About Our Department
          </motion.a>
        </div>
      </div>
    </section>
  );
}
