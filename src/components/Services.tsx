"use client";

import { motion } from "framer-motion";
import { 
  Bot, Code, Smartphone, Cloud, 
  Users, Database, Package, Palette, 
  Workflow, Building 
} from "lucide-react";

export default function Services() {
  const services = [
    { title: "AI Automation Solutions", icon: <Bot className="w-8 h-8" /> },
    { title: "Custom Web Development", icon: <Code className="w-8 h-8" /> },
    { title: "Mobile App Development", icon: <Smartphone className="w-8 h-8" /> },
    { title: "SaaS Product Development", icon: <Cloud className="w-8 h-8" /> },
    { title: "CRM Systems", icon: <Users className="w-8 h-8" /> },
    { title: "ERP Solutions", icon: <Database className="w-8 h-8" /> },
    { title: "Inventory Management", icon: <Package className="w-8 h-8" /> },
    { title: "UI/UX Design", icon: <Palette className="w-8 h-8" /> },
    { title: "Business Process Automation", icon: <Workflow className="w-8 h-8" /> },
    { title: "Enterprise Solutions", icon: <Building className="w-8 h-8" /> },
  ];

  return (
    <section id="services" className="py-24 bg-off-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3"
          >
            Our Expertise
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-navy mb-6"
          >
            Premium Digital Services
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass p-8 rounded-2xl flex flex-col items-center text-center group cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-blue-200 bg-white"
            >
              <div className="w-16 h-16 rounded-full bg-silver-light/50 flex items-center justify-center mb-6 text-navy group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
                {service.icon}
              </div>
              <h4 className="text-lg font-bold text-navy leading-snug">
                {service.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
