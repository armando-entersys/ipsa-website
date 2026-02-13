import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import {
  ArrowRight,
  ChevronRight,
  Zap,
  CircleDot,
  Layers,
  SlidersHorizontal,
  ShieldCheck,
  Cpu,
  Settings,
  Gauge,
  Activity,
  Wrench,
} from "lucide-react";
import { stockImages } from "@/data/images";

const allProducts = [
  { slug: "valvulas-bola", es: "Valvulas de Bola", en: "Ball Valves", desc_es: "Floating, trunnion mounted, fully welded. Tamanos de 1/2\" a 64\".", desc_en: "Floating, trunnion mounted, fully welded. Sizes from 1/2\" to 64\".", Icon: CircleDot },
  { slug: "valvulas-compuerta", es: "Valvulas de Compuerta", en: "Gate Valves", desc_es: "Wedge gate, slab gate, conduit. API 600, API 602, API 6D.", desc_en: "Wedge gate, slab gate, conduit. API 600, API 602, API 6D.", Icon: Layers },
  { slug: "valvulas-control", es: "Valvulas de Control", en: "Control Valves", desc_es: "Globe, rotary, butterfly, anti-surge para control de proceso.", desc_en: "Globe, rotary, butterfly, anti-surge for process control.", Icon: SlidersHorizontal },
  { slug: "valvulas-seguridad", es: "Valvulas de Seguridad", en: "Safety Relief Valves", desc_es: "Convencionales, balanceadas y pilot-operated. API 526.", desc_en: "Conventional, balanced and pilot-operated. API 526.", Icon: ShieldCheck },
  { slug: "valvulas-solenoides", es: "Valvulas Solenoides", en: "Solenoid Valves", desc_es: "Control direccional neumatico, hidraulico. Montaje NAMUR.", desc_en: "Pneumatic, hydraulic directional control. NAMUR mount.", Icon: Cpu },
  { slug: "actuadores", es: "Actuadores", en: "Actuators", desc_es: "Neumaticos, electricos, hidraulicos. Rack & pinion, scotch yoke.", desc_en: "Pneumatic, electric, hydraulic. Rack & pinion, scotch yoke.", Icon: Settings },
  { slug: "actuadores-auto-contenidos", es: "Actuadores Auto-Contenidos", en: "Self-Contained Actuators", desc_es: "Operan sin fuente de energia externa. Thrust hasta 600,000 lbs.", desc_en: "Operate without external power. Thrust up to 600,000 lbs.", Icon: Cpu },
  { slug: "paneles-de-control", es: "Paneles de Control", en: "Control Panels", desc_es: "Paneles neumaticos, electrohidraulicos, sistemas ESD custom.", desc_en: "Pneumatic, electrohydraulic panels, custom ESD systems.", Icon: Gauge },
  { slug: "instrumentacion", es: "Instrumentacion", en: "Instrumentation", desc_es: "Transmisores, DCS, SIS, SCADA. Soluciones Yokogawa.", desc_en: "Transmitters, DCS, SIS, SCADA. Yokogawa solutions.", Icon: Activity },
  { slug: "accesorios-refacciones", es: "Accesorios y Refacciones", en: "Accessories & Spare Parts", desc_es: "Filtros reguladores, posicionadores, switch boxes, refacciones.", desc_en: "Filter regulators, positioners, switch boxes, spare parts.", Icon: Wrench },
];

