"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import {
  Phone,
  Mail,
  X,
  Menu,
  ChevronDown,
  ChevronRight,
  Globe,
  Search,
  ArrowRight,
} from "lucide-react";

/* ── Product mega-menu data (ACV-style hierarchy) ── */

const productColumns = {
  es: [
    {
      title: "Valvulas de Bola",
      href: "/productos/valvulas-bola",
      image: "/images/products/dhv-floater.jpg",
      items: [
        { label: "Floating (Bola Flotante)", href: "/productos/valvulas-bola/floating" },
        { label: "Trunnion Mounted (Bola Fija)", href: "/productos/valvulas-bola/trunnion" },
        { label: "Fully Welded", href: "/productos/valvulas-bola/fully-welded" },
        { label: "Criogenicas", href: "/productos/valvulas-bola/criogenicas" },
        { label: "Subsea (API 6DSS)", href: "/productos/valvulas-bola/subsea" },
        { label: "Alta Presion", href: "/productos/valvulas-bola/alta-presion" },
        { label: "Double Block & Bleed", href: "/productos/valvulas-bola/dbb" },
      ],
    },
    {
      title: "Valvulas de Compuerta",
      href: "/productos/valvulas-compuerta",
      image: "/images/products/dhv-gate-valve.png",
      items: [
        { label: "Wedge Gate", href: "/productos/valvulas-compuerta/wedge" },
        { label: "Slab Gate", href: "/productos/valvulas-compuerta/slab-gate" },
        { label: "Conduit Gate", href: "/productos/valvulas-compuerta/conduit" },
        { label: "Forjadas (API 602)", href: "/productos/valvulas-compuerta/forjadas" },
      ],
    },
    {
      title: "Valvulas de Control",
      href: "/productos/valvulas-control",
      image: "/images/products/ipsa-control-panel-1.jpg",
      items: [
        { label: "Globe", href: "/productos/valvulas-control/globe" },
        { label: "Rotary", href: "/productos/valvulas-control/rotary" },
        { label: "Butterfly", href: "/productos/valvulas-control/butterfly" },
        { label: "Anti-surge", href: "/productos/valvulas-control/anti-surge" },
      ],
    },
    {
      title: "Actuadores",
      href: "/productos/actuadores",
      image: "/images/products/df-trunnion-automated.jpg",
      items: [
        { label: "Neumaticos (Rack & Pinion)", href: "/productos/actuadores/neumaticos-rack-pinion" },
        { label: "Neumaticos (Scotch Yoke)", href: "/productos/actuadores/neumaticos-scotch-yoke" },
        { label: "Electricos", href: "/productos/actuadores/electricos" },
        { label: "Hidraulicos", href: "/productos/actuadores/hidraulicos" },
        { label: "Auto-Contenidos", href: "/productos/actuadores/auto-contenidos" },
      ],
    },
  ],
  en: [
    {
      title: "Ball Valves",
      href: "/productos/valvulas-bola",
      image: "/images/products/dhv-floater.jpg",
      items: [
        { label: "Floating Ball Valves", href: "/productos/valvulas-bola/floating" },
        { label: "Trunnion Mounted", href: "/productos/valvulas-bola/trunnion" },
        { label: "Fully Welded", href: "/productos/valvulas-bola/fully-welded" },
        { label: "Cryogenic", href: "/productos/valvulas-bola/criogenicas" },
        { label: "Subsea (API 6DSS)", href: "/productos/valvulas-bola/subsea" },
        { label: "High Pressure", href: "/productos/valvulas-bola/alta-presion" },
        { label: "Double Block & Bleed", href: "/productos/valvulas-bola/dbb" },
      ],
    },
    {
      title: "Gate Valves",
      href: "/productos/valvulas-compuerta",
      image: "/images/products/dhv-gate-valve.png",
      items: [
        { label: "Wedge Gate", href: "/productos/valvulas-compuerta/wedge" },
        { label: "Slab Gate", href: "/productos/valvulas-compuerta/slab-gate" },
        { label: "Conduit Gate", href: "/productos/valvulas-compuerta/conduit" },
        { label: "Forged (API 602)", href: "/productos/valvulas-compuerta/forjadas" },
      ],
    },
    {
      title: "Control Valves",
      href: "/productos/valvulas-control",
      image: "/images/products/ipsa-control-panel-1.jpg",
      items: [
        { label: "Globe", href: "/productos/valvulas-control/globe" },
        { label: "Rotary", href: "/productos/valvulas-control/rotary" },
        { label: "Butterfly", href: "/productos/valvulas-control/butterfly" },
        { label: "Anti-surge", href: "/productos/valvulas-control/anti-surge" },
      ],
    },
    {
      title: "Actuators",
      href: "/productos/actuadores",
      image: "/images/products/df-trunnion-automated.jpg",
      items: [
        { label: "Pneumatic (Rack & Pinion)", href: "/productos/actuadores/neumaticos-rack-pinion" },
        { label: "Pneumatic (Scotch Yoke)", href: "/productos/actuadores/neumaticos-scotch-yoke" },
        { label: "Electric", href: "/productos/actuadores/electricos" },
        { label: "Hydraulic", href: "/productos/actuadores/hidraulicos" },
        { label: "Self-Contained", href: "/productos/actuadores/auto-contenidos" },
      ],
    },
  ],
};

