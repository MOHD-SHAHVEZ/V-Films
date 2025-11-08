import React, { useState, useEffect } from "react";

const SOCIAL = {
  youtube: "https://www.youtube.com/@VFilmsOfficial",
  instagram: "https://www.instagram.com/vfilms_official",
  linkedin: "https://www.linkedin.com/company/ez-works/",
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showTop, setShowTop] = useState(false);
  const year = new Date().getFullYear();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    const val = email.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(val)) {
      setMessage("⚠️ Please enter a valid email.");
      return;
    }
    setMessage("✅ Thanks — you'll hear from us soon!");
    setEmail("");
    setTimeout(() => setMessage(""), 3500);
  };

  return (
    <footer className="relative bg-[#f3e8e0] text-[#1a1a1a]">
      {/* Top Accent Line */}
      <div className="w-full h-1 bg-[#e76a2d]" />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">

          {/* Brand / About */}
          <div className="md:col-span-4">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-md bg-[#fff1e8] flex items-center justify-center shadow-sm">
                <span className="font-serif text-3xl text-[#e76a2d]">V</span>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-semibold text-[#1a1a1a]">V Films</h3>
                <p className="text-sm text-[#5b5b5b]">Cinematic stories & production services</p>
              </div>
            </a>

            <p className="mt-5 text-base text-[#444] max-w-sm leading-relaxed">
              Varnas Films crafts cinematic stories, production and studio experiences with care — from idea to screen.
            </p>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-4">
              {[
                { href: SOCIAL.youtube, icon: "youtube" },
                { href: SOCIAL.instagram, icon: "instagram" },
                { href: SOCIAL.linkedin, icon: "linkedin" },
              ].map(({ href, icon }) => (
                <a
                  key={icon}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-md bg-white shadow hover:bg-[#ffece1] transition"
                  aria-label={icon}
                >
                  {icon === "youtube" && (
                    <svg className="w-6 h-6 text-[#e76a2d]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 7.1a3 3 0 00-2.1-2.1C19.6 4 12 4 12 4s-7.6 0-8.9.9A3 3 0 001 7.1C0 8.4 0 12 0 12s0 3.6 1 4.9a3 3 0 002.1 2.1C4.4 20 12 20 12 20s7.6 0 8.9-.9a3 3 0 002.1-2.1C24 15.6 24 12 24 12s0-3.6-1-4.9zM9.8 15.2V8.8l6.2 3.2-6.2 3.2z" />
                    </svg>
                  )}
                  {icon === "instagram" && (
                    <svg className="w-6 h-6 text-[#e76a2d]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5.8a4.2 4.2 0 100 8.4 4.2 4.2 0 000-8.4zm6.3-.8a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                  )}
                  {icon === "linkedin" && (
                    <svg className="w-6 h-6 text-[#e76a2d]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11.2 20h-2.8v-9h2.8v9zm-1.4-10.3c-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6s1.6.7 1.6 1.6c0 .9-.7 1.6-1.6 1.6zm12.6 10.3h-2.8v-4.8c0-1.1 0-2.5-1.5-2.5-1.5 0-1.8 1.2-1.8 2.4v4.9h-2.8v-9h2.7v1.2h.1c.4-.7 1.4-1.4 2.9-1.4 3.1 0 3.7 2 3.7 4.6v4.6z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold mb-4 text-[#1a1a1a]">Quick links</h4>
            <ul className="space-y-2 text-base text-[#5b5b5b]">
              {["About", "Gallery", "Studio", "Stats", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-[#e76a2d] transition">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-lg font-semibold mb-4 text-[#1a1a1a]">Contact</h4>
            <p className="text-base text-[#444]">Studio: Kasra No. 903, Sector 62, Gurugram, Haryana 122413 </p>
            <p className="text-base text-[#444] mt-2">
              Phone: <a href="tel:+911234567890" className="hover:text-[#e76a2d]">+91 12345 67890</a>
            </p>
            <p className="text-base text-[#444] mt-1">
              Email: <a href="mailto:hello@vfilms.com" className="hover:text-[#e76a2d]">hello@vfilms.com</a>
            </p>

            <div className="mt-6">
              <h4 className="text-md font-semibold mb-2 text-[#1a1a1a]">Working Hours</h4>
              <p className="text-sm text-[#5b5b5b]">Mon — Fri: 10:00 — 18:00</p>
              <p className="text-sm text-[#5b5b5b]">Sat: 10:00 — 14:00</p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3">
            <h4 className="text-lg font-semibold mb-4 text-[#1a1a1a]">Newsletter</h4>
            <p className="text-base text-[#444]">
              Get monthly updates and behind-the-scenes from our productions.
            </p>
            <form onSubmit={handleSubscribe} className="mt-4 flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2.5 rounded-md bg-white text-[#1a1a1a] placeholder-[#9a9a9a] text-base focus:outline-none focus:ring-2 focus:ring-[#e76a2d]"
                required
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-[#e76a2d] text-white text-base font-semibold rounded-md hover:brightness-95 transition"
              >
                Subscribe
              </button>
              {message && <p className="text-sm text-[#4b5563]">{message}</p>}
            </form>
          </div>
        </div>

        {/* Divider & Legal */}
        <div className="border-t border-[#e0c8bb] mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-[#5f5f5f]">
          <p>© {year} V Films — All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="hover:text-[#e76a2d]">Privacy</a>
            <a href="/terms" className="hover:text-[#e76a2d]">Terms</a>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 bg-[#e76a2d] text-white text-xl p-3 rounded-full shadow-lg hover:scale-110 transition focus:ring-4 focus:ring-[#e76a2d]/40"
        >
          ↑
        </button>
      )}
    </footer>
  );
}
