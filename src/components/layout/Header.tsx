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
  ArrowRight,
} from "lucide-react";

/* ── All product categories for the mega menu ──── */

const productCategories = {
  es: [
    // ── A: Aislamiento y Bloqueo ──
    {
      title: "Trunnion Cuerpo Soldado",
      href: "/productos/valvulas-bola-trunnion-soldado",
      image: "/images/products/df-trunnion-wb.jpg",
      block: "Aislamiento y Bloqueo",
      items: [
        { label: "Ductos Terrestres", href: "/productos/valvulas-bola-trunnion-soldado/ductos-terrestres" },
        { label: "Ductos Marinos y Offshore", href: "/productos/valvulas-bola-trunnion-soldado/ductos-marinos" },
        { label: "Subsea (API 6DSS)", href: "/productos/valvulas-bola-trunnion-soldado/subsea" },
      ],
    },
    {
      title: "Trunnion Cuerpo Atornillado",
      href: "/productos/valvulas-bola-trunnion-atornillado",
      image: "/images/products/dhv-trunnion-2pc.jpg",
      block: "Aislamiento y Bloqueo",
      items: [
        { label: "2 Piezas", href: "/productos/valvulas-bola-trunnion-atornillado/2-piezas" },
        { label: "3 Piezas", href: "/productos/valvulas-bola-trunnion-atornillado/3-piezas" },
      ],
    },
    {
      title: "Válvulas de Bola Flotante",
      href: "/productos/valvulas-bola-flotante",
      image: "/images/products/dhv-floater.jpg",
      block: "Aislamiento y Bloqueo",
      items: [
        { label: "Flotante Estándar", href: "/productos/valvulas-bola-flotante/estandar" },
        { label: "Flotante Criogénica", href: "/productos/valvulas-bola-flotante/criogenica" },
      ],
    },
    {
      title: "Válvulas de Compuerta",
      href: "/productos/valvulas-compuerta",
      image: "/images/products/dhv-gate.jpg",
      block: "Aislamiento y Bloqueo",
      items: [
        { label: "Compuerta Tipo Slab", href: "/productos/valvulas-compuerta/slab" },
        { label: "Compuerta Tipo Cuña", href: "/productos/valvulas-compuerta/wedge" },
      ],
    },
    // ── B: Regulación y Retención ──
    {
      title: "Válvulas de Globo",
      href: "/productos/valvulas-globo",
      image: "/images/products/dhv-globe.jpg",
      block: "Regulación y Retención",
      items: [
        { label: "Globo Estándar", href: "/productos/valvulas-globo/estandar" },
      ],
    },
    {
      title: "Válvulas Check o Retención",
      href: "/productos/valvulas-check",
      image: "/images/products/dhv-check.jpg",
      block: "Regulación y Retención",
      items: [
        { label: "Check Tipo Swing", href: "/productos/valvulas-check/swing" },
      ],
    },
    // ── C: Control, Seguridad y Automatización ──
    {
      title: "Válvulas de Control",
      href: "/productos/valvulas-control",
      image: "/images/products/masoneilan-control.jpg",
      block: "Control y Seguridad",
      items: [
        { label: "Control Tipo Globo", href: "/productos/valvulas-control/globo-control" },
        { label: "Control Rotativas", href: "/productos/valvulas-control/rotativas" },
      ],
    },
    {
      title: "Válvulas de Seguridad, Alivio o Relevo",
      href: "/productos/valvulas-seguridad",
      image: "/images/products/consolidated-safety.jpg",
      block: "Control y Seguridad",
      items: [
        { label: "Seguridad Convencional", href: "/productos/valvulas-seguridad/convencional" },
        { label: "Seguridad Balanceada", href: "/productos/valvulas-seguridad/balanceada" },
      ],
    },
    {
      title: "Válvulas Neumáticas y Solenoides",
      href: "/productos/valvulas-neumaticas-solenoides",
      image: "/images/products/versa-e4-solenoid.png",
      block: "Control y Seguridad",
      items: [
        { label: "Solenoide Serie V", href: "/productos/valvulas-neumaticas-solenoides/solenoide-serie-v" },
        { label: "Piloto y Control Direccional", href: "/productos/valvulas-neumaticas-solenoides/piloto-control" },
        { label: "Paquetes de Aire Modular", href: "/productos/valvulas-neumaticas-solenoides/paquete-aire-modular" },
      ],
    },
    // ── D: Soluciones Integradas ──
    {
      title: "Válvulas Automatizadas",
      href: "/productos/valvulas-automatizadas",
      image: "/images/products/df-trunnion-automated.jpg",
      block: "Soluciones Integradas",
      items: [
        { label: "Paquetes ESD", href: "/productos/valvulas-automatizadas/paquete-esd" },
        { label: "Paquetes de Control", href: "/productos/valvulas-automatizadas/paquete-control" },
      ],
    },
  ],
  en: [
    // ── A: Isolation & Shutoff ──
    {
      title: "Welded Body Trunnion",
      href: "/productos/valvulas-bola-trunnion-soldado",
      image: "/images/products/df-trunnion-wb.jpg",
      block: "Isolation & Shutoff",
      items: [
        { label: "Onshore Pipelines", href: "/productos/valvulas-bola-trunnion-soldado/ductos-terrestres" },
        { label: "Marine & Offshore", href: "/productos/valvulas-bola-trunnion-soldado/ductos-marinos" },
        { label: "Subsea (API 6DSS)", href: "/productos/valvulas-bola-trunnion-soldado/subsea" },
      ],
    },
    {
      title: "Bolted Body Trunnion",
      href: "/productos/valvulas-bola-trunnion-atornillado",
      image: "/images/products/dhv-trunnion-2pc.jpg",
      block: "Isolation & Shutoff",
      items: [
        { label: "2-Piece Trunnion", href: "/productos/valvulas-bola-trunnion-atornillado/2-piezas" },
        { label: "3-Piece Trunnion", href: "/productos/valvulas-bola-trunnion-atornillado/3-piezas" },
      ],
    },
    {
      title: "Floating Ball Valves",
      href: "/productos/valvulas-bola-flotante",
      image: "/images/products/dhv-floater.jpg",
      block: "Isolation & Shutoff",
      items: [
        { label: "Standard Floating Ball", href: "/productos/valvulas-bola-flotante/estandar" },
        { label: "Cryogenic Floating Ball", href: "/productos/valvulas-bola-flotante/criogenica" },
      ],
    },
    {
      title: "Gate Valves",
      href: "/productos/valvulas-compuerta",
      image: "/images/products/dhv-gate.jpg",
      block: "Isolation & Shutoff",
      items: [
        { label: "Slab Gate Valve", href: "/productos/valvulas-compuerta/slab" },
        { label: "Wedge Gate Valve", href: "/productos/valvulas-compuerta/wedge" },
      ],
    },
    // ── B: Regulation & Retention ──
    {
      title: "Globe Valves",
      href: "/productos/valvulas-globo",
      image: "/images/products/dhv-globe.jpg",
      block: "Regulation & Retention",
      items: [
        { label: "Standard Globe", href: "/productos/valvulas-globo/estandar" },
      ],
    },
    {
      title: "Check / Non-Return Valves",
      href: "/productos/valvulas-check",
      image: "/images/products/dhv-check.jpg",
      block: "Regulation & Retention",
      items: [
        { label: "Swing Check", href: "/productos/valvulas-check/swing" },
      ],
    },
    // ── C: Control, Safety & Automation ──
    {
      title: "Control Valves",
      href: "/productos/valvulas-control",
      image: "/images/products/masoneilan-control.jpg",
      block: "Control & Safety",
      items: [
        { label: "Globe Control Valve", href: "/productos/valvulas-control/globo-control" },
        { label: "Rotary Control Valve", href: "/productos/valvulas-control/rotativas" },
      ],
    },
    {
      title: "Safety & Relief Valves",
      href: "/productos/valvulas-seguridad",
      image: "/images/products/consolidated-safety.jpg",
      block: "Control & Safety",
      items: [
        { label: "Conventional Safety", href: "/productos/valvulas-seguridad/convencional" },
        { label: "Balanced Safety", href: "/productos/valvulas-seguridad/balanceada" },
      ],
    },
    {
      title: "Pneumatic & Solenoid Valves",
      href: "/productos/valvulas-neumaticas-solenoides",
      image: "/images/products/versa-e4-solenoid.png",
      block: "Control & Safety",
      items: [
        { label: "Series V Solenoid", href: "/productos/valvulas-neumaticas-solenoides/solenoide-serie-v" },
        { label: "Pilot & Directional Control", href: "/productos/valvulas-neumaticas-solenoides/piloto-control" },
        { label: "Modular Air Packages", href: "/productos/valvulas-neumaticas-solenoides/paquete-aire-modular" },
      ],
    },
    // ── D: Integrated Solutions ──
    {
      title: "Automated Valves",
      href: "/productos/valvulas-automatizadas",
      image: "/images/products/df-trunnion-automated.jpg",
      block: "Integrated Solutions",
      items: [
        { label: "ESD Packages", href: "/productos/valvulas-automatizadas/paquete-esd" },
        { label: "Control Packages", href: "/productos/valvulas-automatizadas/paquete-control" },
      ],
    },
  ],
};