const productSecondary = {
  es: [
    { label: "Valvulas de Seguridad", href: "/productos/valvulas-seguridad" },
    { label: "Valvulas Solenoides", href: "/productos/valvulas-solenoides" },
    { label: "Paneles de Control", href: "/productos/paneles-de-control" },
    { label: "Instrumentacion", href: "/productos/instrumentacion" },
    { label: "Accesorios y Refacciones", href: "/productos/accesorios-refacciones" },
  ],
  en: [
    { label: "Safety Relief Valves", href: "/productos/valvulas-seguridad" },
    { label: "Solenoid Valves", href: "/productos/valvulas-solenoides" },
    { label: "Control Panels", href: "/productos/paneles-de-control" },
    { label: "Instrumentation", href: "/productos/instrumentacion" },
    { label: "Accessories & Spare Parts", href: "/productos/accesorios-refacciones" },
  ],
};

/* ── Other navigation items ────────────────────── */

const otherNavItems = [
  {
    key: "services",
    href: "/servicios",
    children: {
      es: [
        { label: "Automatizacion de Valvulas", href: "/servicios/automatizacion", desc: "Paquetes completos de automatizacion" },
        { label: "Ingenieria y Proyectos EPC", href: "/servicios/ingenieria", desc: "Ingenieria conceptual hasta la entrega" },
        { label: "Centro de Automatizacion (CAD)", href: "/servicios/soporte-in-house", desc: "Reparacion, pruebas NDE, almacen 24/7" },
      ],
      en: [
        { label: "Valve Automation", href: "/servicios/automatizacion", desc: "Complete automation packages" },
        { label: "Engineering & EPC Projects", href: "/servicios/ingenieria", desc: "From concept to delivery" },
        { label: "Automation Center (CAD)", href: "/servicios/soporte-in-house", desc: "Repair, NDE testing, 24/7 warehouse" },
      ],
    },
  },
  {
    key: "industries",
    href: "/industrias",
    children: {
      es: [
        { label: "Petroleras", href: "/industrias/petroleras", desc: "Upstream, midstream y downstream" },
        { label: "Aceites", href: "/industrias/aceites", desc: "Procesamiento y refinacion" },
        { label: "Gas", href: "/industrias/gas", desc: "Procesamiento, transporte y distribucion" },
      ],
      en: [
        { label: "Oil & Gas", href: "/industrias/petroleras", desc: "Upstream, midstream and downstream" },
        { label: "Oils", href: "/industrias/aceites", desc: "Processing and refining" },
        { label: "Gas", href: "/industrias/gas", desc: "Processing, transport and distribution" },
      ],
    },
  },
  {
    key: "suppliers",
    href: "/proveedores",
    children: {
      es: [
        { label: "DHV Valve Group", href: "/proveedores/dhv", desc: "Fabricante europeo de valvulas de bola" },
        { label: "Della Foglia", href: "/proveedores/della-foglia", desc: "Especialista en valvulas trunnion" },
        { label: "Perar", href: "/proveedores/perar", desc: "Actuadores neumaticos e hidraulicos" },
        { label: "Versa Valves", href: "/proveedores/versa", desc: "Valvulas solenoides y neumaticas" },
      ],
      en: [
        { label: "DHV Valve Group", href: "/proveedores/dhv", desc: "European ball valve manufacturer" },
        { label: "Della Foglia", href: "/proveedores/della-foglia", desc: "Trunnion valve specialist" },
        { label: "Perar", href: "/proveedores/perar", desc: "Pneumatic & hydraulic actuators" },
        { label: "Versa Valves", href: "/proveedores/versa", desc: "Solenoid & pneumatic valves" },
      ],
    },
  },
  { key: "about", href: "/nosotros" },
  { key: "contact", href: "/contacto" },
];

