"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Dance & Performance",
    desc: "Captura cada movimiento de caderas, piernas y pies con precisión profesional. Perfecto para streamers de VRChat Dance.",
    image: "/tracker-lifestyle.jpg",
    tag: "VRChat",
  },
  {
    title: "Streaming & Content",
    desc: "Muestra tu cuerpo completo en transmisiones. Tu audiencia ve cada gesto y cada paso en tiempo real.",
    image: "/ft_3.jpg",
    tag: "Streaming",
  },
  {
    title: "Social VR",
    desc: "Pasa tiempo con amigos en VRChat con tracking natural. Sin torpesa, sin delays, solo inmersión total.",
    image: "/ft_4.jpg",
    tag: "Social",
  },
];

export function ExperienceSection() {
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
            Experiencias
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Vive VR como <span className="text-gradient">nunca antes</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-accent/90 text-background text-xs font-semibold">
                    {exp.tag}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-display font-bold mb-2">{exp.title}</h3>
                  <p className="text-sm text-muted">{exp.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