/* ── Other navigation items ────────────────────── */

const otherNavItems = [
  {
    key: "services",
    href: "/servicios",
    children: {
      es: [
        { label: "Automatización de Válvulas", href: "/servicios/automatizacion", desc: "Paquetes completos de automatización" },
        { label: "Pruebas Hidrostáticas", href: "/servicios/pruebas-hidrostaticas", desc: "Certificación y confiabilidad garantizadas" },
        { label: "Stock y Suministro", href: "/servicios/stock-suministro", desc: "Inventario nacional disponible" },
      ],
      en: [
        { label: "Valve Automation", href: "/servicios/automatizacion", desc: "Complete automation packages" },
        { label: "Hydrostatic Testing", href: "/servicios/pruebas-hidrostaticas", desc: "Guaranteed certification and reliability" },
        { label: "Stock & Supply", href: "/servicios/stock-suministro", desc: "National inventory available" },
      ],
    },
  },
  {
    key: "industries",
    href: "/industrias",
    children: {
      es: [
        { label: "Oil & Gas", href: "/industrias/oil-gas", desc: "Alta presión, corrosión y aplicaciones Subsea" },
        { label: "Sector Energético", href: "/industrias/energetico", desc: "Generación de energía, hidroeléctricas y renovables" },
        { label: "Sector Privado", href: "/industrias/privado", desc: "Química, alimentos y manufactura" },
      ],
      en: [
        { label: "Oil & Gas", href: "/industrias/oil-gas", desc: "High pressure, corrosion and Subsea applications" },
        { label: "Energy Sector", href: "/industrias/energetico", desc: "Power generation, hydroelectric and renewables" },
        { label: "Private Sector", href: "/industrias/privado", desc: "Chemical, food and manufacturing" },
      ],
    },
  },
  {
    key: "suppliers",
    href: "/fabricantes",
    children: {
      es: [
        { label: "Perar", href: "/fabricantes/perar", desc: "Válvulas Trunnion de alta exigencia y Subsea" },
        { label: "Della Foglia", href: "/fabricantes/della-foglia", desc: "Soluciones a medida para condiciones extremas" },
        { label: "DHV Valve Group", href: "/fabricantes/dhv", desc: "Compuerta, Globo, Check y Bola con calidad API" },
        { label: "Versa Valves", href: "/fabricantes/versa", desc: "Control direccional y electroválvulas" },
        { label: "Masoneilan", href: "/fabricantes/masoneilan", desc: "Válvulas de control e instrumentación" },
      ],
      en: [
        { label: "Perar", href: "/fabricantes/perar", desc: "High-demand Trunnion and Subsea valves" },
        { label: "Della Foglia", href: "/fabricantes/della-foglia", desc: "Custom solutions for extreme conditions" },
        { label: "DHV Valve Group", href: "/fabricantes/dhv", desc: "Gate, Globe, Check & Ball with API quality" },
        { label: "Versa Valves", href: "/fabricantes/versa", desc: "Directional control and solenoid valves" },
        { label: "Masoneilan", href: "/fabricantes/masoneilan", desc: "Control valves and instrumentation" },
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
  const [hoveredCategory, setHoveredCategory] = useState(0);
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
    if (key === "products") setHoveredCategory(0);
  }, []);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 300);
  }, []);

  const closeDropdown = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  const isDropdownOpen = activeDropdown !== null;
  const categories = productCategories[l];
  const activeCategory = categories[hoveredCategory];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[1000] transition-shadow duration-150 ${scrolled ? "shadow-lg" : ""}`}>
        {/* ── Top utility bar ─────────────────────────── */}
        <div className="bg-navy-dark text-white">
          <div className="mx-auto max-w-[1600px] px-5 md:px-10 flex items-center justify-between h-9 text-xs">
            <div className="flex items-center gap-6">
              <a
                href="tel:+525553973703"
                className="flex items-center gap-1.5 text-white/70 hover:text-gold-light transition-colors duration-150"
              >
                <Phone size={11} />
                <span className="font-light">+52 55 5397 3703</span>
              </a>
              <a
                href="mailto:ventas.mexico@ipsa-cv.com.mx"
                className="hidden md:flex items-center gap-1.5 text-white/70 hover:text-gold-light transition-colors duration-150"
              >
                <Mail size={11} />
                <span className="font-light">ventas.mexico@ipsa-cv.com.mx</span>
              </a>
            </div>
            <div className="flex items-center gap-5">
              <Link
                href={`/${switchLocale}`}
                className="flex items-center gap-1.5 text-white/70 hover:text-gold-light transition-colors duration-150 font-medium"
              >
                <Globe size={11} />
                {t("language")}
              </Link>
            </div>
          </div>
        </div>

        {/* ── Main navigation bar ─────────────────────── */}
        <nav
          className={`relative transition-all duration-150 ${
            scrolled ? "bg-navy-alt/98 backdrop-blur-md" : "bg-navy-alt"
          }`}
        >
          <div className="mx-auto max-w-[1600px] px-5 md:px-10 flex items-center h-[72px]">
            {/* Logo */}
            <Link href={prefix} className="shrink-0 group relative z-10">
              <Image
                src="/images/logos/ipsa-logo.png"
                alt="IPSA - Ingeniería de Partes"
                width={180}
                height={45}
                className="h-[45px] w-auto transition-opacity duration-150 group-hover:opacity-90"
                priority
              />
            </Link>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center h-full ml-12 flex-1">
              {/* Products */}
              <div
                className="relative h-full flex items-center"
                onMouseEnter={() => handleMouseEnter("products")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={`${prefix}/productos`}
                  className="group relative flex items-center gap-1.5 px-5 h-full text-[0.9rem] font-medium uppercase tracking-[0.08em] transition-colors duration-150 text-white/90 hover:text-white"
                >
                  {t("products")}
                  <ChevronDown
                    size={12}
                    className={`transition-transform duration-150 opacity-60 ${
                      activeDropdown === "products" ? "rotate-180" : ""
                    }`}
                  />
                  <span
                    className={`absolute bottom-0 left-5 right-5 h-[3px] bg-gold transition-all duration-150 ${
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
                  onMouseEnter={() => item.children ? handleMouseEnter(item.key) : undefined}
                  onMouseLeave={item.children ? handleMouseLeave : undefined}
                >
                  <Link
                    href={`${prefix}${item.href}`}
                    onClick={closeDropdown}
                    className="group relative flex items-center gap-1.5 px-5 h-full text-[0.9rem] font-medium uppercase tracking-[0.08em] transition-colors duration-150 text-white/90 hover:text-white"
                  >
                    {t(item.key)}
                    {item.children && (
                      <ChevronDown
                        size={12}
                        className={`transition-transform duration-150 opacity-60 ${
                          activeDropdown === item.key ? "rotate-180" : ""
                        }`}
                      />
                    )}
                    <span
                      className={`absolute bottom-0 left-5 right-5 h-[3px] bg-gold transition-all duration-150 ${
                        activeDropdown === item.key
                          ? "opacity-100 scale-x-100"
                          : "opacity-0 scale-x-0"
                      }`}
                      style={{ transformOrigin: "center" }}
                    />
                  </Link>

                  {/* Inline dropdown for Services / Industries / Suppliers */}
                  {item.children && (
                    <div
                      className={`absolute top-full left-0 z-[999] ${
                        activeDropdown === item.key
                          ? "opacity-100 visible"
                          : "opacity-0 invisible pointer-events-none"
                      }`}
                      style={{ paddingTop: "0px" }}
                    >
                      {/* Invisible bridge to prevent hover gap */}
                      <div className="h-2" />
                      <div
                        className="bg-white rounded-xl overflow-hidden min-w-[320px]"
                        style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)" }}
                      >
                        <div className="h-[2px] bg-gradient-to-r from-gold to-gold-light" />
                        <div className="p-2">
                          {item.children[l].map((child) => (
                            <Link
                              key={child.href}
                              href={`${prefix}${child.href}`}
                              onClick={closeDropdown}
                              className="group/child flex items-start gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-150"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-gold/40 mt-2 shrink-0 group-hover/child:bg-gold transition-colors duration-150" />
                              <div>
                                <span className="block text-sm text-gray-800 font-semibold group-hover/child:text-gold transition-colors duration-150">
                                  {child.label}
                                </span>
                                {"desc" in child && (
                                  <span className="block text-xs text-gray-400 mt-0.5 leading-relaxed">
                                    {(child as { desc: string }).desc}
                                  </span>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="border-t border-gray-100 px-4 py-3">
                          <Link
                            href={`${prefix}${item.href}`}
                            onClick={closeDropdown}
                            className="flex items-center gap-1 text-xs font-semibold text-gold hover:text-gold-dark transition-colors duration-150"
                          >
                            {l === "es" ? "Ver todo" : "View all"}
                            <ArrowRight size={11} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right: CTA + mobile toggle */}
            <div className="flex items-center gap-4 relative z-10 ml-auto shrink-0">
              <Link
                href={`${prefix}/contacto`}
                className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 bg-gold text-white text-sm font-semibold uppercase tracking-wider rounded-lg transition-all duration-150 hover:bg-gold-dark hover:shadow-lg hover:shadow-gold/20"
              >
                {locale === "es" ? "Cotizar" : "Quote"}
                <ArrowRight size={14} />
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-11 h-11 flex items-center justify-center text-white hover:text-gold-light transition-colors duration-150"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>

        {/* ── Products mega dropdown (progressive hover reveal) ── */}
        <div
          className={`absolute left-0 right-0 bg-white z-[999] transition-all duration-200 ease-out ${
            activeDropdown === "products"
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2 pointer-events-none"
          }`}
          onMouseEnter={() => handleMouseEnter("products")}
          onMouseLeave={handleMouseLeave}
          style={{ boxShadow: "0 20px 50px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0,0,0,0.04)" }}
        >
          <div className="h-[2px] bg-gradient-to-r from-gold to-gold-light" />

          <div className="mx-auto max-w-[1600px] px-5 md:px-10">
            <div className="flex" style={{ minHeight: "380px" }}>
              {/* Left: Category list */}
              <div className="w-72 shrink-0 py-5 pr-5 border-r border-gray-100 overflow-y-auto" style={{ maxHeight: "420px" }}>
                {categories.map((cat, idx) => {
                  const prevBlock = idx > 0 ? (categories[idx - 1] as { block?: string }).block : null;
                  const currentBlock = (cat as { block?: string }).block;
                  const showDivider = currentBlock && currentBlock !== prevBlock;
                  return (
                    <div key={cat.href}>
                      {showDivider && (
                        <div className={`px-4 ${idx > 0 ? "mt-3 pt-3 border-t border-gray-100" : ""}`}>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-gold/70">{currentBlock}</span>
                        </div>
                      )}
                      <Link
                        href={`${prefix}${cat.href}`}
                        onClick={closeDropdown}
                        onMouseEnter={() => setHoveredCategory(idx)}
                        className={`group flex items-center justify-between px-4 py-2 rounded-lg text-sm transition-all duration-150 ${
                          hoveredCategory === idx
                            ? "bg-gray-50 text-gray-900 font-semibold"
                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50/50"
                        }`}
                      >
                        <span>{cat.title}</span>
                        {cat.items.length > 0 && (
                          <ChevronRight
                            size={14}
                            className={`transition-all duration-150 ${
                              hoveredCategory === idx ? "text-gold opacity-100" : "opacity-0"
                            }`}
                          />
                        )}
                      </Link>
                    </div>
                  );
                })}

                {/* View all products link */}
                <div className="mt-4 pt-4 border-t border-gray-100 px-4">
                  <Link
                    href={`${prefix}/productos`}
                    onClick={closeDropdown}
                    className="flex items-center gap-1.5 text-sm font-semibold text-gold hover:text-gold-dark transition-colors duration-150"
                  >
                    {l === "es" ? "Ver todos los productos" : "View all products"}
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>

              {/* Right: Subtypes for hovered category + image */}
              <div className="flex-1 py-5 pl-8 flex gap-8">
                {/* Subtypes list */}
                <div className="flex-1">
                  <Link
                    href={`${prefix}${activeCategory.href}`}
                    onClick={closeDropdown}
                    className="group inline-block mb-5"
                  >
                    <h3 className="font-heading text-gray-900 text-xl font-semibold group-hover:text-gold transition-colors duration-150">
                      {activeCategory.title}
                    </h3>
                  </Link>

                  {activeCategory.items.length > 0 ? (
                    <ul className="space-y-0.5">
                      {activeCategory.items.map((item) => (
                        <li key={item.label}>
                          <Link
                            href={`${prefix}${item.href}`}
                            onClick={closeDropdown}
                            className="group/item flex items-center gap-3 px-3 py-2 -mx-1 rounded-lg text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-all duration-150"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover/item:bg-gold transition-colors duration-150 shrink-0" />
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-400">
                      {l === "es"
                        ? "Haz clic para ver todos los productos de esta categoría."
                        : "Click to view all products in this category."}
                    </p>
                  )}
                </div>

                {/* Category image */}
                <div className="w-56 shrink-0">
                  <div className="relative h-56 rounded-xl overflow-hidden mb-4 bg-gray-50">
                    <Image
                      src={activeCategory.image}
                      alt={activeCategory.title}
                      fill
                      className="object-contain"
                      sizes="224px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-alt/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="text-white text-sm font-bold">
                        {activeCategory.title}
                      </span>
                    </div>
                  </div>
                  <Link
                    href={`${prefix}/contacto`}
                    onClick={closeDropdown}
                    className="block text-center text-xs font-bold uppercase tracking-wider px-4 py-2.5 bg-gold text-white rounded-lg transition-all duration-150 hover:bg-gold-dark"
                  >
                    {l === "es" ? "Solicitar cotización" : "Request a quote"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Dark overlay behind dropdowns ─────────── */}
        <div
          className={`fixed inset-0 bg-black/20 z-[998] transition-opacity duration-150 ${
            activeDropdown === "products" ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={closeDropdown}
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
            style={{ boxShadow: "-8px 0 30px rgba(0, 0, 0, 0.15)" }}
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
                      className={`transition-transform duration-150 ${mobileAccordion === "products" ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>
                {mobileAccordion === "products" && (
                  <div className="bg-navy-dark/60">
                    {categories.map((col, idx) => {
                      const prevBlock = idx > 0 ? (categories[idx - 1] as { block?: string }).block : null;
                      const currentBlock = (col as { block?: string }).block;
                      const showDivider = currentBlock && currentBlock !== prevBlock;
                      return (
                        <div key={col.title}>
                          {showDivider && (
                            <div className={`pl-8 pr-6 ${idx > 0 ? "pt-3 mt-1 border-t border-white/5" : "pt-2"} ml-6`}>
                              <span className="text-[10px] font-bold uppercase tracking-widest text-gold/50">{currentBlock}</span>
                            </div>
                          )}
                          <Link
                            href={`${prefix}${col.href}`}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-2 pl-8 pr-6 py-2.5 text-sm text-gold-light font-semibold border-l-[3px] border-gold/40 ml-6"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                            {col.title}
                          </Link>
                          {col.items.map((item) => (
                            <Link
                              key={item.label}
                              href={`${prefix}${item.href}`}
                              onClick={() => setMobileOpen(false)}
                              className="block pl-14 pr-6 py-1.5 text-xs text-white/50 border-l-[3px] border-white/5 ml-6 hover:text-white/70 transition-colors duration-200"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      );
                    })}
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
                          className={`transition-transform duration-150 ${
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
                  className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-gold text-white font-bold uppercase tracking-wider rounded-lg transition-all duration-150 hover:bg-gold-dark"
                >
                  {locale === "es" ? "Solicitar cotización" : "Request a quote"}
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
