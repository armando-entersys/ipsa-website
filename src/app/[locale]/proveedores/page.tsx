import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { ChevronRight, ArrowRight, MapPin, Phone } from "lucide-react";
import { stockImages } from "@/data/images";

const suppliers = [
  {
    slug: "dhv",
    name: "DHV Valve Group",
    image: "/images/products/dhv-trunnion-2pc.jpg",
    es: { desc: "Fabricante de valvulas industriales con fundicion propia de 26,500 m2. Mas de 20 anos fabricando valvulas de acero y aleaciones especiales. Certificaciones API Q1, API 6D, API 6A, ISO 9001/14001/45001, NORSOK M-650, SIL Level III." },
    en: { desc: "Industrial valve manufacturer with own foundry of 26,500 m2. Over 20 years manufacturing steel and special alloy valves. Certifications API Q1, API 6D, API 6A, ISO 9001/14001/45001, NORSOK M-650, SIL Level III." },
    products_es: "Valvulas de bola trunnion, valvulas de compuerta, valvulas de bola flotantes, valvulas forjadas",
    products_en: "Trunnion ball valves, gate valves, floating ball valves, forged valves",
    country: "International",
  },
  {
    slug: "della-foglia",
    name: "Della Foglia",
    image: "/images/products/df-trunnion-automated.jpg",
    es: { desc: "Fabricante italiano establecido en 1962. Proveedor de soluciones tecnicas con 20,000 m2 de area de produccion. Capacidad de 10,000 valvulas customizadas por ano. Aprobado por Shell, BP, Petrobras y PEMEX. Certificaciones API 6D, API 6A, API 6DSS." },
    en: { desc: "Italian manufacturer established in 1962. Technical solution provider with 20,000 m2 production area. Capacity of 10,000 customized valves per year. Approved by Shell, BP, Petrobras and PEMEX. Certifications API 6D, API 6A, API 6DSS." },
    products_es: "Valvulas de bola de 1/2\" a 64\", floating, trunnion, top entry, subsea, criogenicas, alta presion hasta 15,000 psi",
    products_en: "Ball valves from 1/2\" to 64\", floating, trunnion, top entry, subsea, cryogenic, high pressure up to 15,000 psi",
    country: "Italia",
  },
  {
    slug: "perar",
    name: "Perar",
    image: "/images/products/df-trunnion-wb-coated.jpg",
    es: { desc: "Fabricante italiano de valvulas de bola trunnion mounted con cuerpo soldado. Tamanos de 2\" a 48\", clases ANSI 150 a 2500. Cumple API 6D, NACE MR0175." },
    en: { desc: "Italian manufacturer of trunnion mounted ball valves with welded body. Sizes from 2\" to 48\", ANSI 150 to 2500 classes. Meets API 6D, NACE MR0175." },
    products_es: "Valvulas de bola trunnion mounted, cuerpo soldado, full bore",
    products_en: "Trunnion mounted ball valves, welded body, full bore",
    country: "Italia",
  },
  {
    slug: "versa",
    name: "Versa Valves",
    image: "/images/products/versa-e4-solenoid.png",
    es: { desc: "Fabricante estadounidense de valvulas solenoides y de control direccional. Soluciones para automatizacion y control de procesos con montaje NAMUR y certificaciones ATEX." },
    en: { desc: "American manufacturer of solenoid and directional control valves. Solutions for automation and process control with NAMUR mount and ATEX certifications." },
    products_es: "Valvulas solenoides, control direccional neumatico, control direccional hidraulico, montaje NAMUR",
    products_en: "Solenoid valves, pneumatic directional control, hydraulic directional control, NAMUR mount",
    country: "USA",
  },
];

