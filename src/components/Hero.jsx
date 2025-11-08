import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import "../index.css";
import HeroMandala from "../assets/HeroMandala.png";
import HeroLogo from "../assets/HeroLogo.png";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const scrollToExplore = () => {
    // Try services first, then studio
    const target = document.getElementById("services") || document.getElementById("studio");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // fallback: go to gallery if neither exists
      const fallback = document.getElementById("gallery");
      if (fallback) fallback.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToExploreGallery = () => {
    // Try services first, then studio
    const target = document.getElementById("studio") || document.getElementById("services");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // fallback: go to gallery if neither exists
      const fallback = document.getElementById("gallery");
      if (fallback) fallback.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const fadeInLeft = prefersReducedMotion
    ? {}
    : { initial: { opacity: 0, x: -24 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.7, ease: "easeOut" } };

  const fadeChildren = prefersReducedMotion
    ? {}
    : { initial: "hidden", whileInView: "show", variants: { hidden: {}, show: { transition: { staggerChildren: 0.10 } } } };

  const childVariant = prefersReducedMotion
    ? {}
    : { hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-b from-[#fffaf6] to-[#f7eee9]"
      aria-label="Hero section"
    >
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

         {/* LEFT: Logos (responsive) */}
<motion.div
  className="lg:col-span-5 relative order-1"
  initial={{ opacity: 0, x: -24 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.35 }}
>
  {/* ===== MOBILE + TABLET: Mandala (left) + VFilms (right) side-by-side ===== */}
  <div className="flex items-center justify-center gap-5 sm:gap-8 mt-6 lg:hidden">
    {/* Mandala */}
    <div className="flex-shrink-0 flex items-center justify-center">
      <img
        src={HeroMandala}
        alt="Mandala"
        className="w-20 sm:w-24 md:w-28 h-auto object-contain opacity-80"
        loading="lazy"
      />
    </div>

    {/* VFilms logo */}
    <div className="flex-shrink-0 flex items-center justify-center">
      <img
        src={HeroLogo}
        alt="V Films logo"
        className="h-14 sm:h-16 md:h-20 w-auto object-contain"
        loading="eager"
      />
    </div>
  </div>

  {/* ===== DESKTOP: Large mandala with overlay logo ===== */}
  <div className="hidden lg:flex items-center justify-center mt-6">
    <div className="relative w-72 md:w-80 lg:w-96">
      <img
        src={HeroMandala}
        alt="Mandala background"
        className="w-full h-auto object-contain opacity-95"
        loading="lazy"
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src={HeroLogo}
          alt="V Films logo"
          className="h-20 w-auto"
          loading="eager"
        />
      </div>
    </div>
  </div>
</motion.div>

          {/* RIGHT: Text content */}
          <motion.div
            className="lg:col-span-7 order-2 lg:order-2 mt-6 lg:mt-0"
            {...fadeChildren}
            viewport={{ once: true, amount: 0.35 }}
          >
            <motion.p variants={childVariant} className="text-sm sm:text-base text-[#e07a47] uppercase tracking-widest mb-3">
              Welcome to
            </motion.p>

            <motion.h1
              variants={childVariant}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-[#1a1a1a] mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
            >
              V Films
            </motion.h1>

            <motion.p
              variants={childVariant}
              className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl mb-5"
              style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.6 }}
            >
              Where stories find their voice and form — we craft cinematic experiences that connect, inspire and endure.
            </motion.p>

            <motion.div variants={childVariant} className="mb-5">
              <div className="inline-flex items-center gap-3 bg-white/60 border border-gray-200 rounded-full px-4 py-1 text-sm">
                <span className="text-[#e76a2d] font-semibold">Films</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-700">Brands</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-700">Art</span>
              </div>
            </motion.div>

            <motion.div variants={childVariant} className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <p className="text-sm sm:text-base text-gray-500 max-w-xl">
                Since 2009, we've been telling honest stories — from documentary to branded films. We listen first, then craft — with intent, patience, and an eye for what matters.
              </p>

              <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-3 mt-3 sm:mt-0">
                <button
                  onClick={scrollToExplore}
                  className="inline-flex items-center justify-center px-5 py-3 bg-[#e76a2d] text-white rounded-md shadow-md hover:brightness-95 transition text-sm sm:text-base w-full sm:w-auto text-center"
                  aria-label="Explore services or studio"
                >
                  Explore More
                </button>

                <a
                onClick={scrollToExploreGallery} 
                  className="inline-flex items-center justify-center px-5 py-3 border border-[#e76a2d] text-[#e76a2d] rounded-md hover:bg-[#ffece1] transition text-sm sm:text-base w-full sm:w-auto text-center"
                >
                  View Studio
                </a>
              </div>
            </motion.div>

            <motion.div variants={childVariant} className="mt-8 max-w-sm">
              <div className="w-24 h-0.5 bg-[#e76a2d] rounded" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
