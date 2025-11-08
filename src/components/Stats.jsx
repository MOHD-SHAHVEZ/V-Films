import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Stats() {
  // target values
  const TARGET = {
    projects: 220,
    clients: 99,
    awards: 33,
  };

  // visible numbers shown in UI
  const [numbers, setNumbers] = useState({
    projects: 0,
    clients: 0,
    awards: 0,
  });

  const sectionRef = useRef(null);
  const startedRef = useRef(false); // ensure animation starts only once
  const rafRef = useRef(null);

  // easing function (easeOutQuad)
  const easeOutQuad = (t) => 1 - (1 - t) * (1 - t);

  // animate a single counter using requestAnimationFrame
  const animateCounter = (key, startVal, endVal, duration) => {
    const startTime = performance.now();

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuad(progress);
      const current = Math.floor(startVal + (endVal - startVal) * eased);

      setNumbers((prev) => ({ ...prev, [key]: current }));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        // ensure final exact value set
        setNumbers((prev) => ({ ...prev, [key]: endVal }));
      }
    };

    rafRef.current = requestAnimationFrame(step);
  };

  // start all counters with slight stagger
  const startCounting = () => {
    if (startedRef.current) return;
    startedRef.current = true;

    // durations (ms) - you can tweak for feel
    const base = 1100;
    animateCounter("projects", 0, TARGET.projects, base + 300); // biggest one a bit slower
    // stagger the next ones slightly using setTimeout to feel nicer
    setTimeout(() => animateCounter("clients", 0, TARGET.clients, base), 120);
    setTimeout(() => animateCounter("awards", 0, TARGET.awards, base - 200), 240);
  };

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    // IntersectionObserver to trigger when section visible (25% visible)
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounting();
          }
        });
      },
      { threshold: 0.25 }
    );

    obs.observe(node);

    return () => {
      obs.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="py-20 bg-[#fffaf6]"
      aria-label="V Films statistics"
    >
      <motion.div
        className="max-w-5xl mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#2b2b2b] mb-12">
          Creating Moments That Matter
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Projects */}
          <motion.div
            className="flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-6xl font-bold text-[#e76a2d]">
              {numbers.projects}+
            </h3>
            <p className="text-gray-700 font-medium mt-2">Projects</p>
          </motion.div>

          {/* Clients */}
          <motion.div
            className="flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <h3 className="text-6xl font-bold text-[#e76a2d]">
              {numbers.clients}+
            </h3>
            <p className="text-gray-700 font-medium mt-2">Clients</p>
          </motion.div>

          {/* Awards */}
          <motion.div
            className="flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-6xl font-bold text-[#e76a2d]">
              {numbers.awards}+
            </h3>
            <p className="text-gray-700 font-medium mt-2">Awards</p>
          </motion.div>
        </div>

        <p className="text-gray-600 mt-10 max-w-2xl mx-auto text-sm sm:text-base">
          We’ve collaborated with talented storytellers and creative minds across the world —
          delivering powerful visuals and heartfelt stories that inspire, connect, and engage audiences.
        </p>
      </motion.div>
    </section>
  );
}
