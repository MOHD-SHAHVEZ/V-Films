import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Gallery from "./components/Gallery";
import Studio from "./components/Studio";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services";
import ServiceDetail from "./pages/ServicesDetail"; // create this if not present

export default function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />

      <main className="pt-20">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* Full single-page home (all sections) */}
            <Route
              path="/"
              element={
                <div>
                  <Hero />
                  <About />
                  <Services />
                  {/* <Gallery /> */}
                  <Studio />
                  <Stats />
                  <Contact />
                  <Footer />
                </div>
              }
            />

            {/* Service detail page (animated) */}
            <Route path="/services/:slug" element={<ServiceDetail />} />

            {/* Fallback to home */}
            <Route
              path="*"
              element={
                <div>
                  <Hero />
                  <About />
                  <Services />
                  <Studio />
                  <Stats />
                  <Contact />
                  <Footer />
                </div>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
    </>
  );
}
