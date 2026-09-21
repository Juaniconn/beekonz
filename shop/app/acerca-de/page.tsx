import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { WhyBeekonz } from "@/components/sections/WhyBeekonz";
import { ExperienceSection } from "@/components/sections/ExperienceSection";

export const metadata: Metadata = {
  title: "Acerca de Beekonz — Trackers VR para la comunidad hispana",
  description: "Beekonz nació para democratizar el Full Body Tracking en VRChat. Conoce nuestra historia, misión y equipo.",
};

export default function Page() {
  return (
    <>
      <Header />
      <div className="pt-32 pb-16 px-6 text-center">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Acerca de <span className="text-gradient">Beekonz</span></h1>
          <p className="text-lg text-muted-foreground leading-relaxed">Beekonz nació en 2023 con una misión clara: democratizar el Full Body Tracking para la comunidad hispanohablante de VRChat. Desde Ciudad de México, diseñamos y fabricamos trackers ultraligeros, precisos y accesibles.</p>
        </div>
      </div>
      <ExperienceSection />
      <WhyBeekonz />
      <Footer />
    </>
  );
}
