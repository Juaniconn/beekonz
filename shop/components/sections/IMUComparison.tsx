"use client";

import { motion } from "framer-motion";

const comparison = [
  { feature: "Tipo de sensor", beekonz: "IMU 6 ejes (LSM6DSV)", traditional: "Óptico con base stations" },
  { feature: "Base stations", beekonz: "No necesarias", traditional: "2-4 requeridas" },
  { feature: "Latencia", beekonz: "<5 ms", traditional: "20-50 ms" },
  { feature: "Peso por tracker", beekonz: "10 g", traditional: "30-50 g" },
  { feature: "Batería", beekonz: "35-45 h", traditional: "4-8 h" },
  { feature: "Tasa de muestreo", beekonz: "1000 Hz", traditional: "120-250 Hz" },
  { feature: "Setup", beekonz: "Plug & play, <10 min", traditional: "Calibración compleja, 30+ min" },
  { feature: "Precio aprox.", beekonz: "$5,999 MXN", traditional: "$15,000+ MXN" },
];

function CheckIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0 text-red-400/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export function IMUComparison() {
  return (
    <section className="py-16 md:py-28 px-4 sm:px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-3 md:mb-4">
            Comparativa IMU
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold">
            Beekonz vs <span className="text-gradient">sistemas tradicionales</span>
          </h2>
          <p className="text-muted mt-3 md:mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Mira por qué el tracking IMU es el futuro del Full Body Tracking.
          </p>
        </motion.div>

        {/* ─── Mobile: Cards stacked vertically ─── */}
        <div className="lg:hidden space-y-3">
          {comparison.map((row, i) => (
            <motion.div
              key={row.feature}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="bg-surface border border-border rounded-xl p-4"
            >
              <div className="text-xs text-muted uppercase tracking-wider mb-3 font-medium">
                {row.feature}
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="flex items-start gap-2">
                  <CheckIcon />
                  <span className="text-sm font-medium text-accent">{row.beekonz}</span>
                </div>
                <div className="flex items-start gap-2 opacity-60">
                  <CrossIcon />
                  <span className="text-sm text-muted line-through decoration-muted/30">
                    {row.traditional}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ─── Desktop: Table ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="hidden lg:block max-w-5xl mx-auto"
        >
          <div className="bg-surface border border-border rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-[1fr_1.2fr_1fr] gap-6 px-8 py-5 border-b border-border bg-background/50">
              <div className="text-sm font-semibold text-muted uppercase tracking-wider">
                Característica
              </div>
              <div>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-accent uppercase tracking-wider">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  Beekonz
                </span>
              </div>
              <div className="text-sm font-semibold text-muted uppercase tracking-wider">
                Sistemas ópticos
              </div>
            </div>

            {/* Rows */}
            {comparison.map((row, i) => (
              <motion.div
                key={row.feature}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`grid grid-cols-[1fr_1.2fr_1fr] gap-6 px-8 py-5 ${
                  i % 2 === 0 ? "bg-background/20" : ""
                } border-b border-border/50 last:border-0 hover:bg-accent/5 transition-colors`}
              >
                <div className="text-sm font-medium text-muted-foreground flex items-center">
                  {row.feature}
                </div>
                <div className="text-sm font-medium text-accent flex items-center gap-2.5">
                  <CheckIcon />
                  {row.beekonz}
                </div>
                <div className="text-sm text-muted flex items-center gap-2.5">
                  <CrossIcon />
                  {row.traditional}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom note */}
          <p className="text-center text-xs text-muted mt-6 flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Precios y especificaciones sujetos a cambios sin previo aviso.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
