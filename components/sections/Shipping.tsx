"use client";

import { motion } from "framer-motion";

const shippingOptions = [
  {
    name: "Envío Estándar",
    price: "$99 MXN",
    time: "3-5 días hábiles",
    desc: "Paquetería nacional con seguimiento en línea.",
    badge: null,
  },
  {
    name: "Envío Express",
    price: "$199 MXN",
    time: "1-2 días hábiles",
    desc: "Entrega prioritaria con seguro incluido.",
    badge: "Rápido",
  },
  {
    name: "Envío Gratis",
    price: "Gratis",
    time: "3-5 días hábiles",
    desc: "En compras superiores a $3,000 MXN.",
    badge: "Recomendado",
  },
];

const shippingInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m10-1V9a1 1 0 00-1-1h-4a1 1 0 00-1 1v8a1 1 0 001 1h1m-1-1a1 1 0 01-1 1H9m10-1h1" />
      </svg>
    ),
    title: "Embalaje seguro",
    desc: "Cada tracker viene en su caja protectora individual con espuma de alta densidad.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Procesamiento 24h",
    desc: "Tu pedido se procesa el mismo día. Recibes código de seguimiento por email.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Seguro de envío",
    desc: "Todos los pedidos incluyen seguro contra pérdida o daño durante el transporte.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: "Pago contra entrega",
    desc: "Disponible en CDMX y área metropolitana. Paga en efectivo al recibir.",
  },
];

export function Shipping() {
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
            Política de Envíos
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Opciones de <span className="text-gradient">envío</span>
          </h2>
        </motion.div>

        {/* Shipping options */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {shippingOptions.map((opt, i) => (
            <motion.div
              key={opt.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-background border border-border rounded-xl p-6"
            >
              {opt.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-accent text-background text-xs font-bold">
                  {opt.badge}
                </span>
              )}
              <h3 className="font-semibold mb-2">{opt.name}</h3>
              <div className="text-2xl font-display font-bold text-accent mb-1">{opt.price}</div>
              <p className="text-sm text-muted mb-2">{opt.time}</p>
              <p className="text-sm text-muted">{opt.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Info grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {shippingInfo.map((info, i) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-background border border-border rounded-xl p-5"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-3">
                {info.icon}
              </div>
              <h4 className="font-semibold text-sm mb-1">{info.title}</h4>
              <p className="text-xs text-muted">{info.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
