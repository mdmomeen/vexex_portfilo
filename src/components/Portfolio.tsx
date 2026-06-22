"use client";

<<<<<<< HEAD
import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ChevronDown } from "lucide-react";

export default function Portfolio() {
  const [showAll, setShowAll] = useState(false);

=======
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Portfolio() {
>>>>>>> 235d7773c6392969ad7d635b74f6bbce72d607af
  const projects = [
    {
      title: "Interior Architecture CRM Management System",
      desc: "Complete project management, lead tracking, client communication, quotation management, workflow automation, and approval system for architecture and interior firms.",
      url: "https://index-html-beryl-omega.vercel.app/",
      color: "from-blue-500/20 to-blue-900/20",
      image: "/img/interior_flow.png",
    },
    {
      title: "AI-Powered Interior Design Website",
      desc: "Modern AI-assisted interior design website featuring interactive experiences, design inspiration, and digital customer engagement.",
      url: "https://interior-ilph.vercel.app/",
      color: "from-emerald-500/20 to-teal-900/20",
      image: "/img/interior_static.png",
    },
    {
      title: "DesignGrid Studio Architecture Website",
      desc: "Professional architecture portfolio website designed for showcasing projects, services, company profile, and client engagement.",
      url: "https://www.designgridstudio.in/",
      color: "from-orange-500/20 to-red-900/20",
      image: "/img/designgridstudio.png",
    },
    {
      title: "Gold Jewellery Management System",
      desc: "Comprehensive jewellery business management solution with inventory tracking, customer management, billing, sales monitoring, reporting, and operational management.",
      url: "https://gold-jewl.vercel.app/",
      color: "from-yellow-500/20 to-amber-900/20",
      image: "/img/gold_management.png",
    },
<<<<<<< HEAD
    {
      title: "Real Estate static website",
      desc: "Real Estate static website for showcasing properties and services.",
      url: "https://realestate-liart-one.vercel.app/",
      color: "from-yellow-500/20 to-white-900/20",
      image: "/img/real_estate.png",
    },
    {
      title: "physico clinic static website",
      desc: "physico clinic static website for showcasing medical services and facilities.",
      url: "https://physico-html.vercel.app/",
      color: "from-blue-500/20 to-white-900/20",
      image: "/img/physico_clinic.png",
    },
    {
      title: "restaurants website",
      desc: "restaurants website for showcasing menu and services.",
      url: "resturant-web-zeta.vercel.app",
      color: "from-orange-500/20 to-red-900/20",
      image: "/img/resturant.png",
    },

=======
>>>>>>> 235d7773c6392969ad7d635b74f6bbce72d607af
  ];

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
<<<<<<< HEAD
            <motion.h2
=======
            <motion.h2 
>>>>>>> 235d7773c6392969ad7d635b74f6bbce72d607af
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3"
            >
              Featured Work
            </motion.h2>
<<<<<<< HEAD
            <motion.h3
=======
            <motion.h3 
>>>>>>> 235d7773c6392969ad7d635b74f6bbce72d607af
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold text-navy"
            >
              Transforming Ideas into Digital Reality
            </motion.h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
<<<<<<< HEAD
          {projects.slice(0, showAll ? projects.length : 2).map((project, index) => (
=======
          {projects.map((project, index) => (
>>>>>>> 235d7773c6392969ad7d635b74f6bbce72d607af
            <motion.a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group block"
            >
              <div className={`aspect-[16/10] rounded-3xl mb-6 overflow-hidden bg-gradient-to-br ${project.color} relative border border-silver/20 shadow-lg group-hover:shadow-2xl transition-all duration-500`}>
                <div className="absolute inset-0 flex items-center justify-center p-6 md:p-8">
                  {/* Device Mockup container */}
                  <div className="w-full h-full bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-700 ring-4 ring-white/40">
                    {/* Browser UI Bar */}
                    <div className="h-6 md:h-8 bg-gray-100 border-b border-gray-200 flex items-center px-4 gap-2 flex-shrink-0">
<<<<<<< HEAD
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                    </div>
                    {/* Dynamic Image Container */}
                    <div className="flex-1 w-full relative bg-gray-50 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
=======
                       <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                    </div>
                     {/* Dynamic Image Container */}
                     <div className="flex-1 w-full relative bg-gray-50 overflow-hidden">
                       {/* eslint-disable-next-line @next/next/no-img-element */}
                       <img 
                          src={project.image} 
                          alt={project.title}
                          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                       />
                     </div>
>>>>>>> 235d7773c6392969ad7d635b74f6bbce72d607af
                  </div>
                </div>
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/10 transition-colors duration-300"></div>
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <ExternalLink className="text-navy w-5 h-5" />
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-navy mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h4>
                <p className="text-navy/70 leading-relaxed max-w-lg">
                  {project.desc}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
<<<<<<< HEAD

        {projects.length > 2 && (
          <div className="flex justify-center mt-16">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-navy text-white font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 cursor-pointer"
            >
              <span>{showAll ? "Show Less" : "Show More"}</span>
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} />
            </button>
          </div>
        )}
=======
>>>>>>> 235d7773c6392969ad7d635b74f6bbce72d607af
      </div>
    </section>
  );
}
