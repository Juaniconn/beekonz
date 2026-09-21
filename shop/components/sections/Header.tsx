"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

// ─── Types ───────────────────────────────────────────────────────────────────
interface NavLink {
  label: string;
  href?: string;
  external?: boolean;
}

interface MegaColumn {
  title: string;
  links: NavLink[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const megaColumns: MegaColumn[] = [
  {
    title: "Productos",
    links: [
      { label: "Starter Pack", href: "https://buy.stripe.com/eVq28sf2dbwhfIX3Rj7g40o", external: true },
      { label: "Advanced Pack", href: "https://buy.stripe.com/3cI9AUbQ10RDeETdrT7g40r", external: true },
      { label: "Pro Pack", href: "https://buy.stripe.com/28EfZi9HTcAlfIX73v7g40p", external: true },
      { label: "Face Tracking", href: "https://buy.stripe.com/9B628s7zL43PgN13Rj7g40u", external: true },
    ],
  },
  {
    title: "Quiénes Somos",
    links: [
      { label: "Acerca de", href: "/acerca-de" },
      { label: "Nuestra Misión", href: "/nuestra-mision" },
      { label: "Garantía de Devoluciones", href: "/garantia-devoluciones" },
      { label: "Especificaciones Técnicas", href: "/especificaciones-tecnicas" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Seguimiento de Pedidos", href: "/seguimiento-pedidos" },
      { label: "Política de Privacidad", href: "/politica-privacidad" },
      { label: "Términos y Condiciones", href: "/terminos-condiciones" },
    ],
  },
];

const socialLinks = [
  {
    label: "Discord",
    href: "https://discord.gg/ekr3ERWJQ6",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.317 4.3698a19.7918 19.7918 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8385-.6083 1.2213a18.2733 18.2733 0 00-5.487 0 12.64 12.64 0 00-.6173-1.2213.0774.0774 0 00-.0785-.0371A19.7363 19.7363 0 003.6776 4.3697a.0703.0703 0 00-.0322.0279C.5334 7.6967-.1589 10.9469.0247 14.1621a.0824.0824 0 00.0312.0562c2.0528 1.5076 4.0413 2.4227 5.9922 3.0291a.0777.0777 0 00.0843-.0276c.4616-.6304.8732-1.2945 1.2261-1.9912a.0753.0753 0 00-.0416-.1054c-.6529-.2476-1.2743-.5495-1.8722-.8927a.077.077 0 01-.0079-.1279c.1257-.0943.2514-.1923.3718-.2911a.0743.0743 0 01.0776-.0104c3.9278 1.7934 8.18 1.7934 12.0611 0a.0739.0739 0 01.0782.0093c.1206.0989.2463.1969.3728.2911a.077.077 0 01-.0066.1279c-.5978.3566-1.2205.6572-1.8737.8923a.0753.0753 0 00-.0414.1057c.3601.6967.7714 1.3607 1.225 1.991a.0766.0766 0 00.0841.0285c1.9615-.6064 3.9499-1.5216 6.0026-3.0291a.0824.0824 0 00.0313-.0556c.2481-3.7171-.5278-6.9565-2.4891-9.7654a.0671.0671 0 00-.0317-.0279zM8.02 12.3624c-1.1825 0-2.1573-1.0853-2.1573-2.4189 0-1.3336.9561-2.4189 2.1573-2.4189 1.2107 0 2.1768 1.0948 2.1573 2.4189 0 1.3336-.9561 2.4189-2.1573 2.4189zm7.9753 0c-1.1825 0-2.1572-1.0853-2.1572-2.4189 0-1.3336.956-2.4189 2.1572-2.4189 1.2107 0 2.1768 1.0948 2.1573 2.4189 0 1.3336-.9465 2.4189-2.1573 2.4189Z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@beekonz",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.589 6.648c-.883-.762-1.768-1.524-2.65-2.286-.136-.118-.286-.228-.427-.342h3.286V2.145h-5.777v6.895c.67-.757 1.752-1.16 2.82-1.16 1.77 0 3.215 1.408 3.215 3.171 0 1.763-1.444 3.171-3.215 3.171-1.068 0-2.15-.403-2.82-1.16v4.515c1.068.757 2.15 1.16 3.215 1.16 3.77 0 6.866-3.077 6.866-6.847 0-2.747-1.633-5.127-4.313-6.24z" />
      </svg>
    ),
  },
];

// ─── Icons ────────────────────────────────────────────────────────────────────
const ChevronDownIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const MenuIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

// ─── Component ─────────────────────────────────────────────────────────────────
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMegaOpen(false);
    setMobileOpen(false);
    setMobileSection(null);
  }, [pathname]);

  const renderLink = (link: NavLink) => {
    if (link.external && link.href) {
      return (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm text-neutral-300 hover:text-[#EAD08E] transition-colors py-1"
        >
          {link.label}
          <ArrowIcon />
        </a>
      );
    }
    return (
      <Link
        key={link.label}
        href={link.href ?? "#"}
        className="text-sm text-neutral-300 hover:text-[#EAD08E] transition-colors py-1"
      >
        {link.label}
      </Link>
    );
  };

  return (
    <>
      {/* ─── Desktop Header ─── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${
          scrolled ? "pt-2 sm:pt-3" : "pt-4 sm:pt-6"
        }`}
      >
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={`flex items-center gap-3 rounded-full border px-3 py-2 transition-all duration-500 ${
            scrolled
              ? "border-white/10 bg-black/70 backdrop-blur-xl shadow-2xl shadow-black/50"
              : "border-white/5 bg-black/40 backdrop-blur-md"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 pl-1 pr-2">
            <Image
              src="/Beekonz_White_Logo.png"
              alt="Beekonz"
              width={28}
              height={28}
              className="h-7 w-auto object-contain"
            />
            <span className="hidden sm:block text-sm font-semibold tracking-wide text-white">
              Beekonz
            </span>
          </Link>

          {/* Divider */}
          <div className="hidden lg:block h-5 w-px bg-white/10" />

          {/* Mega Menu Trigger */}
          <div
            className="relative hidden lg:block"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <button className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm text-neutral-200 hover:text-[#EAD08E] transition-colors">
              Productos
              <motion.span
                animate={{ rotate: megaOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDownIcon />
              </motion.span>
            </button>
          </div>

          {/* Simple Links */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/acerca-de" className="text-sm text-neutral-200 hover:text-[#EAD08E] transition-colors">
              Quiénes Somos
            </Link>
            <Link href="/faq" className="text-sm text-neutral-200 hover:text-[#EAD08E] transition-colors">
              Recursos
            </Link>
          </div>

          {/* Divider */}
          <div className="hidden lg:block h-5 w-px bg-white/10" />

          {/* Social Icons */}
          <div className="hidden lg:flex items-center gap-1">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-400 hover:text-[#EAD08E] hover:bg-white/5 transition-all"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/#pricing"
            className="hidden lg:inline-flex items-center rounded-full bg-[#EAD08E] px-4 py-1.5 text-sm font-semibold text-black hover:bg-[#d4b878] transition-colors"
          >
            Comprar
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex h-9 w-9 items-center justify-center rounded-full text-white hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir menú"
          >
            <MenuIcon />
          </button>
        </motion.nav>
      </header>

      {/* ─── Mega Menu Panel (Desktop) ─── */}
      <AnimatePresence>
        {megaOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed left-1/2 top-20 z-40 hidden -translate-x-1/2 lg:block"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <div className="rounded-3xl border border-white/10 bg-black/80 backdrop-blur-xl shadow-2xl shadow-black/50">
              <div className="grid grid-cols-3 gap-6 p-6 w-[480px]">
                {megaColumns.map((col) => (
                  <div key={col.title}>
                    <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#EAD08E]">
                      {col.title}
                    </h3>
                    <div className="flex flex-col gap-0.5">
                      {col.links.map((link) => renderLink(link))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Overlay for mega menu ─── */}
      <AnimatePresence>
        {megaOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 hidden bg-black/20"
            onMouseEnter={() => setMegaOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* ─── Mobile Full-Screen Menu ─── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] lg:hidden bg-black/95 backdrop-blur-xl"
          >
            <div className="flex h-full flex-col">
              {/* Mobile header bar */}
              <div className="flex items-center justify-between px-6 py-4">
                <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                  <Image
                    src="/Beekonz_White_Logo.png"
                    alt="Beekonz"
                    width={28}
                    height={28}
                    className="h-7 w-auto object-contain"
                  />
                  <span className="text-sm font-semibold text-white">Beekonz</span>
                </Link>
                <button
                  className="flex h-9 w-9 items-center justify-center rounded-full text-white hover:bg-white/10 transition-colors"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Cerrar menú"
                >
                  <CloseIcon />
                </button>
              </div>

              {/* Mobile menu content */}
              <div className="flex-1 overflow-y-auto px-6 pb-8">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
                  }}
                  className="flex flex-col gap-6 pt-4"
                >
                  {/* Productos */}
                  <MobileSection
                    title="Productos"
                    section="productos"
                    activeSection={mobileSection}
                    toggle={setMobileSection}
                  >
                    {megaColumns[0].links.map((link) => renderLink(link))}
                  </MobileSection>

                  {/* Quiénes Somos */}
                  <MobileSection
                    title="Quiénes Somos"
                    section="quienes"
                    activeSection={mobileSection}
                    toggle={setMobileSection}
                  >
                    {megaColumns[1].links.map((link) => renderLink(link))}
                  </MobileSection>

                  {/* Recursos */}
                  <MobileSection
                    title="Recursos"
                    section="recursos"
                    activeSection={mobileSection}
                    toggle={setMobileSection}
                  >
                    {megaColumns[2].links.map((link) => renderLink(link))}
                  </MobileSection>

                  {/* Social */}
                  <div>
                    <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#EAD08E]">
                      Síguenos
                    </h3>
                    <div className="flex gap-3">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-neutral-300 hover:text-[#EAD08E] hover:border-[#EAD08E]/30 transition-all"
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/#pricing"
                    onClick={() => setMobileOpen(false)}
                    className="mt-2 inline-flex items-center justify-center rounded-full bg-[#EAD08E] px-6 py-3 text-sm font-semibold text-black hover:bg-[#d4b878] transition-colors"
                  >
                    Comprar ahora
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ─── Mobile Section Accordion ──────────────────────────────────────────────────
function MobileSection({
  title,
  section,
  activeSection,
  toggle,
  children,
}: {
  title: string;
  section: string;
  activeSection: string | null;
  toggle: (s: string | null) => void;
  children: React.ReactNode;
}) {
  const isOpen = activeSection === section;
  return (
    <div className="border-b border-white/10 pb-4">
      <button
        className="flex w-full items-center justify-between py-1"
        onClick={() => toggle(isOpen ? null : section)}
      >
        <span className="text-base font-medium text-white">{title}</span>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDownIcon />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-1 pt-3">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
