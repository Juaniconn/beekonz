"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scene } from "@/components/three/Scene";
import type { ReactNode } from "react";

function SpecItem({
  icon,
  label,
  value,
  description,
  delay = 0,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  description: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="flex items-start gap-4 p-4 rounded-xl bg-surface/50 border border-border/50 hover:border-accent/30 transition-colors"
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline justify-between gap-2 mb-1">
          <span className="text-sm text-muted uppercase tracking-wider">{label}</span>
          <span className="font-display font-bold text-accent">{value}</span>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}

export function Features() {
  const [interactive, setInteractive] = useState(false);

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Especificaciones Técnicas
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Cada detalle <span className="text-gradient">importa</span>
          </h2>
          <p className="text-muted mt-4 max-w-2xl mx-auto">
            Hardware de última generación diseñado para el tracking más preciso y confiable en VR.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Model */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square max-w-lg mx-auto w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5 rounded-3xl" />

            {/* Canvas container — pointer-events-none cuando no es interactivo para que el scroll pase */}
            <div
              className={`absolute inset-4 rounded-2xl overflow-hidden border border-border/30 transition-opacity ${
                interactive ? "pointer-events-auto" : "pointer-events-none"
              }`}
            >
              <Scene
                showControls={interactive}
                autoRotate={!interactive}
                float={!interactive}
              />
            </div>

            {/* Overlay cuando NO es interactivo — preview con auto-rotate */}
            {!interactive && (
              <button
                onClick={() => setInteractive(true)}
                className="absolute inset-4 rounded-2xl flex items-end justify-center pb-6 group cursor-pointer z-10"
              >
                <span className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/60 backdrop-blur-md border border-accent/30 text-sm text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Inspeccionar modelo 3D
                </span>
              </button>
            )}

            {/* Botón salir del modo inspección */}
            <AnimatePresence>
              {interactive && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={() => setInteractive(false)}
                  className="absolute top-6 right-6 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-black/70 backdrop-blur-md border border-accent/30 text-sm text-accent font-medium hover:bg-accent/20 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Salir
                </motion.button>
              )}
            </AnimatePresence>

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-accent/40 rounded-tl-3xl pointer-events-none" />
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-accent/40 rounded-tr-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-accent/40 rounded-bl-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-accent/40 rounded-br-3xl pointer-events-none" />
          </motion.div>

          {/* Specs */}
          <div className="space-y-3">
            <SpecItem
              delay={0}
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              }
              label="Sensor"
              value="LSM6DSV"
              description="IMU de 6 ejes con fusión de datos avanzada y compensación térmica"
            />
            <SpecItem
              delay={0.1}
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
              label="Batería"
              value="35-45h"
              description="Uso prolongado sin recargar. Carga rápida USB-C en 45 min"
            />
            <SpecItem
              delay={0.2}
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              }
              label="Peso"
              value="10g"
              description="Ultra-ligero, casi imperceptible. No afecta el movimiento natural"
            />
            <SpecItem
              delay={0.3}
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              }
              label="Conectividad"
              value="WiFi 6E + BT 5.3"
              description="Transmisión estable con múltiples trackers simultáneos"
            />
            <SpecItem
              delay={0.4}
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              label="Latencia"
              value="<5ms"
              description="Respuesta instantánea. Sin delay perceptible entre movimiento y avatar"
            />
            <SpecItem
              delay={0.5}
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
              label="Compatibilidad"
              value="Multi-plataforma"
              description="VRChat, SteamVR, VSeeFace. Plug & play sin configuración compleja"
            />
          </div>
        </div>

        {/* Quick stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: "6", label: "Ejes IMU", suffix: "" },
            { value: "1000", label: "Hz de muestreo", suffix: "Hz" },
            { value: "10", label: "Trackers simultáneos", suffix: "+" },
            { value: "0", label: "Base stations", suffix: " needed" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-surface/30 border border-border/30"
            >
              <div className="text-3xl md:text-4xl font-display font-bold text-accent">
                {stat.value}
              </div>
              <div className="text-sm text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
