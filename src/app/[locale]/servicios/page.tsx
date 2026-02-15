import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { ArrowRight, ChevronRight, Zap, Settings, Headphones, Phone } from "lucide-react";
import { stockImages, getBlur } from "@/data/images";

const services = [
  {
    slug: "automatizacion",
    icon: Zap,
    image: stockImages.automation,
    es: {
      name: "Automatización de válvulas y procesos",
      desc: "Diseñamos, construimos y comisionamos paquetes completos de automatización para válvulas de proceso. Incluye selección de actuadores, accesorios, paneles de control y sistemas ESD (Emergency Shutdown).",
      capabilities: [
        "Paquetes válvula + actuador + accesorios",
        "Sistemas ESD (Emergency Shutdown)",
        "Paneles de control neumáticos y electrohidráulicos",
        "Comisionamiento en sitio",
        "Soporte post-venta 24/7",
      ],
    },
    en: {
      name: "Valve and process automation",
      desc: "We design, build and commission complete automation packages for process valves. Includes actuator selection, accessories, control panels and ESD (Emergency Shutdown) systems.",
      capabilities: [
        "Valve + actuator + accessories packages",
        "ESD (Emergency Shutdown) systems",
        "Pneumatic and electrohydraulic control panels",
        "On-site commissioning",
        "24/7 post-sale support",
      ],
    },
  },
  {
    slug: "ingenieria",
    icon: Settings,
    image: stockImages.engineering,
    es: {
      name: "Ingeniería y proyectos EPC",
      desc: "Como grupo integrado (IPSA + MAEPSA + Certus), ofrecemos capacidad EPC completa: ingeniería de detalle, procura de equipos y materiales, y construcción de instalaciones industriales.",
      capabilities: [
        "Ingeniería básica y de detalle",
        "Ingeniería conceptual",
        "Procura de equipos y materiales",
        "Construcción y entrega de instalaciones",
        "Gestión integral de proyectos",
      ],
    },
    en: {
      name: "Engineering and EPC projects",
      desc: "As an integrated group (IPSA + MAEPSA + Certus), we offer full EPC capability: detailed engineering, equipment and materials procurement, and industrial facility construction.",
      capabilities: [
        "Basic and detailed engineering",
        "Conceptual engineering",
        "Equipment and materials procurement",
        "Facility construction and delivery",
        "Integral project management",
      ],
    },
  },
  {
    slug: "soporte-in-house",
    icon: Headphones,
    image: stockImages.workshop,
    es: {
      name: "Centro de Automatización y Distribución (CAD)",
      desc: "Nuestro CAD en Cd. del Carmen ofrece reparación, pruebas y mantenimiento de equipos con inventario disponible 24/7 valorado en más de $5M USD.",
      capabilities: [
        "Reparación de válvulas de control y seguridad",
        "Pruebas hidrostáticas y neumáticas",
        "Pruebas de torque",
        "Inspección NDE (ultrasonido, partículas magnéticas, líquidos penetrantes, PMI)",
        "Almacén 24/7 con inventario de +$5M USD",
        "Entrenamiento técnico especializado",
      ],
    },
    en: {
      name: "Automation and Distribution Center (CAD)",
      desc: "Our CAD in Cd. del Carmen offers equipment repair, testing and maintenance with 24/7 available inventory valued at over $5M USD.",
      capabilities: [
        "Control and safety valve repair",
        "Hydrostatic and pneumatic testing",
        "Torque testing",
        "NDE inspection (ultrasonic, magnetic particle, liquid penetrant, PMI)",
        "24/7 warehouse with $5M+ USD inventory",
        "Specialized technical training",
      ],
    },
  },
];

