import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { ChevronRight, ArrowRight } from "lucide-react";

const alliances = [
  { name: "DHV Valve Group", years: "10+", country: "International", slug: "dhv" },
  { name: "Della Foglia", years: "15+", country: "Italia", slug: "della-foglia" },
  { name: "Perar", years: "20+", country: "Italia", slug: "perar" },
  { name: "Versa Valves", years: "15+", country: "USA", slug: "versa" },
  { name: "Consolidated (Emerson)", years: "10+", country: "USA", slug: "" },
  { name: "Masoneilan (Baker Hughes)", years: "10+", country: "USA", slug: "" },
  { name: "Yokogawa", years: "10+", country: "Japan", slug: "" },
  { name: "Emerson / Bettis / Shafer", years: "15+", country: "USA", slug: "" },
];

const suppliersHeroUrl =
  "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1920&q=80&auto=format";

export default function AlliancesPage() {
  const t = useTranslations("alliances");
  const locale = useLocale();
  const prefix = `/${locale}`;

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[420px] flex items-center">
        <Image
          src={suppliersHeroUrl}
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy-deep/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/80 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 md:px-10 py-20 lg:py-28">
          <nav className="text-sm text-white/50 mb-6">
            <Link href={prefix} className="hover:text-white transition-colors">
              {locale === "es" ? "Inicio" : "Home"}
            </Link>
            <ChevronRight size={14} className="inline mx-1" />
            <Link
              href={`${prefix}/nosotros`}
              className="hover:text-white transition-colors"
            >
              {locale === "es" ? "Nosotros" : "About"}
            </Link>
            <ChevronRight size={14} className="inline mx-1" />
            <span className="text-white">{t("title")}</span>
          </nav>
          <h1
            className="font-heading text-white mb-4"
            style={{
              fontWeight: 500,
              fontSize: "clamp(2.2rem, 5vw, 3.75rem)",
            }}
          >
            {t("title")}
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* Alliance cards */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="text-center mb-14">
            <span className="text-gold font-medium text-sm tracking-widest uppercase mb-3 block">
              {locale === "es" ? "Socios comerciales" : "Business partners"}
            </span>
            <h2 className="font-heading font-bold text-gray-900 text-3xl md:text-4xl mb-4">
              {locale === "es"
                ? "Fabricantes de clase mundial"
                : "World-class manufacturers"}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {alliances.map((alliance) => {
              const content = (
                <div
                  className="bg-white rounded-2xl p-6 card-hover h-full shadow-card"
                >
                  <div className="w-16 h-16 bg-navy-deep rounded-2xl flex items-center justify-center mb-4">
                    <span className="text-white font-heading font-bold text-xs text-center leading-tight px-1">
                      {alliance.name.split(" ")[0]}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-gray-900 text-lg mb-1">
                    {alliance.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                      {alliance.country}
                    </span>
                    <span className="text-xs bg-gold/10 text-gold px-2 py-0.5 rounded">
                      {alliance.years} {locale === "es" ? "anos" : "years"}
                    </span>
                  </div>
                </div>
              );

              return alliance.slug ? (
                <Link
                  key={alliance.name}
                  href={`${prefix}/proveedores/${alliance.slug}`}
                >
                  {content}
                </Link>
              ) : (
                <div key={alliance.name}>{content}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 lg:py-28">
        <Image
          src={suppliersHeroUrl}
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy-deep/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 to-navy-deep/60" />
        <div className="relative z-10 mx-auto max-w-[1600px] px-5 md:px-10 text-center">
          <h2 className="font-heading font-bold text-white text-3xl md:text-4xl mb-4">
            {locale === "es"
              ? "Conoce todos nuestros fabricantes"
              : "Discover all our manufacturers"}
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            {locale === "es"
              ? "Representamos a los mejores fabricantes de la industria."
              : "We represent the best manufacturers in the industry."}
          </p>
          <Link
            href={`${prefix}/proveedores`}
            className="inline-flex items-center px-8 py-3.5 bg-gold text-white font-medium rounded-xl btn-lift hover:bg-gold-dark transition-colors"
          >
            {locale === "es" ? "Ver todos los fabricantes" : "View all manufacturers"}
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}
