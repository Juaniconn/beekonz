import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { OrderTracking } from "@/components/sections/OrderTracking";

export const metadata: Metadata = {
  title: "Seguimiento de Pedidos — Beekonz",
  description: "Consulta el estado de tu pedido en tiempo real desde nuestro sistema de seguimiento.",
};

export default function Page() {
  return (
    <>
      <Header />
      <OrderTracking />
      <Footer />
    </>
  );
}
