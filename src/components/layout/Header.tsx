"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Phone, Mail, X, Menu, ChevronDown, ChevronRight, Globe } from "lucide-react";

/* ── Product mega-menu data (ACV-style hierarchy) ── */

const productColumns = {
  es: [
    {
      title: "Valvulas de Bola",
      href: "/productos/valvulas-bola",
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
        { label: "Automatizacion de Valvulas", href: "/servicios/automatizacion" },
        { label: "Ingenieria y Proyectos EPC", href: "/servicios/ingenieria" },
        { label: "Centro de Automatizacion (CAD)", href: "/servicios/soporte-in-house" },
      ],
      en: [
        { label: "Valve Automation", href: "/servicios/automatizacion" },
        { label: "Engineering & EPC Projects", href: "/servicios/ingenieria" },
        { label: "Automation Center (CAD)", href: "/servicios/soporte-in-house" },
      ],
    },
  },
  {
    key: "industries",
    href: "/industrias",
    children: {
      es: [
        { label: "Petroleras", href: "/industrias/petroleras" },
        { label: "Aceites", href: "/industrias/aceites" },
        { label: "Gas", href: "/industrias/gas" },
      ],
      en: [
        { label: "Oil & Gas", href: "/industrias/petroleras" },
        { label: "Oils", href: "/industrias/aceites" },
        { label: "Gas", href: "/industrias/gas" },
      ],
    },
  },
  {
    key: "suppliers",
    href: "/proveedores",
    children: {
      es: [
        { label: "DHV Valve Group", href: "/proveedores/dhv" },
        { label: "Della Foglia", href: "/proveedores/della-foglia" },
        { label: "Perar", href: "/proveedores/perar" },
        { label: "Versa Valves", href: "/proveedores/versa" },
      ],
      en: [
        { label: "DHV Valve Group", href: "/proveedores/dhv" },
        { label: "Della Foglia", href: "/proveedores/della-foglia" },
        { label: "Perar", href: "/proveedores/perar" },
        { label: "Versa Valves", href: "/proveedores/versa" },
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
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const switchLocale = locale === "es" ? "en" : "es";
  const prefix = `/${locale}`;

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleMouseEnter = (key: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <header className="relative z-[1000]">
      {/* ── Top utility bar ─────────────────────────── */}
      <div className="bg-navy-deep text-white">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10 flex items-center justify-between h-10 text-sm">
          <div className="flex items-center gap-6">
            <a
              href="tel:+525553973703"
              className="flex items-center gap-1.5 text-white/85 hover:text-gold-light transition-colors duration-300"
            >
              <Phone size={13} />
              <span className="font-light">+52 55 5397 3703</span>
            </a>
            <a
              href="mailto:ventas.mexico@ipsa-cv.com.mx"
              className="hidden md:flex items-center gap-1.5 text-white/85 hover:text-gold-light transition-colors duration-300"
            >
              <Mail size={13} />
              <span className="font-light">ventas.mexico@ipsa-cv.com.mx</span>
            </a>
          </div>
          <Link
            href={`/${switchLocale}`}
            className="flex items-center gap-1.5 text-white/85 hover:text-gold-light transition-colors duration-300 font-medium"
          >
            <Globe size={13} />
            {t("language")}
          </Link>
        </div>
      </div>

      {/* ── Main navigation bar ─────────────────────── */}
      <nav className="bg-navy-deep relative">
        {/* Diagonal decorative line (ACV pattern) */}
        <div
          className="absolute left-[280px] -top-0.5 w-[2px] h-[calc(71px+10px)] bg-white/25 pointer-events-none z-10 hidden lg:block"
          style={{ transform: "rotate(38deg)", transformOrigin: "top center" }}
        />

        <div className="mx-auto max-w-[1600px] px-5 md:px-10 flex items-center justify-between h-[71px]">
          {/* Logo */}
          <Link href={prefix} className="flex items-center gap-3 shrink-0 group">
            <div className="w-11 h-11 bg-gradient-to-br from-gold-light to-gold rounded-lg flex items-center justify-center transition-opacity duration-300 group-hover:opacity-80">
              <span className="text-navy-deep font-heading font-bold text-xl">IP</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-heading font-bold text-white text-lg leading-tight">
                IPSA
              </div>
              <div className="text-[10px] text-white/50 leading-tight tracking-[0.15em]">
                INGENIERIA DE PARTES
              </div>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-6 ml-16">
            {/* Products (special mega menu) */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("products")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={`${prefix}/productos`}
                className={`flex items-center gap-1 py-6 text-[0.95rem] font-light capitalize transition-colors duration-300 ${
                  activeDropdown && activeDropdown !== "products"
                    ? "text-white/40"
                    : "text-white"
                } hover:text-white/60`}
              >
                {t("products")}
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-300 ${
                    activeDropdown === "products" ? "rotate-180" : ""
                  }`}
                />
              </Link>

              {/* Products mega dropdown (ACV-style multi-column) */}
              <div
                className={`absolute top-full -left-6 bg-white border-t-[3px] border-gold z-[9999] transition-all duration-200 ease-in-out ${
                  activeDropdown === "products"
                    ? "opacity-100 visible pointer-events-auto translate-y-0"
                    : "opacity-0 invisible pointer-events-none translate-y-2"
                }`}
                style={{ boxShadow: "0 15px 40px rgba(0, 0, 0, 0.12)", minWidth: "780px" }}
              >
                <div className="flex">
                  {/* Main columns */}
                  <div className="flex-1 p-6">
                    <div className="grid grid-cols-4 gap-6">
                      {productColumns[l].map((col) => (
                        <div key={col.title}>
                          <Link
                            href={`${prefix}${col.href}`}
                            className="block text-navy-deep text-sm font-semibold mb-3 hover:text-gold transition-colors duration-200 pb-2"
                            style={{ borderBottom: "2px solid #e5e7eb" }}
                          >
                            {col.title}
                          </Link>
                          <ul className="space-y-1">
                            {col.items.map((item) => (
                              <li key={item.label}>
                                <Link
                                  href={`${prefix}${item.href}`}
                                  className="block text-[0.82rem] text-gray-500 hover:text-gold hover:bg-gray-50 px-2 py-1.5 -mx-2 rounded transition-all duration-150"
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Secondary product links row */}
                    <div className="mt-5 pt-4 flex flex-wrap gap-x-5 gap-y-1" style={{ borderTop: "1px solid #f3f4f6" }}>
                      {productSecondary[l].map((item) => (
                        <Link
                          key={item.label}
                          href={`${prefix}${item.href}`}
                          className="text-[0.82rem] text-gray-500 hover:text-gold transition-colors duration-200 py-1"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Right sidebar: View all + CTA */}
                  <div className="w-48 shrink-0 p-6 flex flex-col justify-between" style={{ background: "#f8f9fb", borderLeft: "1px solid #edf0f3" }}>
                    <div>
                      <Link
                        href={`${prefix}/productos`}
                        className="text-navy-deep text-sm font-semibold hover:text-gold transition-colors duration-200 flex items-center gap-1"
                      >
                        {l === "es" ? "Ver todos" : "View all"}
                        <ChevronRight size={14} />
                      </Link>
                      <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                        {l === "es"
                          ? "10 categorias de productos industriales"
                          : "10 industrial product categories"}
                      </p>
                    </div>
                    <Link
                      href={`${prefix}/contacto`}
                      className="block text-center text-xs font-medium px-4 py-2.5 bg-gold text-white rounded btn-lift hover:bg-gold-dark mt-4"
                    >
                      {l === "es" ? "Solicitar cotizacion" : "Request a quote"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Other nav items */}
            {otherNavItems.map((item) => (
              <div
                key={item.key}
                className="relative"
                onMouseEnter={() => item.children && handleMouseEnter(item.key)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={`${prefix}${item.href}`}
                  className={`flex items-center gap-1 py-6 text-[0.95rem] font-light capitalize transition-colors duration-300 ${
                    activeDropdown && activeDropdown !== item.key
                      ? "text-white/40"
                      : "text-white"
                  } hover:text-white/60`}
                >
                  {t(item.key)}
                  {item.children && (
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-300 ${
                        activeDropdown === item.key ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* Standard dropdown */}
                {item.children && (
                  <div
                    className={`absolute top-full left-0 bg-white border-t-[3px] border-gray-200 min-w-[260px] z-[9999] transition-all duration-200 ease-in-out ${
                      activeDropdown === item.key
                        ? "opacity-100 visible pointer-events-auto translate-y-0"
                        : "opacity-0 invisible pointer-events-none translate-y-2"
                    }`}
                    style={{ boxShadow: "0 15px 40px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className="py-3">
                      <div className="px-6 pb-2 mb-1 border-b border-gray-100">
                        <Link
                          href={`${prefix}${item.href}`}
                          className="text-navy-deep text-lg font-heading font-normal underline underline-offset-4 decoration-navy-deep/30 decoration-2 hover:text-navy transition-colors duration-300"
                        >
                          {t(item.key)}
                        </Link>
                      </div>
                      {item.children[l].map((child) => (
                        <Link
                          key={child.href}
                          href={`${prefix}${child.href}`}
                          className="block px-6 py-2 text-[0.95rem] text-gray-600 hover:bg-gray-50 hover:text-gold transition-all duration-150"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right: CTA + mobile toggle */}
          <div className="flex items-center gap-4">
            <Link
              href={`${prefix}/contacto`}
              className="hidden md:inline-flex items-center px-6 py-2.5 bg-gold text-white text-sm font-medium rounded btn-lift hover:bg-gold-dark"
            >
              {locale === "es" ? "Solicitar cotizacion" : "Request a quote"}
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-11 h-11 flex items-center justify-center text-white hover:text-white/70 transition-colors duration-300"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile menu ─────────────────────────────── */}
      {mobileOpen && (
        <div
          className="lg:hidden bg-navy-deep border-t border-white/10 max-h-[calc(100vh-121px)] overflow-y-auto"
          style={{ boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)" }}
        >
          <div className="py-2">
            {/* Products (with sub-accordion) */}
            <div>
              <div className="flex items-stretch">
                <Link
                  href={`${prefix}/productos`}
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 px-5 py-3.5 text-white text-base font-normal hover:bg-white/5 transition-colors duration-200"
                >
                  {t("products")}
                </Link>
                <button
                  onClick={() => setMobileAccordion(mobileAccordion === "products" ? null : "products")}
                  className="w-12 flex items-center justify-center border-l border-white/10 text-white/70 hover:bg-white/10 transition-colors duration-200"
                  aria-expanded={mobileAccordion === "products"}
                >
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${mobileAccordion === "products" ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
              {mobileAccordion === "products" && (
                <div className="bg-navy/80">
                  {productColumns[l].map((col) => (
                    <div key={col.title}>
                      <Link
                        href={`${prefix}${col.href}`}
                        onClick={() => setMobileOpen(false)}
                        className="block pl-8 pr-5 py-2.5 text-sm text-gold-light/90 font-medium border-l-2 border-gold-light/40 ml-5"
                      >
                        {col.title}
                      </Link>
                      {col.items.map((item) => (
                        <Link
                          key={item.label}
                          href={`${prefix}${item.href}`}
                          onClick={() => setMobileOpen(false)}
                          className="block pl-12 pr-5 py-1.5 text-xs text-white/50 border-l-2 border-white/10 ml-5 hover:text-white/80 transition-colors duration-200"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                  <div className="px-8 pt-2 pb-3 ml-5 border-l-2 border-white/10">
                    {productSecondary[l].map((item) => (
                      <Link
                        key={item.label}
                        href={`${prefix}${item.href}`}
                        onClick={() => setMobileOpen(false)}
                        className="block py-1.5 text-sm text-white/60 hover:text-white/80 transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Other nav items */}
            {otherNavItems.map((item) => (
              <div key={item.key}>
                <div className="flex items-stretch">
                  <Link
                    href={`${prefix}${item.href}`}
                    onClick={() => setMobileOpen(false)}
                    className="flex-1 px-5 py-3.5 text-white text-base font-normal hover:bg-white/5 transition-colors duration-200"
                  >
                    {t(item.key)}
                  </Link>
                  {item.children && (
                    <button
                      onClick={() =>
                        setMobileAccordion(mobileAccordion === item.key ? null : item.key)
                      }
                      className="w-12 flex items-center justify-center border-l border-white/10 text-white/70 hover:bg-white/10 transition-colors duration-200"
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
                  <div className="bg-navy/80">
                    {item.children[l].map((child) => (
                      <Link
                        key={child.href}
                        href={`${prefix}${child.href}`}
                        onClick={() => setMobileOpen(false)}
                        className="block pl-10 pr-5 py-2.5 text-sm text-white/75 border-l-2 border-gold-light/40 ml-5 hover:bg-white/5 hover:text-white transition-colors duration-200"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile CTA */}
            <div className="px-5 py-4 border-t border-white/10 mt-2">
              <Link
                href={`${prefix}/contacto`}
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-6 py-3 bg-gold text-white font-medium rounded hover:bg-gold-dark transition-colors duration-300"
              >
                {locale === "es" ? "Solicitar cotizacion" : "Request a quote"}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
