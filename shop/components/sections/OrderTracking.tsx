"use client";

import { motion } from "framer-motion";

export function OrderTracking() {
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
            Seguimiento de Pedidos
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Rastrea tu <span className="text-gradient">pedido</span>
          </h2>
          <p className="text-muted mt-4 max-w-2xl mx-auto">
            Consulta el estado de tu orden en tiempo real. Introduce tu número de pedido a continuación.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-background border border-border rounded-2xl overflow-hidden">
            {/* ClickUp board iframe */}
            <iframe
              src="https://app.clickup.com/9017841418/v/b/9017-3884-1"
              className="w-full"
              style={{ height: "600px", border: "none" }}
              title="Beekonz — Seguimiento de Pedidos"
              loading="lazy"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z M5 15V5a1 1 0 011-1h7l4 4v7" />
                  </svg>
                ),
                title: "Procesado",
                desc: "Tu pedido está siendo preparado para envío.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "En tránsito",
                desc: "Tu paquete está en camino a tu dirección.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                ),
                title: "Entregado",
                desc: "Tu paquete ha llegado. ¡Disfruta tu Beekonz!",
              },
            ].map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 p-5 rounded-xl bg-background/50 border border-border/50"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                  {step.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">{step.title}</h4>
                  <p className="text-xs text-muted">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-muted text-sm mt-8">
            ¿No encuentras tu pedido? Escríbenos a{" "}
            <a href="mailto:redes@beekonz.shop" className="text-accent hover:underline">
              redes@beekonz.shop
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
