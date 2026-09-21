"use client";

import { motion } from "framer-motion";

const galleryItems = [
  { src: "/product-black-bee.jpg", alt: "Tracker Black Bee", span: "lg:row-span-2" },
  { src: "/product-green.jpg", alt: "Tracker Green", span: "" },
  { src: "/product-jester.jpg", alt: "Tracker Jester", span: "" },
  { src: "/product-pastel.jpg", alt: "Tracker Pastel", span: "" },
  { src: "/product-purple-bee.jpg", alt: "Tracker Purple Bee", span: "lg:row-span-2" },
  { src: "/product-yellow-hub.jpg", alt: "Tracker Yellow Hub", span: "" },
  { src: "/tracker-lifestyle.jpg", alt: "Tracker lifestyle", span: "lg:col-span-2" },
  { src: "/tracker-detail.jpg", alt: "Tracker detail", span: "" },
];

export function Gallery() {
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
            Galería
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Diseños que <span className="text-gradient">se ven increíbles</span>
          </h2>
          <p className="text-muted mt-4 max-w-2xl mx-auto">
            Cada tracker es una pieza de ingeniería. Colores exclusivos y acabados premium.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[150px] sm:auto-rows-[200px]">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`relative rounded-xl overflow-hidden border border-border group ${item.span}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium text-white">{item.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
