import React from "react";
import { motion } from "framer-motion";
import IndiaGate from '../assets/Vector.png'

export default function Gallery() {
  // stagger animation for all cards
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // sample photos (replace URLs with your images)
  const photos = [
    {
      id: 1,
      img: {IndiaGate},
      caption: "On Set • Varnas Studios",
      rotate: "-rotate-3",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
      caption: "Moments in Motion",
      rotate: "rotate-2",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1534214261430-3f7a43d54b3d",
      caption: "Lights • Camera • Story",
      rotate: "-rotate-2",
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-[#f6ebe1] to-[#f9dccc]">
      <motion.div
        className="max-w-6xl mx-auto px-6 text-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.h2
          variants={item}
          className="text-3xl md:text-4xl font-serif font-semibold text-[#2b2b2b] mb-12"
        >
          The storyboard reveals the breadth of our craft.
        </motion.h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 flex-wrap">
          {photos.map((p) => (
            <motion.div
              key={p.id}
              variants={item}
              whileHover={{
                rotate: 0,
                scale: 1.05,
                y: -8,
                boxShadow: "0px 20px 40px rgba(0,0,0,0.2)",
              }}
              transition={{ type: "spring", stiffness: 250, damping: 15 }}
              className={`relative bg-white shadow-lg rounded-md overflow-hidden w-64 h-80 transform ${p.rotate} hover:z-20 cursor-pointer`}
            >
              <img
                src={p.img}
                alt={p.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-white/90 py-3 px-4">
                <p className="text-sm font-medium text-gray-800">{p.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          variants={item}
          className="text-gray-600 mt-12 max-w-2xl mx-auto text-sm sm:text-base"
        >
          Every picture tells a story — from behind the camera to the silver screen,
          our journey is captured in moments of art, effort, and imagination.
        </motion.p>
      </motion.div>
    </section>
  );
}
