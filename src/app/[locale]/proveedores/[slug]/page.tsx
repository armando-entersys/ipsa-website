import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowRight, Phone, MapPin, Award } from "lucide-react";
import { notFound } from "next/navigation";
import { stockImages } from "@/data/images";

const supplierData: Record<string, {
  name: string; country: string;
  image: string;
  es: { desc: string; longDesc: string; products: string[] };
  en: { desc: string; longDesc: string; products: string[] };
  certifications: string[];
  industries: { es: string; en: string; slug: string }[];
}> = {
  dhv: {
    name: "DHV Valve Group",
    country: "International",
    image: "/images/products/dhv-trunnion-2pc.jpg",
    es: {
      desc: "Fabricante de valvulas industriales con fundicion propia",
      longDesc: "DHV Valve Group opera una fundicion propia de 26,500 m2 con capacidad de 8,000 toneladas/ano. Con mas de 20 anos de experiencia fabricando valvulas de acero y aleaciones especiales, DHV cuenta con horno A.O.D. propio para castings duplex y ultra-bajo carbono. Su control de calidad incluye pruebas NDE completas (rayos X, particulas magneticas, liquidos penetrantes, ultrasonido, inspeccion visual), pruebas hidrostaticas y de gas a alta presion, y analisis quimico ASTM.",
      products: ["Valvulas de bola trunnion (2 y 3 piezas)", "Valvulas de compuerta (slab gate, conduit)", "Valvulas de bola flotantes", "Valvulas forjadas (API 602)", "Valvulas de compuerta API 600", "Valvulas Double Block & Bleed"],
    },
    en: {
      desc: "Industrial valve manufacturer with own foundry",
      longDesc: "DHV Valve Group operates its own 26,500 m2 foundry with a capacity of 8,000 tons/year. With over 20 years of experience manufacturing steel and special alloy valves, DHV has its own A.O.D. furnace for duplex and ultra-low carbon castings. Quality control includes complete NDE testing (X-ray, magnetic particles, liquid penetrant, ultrasonic, visual inspection), hydrostatic and high-pressure gas testing, and ASTM chemical analysis.",
      products: ["Trunnion ball valves (2 and 3 piece)", "Gate valves (slab gate, conduit)", "Floating ball valves", "Forged valves (API 602)", "API 600 gate valves", "Double Block & Bleed valves"],
    },
    certifications: ["API Q1", "API 6D", "API 6A", "API 600", "API 602", "API 603", "API 608", "ISO 9001", "ISO 14001", "ISO 45001", "NORSOK M-650", "SIL Level III", "CE PED", "ATEX"],
    industries: [{ es: "Petroleras", en: "Oil & Gas", slug: "petroleras" }, { es: "Gas", en: "Gas", slug: "gas" }],
  },
  "della-foglia": {
    name: "Della Foglia",
    country: "Italia",
    image: "/images/products/df-trunnion-automated.jpg",
    es: {
      desc: "Fabricante italiano de valvulas de bola desde 1962",
      longDesc: "Della Foglia, establecida en 1962 en Gorla Minore (VA), Italia, es un Technical Solution Provider con 20,000 m2 de area de produccion y una expansion de 18,000 m2 en curso. Produce aproximadamente 10,000 valvulas customizadas por ano con ingresos promedio de 45 millones de euros. Su facturacion se divide en Oil & Gas (59%), LNG (24%), Green Energy (12%) y Water (5%). Es uno de los primeros fabricantes con calificacion API 6DSS para valvulas subsea. Aprobada por Shell, BP, Petrobras, PEMEX, ExxonMobil, Chevron, ENI, Equinor, Saudi Aramco, entre otros.",
      products: ["Valvulas de bola floating (1/2\" a 6\")", "Valvulas de bola trunnion fully welded (1/2\" a 64\")", "Valvulas de bola trunnion top entry (1/2\" a 48\")", "Valvulas de bola trunnion bolted (1/2\" a 64\")", "Valvulas subsea (API 6DSS)", "Valvulas criogenicas (hasta -196 grados C)", "Valvulas de alta presion (hasta 15,000 psi)", "Valvulas underground", "Valvulas ESD"],
    },
    en: {
      desc: "Italian ball valve manufacturer since 1962",
      longDesc: "Della Foglia, established in 1962 in Gorla Minore (VA), Italy, is a Technical Solution Provider with 20,000 m2 of production area and an 18,000 m2 expansion underway. It produces approximately 10,000 customized valves per year with average revenues of 45 million euros. Revenue splits into Oil & Gas (59%), LNG (24%), Green Energy (12%) and Water (5%). It is one of the first manufacturers with API 6DSS qualification for subsea valves. Approved by Shell, BP, Petrobras, PEMEX, ExxonMobil, Chevron, ENI, Equinor, Saudi Aramco, among others.",
      products: ["Floating ball valves (1/2\" to 6\")", "Trunnion fully welded ball valves (1/2\" to 64\")", "Trunnion top entry ball valves (1/2\" to 48\")", "Trunnion bolted ball valves (1/2\" to 64\")", "Subsea valves (API 6DSS)", "Cryogenic valves (down to -196°C)", "High pressure valves (up to 15,000 psi)", "Underground valves", "ESD valves"],
    },
    certifications: ["API 6D", "API 6A", "API 6DSS", "API 607", "API 6FA", "ATEX", "ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018", "ISO 15848", "SIL Level 3", "PED", "ACHILLES"],
    industries: [{ es: "Petroleras", en: "Oil & Gas", slug: "petroleras" }, { es: "Gas", en: "Gas", slug: "gas" }],
  },
  perar: {
    name: "Perar",
    country: "Italia",
    image: "/images/products/df-trunnion-wb-coated.jpg",
    es: {
      desc: "Fabricante italiano de valvulas de bola trunnion mounted",
      longDesc: "Perar es un fabricante italiano especializado en valvulas de bola trunnion mounted con cuerpo soldado (fully welded body). IPSA mantiene un inventario de valvulas Perar valorado en aproximadamente $5M USD, disponible 24/7 para necesidades urgentes de la industria petrolera y de gas.",
      products: ["Valvulas de bola trunnion mounted", "Cuerpo soldado (fully welded)", "Full bore", "Tamanos de 2\" a 48\"", "Clases ANSI 150 a 2500"],
    },
    en: {
      desc: "Italian trunnion mounted ball valve manufacturer",
      longDesc: "Perar is an Italian manufacturer specialized in trunnion mounted ball valves with fully welded body. IPSA maintains a Perar valve inventory valued at approximately $5M USD, available 24/7 for urgent oil & gas industry needs.",
      products: ["Trunnion mounted ball valves", "Fully welded body", "Full bore", "Sizes from 2\" to 48\"", "ANSI 150 to 2500 classes"],
    },
    certifications: ["API 6D", "NACE MR0175", "ISO 15156-2", "ANSI B16.5"],
    industries: [{ es: "Petroleras", en: "Oil & Gas", slug: "petroleras" }, { es: "Gas", en: "Gas", slug: "gas" }],
  },
  versa: {
    name: "Versa Valves",
    country: "USA",
    image: "/images/products/versa-e4-solenoid.png",
    es: {
      desc: "Fabricante estadounidense de valvulas solenoides y de control direccional",
      longDesc: "Versa Valves es un fabricante estadounidense de valvulas solenoides, valvulas de control direccional neumatico e hidraulico. Sus productos son utilizados en sistemas de automatizacion y control de procesos industriales, con opciones de montaje NAMUR y certificaciones ATEX para ambientes peligrosos.",
      products: ["Valvulas solenoides serie E4", "Valvulas acero inoxidable serie V-316", "Valvulas acero inoxidable serie D-316", "Valvulas bypass serie C-316", "Sistemas VMAP (Modular Air Package)", "Sistemas DMAP (Direct Mount Air Package)", "Valvulas montaje NAMUR"],
    },
    en: {
      desc: "American solenoid and directional control valve manufacturer",
      longDesc: "Versa Valves is an American manufacturer of solenoid valves, pneumatic and hydraulic directional control valves. Their products are used in industrial process automation and control systems, with NAMUR mount options and ATEX certifications for hazardous environments.",
      products: ["E4 series solenoid valves", "V-316 stainless steel series", "D-316 stainless steel series", "C-316 bypass valve series", "VMAP (Modular Air Package) systems", "DMAP (Direct Mount Air Package) systems", "NAMUR mount valves"],
    },
    certifications: ["ATEX", "CSA", "UL", "NAMUR"],
    industries: [{ es: "Petroleras", en: "Oil & Gas", slug: "petroleras" }, { es: "Aceites", en: "Oils", slug: "aceites" }, { es: "Gas", en: "Gas", slug: "gas" }],
  },
};

