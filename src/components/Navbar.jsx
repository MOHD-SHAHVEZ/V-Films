// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import NavLogo from '../assets/HeroLogo.png'; 

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock scroll & close on Escape
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { label: "Home", to: "home" },
    { label: "About", to: "about" },
    { label: "Services", to: "services" },
    { label: "Studio", to: "studio" },
    { label: "Stats", to: "stats" },
  ];

  return (
    <>
      <header className="fixed w-full z-50 top-0 left-0">
        <div className="backdrop-blur-md bg-white/40 border-b border-white/20 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">

              {/* Logo */}
<div className="flex items-center gap-3">
  <ScrollLink
    to="home"
    smooth={true}
    duration={700}
    offset={-70}
    className="flex items-center gap-2 cursor-pointer"
  >
    <img
      src= {NavLogo}
      alt="Logo"
      className="w-19 h-13 object-contain rounded-md"
    />
    {/* <span className="hidden sm:inline font-semibold text-[#1a1a1a] text-lg tracking-wide">
      Films
    </span> */}
  </ScrollLink>
</div>


              {/* Desktop nav */}
              <nav className="hidden lg:flex items-center gap-8">
                {links.map((ln) => (
                  <ScrollLink
                    key={ln.to}
                    to={ln.to}
                    smooth={true}
                    duration={700}
                    offset={-70}
                    spy={true}
                    activeClass="text-[#e76a2d] font-semibold"
                    className="text-base font-medium text-gray-800 hover:text-[#e76a2d] transition-colors duration-300 cursor-pointer relative group"
                  >
                    {ln.label}
                    <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#e76a2d] transition-all duration-300 group-hover:w-full"></span>
                  </ScrollLink>
                ))}
              </nav>

              {/* Right side: Contact + Hamburger */}
              <div className="flex items-center gap-3">
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={700}
                  offset={-70}
                  className="hidden sm:inline-flex items-center px-5 py-2 rounded-md text-base font-semibold bg-[#e76a2d] text-white shadow hover:brightness-95 transition cursor-pointer active:ring-4 ring-[#e76a2d]"
                >
                  Contact
                </ScrollLink>

                {/* mobile compact contact button */}
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={700}
                  offset={-70}
                  className="inline-flex sm:hidden items-center px-3 py-1 rounded-full text-sm font-medium bg-[#e76a2d] text-white shadow hover:brightness-95 transition cursor-pointer"
                >
                  Contact
                </ScrollLink>

                {/* Hamburger */}
                <button
                  onClick={() => setOpen(!open)}
                  className="ml-2 p-2 rounded-md lg:hidden focus:outline-none focus:ring-2 focus:ring-[#e76a2d]"
                  aria-expanded={open}
                  aria-label={open ? "Close menu" : "Open menu"}
                >
                  <svg
                    className={`w-7 h-7 transition-transform duration-300 ${open ? "rotate-90 text-[#e76a2d]" : "text-gray-700"}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {!open ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <div
            className={`lg:hidden transform transition-all duration-500 ease-in-out origin-top z-50 ${
              open ? "scale-y-100 opacity-100 max-h-[520px] pointer-events-auto" : "scale-y-0 opacity-0 max-h-0 pointer-events-none"
            }`}
          >
            <div className="px-4 pt-4 pb-6 border-t border-white/20 bg-white/90 backdrop-blur-lg shadow-md">
              <div className="flex flex-col gap-4">
                {links.map((ln) => (
                  <ScrollLink
                    key={ln.to}
                    to={ln.to}
                    smooth={true}
                    duration={700}
                    offset={-70}
                    onClick={() => setOpen(false)}
                    className="block text-lg font-medium text-gray-800 hover:text-[#e76a2d] cursor-pointer transition-all duration-300"
                  >
                    {ln.label}
                  </ScrollLink>
                ))}

                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={700}
                  offset={-70}
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex items-center px-5 py-2 rounded-md text-base font-semibold bg-[#e76a2d] text-white shadow hover:brightness-95 transition cursor-pointer"
                >
                  Contact
                </ScrollLink>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay placed AFTER header, with lower z-index than menu */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/30 transition-opacity duration-500 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} z-40`}
        aria-hidden={!open}
      />
    </>
  );
}
