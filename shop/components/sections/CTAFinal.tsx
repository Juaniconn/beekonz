"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function CTAFinal() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, #0a0a0a 0%, #050505 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="container mx-auto text-center relative z-10"
      >
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
          ¿Listo para el{" "}
          <span className="text-gradient">siguiente nivel</span>?
        </h2>

        <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
          Únete a 50,000+ trackers en todo el mundo
        </p>

        <Button size="lg" className="shimmer text-lg px-12 py-5">
          Comprar Ahora
        </Button>

        <div className="flex justify-center gap-6 mt-8 text-sm text-muted">
          <span>✓ Free Shipping</span>
          <span>✓ 30-Day Returns</span>
          <span>✓ 2-Year Warranty</span>
        </div>
      </motion.div>
    </section>
  );
}