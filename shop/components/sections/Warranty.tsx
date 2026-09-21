"use client";

import { motion } from "framer-motion";

const warrantyPoints = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "12 meses de garantía",
    desc: "Cobertura completa contra defectos de fabricación. Reemplazo sin costo.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "30 días de reembolso",
    desc: "¿No estás convencido? Devuélvelo en 30 días y te devolvemos tu dinero.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.193-.727M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.06-4.79M14.12 6.09c0-.382.146-.763.439-1.056l1.06-1.06a1.493 1.493 0 012.122 0l1.06 1.061a1.5 1.5 0 010 2.121l-1.06 1.061a1.49 1.49 0 01-1.056.44" />
      </svg>
    ),
    title: "Soporte de por vida",
    desc: "Asistencia técnica gratuita por correo y Discord. Siempre estamos para ti.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Actualizaciones OTA",
    desc: "Firmware actualizable por WiFi. Tu tracker mejora con el tiempo.",
  },
];

const refundSteps = [
  { step: "1", title: "Contacta soporte", desc: "Escríbenos a redes@beekonz.shop con tu número de pedido." },
  { step: "2", title: "Envía el producto", desc: "Te damos una guía prepagada para devolver el producto." },
  { step: "3", title: "Recibe tu reembolso", desc: "Procesamos el reembolso en 5-10 días hábiles." },
];

export function Warranty() {
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
            Garantía y Reembolsos
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Compra sin <span className="text-gradient">preocupaciones</span>
          </h2>
        </motion.div>

        {/* Warranty features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {warrantyPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface border border-border rounded-xl p-6 hover:border-accent/30 transition-colors text-center"
            >
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 text-accent">
                {point.icon}
              </div>
              <h3 className="font-semibold mb-2">{point.title}</h3>
              <p className="text-sm text-muted">{point.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Refund process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-surface border border-border rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-display font-bold mb-8 text-center">
            Proceso de <span className="text-gradient">reembolso</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {refundSteps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-full bg-accent text-background font-display font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {s.step}
                </div>
                <h4 className="font-semibold mb-2">{s.title}</h4>
                <p className="text-sm text-muted">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
