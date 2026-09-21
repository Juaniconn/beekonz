"use client";

import { motion } from "framer-motion";

const customFeatures = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h10a4 4 0 004-4V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 01-4 4z" />
      </svg>
    ),
    title: "Configura tu set",
    desc: "Elige cuántos trackers necesitas: de 1 a 10+. Solo pagas lo que usas.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
    title: "Colores exclusivos",
    desc: "Personaliza el color de cada tracker. Matchea tu setup o tu avatar.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Garantía extendida",
    desc: "12 meses por defecto, 24 meses en packs Pro. Cobertura completa.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: "Pago seguro",
    desc: "Checkout vía Stripe. Acepta tarjetas, transferencias y meses sin intereses.",
  },
];

const trackerColors = [
  { name: "Black Bee", src: "/product-black-bee.jpg" },
  { name: "Green", src: "/product-green.jpg" },
  { name: "Jester", src: "/product-jester.jpg" },
  { name: "Pastel", src: "/product-pastel.jpg" },
  { name: "Purple Bee", src: "/product-purple-bee.jpg" },
  { name: "Yellow Hub", src: "/product-yellow-hub.jpg" },
];

export function CustomSet() {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Personalización
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Arma tu <span className="text-gradient">set personalizado</span>
          </h2>
          <p className="text-muted mt-4 max-w-2xl mx-auto">
            Elige la cantidad de trackers, los colores y los accesorios que necesites.
          </p>
        </motion.div>

        {/* Color options */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-16">
          {trackerColors.map((color, i) => (
            <motion.div
              key={color.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="text-center group cursor-pointer"
            >
              <div className="relative aspect-square rounded-xl overflow-hidden border border-border group-hover:border-accent transition-colors mb-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={color.src}
                  alt={color.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <p className="text-xs text-muted group-hover:text-accent transition-colors">{color.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {customFeatures.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface border border-border rounded-xl p-6 hover:border-accent/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 text-accent">
                {feat.icon}
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