export default function ProductsHub() {
  const t = useTranslations("products");
  const locale = useLocale();
  const prefix = `/${locale}`;
  const l = locale as "es" | "en";

  return (
    <>
      {/* ═══ HERO - Products (image-forward with bottom gradient) ═══ */}
      <section className="relative overflow-hidden" style={{ minHeight: "45vh" }}>
        <Image
          src={stockImages.productsHero}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Light overlay - let image breathe */}
        <div className="absolute inset-0 bg-black/30" />
        {/* Strong bottom gradient for text */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f1f]/95 via-[#0d0f1f]/40 to-transparent" />

        <div className="relative mx-auto max-w-[1600px] px-5 md:px-10 flex items-end" style={{ minHeight: "45vh" }}>
          <div className="max-w-3xl pb-10 lg:pb-14 pt-28">
            <nav className="text-sm text-white/60 mb-4 hero-subtitle">
              <Link href={prefix} className="hover:text-white transition-colors">
                {locale === "es" ? "Inicio" : "Home"}
              </Link>
              <ChevronRight size={14} className="inline mx-1" />
              <span className="text-white">{t("title")}</span>
            </nav>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-[3px] bg-gold" />
              <h1
                className="font-heading text-white leading-tight hero-text"
                style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)", fontWeight: 500 }}
              >
                {t("title")}
              </h1>
            </div>
            <p className="text-white/85 max-w-2xl leading-relaxed hero-subtitle" style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
              {locale === "es"
                ? "Valvulas, actuadores, paneles de control e instrumentacion de fabricantes internacionales para la industria de proceso."
                : "Valves, actuators, control panels and instrumentation from international manufacturers for the process industry."}
            </p>
          </div>
        </div>
      </section>

      {/* ═══ PRODUCTS GRID (gap-px pattern) ═══════════ */}
      <section className="py-20 lg:py-24" style={{ background: "#f8f9fb" }}>
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="text-center mb-14">
            <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
              {locale === "es" ? "Catalogo completo" : "Full catalog"}
            </p>
            <h2 className="font-heading text-heading" style={{ fontSize: "2rem", fontWeight: 600 }}>
              {locale === "es" ? "Nuestros productos" : "Our products"}
            </h2>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto leading-relaxed">
              {locale === "es"
                ? "Soluciones completas en control de fluidos para la industria de proceso."
                : "Complete fluid control solutions for the process industry."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "#e5e7eb" }}>
            {allProducts.map((product) => {
              const PIcon = product.Icon;
              return (
                <Link
                  key={product.slug}
                  href={`${prefix}/productos/${product.slug}`}
                  className="group block bg-white p-8 hover:bg-gray-50/80 transition-all duration-300 relative"
                >
                  <div className="flex items-start gap-5">
                    <div
                      className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                      style={{ background: "rgba(36, 39, 81, 0.06)" }}
                    >
                      <PIcon size={22} className="text-heading group-hover:text-gold transition-colors duration-300" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading font-semibold text-heading text-base mb-1">
                        {product[l]}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-3">
                        {l === "es" ? product.desc_es : product.desc_en}
                      </p>
                      <span className="text-sm text-gold font-medium inline-flex items-center gap-1 group-hover:text-gold-dark transition-colors duration-300">
                        {locale === "es" ? "Ver detalles" : "View details"}
                        <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ AUTOMATION BANNER (with background image) ═ */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        <Image
          src={stockImages.automation}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy-deep/85" />
        <div className="relative mx-auto max-w-[1600px] px-5 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-5">
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: "rgba(187, 144, 52, 0.15)" }}
            >
              <Zap size={28} className="text-gold-light" strokeWidth={1.5} />
            </div>
            <div>
              <h2 className="font-heading text-white mb-1" style={{ fontSize: "1.5rem", fontWeight: 600 }}>
                {locale === "es" ? "Automatizamos tus valvulas" : "We automate your valves"}
              </h2>
              <p className="text-white/60 leading-relaxed" style={{ fontSize: "0.95rem" }}>
                {locale === "es"
                  ? "Paquetes completos de valvula + actuador + accesorios, listos para instalar."
                  : "Complete valve + actuator + accessories packages, ready to install."}
              </p>
            </div>
          </div>
          <Link
            href={`${prefix}/servicios/automatizacion`}
            className="inline-flex items-center px-8 py-4 bg-gold text-white font-semibold rounded btn-lift hover:bg-gold-dark shrink-0"
            style={{ fontSize: "1.05rem" }}
          >
            {locale === "es" ? "Conoce el servicio" : "Learn about the service"}
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </section>

      {/* ═══ CATCH-ALL CTA (with background image) ════ */}
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
              {locale === "es" ? "No encuentras lo que buscas?" : "Can't find what you're looking for?"}
            </h2>
            <p className="text-white/60 mb-10 leading-relaxed" style={{ fontSize: "1.05rem" }}>
              {t("notFound")}
            </p>
            <Link
              href={`${prefix}/contacto`}
              className="inline-flex items-center px-8 py-4 bg-gold text-white font-semibold rounded btn-lift hover:bg-gold-dark"
              style={{ fontSize: "1.05rem" }}
            >
              {t("notFoundCta")}
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
