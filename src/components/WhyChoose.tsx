"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function WhyChoose() {
  const reasons = [
    { title: "Tailor-Made Solutions", desc: "Software custom-built around your specific business logic and goals." },
    { title: "AI-First Approach", desc: "Integrating intelligent automation and AI models to give you a competitive edge." },
    { title: "Modern Technology Stack", desc: "Utilizing Next.js, React, Node, and cloud-native architecture for future-proofing." },
    { title: "Scalable Architecture", desc: "Systems designed to handle millions of users and high data throughput." },
    { title: "Premium User Experience", desc: "World-class interface design that wows users and drives engagement." },
    { title: "Fast Development Cycle", desc: "Agile methodologies ensuring rapid delivery without compromising quality." },
  ];

  return (
    <section className="py-24 bg-silver-light/20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/3">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3"
            >
              Why VEXEX
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold text-navy mb-6 leading-tight"
            >
              The VEXEX Advantage
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-navy/70 leading-relaxed"
            >
              We don&apos;t just write code; we build digital assets that multiply your business value. Partner with us for engineering excellence and unparalleled design.
            </motion.p>
          </div>

          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-navy/5 flex items-start gap-4 hover:shadow-md transition-shadow"
              >
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-navy mb-2">{reason.title}</h4>
                  <p className="text-navy/70 leading-relaxed">{reason.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
