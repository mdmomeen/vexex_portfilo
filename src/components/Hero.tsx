"use client";

import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Suspense } from "react";

function AnimatedSphere() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#001F3F"
        attach="material"
        distort={0.4}
        speed={1.5}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-24 pb-12 flex items-center overflow-hidden bg-gradient-to-br from-off-white to-silver-light/30">
      {/* Background decoration elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/40 blur-3xl -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-silver-light/60 blur-3xl -z-10" />

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="z-10"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-navy/10 bg-white/50 backdrop-blur-sm mb-6 text-sm font-semibold text-blue-600">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
            Enterprise Software Solutions
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-navy leading-tight mb-6">
            Building Intelligent <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-navy-light">
              Digital Experiences
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-navy/70 mb-10 max-w-xl leading-relaxed font-medium">
            We create AI-powered software, business automation systems, web platforms, mobile applications, and SaaS products that help businesses scale faster.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#portfolio"
              className="px-8 py-4 rounded-full bg-navy text-white text-center font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-white text-navy border border-navy/10 text-center font-semibold hover:bg-off-white transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
            >
              Schedule Consultation
            </a>
          </div>
        </motion.div>

        {/* 3D Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="h-[400px] md:h-[600px] w-full relative z-10"
        >
          <Canvas className="w-full h-full">
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <directionalLight position={[-10, -10, -5]} intensity={0.5} />
            <Suspense fallback={null}>
              <AnimatedSphere />
            </Suspense>
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
          {/* Glass floating cards overlay */}
          <motion.div 
            animate={{ y: [0, -10, 0] }} 
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-10 right-10 glass-card px-6 py-4 rounded-2xl hidden md:block"
          >
            <div className="font-bold text-navy">AI-First</div>
            <div className="text-xs text-navy/60">Architecture</div>
          </motion.div>
          <motion.div 
            animate={{ y: [0, 15, 0] }} 
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 left-10 glass-card px-6 py-4 rounded-2xl hidden md:block"
          >
            <div className="font-bold text-navy">Scalable</div>
            <div className="text-xs text-navy/60">Solutions</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
