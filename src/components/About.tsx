"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Decorative left side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="aspect-square rounded-3xl border border-silver/30 shadow-2xl overflow-hidden relative group bg-navy">
              <img 
                src="/img/about_tech_3d.png" 
                alt="VEXEX Technology" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/80 via-blue-900/20 to-transparent mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* VEXEX Floating Logo Overlay */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 drop-shadow-2xl z-10 transition-transform duration-500 group-hover:scale-105">
                 <img src="/img/logo.png" alt="VEXEX Logo" className="w-full h-auto object-contain brightness-0 invert opacity-90" />
              </div>
            </div>
            {/* Founded Badge */}
            <div className="absolute -bottom-8 -right-8 glass-card p-6 rounded-2xl">
              <div className="text-3xl font-extrabold text-navy">2026</div>
              <div className="text-sm text-navy/70 font-semibold">Founded Jan 20</div>
            </div>
          </motion.div>

          {/* Right side content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">Company Overview</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-navy mb-6 leading-tight">
              Innovating the Future of Business
            </h3>
            <p className="text-lg text-navy/70 mb-6 leading-relaxed">
              VEXEX develops modern digital solutions including AI automation systems, custom software, CRM platforms, ERP solutions, inventory management software, mobile apps, websites, and SaaS products for growing businesses.
            </p>
            <p className="text-lg text-navy/70 leading-relaxed">
              Our mission is to create enterprise-grade architecture with a focus on seamless user experiences, scalable backend infrastructure, and AI-first engineering. We empower businesses to operate smarter and scale faster.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