export default function ServicesHub() {
  const t = useTranslations("services");
  const locale = useLocale();
  const prefix = `/${locale}`;
  const l = locale as "es" | "en";

  return (
    <>
      {/* ═══ HERO - Services (split: solid left + image right) ═══ */}
      <section className="relative overflow-hidden" style={{ minHeight: "50vh" }}>
        <Image
          src={stockImages.servicesHero}
          alt=""
          fill
          priority
          placeholder="blur"
          blurDataURL={getBlur(stockImages.servicesHero)}
          className="object-cover"
          sizes="100vw"
        />
        {/* Base overlay */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Bottom gradient for text */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/50 via-navy-dark/15 to-transparent" />

        <div className="relative mx-auto max-w-[1600px] px-5 md:px-10 flex items-center" style={{ minHeight: "50vh" }}>
          <div className="max-w-xl py-16 lg:py-24">
            <nav className="text-sm text-white/50 mb-5">
              <Link href={prefix} className="hover:text-white transition-colors">
                {locale === "es" ? "Inicio" : "Home"}
              </Link>
              <ChevronRight size={14} className="inline mx-1" />
              <span className="text-white">{t("title")}</span>
            </nav>
            {/* Gold left border accent */}
            <div className="border-l-4 border-gold pl-6">
              <h1
                className="font-heading text-white leading-tight mb-4 hero-text-strong"
                style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", fontWeight: 500 }}
              >
                {t("title")}
              </h1>
              <p className="text-white/80 leading-relaxed" style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
                {t("subtitle")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES - Alternating layout ═══════════ */}
      <section className="py-20 lg:py-24 bg-surface">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="text-center mb-16">
            <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
              {locale === "es" ? "Soluciones integrales" : "Comprehensive solutions"}
            </p>
            <h2 className="font-heading text-gray-900" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2rem)", fontWeight: 500 }}>
              {t("title")}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-3 leading-relaxed">
              {t("subtitle")}
            </p>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={service.slug}
                  className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-0 items-stretch rounded-xl overflow-hidden shadow-card-lg card-hover`}
                >
                  {/* Image side */}
                  <div className="lg:w-1/2 relative rounded-xl overflow-hidden" style={{ minHeight: "400px" }}>
                    <Image
                      src={service.image}
                      alt={service[l].name}
                      fill
                      placeholder="blur"
                      blurDataURL={getBlur(service.image)}
                      className="object-cover transition-transform duration-300 group-hover:scale-105 hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-navy-deep/20" />
                  </div>

                  {/* Content side */}
                  <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-5">
                      <div
                        className="icon-bg-navy w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                      >
                        <Icon size={26} className="text-gray-700" strokeWidth={1.5} />
                      </div>
                      <p className="text-gold font-medium text-sm tracking-widest uppercase">
                        {locale === "es" ? `Servicio ${String(index + 1).padStart(2, "0")}` : `Service ${String(index + 1).padStart(2, "0")}`}
                      </p>
                    </div>
                    <h3
                      className="font-heading text-gray-900 mb-4"
                      style={{ fontSize: "1.65rem", fontWeight: 600 }}
                    >
                      {service[l].name}
                    </h3>
                    <p className="text-gray-500 leading-relaxed mb-6">
                      {service[l].desc}
                    </p>

                    {/* Capabilities preview */}
                    <ul className="space-y-2.5 mb-8">
                      {service[l].capabilities.slice(0, 4).map((cap, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0" />
                          {cap}
                        </li>
                      ))}
                      {service[l].capabilities.length > 4 && (
                        <li className="text-sm text-gray-500 pl-4.5">
                          +{service[l].capabilities.length - 4} {locale === "es" ? "más" : "more"}...
                        </li>
                      )}
                    </ul>

                    <div>
                      <Link
                        href={`${prefix}/servicios/${service.slug}`}
                        className="inline-flex items-center px-7 py-3.5 bg-gold text-white font-medium rounded-xl btn-lift hover:bg-gold-dark"
                        style={{ fontSize: "0.95rem" }}
                      >
                        {t("learnMore")}
                        <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ CAPABILITIES overview ════════════════════ */}
      <section className="py-20 lg:py-24 bg-surface-alt">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="text-center mb-14">
            <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
              {locale === "es" ? "Capacidades" : "Capabilities"}
            </p>
            <h2 className="font-heading text-gray-900" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2rem)", fontWeight: 500 }}>
              {locale === "es" ? "Un socio integral para tu operación" : "A comprehensive partner for your operation"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.slug}
                  className="bg-white rounded-xl p-8 shadow-card card-hover"
                >
                  <div
                    className="icon-bg-gold w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                  >
                    <Icon size={26} className="text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-semibold text-gray-900 text-lg mb-4">
                    {t("capabilities")}
                  </h3>
                  <ul className="space-y-2.5">
                    {service[l].capabilities.map((cap, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ CTA with background image ════════════════ */}
      <section className="relative py-24 lg:py-28 overflow-hidden">
        <Image
          src={stockImages.industrial}
          alt=""
          fill
          placeholder="blur"
          blurDataURL={getBlur(stockImages.industrial)}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy-deep/65" />
        <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-white mb-4" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2rem)", fontWeight: 500 }}>
              {locale === "es" ? "Hablemos de tu proyecto" : "Let's talk about your project"}
            </h2>
            <p className="text-white/60 mb-10 leading-relaxed" style={{ fontSize: "1.05rem" }}>
              {locale === "es"
                ? "Nuestro equipo de ingenieros está listo para ayudarte a encontrar la solución correcta."
                : "Our engineering team is ready to help you find the right solution."}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`${prefix}/contacto`}
                className="inline-flex items-center px-8 py-4 bg-gold text-white font-semibold rounded-xl btn-lift hover:bg-gold-dark"
                style={{ fontSize: "1.05rem" }}
              >
                {t("ctaAdvisory")}
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
