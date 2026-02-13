import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowRight, Phone, AlertTriangle, CheckCircle } from "lucide-react";
import { notFound } from "next/navigation";
import { stockImages } from "@/data/images";

const industryData: Record<string, {
  es: { name: string; desc: string; challenge: string; solution: string; products: string[]; standards: string[] };
  en: { name: string; desc: string; challenge: string; solution: string; products: string[]; standards: string[] };
}> = {
  petroleras: {
    es: {
      name: "Industria Petrolera",
      desc: "Soluciones para operaciones upstream (exploracion y produccion), midstream (transporte y almacenamiento) y downstream (refinacion y petroquimica).",
      challenge: "Las plataformas offshore y plantas de proceso petrolero operan en ambientes de alta corrosion, presion extrema, temperaturas variables y presencia de H2S. Una falla de valvula puede significar un paro de produccion de millones de dolares por dia, ademas de riesgos para el personal y el medio ambiente.",
      solution: "IPSA suministra valvulas trunnion mounted de Della Foglia y Perar con cuerpo fully welded, en materiales duplex y super duplex, probadas hidrostaticamente y con certificacion completa. Nuestros actuadores auto-contenidos Certus operan sin fuente de energia externa, ideales para locaciones remotas. El CAD en Cd. del Carmen ofrece reparacion y stock 24/7 para la zona offshore del Golfo de Mexico.",
      products: ["Valvulas de bola trunnion mounted", "Valvulas de compuerta API 6D", "Actuadores auto-contenidos", "Paneles de control ESD", "Valvulas solenoides para ESD", "Instrumentacion de proceso"],
      standards: ["API 6D", "API 6A", "API 14C", "NACE MR0175", "ISO 15156", "ISO 15848"],
    },
    en: {
      name: "Oil & Gas Industry",
      desc: "Solutions for upstream (exploration and production), midstream (transport and storage) and downstream (refining and petrochemical) operations.",
      challenge: "Offshore platforms and oil processing plants operate in high corrosion, extreme pressure, variable temperature and H2S environments. A valve failure can mean a production shutdown worth millions of dollars per day, plus risks to personnel and the environment.",
      solution: "IPSA supplies trunnion mounted ball valves from Della Foglia and Perar with fully welded body, in duplex and super duplex materials, hydrostatically tested with complete certification. Our Certus self-contained actuators operate without external power, ideal for remote locations. The CAD in Cd. del Carmen offers 24/7 repair and stock for the Gulf of Mexico offshore zone.",
      products: ["Trunnion mounted ball valves", "API 6D gate valves", "Self-contained actuators", "ESD control panels", "Solenoid valves for ESD", "Process instrumentation"],
      standards: ["API 6D", "API 6A", "API 14C", "NACE MR0175", "ISO 15156", "ISO 15848"],
    },
  },
  aceites: {
    es: {
      name: "Industria de Aceites",
      desc: "Equipos especializados para procesamiento, refinacion y manejo de aceites industriales.",
      challenge: "El procesamiento de aceites requiere equipos resistentes a altas temperaturas, fluidos viscosos y condiciones de operacion continua. El control preciso del proceso es critico para la calidad del producto final.",
      solution: "IPSA ofrece valvulas de control de alta precision, sistemas de automatizacion con instrumentacion Yokogawa, y soporte tecnico especializado para mantener la continuidad operativa de las plantas de proceso.",
      products: ["Valvulas de control", "Valvulas de bola", "Actuadores electricos y neumaticos", "Instrumentacion de proceso", "Paneles de control"],
      standards: ["ISA", "IEC 61511", "API 553", "ASME B16.34"],
    },
    en: {
      name: "Oils Industry",
      desc: "Specialized equipment for processing, refining and handling of industrial oils.",
      challenge: "Oil processing requires equipment resistant to high temperatures, viscous fluids and continuous operation conditions. Precise process control is critical for final product quality.",
      solution: "IPSA offers high-precision control valves, automation systems with Yokogawa instrumentation, and specialized technical support to maintain operational continuity of process plants.",
      products: ["Control valves", "Ball valves", "Electric and pneumatic actuators", "Process instrumentation", "Control panels"],
      standards: ["ISA", "IEC 61511", "API 553", "ASME B16.34"],
    },
  },
  gas: {
    es: {
      name: "Industria del Gas",
      desc: "Valvulas y sistemas para procesamiento, transporte y distribucion de gas natural y GNL.",
      challenge: "La industria del gas exige estanqueidad absoluta para cumplir con regulaciones de emisiones fugitivas, capacidad criogenica para GNL (hasta -196 grados C), y configuraciones Double Block & Bleed para aislamiento seguro en gasoductos.",
      solution: "IPSA suministra valvulas de bola con certificacion ISO 15848 para fugitive emissions, valvulas criogenicas de Della Foglia probadas a -196 grados C, y configuraciones DBB para aislamiento seguro. Nuestros paneles de control custom aseguran la operacion confiable de estaciones de regulacion y medicion.",
      products: ["Valvulas de bola criogenicas", "Valvulas DBB (Double Block & Bleed)", "Valvulas de seguridad", "Actuadores neumaticos y electricos", "Paneles de regulacion de gas", "Skids de medicion de flujo"],
      standards: ["API 6D", "ISO 15848", "NACE MR0175", "BS 6364", "EN 1473"],
    },
    en: {
      name: "Gas Industry",
      desc: "Valves and systems for natural gas and LNG processing, transport and distribution.",
      challenge: "The gas industry demands absolute tightness to comply with fugitive emissions regulations, cryogenic capability for LNG (down to -196°C), and Double Block & Bleed configurations for safe pipeline isolation.",
      solution: "IPSA supplies ball valves with ISO 15848 certification for fugitive emissions, Della Foglia cryogenic valves tested at -196°C, and DBB configurations for safe isolation. Our custom control panels ensure reliable operation of regulation and metering stations.",
      products: ["Cryogenic ball valves", "DBB (Double Block & Bleed) valves", "Safety relief valves", "Pneumatic and electric actuators", "Gas regulation panels", "Flow measurement skids"],
      standards: ["API 6D", "ISO 15848", "NACE MR0175", "BS 6364", "EN 1473"],
    },
  },
};

