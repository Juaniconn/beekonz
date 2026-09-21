import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Nuestra Misión — Beekonz | Full Body Tracking VR",
  description: "Hacer que el Full Body Tracking sea accesible, cómodo y preciso para toda la comunidad hispanohablante de VR.",
};

export default function Page() {
  return (
    <>
      <Header />
      <div className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Nuestra <span className="text-gradient">Misión</span></h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Hacer que el Full Body Tracking sea accesible, cómodo y preciso para toda la comunidad hispanohablante de VR.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-card border border-border rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-display font-bold mb-3">Precisión</h3>
              <p className="text-muted-foreground text-sm">Sensores LSM6DSV con fusión interna para el tracking más estable del mercado.</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">🐝</div>
              <h3 className="text-xl font-display font-bold mb-3">Comunidad</h3>
              <p className="text-muted-foreground text-sm">Diseñado por y para la comunidad hispana de VRChat. Soporte 24/7 en Discord.</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-display font-bold mb-3">Accesibilidad</h3>
              <p className="text-muted-foreground text-sm">Trackers ultraligeros de 10g a precios accesibles. Envíos a todo el mundo.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
