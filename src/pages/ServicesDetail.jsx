// src/pages/ServiceDetail.jsx
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

// main service images you already have
import FilmProductionImg from "../assets/FilmProductionImg.png";
import BrandingImg from "../assets/BrandingImg.png";
import ArtCurationImg from "../assets/ArtCurationImg.jpg";

// import '../index.css';

const pageVariants = {
  initial: { opacity: 0, y: 18, scale: 0.995 },
  in: { opacity: 1, y: 0, scale: 1 },
  out: { opacity: 0, y: -12, scale: 0.995 },
};
const pageTransition = { type: "tween", ease: "easeOut", duration: 0.45 };

export default function ServiceDetail() {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  const serviceData = {
    "film-production": {
      title: "Film Production",
      image: FilmProductionImg,
      quote: `"Filmmaking is a chance to live many lifetimes." - Robert Altman`,
      description:
        "Who says films are just an escape? We see them as a way to live many lives — to feel, to explore, and to tell stories that stay. With each film, we carry new memories and new reasons to keep creating.",
      points: ["Documentaries", "Corporate Videos", "2D Animation Videos", "3D Animation Videos"],
    },
    branding: {
      title: "Branding",
      image: BrandingImg,
      quote: `"A brand is a voice, and a product is a souvenir." - Lisa Gansky."`,
      description:
        "We help brands find their voice through visual systems, strategy and craft. We make brand stories that feel authentic and last.",
      points: ["Identity", "Campaigns", "Visual Strategy", "Content"],
    },
    "art-curation": {
      title: "Art Curation",
      image: ArtCurationImg,
      quote: `""V take art where it belongs, to the people.” - Vernita Verma."`,
      description:
        "We design exhibitions and experiences that connect with audiences — blending narrative with form, context with care.",
      points: ["Exhibitions", "Installations", "Catalogues"],
    },
  };

  const service = serviceData[slug];

  if (!service) {
    return (
      <motion.div
        className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#fffaf6] to-[#f7eee9]"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <div className="text-center p-6">
          <h2 className="text-2xl font-semibold">Service Not Found</h2>
          <Link to="/" className="mt-4 inline-block px-4 py-2 bg-[#e76a2d] text-white rounded-md">
            Back to Home
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.section
      className="relative min-h-screen py-20 px-6 lg:px-20 overflow-hidden"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >

      {/* ----- Custom CSS for texture + animations ----- */}
      <style>{`
        /* paper texture using repeating-radial-gradients (no image file needed) */

        .paper-bg {
          background-color: #f9ebe5;
          background-image:
            radial-gradient(circle at 10% 20%, rgba(0,0,0,0.015) 0, rgba(0,0,0,0.015) 1px, transparent 1px),
            radial-gradient(circle at 40% 60%, rgba(0,0,0,0.01) 0, rgba(0,0,0,0.01) 1px, transparent 1px),
            linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.01));
          background-size: 120px 120px, 140px 140px, 100% 100%;
        }

        /* vignette for cinematic mood */

        .vignette::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(60% 50% at 50% 30%, rgba(255,255,255,0.0), rgba(0,0,0,0.06));
          mix-blend-mode: multiply;
        }

        /* brush stroke under quote */

        .brush {
          background-image: linear-gradient(90deg,#20324a 0%, #3b6b9a 100%);
          height: 14px;
          width: 270px;
          border-radius: 6px;
          filter: blur(0.3px) saturate(1.05);
          transform: rotate(-2deg);
        }

        /* float animations */

        @keyframes floatSlow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        @keyframes floatTiny {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
          100% { transform: translateY(0px); }
        }
        .float-slow { animation: floatSlow 6s ease-in-out infinite; }
        .float-tiny { animation: floatTiny 5s ease-in-out infinite; }

        /* polished polaroid shadow */
        .polaroid {
          box-shadow:
            0 25px 45px rgba(16,24,40,0.18),
            0 6px 12px rgba(16,24,40,0.06),
            inset 0 -14px 20px rgba(0,0,0,0.03);
          border-radius: 10px;
        }

        /* subtle sparkle overlay */
        .speckle::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        /* small ribbon under heading */

        .quote-wrap { position: relative; display: inline-block; }
        .quote-wrap .brush {
          position: absolute;
          left: 50%;
          transform: translateX(-50%) rotate(-2deg);
          bottom: -10px;
          z-index: 0;
        }
        .quote-wrap h3 { position: relative; z-index: 2; }

        /* nicer explore button hover */
        .explore-btn:hover { transform: translateY(-6px) scale(1.02); box-shadow: 0 18px 30px rgba(231,106,45,0.18); }

      `}
      
      </style>

      {/* textured background + vignette */}
      <div className="absolute inset-0 paper-bg vignette speckle -z-10" />

      <div className="max-w-6xl mx-auto relative">

        {/* Back button */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#e76a2d] border-2 border-[#eea482] rounded-full px-3 py-2 text-md hover:bg-[#fff3eb] transition font-semibold"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0L3.586 10l4.707-4.707a1 1 0 011.414 1.414L6.414 10l3.293 3.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back
          </Link>
        </div>

        {/* Quote / Heading with brush stroke */}
        <div className="text-center mb-8">
          <div className="quote-wrap inline-block">
            <h3 className="text-2xl text-[#e76a2d] italic font-medium px-4 mb-2">{service.quote}</h3>
            <div className="brush" aria-hidden />
          </div>
        </div>

        {/* decorative dotted left border (subtle) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left: Polaroid with spotlight */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">

              {/* soft spotlight behind polaroid */}
              <div
                className="absolute -inset-x-6 -top-6 w-[420px] h-[360px] blur-[48px] opacity-30 rounded-full -z-10"
                style={{ background: "radial-gradient(circle at 30% 30%, rgba(231,106,45,0.12), transparent 40%), radial-gradient(circle at 70% 70%, rgba(47,143,99,0.06), transparent 35%)" }}
                aria-hidden
              />

              {/* Polaroid */}
              <figure className="bg-white p-5 polaroid transform -rotate-1 hover:rotate-0 transition-all duration-500">
                <div className="w-72 h-80 bg-gray-100 rounded-sm overflow-hidden flex items-center justify-center">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <figcaption className="mt-4 text-center text-md text-[#1f2937] font-medium hover:scale-110 transition-all duration-300">{service.title}</figcaption>
              </figure>

              {/* small decorative scribble bottom-left of polaroid */}
              <div className="hidden md:block absolute -left-12 bottom-2 w-20 opacity-70 float-tiny pointer-events-none" aria-hidden>
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M6 64 C20 40, 36 44, 52 34" stroke="#243044" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Right: green-bordered text card with decorative svg */}
          <div className="relative top-7">
            <div className="border-2 border-[#2f8f63] p-6 rounded-md bg-white/90 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-3 text-[#123924] ">{service.title}</h2>
              <p className="text-gray-700 leading-relaxed">{service.description}</p>

              <ul className="list-disc ml-6 mt-4 text-gray-700 font-semibold italic">
                {service.points.map((pt, i) => (
                  <li key={i} className="mb-1">{pt}</li>
                ))}
              </ul>
            </div>

            {/* nicer floating camera-ish svg (right) */}
            <div className="hidden lg:block absolute right-[-64px] top-12 w-28 opacity-90 float-slow pointer-events-none" aria-hidden>
              <svg viewBox="0 0 140 120" className="w-full h-full">
                <rect x="8" y="18" rx="10" ry="10" width="100" height="64" fill="#fff7f2" stroke="#243044" strokeWidth="2"/>
                <circle cx="42" cy="50" r="16" fill="#eaf7f0" stroke="#1f4f3a" strokeWidth="2"/>
                <rect x="78" y="20" width="28" height="12" rx="3" fill="#fff7f2" stroke="#243044" strokeWidth="1.6"/>
                <path d="M6 40 L18 32" stroke="#243044" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Floating small decorative icons around page (SVGs) */}
        <div className="hidden md:block absolute top-36 left-8 w-14 opacity-80 float-tiny pointer-events-none" aria-hidden>
          <svg viewBox="0 0 64 64" className="w-full h-full">
            <rect x="4" y="10" rx="3" ry="3" width="40" height="28" fill="none" stroke="#243044" strokeWidth="1.6"/>
            <circle cx="18" cy="24" r="6" fill="none" stroke="#243044" strokeWidth="1.6"/>
            <rect x="36" y="12" width="8" height="6" rx="1.2" fill="none" stroke="#243044" strokeWidth="1.6"/>
          </svg>
        </div>

        <div className="hidden lg:block absolute bottom-10 right-16 w-24 opacity-80 float-tiny pointer-events-none" aria-hidden>
          <svg viewBox="0 0 80 80" className="w-full h-full">
            <path d="M10 18 L40 36 L70 18" fill="none" stroke="#243044" strokeWidth="2" strokeLinecap="round"/>
            <path d="M30 36 L22 66" stroke="#243044" strokeWidth="2" strokeLinecap="round"/>
            <path d="M50 36 L58 66" stroke="#243044" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="40" cy="32" r="6" fill="none" stroke="#243044" strokeWidth="2"/>
          </svg>
        </div>

        {/* Explore Now center button */}
        <div className="mt-12 text-center">
          <button className="font-semibold explore-btn inline-flex items-center gap-3 px-6 py-3 bg-[#e76a2d] text-white rounded-full shadow-lg transform transition-all duration-300">
            Explore Now
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transform rotate-5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>

      </div>
    </motion.section>
  );
}