export default async function IndustryPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const industry = industryData[slug];
  if (!industry) notFound();

  const l = locale as "es" | "en";
  const prefix = `/${locale}`;
  const data = industry[l];

  return (
    <>
      {/* ═══ HERO with background image ═══════════════ */}
      <section className="relative overflow-hidden" style={{ minHeight: "55vh" }}>
        <Image
          src={stockImages.industriesHero}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy-deep/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy-deep/60 to-transparent" />

        <div className="relative mx-auto max-w-[1600px] px-5 md:px-10 flex items-center" style={{ minHeight: "55vh" }}>
          <div className="max-w-3xl py-24 lg:py-32">
            <nav className="text-sm text-white/50 mb-6">
              <Link href={prefix} className="hover:text-white transition-colors">
                {locale === "es" ? "Inicio" : "Home"}
              </Link>
              <ChevronRight size={14} className="inline mx-1" />
              <Link href={`${prefix}/industrias`} className="hover:text-white transition-colors">
                {locale === "es" ? "Industrias" : "Industries"}
              </Link>
              <ChevronRight size={14} className="inline mx-1" />
              <span className="text-white">{data.name}</span>
            </nav>
            <h1
              className="font-heading text-white leading-tight mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 400 }}
            >
              {data.name}
            </h1>
            <p className="text-white/80 max-w-2xl leading-relaxed" style={{ fontSize: "1.15rem", lineHeight: 1.7 }}>
              {data.desc}
            </p>
          </div>
        </div>
      </section>

      {/* ═══ CHALLENGE / SOLUTION ═════════════════════ */}
      <section className="py-20 lg:py-24" style={{ background: "#ffffff" }}>
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="text-center mb-14">
            <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
              {locale === "es" ? "Entendemos tu operacion" : "We understand your operation"}
            </p>
            <h2 className="font-heading text-heading" style={{ fontSize: "2rem", fontWeight: 600 }}>
              {locale === "es" ? "El reto y nuestra respuesta" : "The challenge and our response"}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Challenge card */}
            <div
              className="p-8 lg:p-10"
              style={{ background: "#f8f9fb", border: "1px solid #edf0f3" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(187, 144, 52, 0.08)" }}
                >
                  <AlertTriangle size={20} className="text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-semibold text-heading text-xl">
                  {locale === "es" ? "El reto" : "The challenge"}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{data.challenge}</p>
            </div>
            {/* Solution card */}
            <div
              className="p-8 lg:p-10"
              style={{ background: "#242751" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(187, 144, 52, 0.15)" }}
                >
                  <CheckCircle size={20} className="text-gold-light" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-semibold text-white text-xl">
                  {locale === "es" ? "Nuestra solucion" : "Our solution"}
                </h3>
              </div>
              <p className="text-white/80 leading-relaxed">{data.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PRODUCTS & STANDARDS ═════════════════════ */}
      <section className="py-20 lg:py-24" style={{ background: "#f8f9fb" }}>
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Products */}
            <div>
              <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
                {locale === "es" ? "Equipos especializados" : "Specialized equipment"}
              </p>
              <h2 className="font-heading text-heading mb-6" style={{ fontSize: "2rem", fontWeight: 600 }}>
                {locale === "es" ? "Productos para esta industria" : "Products for this industry"}
              </h2>
              <ul className="space-y-4">
                {data.products.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                href={`${prefix}/productos`}
                className="inline-flex items-center gap-2 mt-8 px-7 py-3 bg-navy-deep text-white font-medium rounded btn-lift hover:bg-navy"
              >
                {locale === "es" ? "Ver todos los productos" : "View all products"}
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Standards */}
            <div>
              <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
                {locale === "es" ? "Cumplimiento normativo" : "Regulatory compliance"}
              </p>
              <h2 className="font-heading text-heading mb-6" style={{ fontSize: "2rem", fontWeight: 600 }}>
                {locale === "es" ? "Normas aplicables" : "Applicable standards"}
              </h2>
              <div className="flex flex-wrap gap-3">
                {data.standards.map((std) => (
                  <span
                    key={std}
                    className="text-heading text-sm font-medium px-4 py-2"
                    style={{ background: "rgba(36, 39, 81, 0.06)", border: "1px solid rgba(36, 39, 81, 0.10)" }}
                  >
                    {std}
                  </span>
                ))}
              </div>
              <p className="text-gray-400 text-sm mt-6 leading-relaxed">
                {locale === "es"
                  ? "Todos nuestros productos cumplen con las normas internacionales mas exigentes de la industria."
                  : "All our products comply with the most demanding international industry standards."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA with background image ════════════════ */}
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
            <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
              {locale === "es" ? "Siguiente paso" : "Next step"}
            </p>
            <h2 className="font-heading text-white mb-4" style={{ fontSize: "2rem", fontWeight: 600 }}>
              {locale === "es"
                ? `Hablemos de tu proyecto en ${data.name.toLowerCase()}`
                : `Let's discuss your ${data.name.toLowerCase()} project`}
            </h2>
            <p className="text-white/60 mb-10 leading-relaxed" style={{ fontSize: "1.05rem" }}>
              {locale === "es"
                ? "Nuestro equipo de ingenieros especializados esta listo para ayudarte a encontrar la solucion correcta."
                : "Our team of specialized engineers is ready to help you find the right solution."}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`${prefix}/contacto`}
                className="inline-flex items-center px-8 py-4 bg-gold text-white font-semibold rounded btn-lift hover:bg-gold-dark"
                style={{ fontSize: "1.05rem" }}
              >
                {locale === "es" ? "Contactar especialista" : "Contact a specialist"}
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
