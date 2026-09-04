import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTAFinal />
      <Footer />
    </main>
  );
}