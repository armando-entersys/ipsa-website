import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import {
  Clock,
  Package,
  Wrench,
  MapPin,
  Zap,
  Settings,
  Headphones,
  ArrowRight,
  Phone,
  ChevronRight,
  CircleDot,
  Layers,
  SlidersHorizontal,
  Gauge,
  Cpu,
  ShieldCheck,
  Flame,
  Droplets,
} from "lucide-react";
import { stockImages } from "@/data/images";

/* ── Data ──────────────────────────────────────────── */

const productCategories = [
  { slug: "valvulas-bola", es: "Valvulas de Bola", en: "Ball Valves", Icon: CircleDot, desc: { es: "Floating, Trunnion, Fully Welded, Criogenicas, Subsea", en: "Floating, Trunnion, Fully Welded, Cryogenic, Subsea" } },
  { slug: "valvulas-compuerta", es: "Valvulas de Compuerta", en: "Gate Valves", Icon: Layers, desc: { es: "Wedge, Slab Gate, Conduit, Forjadas API 602", en: "Wedge, Slab Gate, Conduit, Forged API 602" } },
  { slug: "valvulas-control", es: "Valvulas de Control", en: "Control Valves", Icon: SlidersHorizontal, desc: { es: "Globe, Rotary, Butterfly, Anti-surge", en: "Globe, Rotary, Butterfly, Anti-surge" } },
  { slug: "actuadores", es: "Actuadores", en: "Actuators", Icon: Settings, desc: { es: "Neumaticos, electricos, hidraulicos", en: "Pneumatic, electric, hydraulic" } },
  { slug: "actuadores-auto-contenidos", es: "Actuadores Auto-Contenidos", en: "Self-Contained Actuators", Icon: Cpu, desc: { es: "Sin fuente externa, hasta 600,000 lbs", en: "No external power, up to 600,000 lbs" } },
  { slug: "paneles-de-control", es: "Paneles de Control", en: "Control Panels", Icon: Gauge, desc: { es: "ESD, regulacion, medicion custom", en: "ESD, regulation, custom metering" } },
];

const services = [
  {
    slug: "automatizacion",
    Icon: Zap,
    image: stockImages.automation,
    es: { name: "Automatizacion de valvulas", desc: "Paquetes completos de automatizacion: valvula + actuador + accesorios, paneles ESD, comisionamiento en sitio." },
    en: { name: "Valve automation", desc: "Complete automation packages: valve + actuator + accessories, ESD panels, on-site commissioning." },
  },
  {
    slug: "ingenieria",
    Icon: Settings,
    image: stockImages.engineering,
    es: { name: "Ingenieria y proyectos EPC", desc: "Desde la ingenieria conceptual hasta la entrega de instalaciones industriales funcionando." },
    en: { name: "Engineering & EPC projects", desc: "From conceptual engineering to delivery of operating industrial facilities." },
  },
  {
    slug: "soporte-in-house",
    Icon: Headphones,
    image: stockImages.workshop,
    es: { name: "Centro de Automatizacion (CAD)", desc: "Reparacion, pruebas NDE, almacen 24/7 con inventario de +$5M USD en Cd. del Carmen." },
    en: { name: "Automation Center (CAD)", desc: "Repair, NDE testing, 24/7 warehouse with $5M+ USD inventory in Cd. del Carmen." },
  },
];

const industries = [
  { slug: "petroleras", image: stockImages.oilGas, Icon: Flame, es: { name: "Petroleras", desc: "Upstream, midstream y downstream" }, en: { name: "Oil & Gas", desc: "Upstream, midstream and downstream" } },
  { slug: "aceites", image: stockImages.oils, Icon: Droplets, es: { name: "Aceites", desc: "Procesamiento y refinacion" }, en: { name: "Oils", desc: "Processing and refining" } },
  { slug: "gas", image: stockImages.gas, Icon: Gauge, es: { name: "Gas", desc: "Procesamiento, transporte y distribucion" }, en: { name: "Gas", desc: "Processing, transport and distribution" } },
];

