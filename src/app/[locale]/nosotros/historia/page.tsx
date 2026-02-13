import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { ChevronRight, ArrowRight } from "lucide-react";

const timeline = [
  {
    year: "1986",
    es: "Fundacion de Ingenieria de Partes S.A. de C.V. en Ciudad de Mexico",
    en: "Foundation of Ingenieria de Partes S.A. de C.V. in Mexico City",
  },
  {
    year: "1990s",
    es: "Consolidacion como distribuidor de valvulas y automatizacion para la industria petrolera mexicana",
    en: "Consolidation as a valve and automation distributor for the Mexican oil industry",
  },
  {
    year: "2000s",
    es: "Apertura de oficinas en Cd. del Carmen y Paraiso, Tabasco, para servir al sector offshore",
    en: "Opening of offices in Cd. del Carmen and Paraiso, Tabasco, to serve the offshore sector",
  },
  {
    year: "2005",
    es: "Establecimiento de MAEPSA para servicios de mantenimiento y reparacion de equipos de proceso",
    en: "Establishment of MAEPSA for process equipment maintenance and repair services",
  },
  {
    year: "2010s",
    es: "Expansion de alianzas con Della Foglia, Perar, DHV y otros fabricantes internacionales",
    en: "Expansion of alliances with Della Foglia, Perar, DHV and other international manufacturers",
  },
  {
    year: "2015",
    es: "Creacion de Certus Process Solutions en Houston, TX para fabricacion de actuadores auto-contenidos",
    en: "Creation of Certus Process Solutions in Houston, TX for self-contained actuator manufacturing",
  },
  {
    year: "2020s",
    es: "Consolidacion del grupo IPSA-MAEPSA-Certus como solucion EPC integral con presencia en 6 sedes",
    en: "Consolidation of the IPSA-MAEPSA-Certus group as an integral EPC solution with 6 locations",
  },
  {
    year: "2024",
    es: "Rediseno de marca y lanzamiento de nueva plataforma digital",
    en: "Brand redesign and launch of new digital platform",
  },
];

const aboutHeroUrl =
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80&auto=format";

export default function HistoryPage() {
  const t = useTranslations("history");
  const locale = useLocale();
  const prefix = `/${locale}`;
  const l = locale as "es" | "en";

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[420px] flex items-center">
        <Image
          src={aboutHeroUrl}
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

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="text-center mb-14">
            <span className="text-gold font-medium text-sm tracking-widest uppercase mb-3 block">
              {locale === "es" ? "Nuestra trayectoria" : "Our trajectory"}
            </span>
            <h2 className="font-heading font-bold text-gray-900 text-3xl md:text-4xl">
              {locale === "es"
                ? "Mas de tres decadas de experiencia"
                : "Over three decades of experience"}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto relative">
            {/* Gold timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-gold/60 to-gold/20" />

            <div className="space-y-10">
              {timeline.map((item) => (
                <div key={item.year} className="relative flex gap-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center z-10 shrink-0 border-2 border-gold bg-navy-deep">
                    <span className="text-xs font-bold text-white">
                      {item.year}
                    </span>
                  </div>
                  <div className="pt-2 pb-2">
                    <p className="text-gray-700 leading-relaxed text-base">
                      {item[l]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 lg:py-28">
        <Image
          src={aboutHeroUrl}
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy-deep/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 to-navy-deep/60" />
        <div className="relative z-10 mx-auto max-w-[1600px] px-5 md:px-10 text-center">
          <h2 className="font-heading font-bold text-white text-3xl md:text-4xl mb-4">
            {locale === "es"
              ? "Escribamos el siguiente capitulo juntos"
              : "Let's write the next chapter together"}
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            {locale === "es"
              ? "Descubra como nuestras soluciones pueden impulsar su proyecto."
              : "Discover how our solutions can power your project."}
          </p>
          <Link
            href={`${prefix}/contacto`}
            className="inline-flex items-center px-8 py-3.5 bg-gold text-white font-medium rounded-xl btn-lift hover:bg-gold-dark transition-colors"
          >
            {locale === "es" ? "Conoce nuestros servicios" : "Discover our services"}
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}
