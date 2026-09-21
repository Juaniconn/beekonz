"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Scene } from "@/components/three/Scene";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6 text-center lg:text-left order-2 lg:order-1"
          >
            <Badge pulse>Now Available</Badge>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-none">
              FULL BODY
              <br />
              <span className="text-gradient">TRACKING</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted max-w-md mx-auto lg:mx-0">
              La experiencia más inmersiva para VRChat. Setup en minutos,
              tracking perfecto.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button size="lg" className="shimmer text-sm sm:text-base">
                Comprar Ahora
              </Button>
              <Button variant="outline" size="lg" className="text-sm sm:text-base">
                Ver Demo
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-[300px] sm:h-[400px] lg:h-[600px] order-1 lg:order-2"
          >
            <Scene float autoRotate />
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-muted rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-accent rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}