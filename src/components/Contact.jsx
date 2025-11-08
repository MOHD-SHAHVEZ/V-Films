import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({}); // per-field errors
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // inline status text
  const [toast, setToast] = useState(null); // { type, text }

  // auto-hide toast after 3.5s
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3500);
    return () => clearTimeout(t);
  }, [toast]);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const handleChange = (e) => {
  const { name, value } = e.target;

  if (name === "name") {
    // Allow only alphabets and spaces
    const cleanValue = value.replace(/[^a-zA-Z\s]/g, "");
    setForm((p) => ({ ...p, [name]: cleanValue }));
    setErrors((p) => ({ ...p, [name]: "" }));
  } else if (name === "phone") {
    // Allow only numbers (digits)
    const cleanValue = value.replace(/[^0-9]/g, "");
    setForm((p) => ({ ...p, [name]: cleanValue }));
    setErrors((p) => ({ ...p, [name]: "" }));
  } else {
    setForm((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: "" }));
  }
};

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!emailRegex.test(form.email.trim())) e.email = "Enter a valid email";
    if (!form.phone.trim()) e.phone = "Phone is required";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setStatus("");
    if (!validate()) {
      setStatus("⚠️ Please fix the errors above.");
      setToast({ type: "error", text: "Please fix the form errors" });
      return;
    }

    setLoading(true);
    setStatus("");
    try {
      const response = await fetch(
        "https://vernanbackend.ezlab.in/api/contact-us/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: form.name.trim(),
            email: form.email.trim(),
            phone: form.phone.trim(),
            message: form.message.trim(),
          }),
        }
      );

      // try parse body for debugging
      const dataText = await response.text();
      let data = null;
      try {
        data = JSON.parse(dataText);
      } catch (err) {
        // not JSON or empty
      }
      console.log("Response status:", response.status, "body:", data || dataText);

      if (response.status === 200 || response.status === 201) {
        // requirement: show exact "Form Submitted"
        setStatus("Form Submitted");
        setToast({ type: "success", text: "Form Submitted" });
        setForm({ name: "", email: "", phone: "", message: "" });
        setErrors({});
      } else {
        // try to use server message if present
        const msg = data?.message || `Server returned ${response.status}`;
        setStatus(`❌ Failed to send: ${msg}`);
        setToast({ type: "error", text: `Failed: ${msg}` });
      }
    } catch (err) {
      console.error("Submit error:", err);
      setStatus(`❌ Failed to send: ${err.message}`);
      setToast({ type: "error", text: `Failed: ${err.message}` });
    } finally {
      setLoading(false);
    }
  };

  // animations
  const container = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } },
  };
  const item = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  return (
    <section id="contact" className="py-24 bg-[#fdf7f4] text-[#1a1a1a]">
      <motion.div
        className="max-w-6xl mx-auto px-6 lg:px-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          variants={item}
          className="text-3xl md:text-4xl font-serif font-semibold text-center mb-14 text-[#2b2b2b]"
        >
          Get in Touch with <span className="text-[#e76a2d] border-b-[#e76a2d] border-b-1">V Films</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT: Contact Info */}
          <motion.div
            variants={item}
            className="space-y-6 bg-white rounded-xl p-6 md:p-8 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-[#e76a2d]">
              Contact Information
            </h3>
            <p className="text-gray-600 text-sm">
              We’d love to hear from you! Whether you’re planning a project or
              simply want to collaborate, reach out to us anytime.
            </p>

            <div className="space-y-4 text-gray-700 text-sm">
              <p>
                📍 <b>Address:</b> Kasra No. 903, Sector 62, Gurugram, Haryana 122413
              </p>
              <p>
                📞 <b>Phone:</b>{" "}
                <a href="tel:+911234567890" className="text-[#e76a2d] hover:underline">
                  +91 12345 67890
                </a>
              </p>
              <p>
                ✉️ <b>Email:</b>{" "}
                <a href="mailto:hello@vfilms.example" className="text-[#e76a2d] hover:underline">
                  hello@vfilms.example
                </a>
              </p>
            </div>

            <div className="overflow-hidden rounded-xl mt-4 shadow-md">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.4918981227765!2d77.08821257431865!3d28.40441067579001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23bd017cbddb%3A0xb3483daaf70ef8ab!2sEZ!5e0!3m2!1sen!2sin!4v1762574518557!5m2!1sen!2sin"
                width="100%"
                height="220"
                allowFullScreen=""
                loading="lazy"
                className="border-0 w-full"
              ></iframe>
            </div>
          </motion.div>

          {/* RIGHT: Contact Form */}
          <motion.form
            variants={item}
            onSubmit={handleSubmit}
            className="bg-white rounded-xl p-6 md:p-8 shadow-lg space-y-4"
            noValidate
          >
            <div>
              <label className="text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                className={`mt-1 w-full px-4 py-2 rounded-md border ${
                  errors.name ? "border-red-400" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-[#e76a2d]`}
              />
              {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                className={`mt-1 w-full px-4 py-2 rounded-md border ${
                  errors.email ? "border-red-400" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-[#e76a2d]`}
              />
              {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Your phone number"
                value={form.phone}
                onChange={handleChange}
                className={`mt-1 w-full px-4 py-2 rounded-md border ${
                  errors.phone ? "border-red-400" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-[#e76a2d]`}
              />
              {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Write your message here..."
                value={form.message}
                onChange={handleChange}
                className={`mt-1 w-full px-4 py-2 rounded-md border ${
                  errors.message ? "border-red-400" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-[#e76a2d]`}
              ></textarea>
              {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
            </div>

            {status && <p className="text-sm text-gray-600 italic">{status}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-[#e76a2d] text-white font-semibold rounded-md shadow-md hover:brightness-105 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </motion.div>

      {/* Toast / popup */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`fixed top-6 right-6 z-[9999] max-w-xs px-4 py-3 rounded-md shadow-lg ${
              toast.type === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="font-semibold">{toast.type === "success" ? "Success" : "Error"}</div>
              <div className="text-sm opacity-90">{toast.text}</div>
              <button
                aria-label="Close"
                onClick={() => setToast(null)}
                className="ml-2 text-white/90 hover:text-white"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
