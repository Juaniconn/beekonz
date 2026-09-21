"use client";

import { motion } from "framer-motion";

const kits = [
  {
    id: "starter",
    name: "Starter Pack",
    price: 5999,
    stripeUrl: "https://buy.stripe.com/eVq28sf2dbwhfIX3Rj7g40o",
    highlighted: false,
    features: ["6 trackers", "1 Dongle", "Cable USB-C", "Soporte técnico"],
    cta: "Comprar Starter",
  },
  {
    id: "advanced",
    name: "Advanced Pack",
    price: 7499,
    stripeUrl: "https://buy.stripe.com/3cI9AUbQ10RDeETdrT7g40r",
    highlighted: true,
    features: ["8 trackers", "1 Dongle", "Cable USB-C", "Face tracker", "Soporte prioritario"],
    cta: "Comprar Advanced",
  },
  {
    id: "pro",
    name: "Pro Pack",
    price: 8999,
    stripeUrl: "https://buy.stripe.com/28EfZi9HTcAlfIX73v7g40p",
    highlighted: false,
    features: ["10 trackers", "2 Dongles", "Cables USB-C", "Face tracker", "Soporte VIP 24/7"],
    cta: "Comprar Pro",
  },
  {
    id: "face",
    name: "Face Tracking",
    price: 2499,
    stripeUrl: "https://buy.stripe.com/9B628s7zL43PgN13Rj7g40u",
    highlighted: false,
    features: ["1 Face tracker", "Cable USB-C", "Soporte técnico"],
    cta: "Comprar Face",
  },
];

export function Kits() {
  return (
    <section className="py-20 md:py-28 px-6" id="kits">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Kits Disponibles
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Elige tu <span className="text-gradient">pack</span>
          </h2>
          <p className="text-muted mt-4 max-w-2xl mx-auto">
            Producto físico, envío a todo México. Pago seguro vía Stripe.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger">
          {kits.map((kit, i) => (
            <motion.div
              key={kit.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ "--i": i } as React.CSSProperties}
              className={`relative flex flex-col h-full bg-surface border rounded-xl p-6 transition-all duration-300 ${
                kit.highlighted
                  ? "border-accent shadow-[0_0_30px_rgba(234,208,142,0.2)]"
                  : "border-border hover:border-accent/30"
              }`}
            >
              {kit.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-accent text-background text-xs font-bold">
                  Recomendado
                </span>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">{kit.name}</h3>
                <div className="text-3xl font-display font-bold text-accent">
                  ${kit.price.toLocaleString("es-MX")}
                  <span className="text-sm text-muted font-normal"> MXN</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6 flex-1">
                {kit.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={kit.stripeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full mt-auto inline-flex items-center justify-center font-semibold rounded-lg px-6 py-3 transition-all duration-300 ${
                  kit.highlighted
                    ? "bg-accent text-background hover:bg-accent-hover"
                    : "border border-accent text-accent hover:bg-accent hover:text-background"
                }`}
              >
                {kit.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted text-sm mt-8"
        >
          🔒 Pago 100% seguro · Envíos a todo México · Garantía de 12 meses
        </motion.p>
      </div>
    </section>
  );
}
