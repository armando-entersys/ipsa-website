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
    {
      title: "Válvulas de Bola",
      href: "/productos/valvulas-bola",
      image: "/images/products/dhv-floater.jpg",
      items: [
        { label: "Floating (Bola Flotante)", href: "/productos/valvulas-bola/floating" },
        { label: "Trunnion Mounted (Bola Fija)", href: "/productos/valvulas-bola/trunnion" },
        { label: "Fully Welded", href: "/productos/valvulas-bola/fully-welded" },
        { label: "Criogénicas", href: "/productos/valvulas-bola/criogenicas" },
        { label: "Subsea (API 6DSS)", href: "/productos/valvulas-bola/subsea" },
        { label: "Alta Presión", href: "/productos/valvulas-bola/alta-presion" },
        { label: "Double Block & Bleed", href: "/productos/valvulas-bola/dbb" },
      ],
    },
    {
      title: "Válvulas de Compuerta",
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
      title: "Válvulas de Control",
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
        { label: "Neumáticos (Rack & Pinion)", href: "/productos/actuadores/neumaticos-rack-pinion" },
        { label: "Neumáticos (Scotch Yoke)", href: "/productos/actuadores/neumaticos-scotch-yoke" },
        { label: "Eléctricos", href: "/productos/actuadores/electricos" },
        { label: "Hidráulicos", href: "/productos/actuadores/hidraulicos" },
        { label: "Auto-Contenidos", href: "/productos/actuadores/auto-contenidos" },
      ],
    },
    {
      title: "Válvulas de Seguridad",
      href: "/productos/valvulas-seguridad",
      image: "/images/products/ipsa-control-panel-1.jpg",
      items: [],
    },
    {
      title: "Válvulas Solenoides",
      href: "/productos/valvulas-solenoides",
      image: "/images/products/versa-e4-solenoid.png",
      items: [],
    },
    {
      title: "Paneles de Control",
      href: "/productos/paneles-de-control",
      image: "/images/products/ipsa-control-panel-1.jpg",
      items: [],
    },
    {
      title: "Instrumentación",
      href: "/productos/instrumentacion",
      image: "/images/products/ipsa-control-panel-1.jpg",
      items: [],
    },
    {
      title: "Accesorios y Refacciones",
      href: "/productos/accesorios-refacciones",
      image: "/images/products/df-factory-valves.jpg",
      items: [],
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
    {
      title: "Safety Relief Valves",
      href: "/productos/valvulas-seguridad",
      image: "/images/products/ipsa-control-panel-1.jpg",
      items: [],
    },
    {
      title: "Solenoid Valves",
      href: "/productos/valvulas-solenoides",
      image: "/images/products/versa-e4-solenoid.png",
      items: [],
    },
    {
      title: "Control Panels",
      href: "/productos/paneles-de-control",
      image: "/images/products/ipsa-control-panel-1.jpg",
      items: [],
    },
    {
      title: "Instrumentation",
      href: "/productos/instrumentacion",
      image: "/images/products/ipsa-control-panel-1.jpg",
      items: [],
    },
    {
      title: "Accessories & Spare Parts",
      href: "/productos/accesorios-refacciones",
      image: "/images/products/df-factory-valves.jpg",
      items: [],
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
        { label: "Ingeniería y Proyectos EPC", href: "/servicios/ingenieria", desc: "Ingeniería conceptual hasta la entrega" },
        { label: "Centro de Automatización (CAD)", href: "/servicios/soporte-in-house", desc: "Reparación, pruebas NDE, almacén 24/7" },
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
        { label: "Aceites", href: "/industrias/aceites", desc: "Procesamiento y refinación" },
        { label: "Gas", href: "/industrias/gas", desc: "Procesamiento, transporte y distribución" },
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
        { label: "DHV Valve Group", href: "/proveedores/dhv", desc: "Fabricante europeo de válvulas de bola" },
        { label: "Della Foglia", href: "/proveedores/della-foglia", desc: "Especialista en válvulas trunnion" },
        { label: "Perar", href: "/proveedores/perar", desc: "Actuadores neumáticos e hidráulicos" },
        { label: "Versa Valves", href: "/proveedores/versa", desc: "Válvulas solenoides y neumáticas" },
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
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
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
                      className={`absolute top-full left-0 pt-0 z-[999] transition-all duration-200 ease-out ${
                        activeDropdown === item.key
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2 pointer-events-none"
                      }`}
                      onMouseEnter={() => handleMouseEnter(item.key)}
                      onMouseLeave={handleMouseLeave}
                    >
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
              <div className="w-72 shrink-0 py-5 pr-5 border-r border-gray-100">
                {categories.map((cat, idx) => (
                  <Link
                    key={cat.href}
                    href={`${prefix}${cat.href}`}
                    onClick={closeDropdown}
                    onMouseEnter={() => setHoveredCategory(idx)}
                    className={`group flex items-center justify-between px-4 py-2.5 rounded-lg text-sm transition-all duration-150 ${
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
                ))}

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
                  <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                    <Image
                      src={activeCategory.image}
                      alt={activeCategory.title}
                      fill
                      className="object-cover"
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
            isDropdownOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
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
                    {categories.filter(c => c.items.length > 0).map((col) => (
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
                            className="block pl-14 pr-6 py-1.5 text-xs text-white/50 border-l-[3px] border-white/5 ml-6 hover:text-white/70 transition-colors duration-200"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                    <div className="px-8 pt-3 pb-4 ml-6 border-l-[3px] border-white/5">
                      {categories.filter(c => c.items.length === 0).map((cat) => (
                        <Link
                          key={cat.title}
                          href={`${prefix}${cat.href}`}
                          onClick={() => setMobileOpen(false)}
                          className="block py-1.5 text-sm text-white/50 hover:text-white/70 transition-colors duration-200"
                        >
                          {cat.title}
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
