"use client";

import { motion } from "framer-motion";

const shippingPoints = [
  { city: "CDMX", x: 47, y: 55, delay: 0 },
  { city: "Guadalajara", x: 40, y: 52, delay: 0.1 },
  { city: "Monterrey", x: 48, y: 38, delay: 0.2 },
  { city: "Mérida", x: 62, y: 58, delay: 0.3 },
  { city: "Cancún", x: 68, y: 54, delay: 0.4 },
  { city: "Puebla", x: 48, y: 56, delay: 0.5 },
  { city: "Tijuana", x: 22, y: 40, delay: 0.6 },
];

export function ShippingMap() {
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
            Envíos Nacionales
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Llega a <span className="text-gradient">todo México</span>
          </h2>
          <p className="text-muted mt-4 max-w-2xl mx-auto">
            Enviamos a los 32 estados. 2-5 días hábiles. Gratis en compras above $3,000 MXN.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] bg-surface border border-border rounded-2xl overflow-hidden"
          >
            {/* Mexico map SVG */}
            <svg
              viewBox="0 0 100 75"
              className="w-full h-full"
              fill="none"
              stroke="currentColor"
            >
              {/* Simplified Mexico silhouette */}
              <motion.path
                d="M15 35 Q18 30 25 32 L35 30 Q42 28 48 35 L55 38 Q60 40 62 45 L65 48 Q68 52 65 56 L60 60 Q55 62 50 60 L45 58 Q40 56 38 52 L35 48 Q30 50 25 48 L20 45 Q15 42 15 35 Z"
                className="text-accent/30"
                strokeWidth="0.8"
                fill="rgba(234, 208, 142, 0.05)"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
              />
              <motion.path
                d="M48 35 Q52 33 58 36 L65 38 Q70 40 72 44 L75 48 Q72 52 68 54 L62 55 Q58 54 55 52 L50 50 Q48 48 48 45 L48 35 Z"
                className="text-accent/30"
                strokeWidth="0.8"
                fill="rgba(234, 208, 142, 0.03)"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.5 }}
              />
            </svg>

            {/* Shipping point markers */}
            {shippingPoints.map((point) => (
              <motion.div
                key={point.city}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + point.delay, type: "spring" }}
                className="absolute"
                style={{ left: `${point.x}%`, top: `${point.y}%` }}
              >
                <div className="relative -translate-x-1/2 -translate-y-1/2">
                  <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                  <div className="absolute inset-0 w-3 h-3 rounded-full bg-accent/40 animate-ping" />
                </div>
                <span className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] text-muted whitespace-nowrap">
                  {point.city}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {[
              { value: "32", label: "Estados" },
              { value: "2-5", label: "Días hábiles" },
              { value: "+5,000", label: "Envíos completados" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-xl bg-surface/30 border border-border/30"
              >
                <div className="text-3xl font-display font-bold text-accent">{stat.value}</div>
                <div className="text-sm text-muted mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
