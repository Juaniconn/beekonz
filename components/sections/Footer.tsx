"use client";

import { Button } from "@/components/ui/Button";

const footerLinks = {
  productos: [
    { label: "Starter Pack", href: "#" },
    { label: "Advanced Pack", href: "#" },
    { label: "Pro Pack", href: "#" },
    { label: "Face Tracking", href: "#" },
  ],
  soporte: [
    { label: "FAQ", href: "#faq" },
    { label: "Garantía", href: "#" },
    { label: "Envíos", href: "#" },
    { label: "Contacto", href: "#" },
  ],
  comunidad: [
    { label: "Discord", href: "#" },
    { label: "VRChat Group", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "Twitter/X", href: "#" },
  ],
  legal: [
    { label: "Privacidad", href: "#" },
    { label: "Términos", href: "#" },
    { label: "Cookies", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              ¿Quieres updates exclusivos?
            </h3>
            <p className="text-muted">Recibe ofertas y lanzamientos</p>
          </div>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="tu@email.com"
              className="px-4 py-2 bg-background border border-border rounded-lg focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            />
            <Button>Suscribir</Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold capitalize mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted hover:text-accent hover:translate-x-1 transition-all inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted">
            © 2026 Beekonz. All rights reserved.
          </p>
          <p className="text-sm text-muted">Made with ❤️ in México</p>
        </div>
      </div>
    </footer>
  );
}