export default async function SupplierPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const supplier = supplierData[slug];
  if (!supplier) notFound();

  const l = locale as "es" | "en";
  const prefix = `/${locale}`;
  const data = supplier[l];

  return (
    <>
      {/* ═══ HERO ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ minHeight: "45vh" }}>
        <Image
          src={stockImages.suppliersHero}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(20,23,51,0.75) 0%, rgba(20,23,51,0.35) 60%, rgba(20,23,51,0.2) 100%)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f1f]/60 to-transparent" />

        <div className="relative mx-auto max-w-[1600px] px-5 md:px-10 flex items-center" style={{ minHeight: "45vh" }}>
          <div className="py-20 lg:py-24">
            <nav className="text-sm text-white/60 hero-subtitle mb-8">
              <Link href={prefix} className="hover:text-white transition-colors">
                {locale === "es" ? "Inicio" : "Home"}
              </Link>
              <ChevronRight size={14} className="inline mx-1" />
              <Link href={`${prefix}/proveedores`} className="hover:text-white transition-colors">
                {locale === "es" ? "Fabricantes" : "Manufacturers"}
              </Link>
              <ChevronRight size={14} className="inline mx-1" />
              <span className="text-white">{supplier.name}</span>
            </nav>

            <div className="flex items-center gap-6">
              {/* Product image */}
              <div
                className="w-24 h-24 md:w-28 md:h-28 shrink-0 relative rounded overflow-hidden"
                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}
              >
                <Image
                  src={supplier.image}
                  alt={supplier.name}
                  fill
                  className="object-contain p-2"
                  sizes="112px"
                />
              </div>
              <div>
                <h1
                  className="font-heading text-white leading-tight mb-2 hero-text"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 500 }}
                >
                  {supplier.name}
                </h1>
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-gold-light" />
                  <span className="text-white/70 text-sm">{supplier.country}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MAIN CONTENT ══════════════════════════════ */}
      <section className="py-20 lg:py-24" style={{ background: "#ffffff" }}>
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

            {/* ── Left column (content) ────────────────── */}
            <div className="lg:col-span-2 space-y-16">

              {/* About */}
              <div>
                <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
                  {locale === "es" ? "Acerca de" : "About"}
                </p>
                <h2 className="font-heading text-heading mb-6" style={{ fontSize: "1.75rem", fontWeight: 600 }}>
                  {locale === "es" ? `Sobre ${supplier.name}` : `About ${supplier.name}`}
                </h2>
                <p className="text-gray-600 leading-relaxed" style={{ fontSize: "1.05rem", lineHeight: 1.8 }}>
                  {data.longDesc}
                </p>
              </div>

              {/* Products */}
              <div className="p-8 md:p-10" style={{ background: "#f8f9fb" }}>
                <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
                  {locale === "es" ? "Catalogo" : "Catalog"}
                </p>
                <h2 className="font-heading text-heading mb-6" style={{ fontSize: "1.75rem", fontWeight: 600 }}>
                  {locale === "es" ? `Productos ${supplier.name}` : `${supplier.name} Products`}
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {data.products.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-gray-700" style={{ fontSize: "0.95rem" }}>
                      <div className="w-2 h-2 bg-gold rounded-full mt-2 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Certifications */}
              <div>
                <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
                  {locale === "es" ? "Calidad" : "Quality"}
                </p>
                <h2 className="font-heading text-heading mb-6" style={{ fontSize: "1.75rem", fontWeight: 600 }}>
                  {locale === "es" ? "Certificaciones" : "Certifications"}
                </h2>
                <div className="flex flex-wrap gap-2.5">
                  {supplier.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="text-heading text-sm font-medium px-4 py-2 rounded flex items-center gap-1.5"
                      style={{ background: "rgba(36, 39, 81, 0.06)" }}
                    >
                      <Award size={13} strokeWidth={1.5} />
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right column (sidebar) ───────────────── */}
            <div className="space-y-6">

              {/* Quote CTA */}
              <div
                className="p-7 rounded"
                style={{ background: "#242751", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <h3 className="font-heading text-gold-light mb-2" style={{ fontWeight: 600, fontSize: "1.1rem" }}>
                  {locale === "es" ? `Cotizar productos ${supplier.name}` : `Quote ${supplier.name} products`}
                </h3>
                <p className="text-white/50 text-sm mb-5 leading-relaxed">
                  {locale === "es"
                    ? "Nuestro equipo te asesora para encontrar la solucion ideal."
                    : "Our team will help you find the ideal solution."}
                </p>
                <Link
                  href={`${prefix}/contacto`}
                  className="block w-full text-center px-6 py-3.5 bg-gold text-white font-medium rounded btn-lift hover:bg-gold-dark mb-4"
                >
                  {locale === "es" ? "Solicitar cotizacion" : "Request a quote"}
                </Link>
                <a
                  href="tel:+525553973703"
                  className="flex items-center justify-center gap-2 text-white/60 text-sm hover:text-white transition-colors"
                >
                  <Phone size={14} /> +52 55 5397 3703
                </a>
              </div>

              {/* Industries */}
              <div
                className="p-7 rounded"
                style={{ background: "#f8f9fb", border: "1px solid #edf0f3" }}
              >
                <h3 className="font-heading text-heading mb-4" style={{ fontWeight: 600 }}>
                  {locale === "es" ? "Industrias" : "Industries"}
                </h3>
                <div className="space-y-1">
                  {supplier.industries.map((ind) => (
                    <Link
                      key={ind.slug}
                      href={`${prefix}/industrias/${ind.slug}`}
                      className="flex items-center justify-between py-2.5 text-sm text-gray-600 hover:text-gold transition-colors duration-300"
                      style={{ borderBottom: "1px solid #edf0f3" }}
                    >
                      <span>{ind[l]}</span>
                      <ArrowRight size={13} className="text-gold" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Other suppliers */}
              <div
                className="p-7 rounded"
                style={{ background: "#f8f9fb", border: "1px solid #edf0f3" }}
              >
                <h3 className="font-heading text-heading mb-4" style={{ fontWeight: 600 }}>
                  {locale === "es" ? "Otros fabricantes" : "Other manufacturers"}
                </h3>
                <div className="space-y-1">
                  {Object.entries(supplierData).filter(([key]) => key !== slug).map(([key, s]) => (
                    <Link
                      key={key}
                      href={`${prefix}/proveedores/${key}`}
                      className="flex items-center justify-between py-2.5 text-sm text-gray-600 hover:text-gold transition-colors duration-300"
                      style={{ borderBottom: "1px solid #edf0f3" }}
                    >
                      <span>{s.name}</span>
                      <ArrowRight size={13} className="text-gold" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA BOTTOM ════════════════════════════════ */}
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
              {locale === "es"
                ? "Hablemos de tu proyecto"
                : "Let's talk about your project"}
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
