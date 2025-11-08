# 🎬 V-Films — Creative Storytelling Studio

> **“Where stories find their voice and form.”**  
> A single-page responsive web experience crafted with **React + TailwindCSS**, blending visual storytelling, animation, and API integration.

![V-Films Banner](./src/assets/HeroLogo.png)

---

## 🚀 Project Overview

**V-Films** is a responsive, single-page React web application built as part of an internship assignment.  
It recreates the **official studio homepage** of *Varnan Films*, featuring animated hero sections, smooth transitions, responsive design, and a working contact form integrated with a backend API.

This project highlights:
- Aesthetic UI inspired by the provided **Figma Design**
- Smooth **Framer Motion animations**
- A working **Contact Form API**
- **Route-based dynamic service detail pages**
- Full mobile and tablet responsiveness
- Modern deployment setup with Vercel

---

## 🧩 Features

| Feature | Description |
|----------|-------------|
| 🎨 **Responsive Design** | Optimized for 480p (mobile) → MacBook (1440px) |
| 🧭 **Smooth Scroll Navigation** | Auto scrolls between sections using React scroll-behavior |
| ⚡ **Framer Motion Animations** | Subtle entrance, tilt & hover effects for smooth UX |
| 🧠 **Dynamic Service Routing** | Each “Learn More” button opens its own route `/services/branding`, `/services/film-production`, etc. |
| 📬 **Contact Form API Integration** | Live API integration using POST request to `https://vernanbackend.ezlab.in/api/contact-us/` |
| 🧱 **TailwindCSS Styling** | Modern, lightweight utility-first CSS styling |
| 🌗 **Creative Components** | Sticky Notes, Polaroid Frames, Gradient Backgrounds, Mandala Overlay |
| ☁️ **Deployed with Vercel** | Production-ready and live for public view |

---

## 🛠️ Tech Stack

| Category | Tools / Libraries |
|-----------|------------------|
| **Frontend** | React.js (Vite) |
| **Styling** | Tailwind CSS |
| **Animation** | Framer Motion |
| **Routing** | React Router DOM |
| **Form Handling** | Fetch API (POST Request) |
| **Deployment** | Vercel / Netlify |
| **Version Control** | Git + GitHub |

---

## ⚙️ API Integration
https://vernanbackend.ezlab.in/api/contact-us/

### Endpoint:


### Method:
`POST`

### Example Payload:
```json
{
  "name": "Test User",
  "email": "testuser@gmail.com",
  "phone": "908765498",
  "message": "This is a message"
}

### Success Response:
{
  "created_at": "2025-10-10T05:27:59.371578Z",
  "email": "testuser@gmail.com",
  "id": 49,
  "message": "This is a message",
  "name": "Test User",
  "phone": "908765498",
  "updated_at": "2025-10-10T05:27:59.371598Z"
}

✅ Includes client-side validation:

Email format check

Empty field prevention

Success message display after valid submission

V-Films/
├── public/
│   └── assets/                # Public images (HeroMandala, etc.)
├── src/
│   ├── assets/                # Imported images for components
│   ├── components/            # UI components (Navbar, Hero, About, etc.)
│   ├── pages/                 # ServiceDetail routes
│   ├── App.jsx                # Main App Component
│   ├── main.jsx               # Entry file
│   └── index.css              # Tailwind CSS setup
├── package.json
├── postcss.config.mjs
└── README.md





















# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
