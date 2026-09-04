"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { products } from "@/lib/data";

export function Pricing() {
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
            Elige tu <span className="text-gradient">pack</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ "--i": i } as React.CSSProperties}
            >
              <Card
                className={`relative h-full flex flex-col ${
                  product.highlighted
                    ? "border-accent shadow-[0_0_30px_rgba(234,208,142,0.2)]"
                    : ""
                }`}
              >
                {product.highlighted && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                    Recomendado
                  </Badge>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <div className="text-3xl font-display font-bold text-accent">
                    ${product.price.toLocaleString("es-MX")}
                    <span className="text-sm text-muted font-normal"> MXN</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6 flex-1">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="text-accent">✓</span>
                      <span className="text-sm text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full mt-auto"
                  variant={product.highlighted ? "primary" : "outline"}
                >
                  {product.cta}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}