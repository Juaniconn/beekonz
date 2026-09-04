"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { products } from "@/lib/data";

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const formatPrice = (price: number) => {
    const finalPrice = isAnnual ? price * 0.85 : price;
    return Math.round(finalPrice).toLocaleString("es-MX");
  };

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Elige tu <span className="text-gradient">pack</span>
          </h2>

          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={!isAnnual ? "text-foreground" : "text-muted"}>
              Mensual
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-7 bg-surface border border-border rounded-full transition"
            >
              <div
                className={`absolute top-1 w-5 h-5 bg-accent rounded-full transition-all ${
                  isAnnual ? "left-8" : "left-1"
                }`}
              />
            </button>
            <span className={isAnnual ? "text-foreground" : "text-muted"}>
              Anual
            </span>
            {isAnnual && <Badge>15% descuento</Badge>}
          </div>
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
                className={`relative h-full ${
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
                    ${formatPrice(product.price)}
                    <span className="text-sm text-muted font-normal">
                      {isAnnual ? "/año" : "/mes"}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="text-accent">✓</span>
                      <span className="text-sm text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full"
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