const supplierLogos = [
  { name: "DHV Valve Group", slug: "dhv", initials: "DHV", image: "/images/products/dhv-trunnion-2pc.jpg" },
  { name: "Della Foglia", slug: "della-foglia", initials: "DF", image: "/images/products/df-trunnion-wb.jpg" },
  { name: "Perar", slug: "perar", initials: "PR", image: "/images/products/df-trunnion-wb-coated.jpg" },
  { name: "Versa Valves", slug: "versa", initials: "VS", image: "/images/products/versa-e4-solenoid.png" },
];

/* ── Page ─────────────────────────────────────────── */

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();
  const prefix = `/${locale}`;
  const l = locale as "es" | "en";

  return (
    <>
      {/* ═══ HERO with video background ═══════════════ */}
      <section className="relative overflow-hidden" style={{ minHeight: "75vh" }}>
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/products/df-factory-valves.jpg"
        >
          <source src="/videos/hero-refinery.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-navy-deep/70" />
        {/* Gradient accent */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/85 via-navy-deep/55 to-transparent" />

        <div className="relative mx-auto max-w-[1600px] px-5 md:px-10 flex items-center" style={{ minHeight: "75vh" }}>
          <div className="max-w-3xl py-24 lg:py-36">
            <h1
              className="font-heading text-white leading-tight mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 400 }}
            >
              {t("hero.title")}
            </h1>
            <p className="text-white/80 mb-10 max-w-2xl leading-relaxed" style={{ fontSize: "1.15rem", lineHeight: 1.7 }}>
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`${prefix}/productos`}
                className="inline-flex items-center justify-center px-8 py-4 bg-gold text-white font-semibold rounded btn-lift hover:bg-gold-dark"
                style={{ fontSize: "1.05rem" }}
              >
                {t("hero.cta")}
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link
                href={`${prefix}/contacto`}
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/25 text-white font-medium rounded btn-lift hover:bg-white/20"
                style={{ fontSize: "1.05rem" }}
              >
                {t("hero.ctaSecondary")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PILLARS ═════════════════════════════════ */}
      <section className="py-20 lg:py-24" style={{ background: "#ffffff" }}>
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <h2 className="font-heading text-heading text-center mb-16" style={{ fontSize: "2rem", fontWeight: 600 }}>
            {t("pillars.title")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { key: "experience", Icon: Clock },
              { key: "stock", Icon: Package },
              { key: "engineering", Icon: Wrench },
              { key: "presence", Icon: MapPin },
            ].map(({ key, Icon }) => (
              <div key={key} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl flex items-center justify-center transition-all duration-300" style={{ background: "rgba(187, 144, 52, 0.08)" }}>
                  <Icon size={28} className="text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-semibold text-heading text-lg mb-3">
                  {t(`pillars.${key}.title`)}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {t(`pillars.${key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURED PRODUCTS ═══════════════════════ */}
      <section className="py-20 lg:py-24" style={{ background: "#f8f9fb" }}>
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="flex items-end justify-between mb-14">
            <div>
              <h2 className="font-heading text-heading" style={{ fontSize: "2rem", fontWeight: 600 }}>
                {t("products.title")}
              </h2>
              <p className="text-gray-500 mt-2 max-w-xl">
                {locale === "es"
                  ? "Valvulas, actuadores y sistemas de control de los principales fabricantes mundiales."
                  : "Valves, actuators and control systems from leading global manufacturers."}
              </p>
            </div>
            <Link
              href={`${prefix}/productos`}
              className="hidden md:inline-flex items-center gap-1 text-gold font-medium hover:text-gold-dark transition-colors duration-300"
            >
              {t("products.viewAll")} <ChevronRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "#e5e7eb" }}>
            {productCategories.map((product) => {
              const PIcon = product.Icon;
              return (
                <Link
                  key={product.slug}
                  href={`${prefix}/productos/${product.slug}`}
                  className="group block bg-white p-8 hover:bg-gray-50/80 transition-all duration-300 relative"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105" style={{ background: "rgba(36, 39, 81, 0.06)" }}>
                      <PIcon size={22} className="text-heading group-hover:text-gold transition-colors duration-300" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading font-semibold text-heading text-base mb-1">
                        {product[l]}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-3">
                        {product.desc[l]}
                      </p>
                      <span className="text-sm text-gold font-medium inline-flex items-center gap-1 group-hover:text-gold-dark transition-colors duration-300">
                        {locale === "es" ? "Ver mas" : "Read more"}
                        <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mt-10 text-center md:hidden">
            <Link href={`${prefix}/productos`} className="inline-flex items-center gap-1 text-gold font-medium">
              {t("products.viewAll")} <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ SUPPLIERS (dark section with logos) ══════ */}
      <section className="py-20 lg:py-24 relative overflow-hidden" style={{ background: "#1a1f3d" }}>
        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="relative mx-auto max-w-[1600px] px-5 md:px-10 text-center">
          <p className="text-gold-light font-medium text-sm tracking-widest uppercase mb-4">
            {locale === "es" ? "Nuestros fabricantes" : "Our manufacturers"}
          </p>
          <h2 className="font-heading text-white mb-4" style={{ fontSize: "2rem", fontWeight: 600 }}>
            {t("suppliers.title")}
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto mb-14 leading-relaxed">
            {locale === "es"
              ? "Alianzas exclusivas con fabricantes europeos y americanos de clase mundial."
              : "Exclusive partnerships with world-class European and American manufacturers."}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            {supplierLogos.map((supplier) => (
              <Link
                key={supplier.slug}
                href={`${prefix}/proveedores/${supplier.slug}`}
                className="group flex flex-col items-center justify-center p-6 rounded-lg transition-all duration-300 hover:bg-white/[0.06] overflow-hidden"
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="relative w-full h-28 mb-4 rounded overflow-hidden">
                  <Image
                    src={supplier.image}
                    alt={supplier.name}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <span className="text-sm text-white/70 font-medium group-hover:text-gold-light transition-colors duration-300 text-center">
                  {supplier.name}
                </span>
              </Link>
            ))}
          </div>
          <Link
            href={`${prefix}/proveedores`}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-white font-medium rounded btn-lift hover:bg-gold-dark"
          >
            {t("suppliers.viewAll")} <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ═══ SERVICES (with images) ══════════════════ */}
      <section className="py-20 lg:py-24" style={{ background: "#ffffff" }}>
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="text-center mb-16">
            <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
              {locale === "es" ? "Soluciones integrales" : "Comprehensive solutions"}
            </p>
            <h2 className="font-heading text-heading mb-4" style={{ fontSize: "2rem", fontWeight: 600 }}>
              {t("services.title")}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              {t("services.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`${prefix}/servicios/${service.slug}`}
                className="group block overflow-hidden card-hover"
                style={{ border: "1px solid #e5e7eb" }}
              >
                {/* Service image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service[l].name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-navy-deep/20 group-hover:bg-navy-deep/10 transition-colors duration-300" />
                </div>
                <div className="p-7">
                  <h3 className="font-heading font-semibold text-heading text-lg mb-2">
                    {service[l].name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {service[l].desc}
                  </p>
                  <span className="text-gold font-medium text-sm inline-flex items-center gap-1 group-hover:text-gold-dark transition-colors duration-300">
                    {t("services.learnMore")}
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY IPSA + STATS ════════════════════════ */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Split background */}
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2" style={{ background: "#f4f5f7" }} />
          <div className="absolute inset-y-0 right-0 w-1/2 hidden lg:block">
            <Image
              src={stockImages.industrial}
              alt=""
              fill
              className="object-cover"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-navy-deep/60" />
          </div>
        </div>

        <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold font-medium text-sm tracking-widest uppercase mb-4">
                {locale === "es" ? "Nuestra diferencia" : "Our difference"}
              </p>
              <h2 className="font-heading text-heading mb-6" style={{ fontSize: "2rem", fontWeight: 600 }}>
                {locale === "es" ? "Por que elegir IPSA?" : "Why choose IPSA?"}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {locale === "es"
                  ? "Nuestra combinacion unica de inventario extenso, alianzas con fabricantes de clase mundial y capacidad de ingenieria nos permite ser la solucion integral para nuestros clientes."
                  : "Our unique combination of extensive inventory, world-class manufacturer partnerships, and engineering capability allows us to be the comprehensive solution for our clients."}
              </p>
              <p className="text-gray-600 leading-relaxed mb-10">
                {locale === "es"
                  ? "No necesitas coordinar multiples proveedores cuando IPSA puede ofrecerte soluciones completas bajo un solo techo."
                  : "No need to coordinate multiple suppliers when IPSA can offer complete solutions under one roof."}
              </p>

              {/* Stats inline */}
              <div className="grid grid-cols-3 gap-6 mb-10 py-8" style={{ borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb" }}>
                {[
                  { number: "38+", es: "Anos", en: "Years" },
                  { number: "6", es: "Sedes", en: "Locations" },
                  { number: "$5M+", es: "Inventario USD", en: "Inventory USD" },
                ].map((stat) => (
                  <div key={stat.number} className="text-center">
                    <div className="font-heading text-gold" style={{ fontSize: "2.25rem", fontWeight: 600, lineHeight: 1 }}>
                      {stat.number}
                    </div>
                    <p className="text-gray-400 text-xs mt-2 uppercase tracking-wider font-medium">{stat[l]}</p>
                  </div>
                ))}
              </div>

              <Link
                href={`${prefix}/nosotros`}
                className="inline-flex items-center px-7 py-3 bg-navy-deep text-white font-medium rounded btn-lift hover:bg-navy"
              >
                {locale === "es" ? "Conocer mas" : "Learn more"} <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            {/* Right side is the image (visible via absolute positioning on lg) */}
            <div className="lg:hidden relative h-64 rounded-lg overflow-hidden">
              <Image
                src={stockImages.industrial}
                alt=""
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-navy-deep/40" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ INDUSTRIES (with background images) ═════ */}
      <section className="py-20 lg:py-24" style={{ background: "#ffffff" }}>
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="text-center mb-14">
            <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
              {locale === "es" ? "Sectores que atendemos" : "Sectors we serve"}
            </p>
            <h2 className="font-heading text-heading" style={{ fontSize: "2rem", fontWeight: 600 }}>
              {t("industries.title")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`${prefix}/industrias/${industry.slug}`}
                className="group block relative overflow-hidden card-hover"
                style={{ minHeight: "320px" }}
              >
                <Image
                  src={industry.image}
                  alt={industry[l].name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <industry.Icon size={20} className="text-gold-light" strokeWidth={1.5} />
                    <h3 className="font-heading font-bold text-white text-2xl">
                      {industry[l].name}
                    </h3>
                  </div>
                  <p className="text-white/60 text-sm mb-3">{industry[l].desc}</p>
                  <span className="inline-flex items-center gap-1 text-gold-light font-medium text-sm group-hover:text-gold-lighter transition-colors duration-300">
                    {locale === "es" ? "Conoce mas" : "Learn more"}
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ GROUP IPSA ══════════════════════════════ */}
      <section className="py-20 lg:py-24" style={{ background: "#f4f5f7" }}>
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="text-center mb-14">
            <h2 className="font-heading text-heading mb-4" style={{ fontSize: "2rem", fontWeight: 600 }}>
              {t("aboutPage.group")}
            </h2>
            <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
              {t("aboutPage.groupText")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { key: "ipsa", color: "#141733", accent: "rgba(20, 23, 51, 0.06)" },
              { key: "maepsa", color: "#bb9034", accent: "rgba(187, 144, 52, 0.06)" },
              { key: "certus", color: "#203c88", accent: "rgba(32, 60, 136, 0.06)" },
            ].map(({ key, color, accent }) => (
              <div
                key={key}
                className="text-center p-10 bg-white card-hover"
                style={{ border: "1px solid #e5e7eb" }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ background: color }}
                >
                  <span className="text-white font-heading font-bold text-lg">
                    {key === "ipsa" ? "IP" : key === "maepsa" ? "MA" : "CS"}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-heading text-xl mb-2">
                  {t(`aboutPage.${key}`)}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {t(`aboutPage.${key}Desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LOCATIONS ═══════════════════════════════ */}
      <section className="py-20 lg:py-24" style={{ background: "#ffffff" }}>
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="text-center mb-14">
            <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
              {locale === "es" ? "Presencia" : "Presence"}
            </p>
            <h2 className="font-heading text-heading" style={{ fontSize: "2rem", fontWeight: 600 }}>
              {t("aboutPage.locations")}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { city: "CDMX", label: "HQ", full: "Ciudad de Mexico" },
              { city: "Cd. del Carmen", label: "CAD", full: "Campeche" },
              { city: "Paraiso", label: "Taller", full: "Tabasco" },
              { city: "Houston", label: "Intl.", full: "Texas, USA" },
              { city: "Villahermosa", label: "Ventas", full: "Tabasco" },
              { city: "Tampico", label: "Ventas", full: "Tamaulipas" },
            ].map((loc) => (
              <div
                key={loc.city}
                className="bg-white p-5 text-center card-hover"
                style={{ border: "1px solid #edf0f3" }}
              >
                <MapPin size={18} className="text-gold mx-auto mb-3" strokeWidth={1.5} />
                <div className="font-heading font-semibold text-heading text-sm">{loc.city}</div>
                <div className="text-xs text-gray-400 mt-0.5">{loc.full}</div>
                <div
                  className="mt-3 inline-block text-[10px] font-semibold px-2.5 py-1 rounded"
                  style={{ background: "rgba(187, 144, 52, 0.08)", color: "#bb9034" }}
                >
                  {loc.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CERTIFICATIONS ══════════════════════════ */}
      <section className="py-16 lg:py-20" style={{ background: "#f8f9fb", borderTop: "1px solid #edf0f3", borderBottom: "1px solid #edf0f3" }}>
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="text-center mb-10">
            <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
              {locale === "es" ? "Calidad certificada" : "Certified quality"}
            </p>
            <h2 className="font-heading text-heading" style={{ fontSize: "2rem", fontWeight: 600 }}>
              {locale === "es" ? "Normas y certificaciones" : "Standards & certifications"}
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {[
              { code: "ISO 9001", desc: { es: "Sistema de gestion de calidad", en: "Quality management system" }, icon: "shield" },
              { code: "API 6D", desc: { es: "Valvulas de tuberia", en: "Pipeline valves" }, icon: "check" },
              { code: "API 6A", desc: { es: "Equipo de cabezal de pozo", en: "Wellhead equipment" }, icon: "check" },
              { code: "NACE MR0175", desc: { es: "Servicio acido (sour)", en: "Sour service" }, icon: "droplet" },
              { code: "NORSOK", desc: { es: "Estandar noruego offshore", en: "Norwegian offshore standard" }, icon: "anchor" },
              { code: "SIL III", desc: { es: "Seguridad funcional", en: "Functional safety" }, icon: "alert" },
            ].map((cert) => (
              <div
                key={cert.code}
                className="relative bg-white rounded-lg p-5 text-center group transition-all duration-300 hover:shadow-md"
                style={{ border: "1px solid #edf0f3" }}
              >
                <div
                  className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #141733, #203c88)" }}
                >
                  <ShieldCheck size={20} className="text-gold-light" strokeWidth={1.5} />
                </div>
                <div className="font-heading font-bold text-heading text-sm tracking-wider mb-1">
                  {cert.code}
                </div>
                <div className="text-[11px] text-gray-400 leading-snug">
                  {cert.desc[l]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTACT CTA ═════════════════════════════ */}
      <section className="relative py-24 lg:py-28 overflow-hidden">
        <Image
          src={stockImages.industrial}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy-deep/80" />
        <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-white mb-4" style={{ fontSize: "2rem", fontWeight: 600 }}>
              {locale === "es" ? "Hablemos de tu proyecto" : "Let's talk about your project"}
            </h2>
            <p className="text-white/60 mb-10 leading-relaxed" style={{ fontSize: "1.05rem" }}>
              {locale === "es"
                ? "Nuestro equipo de ingenieros esta listo para ayudarte a encontrar la solucion correcta."
                : "Our engineering team is ready to help you find the right solution."}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`${prefix}/contacto`}
                className="inline-flex items-center px-8 py-4 bg-gold text-white font-semibold rounded btn-lift hover:bg-gold-dark"
                style={{ fontSize: "1.05rem" }}
              >
                {locale === "es" ? "Enviar mensaje" : "Send a message"}
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <a
                href="tel:+525553973703"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium rounded btn-lift hover:bg-white/20"
              >
                <Phone size={16} />
                +52 55 5397 3703
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
