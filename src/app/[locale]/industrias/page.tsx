import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { ChevronRight, ArrowRight, Droplets, Flame, Wind, Phone } from "lucide-react";
import { stockImages } from "@/data/images";

const industries = [
  {
    slug: "petroleras",
    icon: Droplets,
    image: stockImages.oilGas,
    es: {
      name: "Industria Petrolera",
      desc: "Soluciones para upstream, midstream y downstream. Valvulas y actuadores para plataformas offshore, refinerias y ductos.",
      challenge: "La industria petrolera opera en ambientes de alta corrosion, presion extrema y presencia de H2S, donde una falla puede significar millones de dolares en perdidas.",
    },
    en: {
      name: "Oil & Gas Industry",
      desc: "Solutions for upstream, midstream and downstream. Valves and actuators for offshore platforms, refineries and pipelines.",
      challenge: "The oil & gas industry operates in high corrosion, extreme pressure and H2S environments, where a failure can mean millions in losses.",
    },
  },
  {
    slug: "aceites",
    icon: Flame,
    image: stockImages.oils,
    es: {
      name: "Industria de Aceites",
      desc: "Equipos especializados para procesamiento y refinacion de aceites. Control de temperatura y fluidos viscosos.",
      challenge: "El procesamiento de aceites requiere equipos resistentes a altas temperaturas y fluidos viscosos con control preciso de proceso.",
    },
    en: {
      name: "Oils Industry",
      desc: "Specialized equipment for oil processing and refining. Temperature control and viscous fluid handling.",
      challenge: "Oil processing requires equipment resistant to high temperatures and viscous fluids with precise process control.",
    },
  },
  {
    slug: "gas",
    icon: Wind,
    image: stockImages.gas,
    es: {
      name: "Industria del Gas",
      desc: "Valvulas y sistemas para procesamiento, transporte y distribucion de gas natural y GNL.",
      challenge: "La industria del gas exige estanqueidad absoluta, control de emisiones fugitivas y capacidad criogenica para GNL.",
    },
    en: {
      name: "Gas Industry",
      desc: "Valves and systems for natural gas and LNG processing, transport and distribution.",
      challenge: "The gas industry demands absolute tightness, fugitive emissions control and cryogenic capability for LNG.",
    },
  },
];

export default function IndustriesHub() {
  const t = useTranslations("industries");
  const locale = useLocale();
  const prefix = `/${locale}`;
  const l = locale as "es" | "en";

  return (
    <>
      {/* ═══ HERO - Industries (dramatic, image-forward with warm tint) ═══ */}
      <section className="relative overflow-hidden" style={{ minHeight: "55vh" }}>
        <Image
          src={stockImages.industriesHero}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Warm dramatic overlay - different from other pages */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(20,23,51,0.85) 0%, rgba(20,23,51,0.3) 40%, rgba(187,144,52,0.15) 100%)" }} />
        {/* Bottom gradient for text */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-[1600px] px-5 md:px-10 flex items-end" style={{ minHeight: "55vh" }}>
          <div className="max-w-3xl pb-12 lg:pb-16 pt-32">
            <nav className="text-sm text-white/60 mb-5 hero-subtitle">
              <Link href={prefix} className="hover:text-white transition-colors">
                {locale === "es" ? "Inicio" : "Home"}
              </Link>
              <ChevronRight size={14} className="inline mx-1" />
              <span className="text-white">{t("title")}</span>
            </nav>
            <h1
              className="font-heading text-white leading-tight mb-4 hero-text-strong"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 500 }}
            >
              {t("title")}
            </h1>
            <p className="text-white/85 max-w-2xl leading-relaxed hero-subtitle" style={{ fontSize: "1.15rem", lineHeight: 1.7 }}>
              {t("subtitle")}
            </p>
            {/* Gold decorative line */}
            <div className="mt-6 w-24 h-[3px] bg-gradient-to-r from-gold to-gold-light" />
          </div>
        </div>
      </section>

      {/* ═══ INDUSTRIES (full-bleed image cards) ═══════ */}
      <section className="py-20 lg:py-24 bg-surface">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="text-center mb-14">
            <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
              {locale === "es" ? "Sectores que atendemos" : "Sectors we serve"}
            </p>
            <h2 className="font-heading text-gray-900" style={{ fontSize: "2rem", fontWeight: 600 }}>
              {locale === "es"
                ? "Soluciones especializadas por industria"
                : "Specialized solutions by industry"}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <Link
                  key={industry.slug}
                  href={`${prefix}/industrias/${industry.slug}`}
                  className="group block relative rounded-2xl overflow-hidden shadow-card-lg"
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
                      <Icon size={20} className="text-gold-light" strokeWidth={1.5} />
                      <h3 className="font-heading font-bold text-white text-2xl">
                        {industry[l].name}
                      </h3>
                    </div>
                    <p className="text-white/60 text-sm mb-3">{industry[l].desc}</p>
                    <span className="inline-flex items-center gap-1 text-gold-light font-medium text-sm group-hover:text-gold-lighter transition-colors duration-300">
                      {locale === "es" ? "Ver soluciones" : "View solutions"}
                      <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ STATS (dark background) ══════════════════ */}
      <section className="py-20 lg:py-24 relative overflow-hidden bg-navy-section">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="text-center mb-14">
            <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
              {locale === "es" ? "Nuestra experiencia" : "Our experience"}
            </p>
            <h2 className="font-heading text-white mb-4" style={{ fontSize: "2rem", fontWeight: 600 }}>
              {locale === "es"
                ? "Respaldados por resultados"
                : "Backed by results"}
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto leading-relaxed">
              {locale === "es"
                ? "Mas de tres decadas suministrando soluciones criticas para la industria de proceso."
                : "Over three decades supplying critical solutions for the process industry."}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "+38", label: locale === "es" ? "Anos de experiencia" : "Years of experience" },
              { value: "6", label: locale === "es" ? "Sedes" : "Offices" },
              { value: "4+", label: locale === "es" ? "Marcas representadas" : "Represented brands" },
              { value: "$5M+", label: locale === "es" ? "USD en inventario" : "USD in inventory" },
            ].map((stat) => (
              <div key={stat.value} className="text-center">
                <div className="font-heading text-gold" style={{ fontSize: "2.5rem", fontWeight: 600, lineHeight: 1 }}>
                  {stat.value}
                </div>
                <div className="text-white/50 text-sm mt-3 leading-relaxed">{stat.label}</div>
              </div>
            ))}
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
            <h2 className="font-heading text-white mb-4" style={{ fontSize: "2rem", fontWeight: 600 }}>
              {locale === "es"
                ? "Hablemos de tu proyecto"
                : "Let's talk about your project"}
            </h2>
            <p className="text-white/60 mb-10 leading-relaxed" style={{ fontSize: "1.05rem" }}>
              {locale === "es"
                ? "Nuestro equipo de ingenieros esta listo para ayudarte a encontrar la solucion correcta para tu industria."
                : "Our engineering team is ready to help you find the right solution for your industry."}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`${prefix}/contacto`}
                className="inline-flex items-center px-8 py-4 bg-gold text-white font-semibold rounded-xl btn-lift hover:bg-gold-dark"
                style={{ fontSize: "1.05rem" }}
              >
                {t("ctaSpecialist")}
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <a
                href="tel:+525553973703"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium rounded-xl btn-lift hover:bg-white/20"
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
