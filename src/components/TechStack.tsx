"use client";

import { motion } from "framer-motion";

export default function TechStack() {
  const categories = [
    {
      name: "Frontend",
      techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
      color: "border-blue-200 text-blue-700 bg-blue-50"
    },
    {
      name: "Backend",
      techs: ["Node.js", "Express", "Python", "GraphQL", "REST APIs"],
      color: "border-green-200 text-green-700 bg-green-50"
    },
    {
      name: "Database",
      techs: ["MongoDB", "PostgreSQL", "Redis", "Supabase"],
      color: "border-purple-200 text-purple-700 bg-purple-50"
    },
    {
      name: "Cloud & AI",
      techs: ["Vercel", "AWS", "OpenAI", "Automation APIs", "Docker"],
      color: "border-orange-200 text-orange-700 bg-orange-50"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3"
          >
            Engineering
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-navy"
          >
            Modern Technology Stack
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-off-white border border-silver-light rounded-3xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <h4 className="text-2xl font-bold text-navy mb-8 border-b border-silver-light pb-4">
                {category.name}
              </h4>
              <div className="flex flex-wrap gap-3">
                {category.techs.map((tech, i) => (
                  <span
                    key={i}
                    className={`px-4 py-2 rounded-full text-sm font-medium border ${category.color}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
