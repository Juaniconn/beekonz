import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { FaceTracking } from "@/components/sections/FaceTracking";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { Kits } from "@/components/sections/Kits";
import { CustomSet } from "@/components/sections/CustomSet";
import { TechSection } from "@/components/sections/TechSection";
import { IMUComparison } from "@/components/sections/IMUComparison";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { ShippingMap } from "@/components/sections/ShippingMap";
import { Shipping } from "@/components/sections/Shipping";
import { FAQ } from "@/components/sections/FAQ";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { OrderTracking } from "@/components/sections/OrderTracking";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <FaceTracking />
      <SolutionSection />
      <Kits />
      <CustomSet />
      <TechSection />
      <IMUComparison />
      <ExperienceSection />
      <Gallery />
      <Testimonials />
      <ShippingMap />
      <Shipping />
      <FAQ />
      <OrderTracking />
      <CTAFinal />
      <Footer />
    </main>
  );
}
