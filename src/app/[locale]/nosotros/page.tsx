import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import {
  ChevronRight,
  ArrowRight,
  MapPin,
  Users,
  Shield,
  Target,
  Heart,
  Lightbulb,
} from "lucide-react";
import { stockImages } from "@/data/images";

export default function AboutPage() {
  const t = useTranslations("aboutPage");
  const locale = useLocale();
  const prefix = `/${locale}`;

  return (
    <>
      {/* Hero - About (warm, approachable with visible team image) */}
      <section className="relative min-h-[400px] flex items-end overflow-hidden">
        <Image
          src={stockImages.aboutHero}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Base overlay */}
        <div className="absolute inset-0 bg-black/45" />
        {/* Bottom gradient for text */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-navy-dark/25 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 md:px-10 pb-10 lg:pb-14 pt-28">
          <nav className="text-sm text-white/60 mb-5 hero-subtitle">
            <Link href={prefix} className="hover:text-white transition-colors">
              {locale === "es" ? "Inicio" : "Home"}
            </Link>
            <ChevronRight size={14} className="inline mx-1" />
            <span className="text-white">{t("title")}</span>
          </nav>
          <h1
            className="font-heading text-white mb-3 hero-text-strong"
            style={{
              fontWeight: 400,
              fontSize: "clamp(2.2rem, 5vw, 3.75rem)",
            }}
          >
            {t("title")}
          </h1>
          <p className="text-white/85 text-lg max-w-2xl leading-relaxed hero-subtitle">
            {t("subtitle")}
          </p>
          <div className="mt-5 w-16 h-[3px] bg-gold" />
        </div>
      </section>

      {/* Who we are */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-gold font-medium text-sm tracking-widest uppercase mb-3 block">
                {locale === "es" ? "Quienes somos" : "Who we are"}
              </span>
              <h2 className="font-heading font-bold text-gray-900 text-3xl md:text-4xl mb-6">
                {t("whoWeAre")}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {t("whoWeAreText")}
              </p>
            </div>
            <div className="relative h-[360px] lg:h-[440px] rounded-xl overflow-hidden">
              <Image
                src={stockImages.team}
                alt={locale === "es" ? "Nuestro equipo" : "Our team"}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-navy-deep/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Group */}
      <section className="py-16 lg:py-24 bg-surface-alt">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="text-center mb-14">
            <span className="text-gold font-medium text-sm tracking-widest uppercase mb-3 block">
              {locale === "es" ? "Nuestras empresas" : "Our companies"}
            </span>
            <h2 className="font-heading font-bold text-gray-900 text-3xl md:text-4xl mb-4">
              {t("group")}
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t("groupText")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { key: "ipsa", color: "bg-navy", icon: Users },
              { key: "maepsa", color: "bg-gold", icon: Shield },
              { key: "certus", color: "bg-navy-light", icon: Target },
            ].map(({ key, color, icon: Icon }) => (
              <div
                key={key}
                className="bg-white rounded-xl p-8 text-center card-hover shadow-card"
              >
                <div
                  className={`w-16 h-16 ${color} rounded-xl flex items-center justify-center mx-auto mb-4`}
                >
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="font-heading font-bold text-gray-900 text-xl mb-2">
                  {t(key)}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t(`${key}Desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="text-center mb-14">
            <span className="text-gold font-medium text-sm tracking-widest uppercase mb-3 block">
              {locale === "es" ? "Presencia" : "Presence"}
            </span>
            <h2 className="font-heading font-bold text-gray-900 text-3xl md:text-4xl">
              {t("locations")}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { city: "CDMX", label: "HQ", full: "Ciudad de Mexico" },
              { city: "Cd. del Carmen", label: "CAD", full: "Campeche" },
              {
                city: "Paraiso",
                label: locale === "es" ? "Taller" : "Workshop",
                full: "Tabasco",
              },
              { city: "Houston", label: "Intl.", full: "Texas, USA" },
              {
                city: "Villahermosa",
                label: locale === "es" ? "Ventas" : "Sales",
                full: "Tabasco",
              },
              {
                city: "Tampico",
                label: locale === "es" ? "Ventas" : "Sales",
                full: "Tamaulipas",
              },
            ].map((loc) => (
              <div
                key={loc.city}
                className="bg-white rounded-xl p-5 text-center card-hover shadow-card"
              >
                <MapPin size={20} className="text-gold mx-auto mb-2" />
                <div className="font-heading font-semibold text-gray-900 text-sm">
                  {loc.city}
                </div>
                <div className="text-[11px] text-gray-500">{loc.full}</div>
                <div className="mt-2 inline-block bg-gold/10 text-gold text-[10px] font-medium px-2 py-0.5 rounded">
                  {loc.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-navy-section">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="text-center mb-14">
            <span className="text-gold font-medium text-sm tracking-widest uppercase mb-3 block">
              {locale === "es" ? "Lo que nos define" : "What defines us"}
            </span>
            <h2 className="font-heading font-bold text-white text-3xl md:text-4xl">
              {t("values")}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                es: "Confiabilidad",
                en: "Reliability",
                desc_es: "Cumplimos lo que prometemos, siempre.",
                desc_en: "We deliver on our promises, always.",
              },
              {
                icon: Lightbulb,
                es: "Experiencia",
                en: "Expertise",
                desc_es: "+38 anos de conocimiento tecnico acumulado.",
                desc_en: "38+ years of accumulated technical knowledge.",
              },
              {
                icon: Heart,
                es: "Servicio",
                en: "Service",
                desc_es: "El cliente es el centro de todo lo que hacemos.",
                desc_en: "The customer is at the center of everything we do.",
              },
              {
                icon: Target,
                es: "Integridad",
                en: "Integrity",
                desc_es: "Transparencia y etica en cada relacion.",
                desc_en: "Transparency and ethics in every relationship.",
              },
            ].map(({ icon: Icon, ...val }) => (
              <div key={val.es} className="text-center p-6">
                <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon size={28} className="text-gold-light" />
                </div>
                <h3 className="font-heading font-semibold text-white text-lg mb-2">
                  {locale === "es" ? val.es : val.en}
                </h3>
                <p className="text-white/60 text-sm">
                  {locale === "es" ? val.desc_es : val.desc_en}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-pages links */}
      <section className="py-16 lg:py-24 bg-surface-muted">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href={`${prefix}/nosotros/alianzas`}
              className="group bg-white rounded-xl p-8 card-hover shadow-card"
            >
              <h3 className="font-heading font-bold text-gray-900 text-xl mb-2">
                {locale === "es" ? "Alianzas estrategicas" : "Strategic alliances"}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {locale === "es"
                  ? "Conoce nuestras relaciones con fabricantes de clase mundial."
                  : "Learn about our relationships with world-class manufacturers."}
              </p>
              <span className="text-gold font-medium text-sm flex items-center gap-1">
                {locale === "es" ? "Ver mas" : "Learn more"}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href={`${prefix}/nosotros/historia`}
              className="group bg-white rounded-xl p-8 card-hover shadow-card"
            >
              <h3 className="font-heading font-bold text-gray-900 text-xl mb-2">
                {locale === "es" ? "Nuestra historia" : "Our history"}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {locale === "es"
                  ? "Mas de tres decadas de trayectoria e innovacion."
                  : "Over three decades of trajectory and innovation."}
              </p>
              <span className="text-gold font-medium text-sm flex items-center gap-1">
                {locale === "es" ? "Ver mas" : "Learn more"}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 lg:py-28">
        <Image
          src={stockImages.industrial}
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy-deep/80" />
        <div className="relative z-10 mx-auto max-w-[1600px] px-5 md:px-10 text-center">
          <h2 className="font-heading font-bold text-white text-3xl md:text-4xl mb-4">
            {locale === "es" ? "Trabajemos juntos" : "Let's work together"}
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            {locale === "es"
              ? "Contactenos para encontrar la solucion que su proyecto necesita."
              : "Contact us to find the solution your project needs."}
          </p>
          <Link
            href={`${prefix}/contacto`}
            className="inline-flex items-center px-8 py-3.5 bg-gold text-white font-medium rounded-xl btn-lift hover:bg-gold-dark transition-colors"
          >
            {t("ctaWork")}
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}
