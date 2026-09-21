import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="pt-32 pb-24 px-6 min-h-[60vh] flex items-center">
        <div className="container mx-auto max-w-2xl text-center">
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-4">
            <span className="text-gradient">404</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Página no encontrada</h2>
          <p className="text-muted-foreground mb-8">La página que buscas no existe o fue movida.</p>
          <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-background font-semibold hover:bg-accent/90 transition-colors">
            Volver al inicio
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
