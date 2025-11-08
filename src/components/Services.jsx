// src/components/Services.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Imports using the exact filenames you showed in VS Code.
// Make sure these files exist at: src/assets/<filename>
import FilmProduction from "../assets/FilmProduction.png";
import Branding from "../assets/Branding.png";
import ArtCuration from "../assets/Art Curation.png"; // note: has a space in filename
import Group2 from "../assets/Group2.png";
import HeroMandala from "../assets/HeroMandala.png";

export default function Services() {
  const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-[#fffaf6] to-[#f7eee9] min-h-screen">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h3 className="text-xl text-[#e76a2d] font-semibold">V Films</h3>
          <h2 className="text-2xl md:text-3xl font-serif font-bold mt-2">The storyboard reveals the breadth of our craft.</h2>
        </div>

        {/* First frame: 3 polaroids (tilted) */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center gap-6 mb-12"
        >
          <motion.div variants={item} className="relative transform -rotate-6 hover:rotate-0 transition-transform duration-500">
            <div className="bg-white p-2 rounded-md shadow-lg">
              <img src={FilmProduction} alt="Film Production" className="w-44 h-56 object-cover" />
            </div>
            <div className="mt-2 text-center text-md">Film Production</div>
          </motion.div>

          <motion.div variants={item} className="relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="bg-white p-2 rounded-md shadow-lg">
              <img src={Branding} alt="Branding" className="w-44 h-56 object-cover" />
            </div>
            <div className="mt-2 text-center text-md">Branding</div>
          </motion.div>

          <motion.div variants={item} className="relative transform -rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="bg-white p-2 rounded-md shadow-lg">
              <img src={ArtCuration} alt="Art Curation" className="w-44 h-56 object-cover" />
            </div>
            <div className="mt-2 text-center text-md">Art Curation</div>
          </motion.div>
        </motion.div>

        {/* Second frame: detailed service description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: polaroid / image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="bg-white p-4 rounded-md shadow-lg">
              <img src={FilmProduction} alt="Film Production large" className="w-64 md:w-72 object-cover" />
              <div className="text-center text-sm mt-2">Film Production</div>
            </div>
          </motion.div>

          {/* Right: text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="prose max-w-none text-gray-700"
          >
            <h3 className="text-xl font-semibold">Filmmaking is a chance to live many lifetimes.</h3>
            <p>
              Who says films are just an escape? We see them as a way to live many lives — to feel, to explore, and to tell stories that stay.
              With each film, we carry new memories and new reasons to keep creating.
            </p>

            <ul className="list-disc ml-6 mt-4 text-sm">
              <li>Documentaries</li>
              <li>Corporate Videos</li>
              <li>2D & 3D Animation Videos</li>
            </ul>

            <Link to="/services/film-production" className="inline-block mt-6 px-4 py-2 bg-[#e76a2d] text-white rounded-md shadow hover:brightness-95 transition">
              Explore Now
            </Link>
          </motion.div>
        </div>

        {/* After that: three small service blocks (3 columns) */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div className="bg-white rounded-lg p-4 shadow-md hover:scale-105 transition-transform duration-300">
            <div className="flex gap-4 items-start">
              <img src={FilmProduction} alt="Film Production card" className="w-24 h-24 object-cover rounded-sm" />
              <div>
                <h4 className="font-semibold">Film Production</h4>
                <p className="text-sm text-gray-600 mt-1">From pre-production to post — concept, shoot, edit and finish with cinematic care.</p>
                <Link to="/services/film-production" className="inline-block mt-2 px-3 py-1 text-sm bg-[#e76a2d] text-white rounded shadow hover:brightness-95 transition">Learn more →</Link>
              </div>
            </div>
          </motion.div>

          <motion.div className="bg-white rounded-lg p-4 shadow-md hover:scale-105 transition-transform duration-300">
            <div className="flex gap-4 items-start">
              <img src={Branding} alt="Branding card" className="w-24 h-24 object-cover rounded-sm" />
              <div>
                <h4 className="font-semibold">Branding</h4>
                <p className="text-sm text-gray-600 mt-1">Strategic storytelling, identity systems and visual direction for brands.</p>
                <Link to="/services/branding" className="inline-block mt-2 px-3 py-1 text-sm bg-[#e76a2d] text-white rounded shadow hover:brightness-95 transition">Learn more →</Link>
              </div>
            </div>
          </motion.div>

          <motion.div className="bg-white rounded-lg p-4 shadow-md hover:scale-105 transition-transform duration-300">
            <div className="flex gap-4 items-start">
              <img src={ArtCuration} alt="Art Curation card" className="w-24 h-24 object-cover rounded-sm" />
              <div>
                <h4 className="font-semibold">Art Curation</h4>
                <p className="text-sm text-gray-600 mt-1">Exhibitions, curation & art direction — where form meets narrative.</p>
                <Link to="/services/art-curation" className="inline-block mt-2 px-3 py-1 text-sm bg-[#e76a2d] text-white rounded shadow hover:brightness-95 transition">Learn more →</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
