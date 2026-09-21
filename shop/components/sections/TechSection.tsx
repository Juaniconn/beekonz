"use client";

import { motion } from "framer-motion";

const techSpecs = [
  { label: "Sensor", value: "LSM6DSV", detail: "IMU de 6 ejes, fusión de datos avanzada" },
  { label: "Tasa de muestreo", value: "1000 Hz", detail: "Actualización ultra-rápida de posición" },
  { label: "Batería", value: "35-45 h", detail: "Carga USB-C en 45 minutos" },
  { label: "Peso", value: "10 g", detail: "Ultra-ligero, no afecta el movimiento" },
  { label: "Conectividad", value: "WiFi 6E + BT 5.3", detail: "Múltiples trackers simultáneos" },
  { label: "Latencia", value: "<5 ms", detail: "Respuesta instantánea" },
  { label: "Rango de operación", value: "0-40°C", detail: "Compensación térmica integrada" },
  { label: "Compatibilidad", value: "Multi-plataforma", detail: "VRChat, SteamVR, VSeeFace, Quest" },
];

export function TechSection() {
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
            Ficha Técnica
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Especificaciones <span className="text-gradient">completas</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-1">
            {techSpecs.map((spec, i) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col py-4 sm:py-5 border-b border-border"
              >
                <div className="flex items-baseline justify-between gap-3 mb-1">
                  <span className="text-xs sm:text-sm text-muted uppercase tracking-wider">{spec.label}</span>
                  <span className="font-display font-bold text-accent text-base sm:text-lg">{spec.value}</span>
                </div>
                <p className="text-xs sm:text-sm text-muted">{spec.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Product image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 max-w-md mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden border border-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/tracker-detail.jpg"
              alt="Beekonz tracker detail"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-accent font-display font-bold text-xl">Beekonz Tracker</p>
              <p className="text-muted text-sm">10g · LSM6DSV · WiFi 6E</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
