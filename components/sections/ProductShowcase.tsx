"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Scene } from "@/components/three/Scene";

const specs = [
  { label: "Sensor", value: "LSM6DSV" },
  { label: "Batería", value: "35-45h" },
  { label: "Peso", value: "10g" },
  { label: "Latencia", value: "<5ms" },
  { label: "Conectividad", value: "WiFi 6E + BT 5.3" },
];

export function ProductShowcase() {
  return (
    <section className="py-24 px-6 bg-surface">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[500px] bg-background rounded-2xl border border-border"
          >
            <Scene showControls autoRotate={false} float={false} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Diseñado para <span className="text-gradient">perfección</span>
            </h2>

            <div className="space-y-4">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex justify-between items-center py-3 border-b border-border"
                >
                  <span className="text-muted">{spec.label}</span>
                  <span className="font-semibold">{spec.value}</span>
                </div>
              ))}
            </div>

            <div className="text-3xl font-display font-bold text-accent">
              Desde $5,999 MXN
            </div>

            <div className="flex gap-4">
              <Button size="lg">Configurar Pack</Button>
              <Button variant="outline" size="lg">
                Ver Colores
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}