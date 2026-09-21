import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export estático: Hostinger solo sirve archivos (no Node.js).
  // `npm run build` genera ./out con HTML/CSS/JS plano.
  output: "export",
  // Emitir /acerca-de/index.html en vez de /acerca-de.html
  // (compatibilidad con la estructura de carpetas en Hostinger).
  trailingSlash: true,
  // next/image con el optimizador por defecto NO funciona en export estático.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
