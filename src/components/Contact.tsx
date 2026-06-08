"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappNumber = "917418821261";
    const text = `Hello VEXEX,%0A%0AMy name is ${encodeURIComponent(name)}.%0AMy email is ${encodeURIComponent(email)}.%0A%0AProject Details:%0A${encodeURIComponent(message)}`;
    const url = `https://wa.me/${whatsappNumber}?text=${text}`;
    
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl border border-white/50">
          <div className="w-full lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3"
            >
              Get in Touch
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold text-navy mb-6 leading-tight"
            >
              Let&apos;s Build Something Extraordinary
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-navy/70 mb-10 leading-relaxed"
            >
              Ready to transform your business operations with intelligent software? Contact us today to schedule a consultation with our engineering team.
            </motion.p>

            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-navy/60 font-semibold uppercase tracking-wider">Email</div>
                  <a href="mailto:momeen.md359@gmail.com" className="text-lg font-bold text-navy hover:text-blue-600 transition-colors">
                    momeen.md359@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-navy/60 font-semibold uppercase tracking-wider">Phone</div>
                  <a href="tel:+917418821261" className="text-lg font-bold text-navy hover:text-blue-600 transition-colors">
                    +91 74188 21261
                  </a>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-navy/60 font-semibold uppercase tracking-wider">Address</div>
                  <div className="text-lg font-bold text-navy">
                    1/153 Walajabath Road, Vandalur<br/>Chennai - 600048
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-off-white p-8 rounded-3xl relative overflow-hidden"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-white border border-silver-light/50 focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-all text-navy placeholder:text-navy/30"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-white border border-silver-light/50 focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-all text-navy placeholder:text-navy/30"
                    placeholder="hello@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">Project Details</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-white border border-silver-light/50 focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-all text-navy placeholder:text-navy/30 resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full py-4 rounded-xl bg-navy text-white font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-navy/20"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
