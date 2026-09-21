"use client";

import { motion } from "framer-motion";

const ftImages = [
  { src: "/ft_1.jpg", alt: "Face tracking demo 1" },
  { src: "/ft_2.jpg", alt: "Face tracking demo 2" },
  { src: "/ft_3.jpg", alt: "Face tracking demo 3" },
  { src: "/ft_4.jpg", alt: "Face tracking demo 4" },
  { src: "/ft_5.jpg", alt: "Face tracking demo 5" },
];

const ftFeatures = [
  {
    title: "52 Puntos de Referencia",
    desc: "Captura precisa de cejas, ojos, mejillas y boca para expresiones naturales.",
  },
  {
    title: "Latencia <5ms",
    desc: "Respuesta instantánea entre tu movimiento y el avatar.",
  },
  {
    title: "Plug & Play",
    desc: "Conexión USB-C directa. Sin configuración compleja.",
  },
  {
    title: "Compatible VRChat",
    desc: "Integración nativa con OSC y VRChat Avatars 3.0.",
  },
];

export function FaceTracking() {
  return (
    <section className="py-20 md:py-28 px-6 bg-surface">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Face Tracking
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Expresiones que <span className="text-gradient">cobran vida</span>
          </h2>
          <p className="text-muted mt-4 max-w-2xl mx-auto">
            Captura cada sonrisa, ceño fruncido y parpadeo con precisión profesional.
          </p>
        </motion.div>

        {/* Image gallery */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          {ftImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative aspect-square rounded-xl overflow-hidden border border-border group"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger">
          {ftFeatures.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ "--i": i } as React.CSSProperties}
              className="bg-background border border-border rounded-xl p-6 hover:border-accent/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 text-accent">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">{feat.title}</h3>
              <p className="text-sm text-muted">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