/* ── Component ────────────────────────────────── */

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const l = locale as "es" | "en";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const switchLocale = locale === "es" ? "en" : "es";
  const prefix = `/${locale}`;

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleMouseEnter = useCallback((key: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(key);
  }, []);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 200);
  }, []);

  const isDropdownOpen = activeDropdown !== null;

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[1000] transition-shadow duration-300 ${scrolled ? "shadow-lg" : ""}`}>
        {/* ── Top utility bar ─────────────────────────── */}
        <div className="bg-navy-dark text-white">
          <div className="mx-auto max-w-[1600px] px-5 md:px-10 flex items-center justify-between h-9 text-xs">
            <div className="flex items-center gap-6">
              <a
                href="tel:+525553973703"
                className="flex items-center gap-1.5 text-white/70 hover:text-gold-light transition-colors duration-300"
              >
                <Phone size={11} />
                <span className="font-light">+52 55 5397 3703</span>
              </a>
              <a
                href="mailto:ventas.mexico@ipsa-cv.com.mx"
                className="hidden md:flex items-center gap-1.5 text-white/70 hover:text-gold-light transition-colors duration-300"
              >
                <Mail size={11} />
                <span className="font-light">ventas.mexico@ipsa-cv.com.mx</span>
              </a>
            </div>
            <div className="flex items-center gap-5">
              <Link
                href={`/${switchLocale}`}
                className="flex items-center gap-1.5 text-white/70 hover:text-gold-light transition-colors duration-300 font-medium"
              >
                <Globe size={11} />
                {t("language")}
              </Link>
            </div>
          </div>
        </div>

        {/* ── Main navigation bar ─────────────────────── */}
        <nav
          className={`relative transition-all duration-300 ${
            scrolled ? "bg-navy-alt/98 backdrop-blur-md" : "bg-navy-alt"
          }`}
        >
          <div className="mx-auto max-w-[1600px] px-5 md:px-10 flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link href={prefix} className="flex items-center gap-3 shrink-0 group relative z-10">
              <div className="w-11 h-11 bg-gradient-to-br from-gold-light to-gold rounded-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-gold/20">
                <span className="text-navy-dark font-heading font-bold text-xl">IP</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-heading font-bold text-white text-lg leading-tight tracking-wide">
                  IPSA
                </div>
                <div className="text-[9px] text-white/40 leading-tight tracking-[0.2em] font-medium">
                  INGENIERIA DE PARTES
                </div>
              </div>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center h-full ml-12">
              {/* Products (special mega menu) */}
              <div
                className="relative h-full flex items-center"
                onMouseEnter={() => handleMouseEnter("products")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={`${prefix}/productos`}
                  className="group relative flex items-center gap-1.5 px-5 h-full text-[0.9rem] font-medium uppercase tracking-[0.08em] transition-colors duration-300 text-white/90 hover:text-white"
                >
                  {t("products")}
                  <ChevronDown
                    size={12}
                    className={`transition-transform duration-300 opacity-60 ${
                      activeDropdown === "products" ? "rotate-180" : ""
                    }`}
                  />
                  {/* Animated gold underline */}
                  <span
                    className={`absolute bottom-0 left-5 right-5 h-[3px] bg-gold transition-all duration-300 ${
                      activeDropdown === "products"
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-0"
                    }`}
                    style={{ transformOrigin: "center" }}
                  />
                </Link>
              </div>

              {/* Other nav items */}
              {otherNavItems.map((item) => (
                <div
                  key={item.key}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => item.children && handleMouseEnter(item.key)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={`${prefix}${item.href}`}
                    className="group relative flex items-center gap-1.5 px-5 h-full text-[0.9rem] font-medium uppercase tracking-[0.08em] transition-colors duration-300 text-white/90 hover:text-white"
                  >
                    {t(item.key)}
                    {item.children && (
                      <ChevronDown
                        size={12}
                        className={`transition-transform duration-300 opacity-60 ${
                          activeDropdown === item.key ? "rotate-180" : ""
                        }`}
                      />
                    )}
                    {/* Animated gold underline */}
                    <span
                      className={`absolute bottom-0 left-5 right-5 h-[3px] bg-gold transition-all duration-300 ${
                        activeDropdown === item.key
                          ? "opacity-100 scale-x-100"
                          : "opacity-0 scale-x-0"
                      }`}
                      style={{ transformOrigin: "center" }}
                    />
                  </Link>
                </div>
              ))}
            </div>

            {/* Right: CTA + mobile toggle */}
            <div className="flex items-center gap-3 relative z-10">
              <Link
                href={`${prefix}/contacto`}
                className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 bg-gold text-white text-sm font-semibold uppercase tracking-wider rounded-sm transition-all duration-300 hover:bg-gold-dark hover:shadow-lg hover:shadow-gold/20"
              >
                {locale === "es" ? "Cotizar" : "Quote"}
                <ArrowRight size={14} />
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-11 h-11 flex items-center justify-center text-white hover:text-gold-light transition-colors duration-300"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>

        {/* ── Products mega dropdown (full-width ACV-style) ── */}
        <div
          className={`absolute left-0 right-0 bg-white z-[999] transition-all duration-300 ease-out ${
            activeDropdown === "products"
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-3 pointer-events-none"
          }`}
          onMouseEnter={() => handleMouseEnter("products")}
          onMouseLeave={handleMouseLeave}
          style={{ boxShadow: "0 25px 60px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0,0,0,0.04)" }}
        >
          {/* Gold accent bar on top */}
          <div className="h-[3px] bg-gradient-to-r from-gold via-gold-light to-gold" />

          <div className="mx-auto max-w-[1600px] px-5 md:px-10">
            <div className="flex">
              {/* Main product columns */}
              <div className="flex-1 py-8">
                <div className="grid grid-cols-4 gap-8">
                  {productColumns[l].map((col) => (
                    <div key={col.title} className="group/col">
                      {/* Column header with image */}
                      <Link
                        href={`${prefix}${col.href}`}
                        className="block mb-4"
                      >
                        <div className="relative h-28 rounded-2xl overflow-hidden mb-3">
                          <Image
                            src={col.image}
                            alt={col.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover/col:scale-110"
                            sizes="200px"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy-alt/80 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-3">
                            <span className="text-white text-sm font-bold tracking-wide">
                              {col.title}
                            </span>
                          </div>
                        </div>
                      </Link>
                      {/* Sub-items */}
                      <ul className="space-y-0.5">
                        {col.items.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={`${prefix}${item.href}`}
                              className="flex items-center gap-2 text-[0.82rem] text-gray-500 hover:text-navy-alt px-3 py-1.5 -mx-1 rounded-xl transition-all duration-200 hover:bg-gray-50 group/item"
                            >
                              <span className="w-1 h-1 rounded-full bg-gray-300 group-hover/item:bg-gold group-hover/item:w-1.5 group-hover/item:h-1.5 transition-all duration-200 shrink-0" />
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Secondary product links row */}
                <div className="mt-6 pt-5 flex flex-wrap gap-x-1 gap-y-1" style={{ borderTop: "2px solid #f3f4f6" }}>
                  {productSecondary[l].map((item) => (
                    <Link
                      key={item.label}
                      href={`${prefix}${item.href}`}
                      className="text-[0.82rem] text-gray-400 hover:text-navy-alt hover:bg-gray-50 px-3 py-1.5 rounded-xl transition-all duration-200"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right sidebar: Featured + CTA */}
              <div
                className="w-56 shrink-0 py-8 pl-8 flex flex-col justify-between"
                style={{ borderLeft: "2px solid #f3f4f6" }}
              >
                <div>
                  <div className="relative h-44 rounded-lg overflow-hidden mb-5">
                    <Image
                      src="/images/products/df-factory-valves.jpg"
                      alt="IPSA Products"
                      fill
                      className="object-cover"
                      sizes="224px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-alt/90 to-navy-alt/20" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-gold-light text-[10px] font-bold uppercase tracking-widest mb-1">
                        {l === "es" ? "Catalogo" : "Catalog"}
                      </p>
                      <p className="text-white text-xs leading-snug">
                        {l === "es"
                          ? "10 categorias de productos industriales"
                          : "10 industrial product categories"}
                      </p>
                    </div>
                  </div>
                  <Link
                    href={`${prefix}/productos`}
                    className="flex items-center gap-1.5 text-navy-alt text-sm font-bold hover:text-gold transition-colors duration-200"
                  >
                    {l === "es" ? "Ver todos los productos" : "View all products"}
                    <ChevronRight size={14} />
                  </Link>
                </div>
                <Link
                  href={`${prefix}/contacto`}
                  className="block text-center text-xs font-bold uppercase tracking-wider px-4 py-3 bg-gold text-white rounded-sm transition-all duration-300 hover:bg-gold-dark hover:shadow-lg hover:shadow-gold/20 mt-6"
                >
                  {l === "es" ? "Solicitar cotizacion" : "Request a quote"}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── Standard dropdowns (Services, Industries, Suppliers) ── */}
        {otherNavItems.map((item) =>
          item.children ? (
            <div
              key={item.key}
              className={`absolute left-0 right-0 bg-white z-[999] transition-all duration-300 ease-out ${
                activeDropdown === item.key
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-3 pointer-events-none"
              }`}
              onMouseEnter={() => handleMouseEnter(item.key)}
              onMouseLeave={handleMouseLeave}
              style={{ boxShadow: "0 25px 60px rgba(0, 0, 0, 0.12)" }}
            >
              <div className="h-[3px] bg-gradient-to-r from-gold via-gold-light to-gold" />
              <div className="mx-auto max-w-[1600px] px-5 md:px-10 py-8">
                <div className="flex items-start gap-12">
                  {/* Section heading */}
                  <div className="w-56 shrink-0">
                    <Link
                      href={`${prefix}${item.href}`}
                      className="group inline-block"
                    >
                      <h3 className="font-heading text-navy-alt text-2xl font-normal mb-2 group-hover:text-gold transition-colors duration-300">
                        {t(item.key)}
                      </h3>
                      <span className="flex items-center gap-1 text-sm text-gold font-semibold">
                        {l === "es" ? "Ver todo" : "View all"}
                        <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                      </span>
                    </Link>
                  </div>

                  {/* Children links */}
                  <div className="flex-1 grid grid-cols-3 gap-4">
                    {item.children[l].map((child) => (
                      <Link
                        key={child.href}
                        href={`${prefix}${child.href}`}
                        className="group/child block p-5 rounded-2xl border border-transparent hover:border-gray-100 hover:bg-gray-50/60 hover:shadow-sm transition-all duration-200"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/child:bg-gold/20 transition-colors duration-200">
                            <ChevronRight size={14} className="text-gold" />
                          </div>
                          <div>
                            <span className="block text-[0.95rem] text-navy-alt font-semibold mb-1 group-hover/child:text-gold transition-colors duration-200">
                              {child.label}
                            </span>
                            {"desc" in child && (
                              <span className="block text-xs text-gray-400 leading-relaxed">
                                {(child as { desc: string }).desc}
                              </span>
                            )}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : null
        )}

        {/* ── Dark overlay behind dropdowns ─────────── */}
        <div
          className={`fixed inset-0 bg-black/30 z-[998] transition-opacity duration-300 pointer-events-none ${
            isDropdownOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{ top: "calc(36px + 72px)" }}
        />
      </header>

      {/* Spacer for fixed header */}
      <div style={{ height: "calc(36px + 72px)" }} />

      {/* ── Mobile menu ─────────────────────────────── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[999] lg:hidden"
          style={{ top: "calc(36px + 72px)" }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
          />

          {/* Menu panel */}
          <div
            className="absolute top-0 right-0 w-full max-w-md h-full bg-navy-alt overflow-y-auto"
            style={{ boxShadow: "-10px 0 40px rgba(0, 0, 0, 0.3)" }}
          >
            <div className="py-4">
              {/* Products (with sub-accordion) */}
              <div>
                <div className="flex items-stretch">
                  <Link
                    href={`${prefix}/productos`}
                    onClick={() => setMobileOpen(false)}
                    className="flex-1 px-6 py-4 text-white text-base font-medium uppercase tracking-wider hover:bg-white/5 transition-colors duration-200"
                  >
                    {t("products")}
                  </Link>
                  <button
                    onClick={() => setMobileAccordion(mobileAccordion === "products" ? null : "products")}
                    className="w-14 flex items-center justify-center border-l border-white/10 text-white/50 hover:text-gold-light hover:bg-white/5 transition-all duration-200"
                    aria-expanded={mobileAccordion === "products"}
                  >
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${mobileAccordion === "products" ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>
                {mobileAccordion === "products" && (
                  <div className="bg-navy-dark/60">
                    {productColumns[l].map((col) => (
                      <div key={col.title}>
                        <Link
                          href={`${prefix}${col.href}`}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-2 pl-8 pr-6 py-3 text-sm text-gold-light font-semibold border-l-[3px] border-gold/40 ml-6"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                          {col.title}
                        </Link>
                        {col.items.map((item) => (
                          <Link
                            key={item.label}
                            href={`${prefix}${item.href}`}
                            onClick={() => setMobileOpen(false)}
                            className="block pl-14 pr-6 py-1.5 text-xs text-white/40 border-l-[3px] border-white/5 ml-6 hover:text-white/70 transition-colors duration-200"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                    <div className="px-8 pt-3 pb-4 ml-6 border-l-[3px] border-white/5">
                      {productSecondary[l].map((item) => (
                        <Link
                          key={item.label}
                          href={`${prefix}${item.href}`}
                          onClick={() => setMobileOpen(false)}
                          className="block py-1.5 text-sm text-white/50 hover:text-white/70 transition-colors duration-200"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Separator */}
              <div className="mx-6 my-1 border-t border-white/5" />

              {/* Other nav items */}
              {otherNavItems.map((item) => (
                <div key={item.key}>
                  <div className="flex items-stretch">
                    <Link
                      href={`${prefix}${item.href}`}
                      onClick={() => setMobileOpen(false)}
                      className="flex-1 px-6 py-4 text-white text-base font-medium uppercase tracking-wider hover:bg-white/5 transition-colors duration-200"
                    >
                      {t(item.key)}
                    </Link>
                    {item.children && (
                      <button
                        onClick={() =>
                          setMobileAccordion(mobileAccordion === item.key ? null : item.key)
                        }
                        className="w-14 flex items-center justify-center border-l border-white/10 text-white/50 hover:text-gold-light hover:bg-white/5 transition-all duration-200"
                        aria-expanded={mobileAccordion === item.key}
                      >
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${
                            mobileAccordion === item.key ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {item.children && mobileAccordion === item.key && (
                    <div className="bg-navy-dark/60">
                      {item.children[l].map((child) => (
                        <Link
                          key={child.href}
                          href={`${prefix}${child.href}`}
                          onClick={() => setMobileOpen(false)}
                          className="block pl-10 pr-6 py-3 text-sm text-white/60 border-l-[3px] border-gold/30 ml-6 hover:bg-white/5 hover:text-white transition-colors duration-200"
                        >
                          <span className="font-medium">{child.label}</span>
                          {"desc" in child && (
                            <span className="block text-xs text-white/30 mt-0.5">
                              {(child as { desc: string }).desc}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="px-6 py-6 mt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <Link
                  href={`${prefix}/contacto`}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-gold text-white font-bold uppercase tracking-wider rounded-sm transition-all duration-300 hover:bg-gold-dark"
                >
                  {locale === "es" ? "Solicitar cotizacion" : "Request a quote"}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
