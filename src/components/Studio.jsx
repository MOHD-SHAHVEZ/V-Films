import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThumbLogo from "../assets/ThumbLogo.png";

export default function Studio() {
  const [isOpen, setIsOpen] = useState(false);

  const features = [
    {
      id: 1,
      title: "Green Screen Studio",
      desc: "Full production-ready setup with lighting and color calibration.",
      icon: "🎬",
    },
    {
      id: 2,
      title: "Editing Suite",
      desc: "Advanced color grading, sound design, and visual effects.",
      icon: "🎛️",
    },
    {
      id: 3,
      title: "Remote Collaboration",
      desc: "Work with directors and editors anywhere in the world.",
      icon: "🔗",
    },
  ];

  const container = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.18 } },
  };
  const item = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section
      id="studio"
      className="py-24 bg-gradient-to-b from-[#fffaf6] via-[#f7eee9] to-[#f3e5dc] text-[#1a1a1a]"
      aria-label="Virtual studio section"
    >
      <motion.div
        className="max-w-6xl mx-auto px-6 lg:px-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT: Text and Feature Cards */}
          <motion.div variants={item} className="space-y-6">
            <p className="text-2xl uppercase tracking-widest text-[#e07a47]">
              <span className="border-b-[#e07a47] border-b-2">Studio</span>
            </p>

            <h2 className="text-3xl md:text-4xl font-serif font-semibold leading-tight text-[#1a1a1a]">
              A Virtual Studio with{" "}
              <span className="text-[#e76a2d]">Limitless Creativity</span>
            </h2>

            <p className="text-gray-700 max-w-xl leading-relaxed">
              From concept to final cut — we provide production, post, and
              collaboration tools to help filmmakers bring stories to life.
              Explore our studio spaces, equipment, and creative teams.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4">
              <button
                onClick={() => setIsOpen(true)}
                className="inline-block px-5 py-3 rounded-md bg-[#e76a2d] text-white font-semibold shadow-md hover:brightness-95 transition"
              >
                🎥 Watch Demo Reel
              </button>

              <a
                href="#contact"
                className="inline-block px-5 py-3 rounded-md border border-[#e76a2d] text-[#e76a2d] font-medium hover:bg-[#ffece1] transition"
              >
                Contact Studio
              </a>
            </div>

            {/* Feature Cards */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {features.map((f) => (
                <motion.div
                  key={f.id}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 10px 30px rgba(231,106,45,0.25)",
                  }}
                  transition={{ type: "spring", stiffness: 220, damping: 15 }}
                  className="relative border border-[#e7d2c4]/50 bg-white/60 hover:bg-[#fff1e8] rounded-xl p-5 text-left shadow-sm transition"
                >
                  <div className="text-2xl mb-2">{f.icon}</div>
                  <h4 className="font-semibold text-[#1a1a1a]">{f.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Video Mockup */}
          <motion.div
            variants={item}
            className="w-full flex items-center justify-center"
          >
            <div className="relative w-full max-w-md rounded-xl overflow-hidden shadow-xl border border-[#e7d2c4]/70">
              {/* video thumbnail */}
              <div className="aspect-video bg-gradient-to-br from-[#fff3ea] to-[#f7eee9] flex items-center justify-center relative">
                <img
                  src={ThumbLogo}
                  alt="studio mockup"
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setIsOpen(true)}
                    aria-label="Play studio video"
                    className="bg-white/70 hover:bg-[#e76a2d]/80 hover:text-white text-[#e76a2d] p-4 rounded-full shadow-md border border-white/50 transition"
                  >
                    <svg
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* caption */}
              <div className="bg-gradient-to-r from-[#ffe7d9]/70 to-[#fff1e8]/60 p-4 flex items-center justify-between">
                <div>
                  <h5 className="text-sm font-semibold text-[#1a1a1a]">
                    Varnas Studio • Demo Reel
                  </h5>
                  <p className="text-xs text-gray-500">
                    2:18 • Behind the scenes
                  </p>
                </div>
                <div className="text-sm text-[#e76a2d] font-semibold">HD</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* 🎬 VIDEO MODAL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl aspect-video bg-black rounded-xl overflow-hidden"
            >
              {/* Close Button */}
              <button
                aria-label="Close video"
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 z-20 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white text-xl transition"
              >
                ✕
              </button>

              <iframe
                src="https://www.youtube.com/embed/j2FL2TitevA?si=IUge-LMCwC77Uoqz1"
                title="Varnas Studio Demo Reel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
