import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Beekonz — Full Body Tracking VR | Trackers ultraligeros para VRChat",
  description: "Trackers VR ultraligeros de 10g con 35-45h de batería. Full Body Tracking para VRChat, SteamVR y SlimeVR. Envíos a todo el mundo desde CDMX.",
  keywords: ["full body tracking", "VRChat", "SlimeVR", "trackers VR", "beekonz", "FBT", "SteamVR", "trackers ultraligeros"],
  authors: [{ name: "Beekonz" }],
  openGraph: {
    title: "Beekonz — Full Body Tracking VR",
    description: "Trackers VR ultraligeros de 10g con 35-45h de batería. Full Body Tracking para VRChat.",
    url: "https://beekonz.shop",
    siteName: "Beekonz",
    locale: "es_MX",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="bg-background text-foreground font-body antialiased">
        {children}
      </body>
    </html>
  );
}