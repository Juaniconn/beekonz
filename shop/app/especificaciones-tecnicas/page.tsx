import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Features } from "@/components/sections/Features";
import { TechSection } from "@/components/sections/TechSection";
import { IMUComparison } from "@/components/sections/IMUComparison";

export const metadata: Metadata = {
  title: "Especificaciones Técnicas — Beekonz | Trackers VR LSM6DSV",
  description: "Ficha técnica completa de los trackers Beekonz: sensor LSM6DSV, 10g, 35-45h batería, WiFi 6E, BT 5.3.",
};

export default function Page() {
  return (
    <>
      <Header />
      <Features />
      <TechSection />
      <IMUComparison />
      <Footer />
    </>
  );
}