export default function SuppliersHub() {
  const t = useTranslations("suppliers");
  const locale = useLocale();
  const prefix = `/${locale}`;
  const l = locale as "es" | "en";

  return (
    <>
      {/* ═══ HERO ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ minHeight: "50vh" }}>
        <Image
          src={stockImages.suppliersHero}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy-deep/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy-deep/60 to-transparent" />

        <div className="relative mx-auto max-w-[1600px] px-5 md:px-10 flex items-center" style={{ minHeight: "50vh" }}>
          <div className="max-w-3xl py-20 lg:py-28">
            <nav className="text-sm text-white/50 mb-8">
              <Link href={prefix} className="hover:text-white transition-colors">
                {locale === "es" ? "Inicio" : "Home"}
              </Link>
              <ChevronRight size={14} className="inline mx-1" />
              <span className="text-white">
                {locale === "es" ? "Fabricantes" : "Manufacturers"}
              </span>
            </nav>
            <h1
              className="font-heading text-white leading-tight mb-6"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)", fontWeight: 400 }}
            >
              {t("title")}
            </h1>
            <p className="text-white/80 max-w-2xl leading-relaxed" style={{ fontSize: "1.15rem", lineHeight: 1.7 }}>
              {t("subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* ═══ SUPPLIERS LIST ═════════════════════════════ */}
      <section className="py-20 lg:py-24" style={{ background: "#ffffff" }}>
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="text-center mb-16">
            <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
              {locale === "es" ? "Nuestros socios" : "Our partners"}
            </p>
            <h2 className="font-heading text-heading" style={{ fontSize: "2rem", fontWeight: 600 }}>
              {locale === "es"
                ? "Alianzas con fabricantes de clase mundial"
                : "World-class manufacturer partnerships"}
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto leading-relaxed">
              {locale === "es"
                ? "Representamos exclusivamente a fabricantes europeos y americanos reconocidos mundialmente."
                : "We exclusively represent globally recognized European and American manufacturers."}
            </p>
          </div>

          <div className="space-y-6">
            {suppliers.map((supplier) => (
              <Link
                key={supplier.slug}
                href={`${prefix}/proveedores/${supplier.slug}`}
                className="group block card-hover"
                style={{ border: "1px solid #e5e7eb" }}
              >
                <div className="flex flex-col md:flex-row">
                  {/* Product image */}
                  <div className="shrink-0 w-full md:w-56 relative overflow-hidden" style={{ background: "#f8f9fb", minHeight: "180px" }}>
                    <Image
                      src={supplier.image}
                      alt={supplier.name}
                      fill
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 224px"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-7 md:p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <h2 className="font-heading text-heading text-xl md:text-2xl" style={{ fontWeight: 600 }}>
                        {supplier.name}
                      </h2>
                      <span
                        className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded"
                        style={{ background: "rgba(36, 39, 81, 0.06)", color: "#4b5563" }}
                      >
                        <MapPin size={11} />
                        {supplier.country}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base">
                      {supplier[l].desc}
                    </p>
                    <p className="text-sm text-gray-500 mb-5" style={{ borderTop: "1px solid #f3f4f6", paddingTop: "0.75rem" }}>
                      <span className="font-semibold text-heading">
                        {locale === "es" ? "Productos:" : "Products:"}
                      </span>{" "}
                      {l === "es" ? supplier.products_es : supplier.products_en}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-gold font-medium text-sm group-hover:text-gold-dark transition-colors duration-300">
                      {locale === "es" ? "Ver mas" : "Learn more"}
                      <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ADDITIONAL BRANDS ══════════════════════════ */}
      <section className="py-20 lg:py-24" style={{ background: "#f8f9fb" }}>
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
              {locale === "es" ? "Marcas adicionales" : "Additional brands"}
            </p>
            <h2 className="font-heading text-heading mb-4" style={{ fontSize: "2rem", fontWeight: 600 }}>
              {locale === "es"
                ? "Tambien representamos"
                : "We also represent"}
            </h2>
            <p className="text-gray-500 leading-relaxed mb-10">
              {locale === "es"
                ? "Ademas de nuestros socios principales, representamos marcas como Consolidated, Masoneilan, Yokogawa, Emerson/Bettis y mas."
                : "In addition to our main partners, we represent brands like Consolidated, Masoneilan, Yokogawa, Emerson/Bettis and more."}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              {["Consolidated", "Masoneilan", "Yokogawa", "Emerson/Bettis"].map((brand) => (
                <div
                  key={brand}
                  className="px-6 py-3 bg-white card-hover"
                  style={{ border: "1px solid #e5e7eb" }}
                >
                  <span className="font-heading font-semibold text-heading text-sm">{brand}</span>
                </div>
              ))}
            </div>
            <Link
              href={`${prefix}/contacto`}
              className="inline-flex items-center px-8 py-3.5 bg-gold text-white font-medium rounded btn-lift hover:bg-gold-dark"
            >
              {locale === "es" ? "Consultar disponibilidad" : "Check availability"}
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ CTA ════════════════════════════════════════ */}
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
                ? "Necesitas una solucion especifica?"
                : "Need a specific solution?"}
            </h2>
            <p className="text-white/60 mb-10 leading-relaxed" style={{ fontSize: "1.05rem" }}>
              {locale === "es"
                ? "Nuestro equipo de ingenieros te asesora para encontrar la valvula o equipo ideal para tu operacion."
                : "Our engineering team will advise you to find the ideal valve or equipment for your operation."}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`${prefix}/contacto`}
                className="inline-flex items-center px-8 py-4 bg-gold text-white font-semibold rounded btn-lift hover:bg-gold-dark"
                style={{ fontSize: "1.05rem" }}
              >
                {locale === "es" ? "Solicitar cotizacion" : "Request a quote"}
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
