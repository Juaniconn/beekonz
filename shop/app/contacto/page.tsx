import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Contacto — Beekonz | Soporte y ventas",
  description: "Contáctanos en Discord o por email. Soporte 24/7 en español para toda la comunidad Beekonz.",
};

export default function Page() {
  return (
    <>
      <Header />
      <div className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Contáctanos</h1>
          <p className="text-xl text-muted-foreground mb-12">Estamos aquí para ayudarte. Elige el canal que prefieras:</p>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="https://discord.gg/ekr3ERWJQ6" target="_blank" rel="noopener noreferrer" className="bg-card border border-border rounded-2xl p-8 hover:border-accent transition-colors group">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">Discord</h3>
              <p className="text-muted-foreground text-sm">Soporte 24/7 en español. Únete a la comunidad Beekonz.</p>
            </a>
            <a href="mailto:redes@beekonz.shop" className="bg-card border border-border rounded-2xl p-8 hover:border-accent transition-colors group">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">Email</h3>
              <p className="text-muted-foreground text-sm">redes@beekonz.shop — Respondemos en menos de 24h.</p>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
