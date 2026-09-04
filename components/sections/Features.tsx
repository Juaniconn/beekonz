"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { features } from "@/lib/data";

const sizeClasses = {
  large: "lg:col-span-2 lg:row-span-2",
  medium: "lg:col-span-1 lg:row-span-2",
  small: "lg:col-span-1 lg:row-span-1",
};

export function Features() {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Características <span className="text-gradient">Premium</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 stagger">
          {features.map((feature, i) => (
            <Card
              key={feature.id}
              className={sizeClasses[feature.size as keyof typeof sizeClasses]}
              style={{ "--i": i } as React.CSSProperties}
            >
              <div className="h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}