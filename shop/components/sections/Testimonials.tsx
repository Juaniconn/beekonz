"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";

function TestimonialCard({
  quote,
  name,
  role,
  country,
}: {
  quote: string;
  name: string;
  role: string;
  country: string;
}) {
  return (
    <div className="flex-shrink-0 w-80 bg-surface border border-border rounded-xl p-6">
      <p className="text-lg italic mb-4">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold">
          {name[0]}
        </div>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-muted">
            {role} {country}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 px-6 bg-surface overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Lo que dicen <span className="text-gradient">nuestros usuarios</span>
          </h2>
        </motion.div>
      </div>

      <div className="flex gap-6 mb-6 animate-marquee">
        {[...testimonials, ...testimonials].map((t, i) => (
          <TestimonialCard key={`${t.id}-${i}`} {...t} />
        ))}
      </div>

      <div className="flex gap-6 animate-marquee-reverse">
        {[...testimonials, ...testimonials].map((t, i) => (
          <TestimonialCard key={`rev-${t.id}-${i}`} {...t} />
        ))}
      </div>
    </section>
  );
}