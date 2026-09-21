import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FAQ } from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "FAQ — Preguntas frecuentes | Beekonz",
  description: "Respuestas a las preguntas más frecuentes sobre trackers VR Beekonz, compatibilidad, envíos y garantía.",
};

export default function Page() {
  return (
    <>
      <Header />
      <FAQ />
      <Footer />
    </>
  );
}
