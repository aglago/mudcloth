"use client";

import { motion, Variants } from "framer-motion";
import { Navbar } from "./NavBar";
import { PatternBorder } from "./PatternBorder";

export const Hero = () => {
  // Animation variants for the text container
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  };

  // Animation variants for individual text elements
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-[80vh] lg:h-screen flex items-center p-8 md:px-12 lg:px-24 bg-[url('/images/hero-image.png')] bg-cover bg-center overflow-x-hidden">
      <Navbar />

      {/* Borders sliding in from the sides */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <PatternBorder side="left" />
      </motion.div>

      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <PatternBorder side="right" />
      </motion.div>

      {/* Smooth fade-in for the overlay gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-black/60 lg:bg-transparent lg:bg-[linear-gradient(110deg,rgba(0,0,0,0.8)_45%,transparent_75%)]"
      />

      <motion.div
        className="relative z-10 max-w-2xl py-20 md:py-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          variants={itemVariants}
          className="text-primary font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6"
        >
          CELEBRATE AFRICAN <br className="hidden sm:block" />
          <span className="text-secondary-foreground">
            HERITAGE WITH REAL
          </span>{" "}
          <br className="hidden sm:block" />
          AUTHENTIC FABRICS
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-gray-200 mb-8 text-sm md:text-lg max-w-lg"
        >
          Discover the beauty and richness of African fabrics. We offer
          colorful, carefully made cloths inspired by African culture. Each
          piece reflects tradition, creativity, and skilled craftsmanship.
        </motion.p>

        <motion.div variants={itemVariants}>
          <button className="group relative w-full sm:w-auto bg-primary hover:bg-primary/90 text-black font-bold py-4 px-10 rounded-sm transition-all uppercase tracking-wider text-sm overflow-hidden">
            <span className="relative z-10">Discover Our Cloths</span>
            {/* Subtle hover shine effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-linear-to-r from-transparent via-white/20 to-transparent" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};
