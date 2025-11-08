import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GroupImage from '../assets/Group2.png';
import IndiaGate from '../assets/Vector.png';

// Improved About component with cleaner layout, better accessibility,
// responsive behaviour, subtle micro-interactions and a small profile modal.

export default function About() {
  const [focused, setFocused] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [activeProfile, setActiveProfile] = useState(null);

  const container = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
  };

  const stickyInitial = { rotate: -6 };
  const stickyHover = { rotate: 0, x: -6, y: -6, scale: 1.03 };

  // example small team dataset for the "view profiles" flow
  const team = [
    { id: 1, name: 'Shahvez', role: 'Director', bio: 'Crafts cinematic narratives and directs shoots.' },
    { id: 2, name: 'Uvaish Gaur', role: 'Brand Lead', bio: 'Designs brand stories and visual identities.' },
    { id: 3, name: 'Fardeen Gaur', role: 'Curator', bio: 'Curates art direction and post-production.' },
  ];

  function openProfileModal(member) {
    setActiveProfile(member);
    setOpenProfile(true);
  }

  return (
    <section id="about" className="py-12 bg-[#f7eee9]">
      <motion.div
        className="max-w-6xl mx-auto px-6 lg:px-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* Header */}
        <motion.header variants={item} className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#7e6b63] max-w-3xl mx-auto">
            Take a closer look at the stories we bring to life
          </h2>
          <p className="mt-3 text-md text-[#7e6b63] max-w-2xl mx-auto">
            We collaborate with filmmakers, producers and creatives to craft memorable work across screens.
          </p>
        </motion.header>

        {/* Main layout */}
        <div className="flex flex-col lg:flex-row items-start gap-10">
          {/* Left: Illustration with caption */}
          <motion.div
            variants={item}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full lg:w-1/3 flex flex-col items-center text-center relative"
          >
            <figure className="w-48 md:w-60 lg:w-72">
              <img
                src={IndiaGate}
                alt="India Gate illustration"
                className="w-full h-auto object-contain drop-shadow-md"
                loading="lazy"
              />
            </figure>

            <p className="mt-6 text-lg italic text-gray-700 tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
              Branding Experts · Film Makers · Art Curators
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="w-2 h-14 bg-[#d6bfb0] rounded" />
              <div className="flex flex-col text-left">
                <span className="text-sm text-gray-500">Studio</span>
                <span className="font-medium text-[#7e6b63]">EZ — Gurgaon, Haryana
                </span>
              </div>
            </div>
          </motion.div>

          {/* Center: Group image with subtle hover */}
          <motion.div
            variants={item}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.12 }}
            className="w-full lg:w-1/3 flex justify-center"
          >
            <img
              src={GroupImage}
              alt="Team silhouettes"
              className="w-64 md:w-80 lg:w-[420px] object-contain transform transition-transform duration-500 hover:scale-105 hover:drop-shadow-2xl rounded-lg"
              loading="lazy"
            />
          </motion.div>

          {/* Right: Sticky note + CTA */}
          <motion.div variants={item} className="w-full lg:w-1/3 flex justify-center lg:justify-end">
            <div className="relative max-w-sm">
              <motion.article
                initial={stickyInitial}
                animate={focused ? stickyHover : stickyInitial}
                whileHover={stickyHover}
                tabIndex={0}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                className="p-5 rounded-2xl shadow-lg bg-gradient-to-br from-[#fff9d6] to-[#fff3b8] border border-orange-100 cursor-pointer outline-none"
                style={{ transformOrigin: 'top right', zIndex: 10 }}
                transition={{ duration: 0.32, ease: 'easeOut' }}
                aria-labelledby="our-team-title"
              >
                <h4 id="our-team-title" className="text-md font-semibold text-[#b2511a]">Our Team</h4>
                <p className="mt-3 text-sm text-[#3b3b3b] leading-relaxed">
                  A collective of storytellers — some craft films, some build brands, some curate art. We turn ideas into timeless visuals and narratives.
                </p>

                <div className="mt-4 flex items-center gap-3">
                  <button
                    onClick={() => openProfileModal(team[0])}
                    className="inline-flex items-center gap-2 px-3 py-2 bg-white/80 backdrop-blur-sm rounded-md text-sm font-medium border border-[#f0d9c7] hover:shadow"
                    aria-label="View team profiles"
                  >
                    View profiles
                    <span className="text-xs text-gray-500">↗</span>
                  </button>

                  <a
                    href="#contact"
                    className="ml-auto inline-block px-4 py-2 rounded-md text-sm font-semibold bg-[#e76a2d] text-white hover:bg-[#cf5b22]"
                    aria-label="Contact us"
                  >
                    Work with us
                  </a>
                </div>

                <p className="text-[11px] text-gray-600 mt-3">Click to view profiles & highlight reel</p>
              </motion.article>

              {/* folded corner */}
              <div className="absolute top-3 right-3 w-6 h-6 bg-gradient-to-r from-[#fff3b8] to-[#fff9d6] rotate-12 rounded-sm shadow-inner" aria-hidden />

              {/* mini team chips below sticky note for quick access */}
              <div className="mt-7 flex gap-2 flex-wrap">
                {team.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => openProfileModal(m)}
                    className="px-3 py-1 text-xs rounded-full border border-[#f0d9c7] bg-white/80 shadow-sm"
                    aria-label={`Open profile for ${m.name}`}
                  >
                    {m.name.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer caption */}
        <motion.div variants={item} className="mt-8 text-center">
          <p className="text-md text-[#7e6b63] max-w-3xl mx-auto">
            Varnas is where stories find their voice and form — from first spark to final frame, we shape work that stays with you.
          </p>
        </motion.div>

        {/* Profile modal (small) */}
        <AnimatePresence>
          {openProfile && (
            <motion.dialog
              open
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              aria-modal="true"
              aria-label="Team profile dialog"
            >
              <motion.div
                className="bg-white rounded-xl max-w-lg w-full p-6 shadow-2xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
              >
                <header className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-[#7e6b63]">{activeProfile?.name}</h3>
                    <p className="text-sm text-gray-500">{activeProfile?.role}</p>
                  </div>
                  <button
                    onClick={() => setOpenProfile(false)}
                    className="text-gray-400 hover:text-gray-700"
                    aria-label="Close profile"
                  >
                    ✕
                  </button>
                </header>

                <div className="mt-4 text-sm text-gray-700">
                  <p>{activeProfile?.bio}</p>

                  <div className="mt-4 flex gap-3">
                    <a href="#contact" className="text-sm font-medium text-[#e76a2d]">Contact</a>
                    <a href="#" className="text-sm text-gray-500">View reel</a>
                  </div>
                </div>

                <footer className="mt-6 text-right">
                  <button
                    onClick={() => setOpenProfile(false)}
                    className="px-4 py-2 rounded-md bg-[#f3f3f3] text-sm"
                  >
                    Close
                  </button>
                </footer>
              </motion.div>
            </motion.dialog>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
