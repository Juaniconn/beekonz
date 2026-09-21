import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Garantía y Devoluciones — Beekonz",
  description: "90 días de garantía en todos los productos Beekonz. Política de devoluciones transparente.",
};

export default function Page() {
  return (
    <>
      <Header />
      <div className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-8">Garantía y Devoluciones</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">Última actualización: Septiembre 2026</p>
            <p className="text-muted-foreground leading-relaxed mb-6">Beekonz es una marca de trackers VR (Full Body Tracking) con sede en Ciudad de México, México. Nuestro dominio es beekonz.shop.</p>
            <p className="text-muted-foreground leading-relaxed mb-6">Para cualquier duda sobre esta política, contáctanos en <a href="mailto:redes@beekonz.shop" className="text-accent underline">redes@beekonz.shop</a> o en nuestro <a href="https://discord.gg/ekr3ERWJQ6" target="_blank" rel="noopener noreferrer" className="text-accent underline">Discord</a>.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
