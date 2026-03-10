import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const locale = useLocale();
  const prefix = `/${locale}`;

  const discoverLinks = [
    { label: tNav("products"), href: `${prefix}/productos` },
    { label: tNav("services"), href: `${prefix}/servicios` },
    { label: tNav("industries"), href: `${prefix}/industrias` },
    { label: tNav("suppliers"), href: `${prefix}/fabricantes` },
    { label: tNav("about"), href: `${prefix}/nosotros` },
    { label: tNav("contact"), href: `${prefix}/contacto` },
  ];

  return (
    <footer className="bg-navy-deep text-white pt-16 pb-8">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        {/* ── Row 1: Brand + Tagline ─────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <p className="font-heading font-normal leading-tight max-w-md text-2xl md:text-3xl text-white/95">
            {locale === "es"
              ? "Tus expertos en válvulas y automatización industrial"
              : "Your valve and industrial automation experts"}
          </p>
          <Image
            src="/images/logos/ipsa-logo.png"
            alt="IPSA - Ingeniería de Partes"
            width={160}
            height={40}
            className="h-10 w-auto"
          />
        </div>

        {/* ── Row 2: Offices + Links ─────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* HQ */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              {locale === "es" ? "Oficina Principal" : "Headquarters"}
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Calle 19, No. 210,
              <br />
              Col. Salitral, CP 24130,
              <br />
              Cd. del Carmen, Campeche
            </p>
            <a
              href="tel:+529381380550"
              className="text-white/70 text-sm hover:text-gold-light transition-colors duration-150 mt-2 inline-block"
            >
              +52 938 138 0550
            </a>
          </div>

          {/* EdoMex */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              {locale === "es" ? "Edo. de México" : "Mexico State"}
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Convento de Actopan 33,
              <br />
              Jardines de Santa Mónica, CP 54050,
              <br />
              Tlalnepantla de Baz, Edo. de México
            </p>
          </div>

          {/* CAD */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              {locale === "es" ? "Centro de Distribución" : "Distribution Center"}
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Calle 55 No. 70,
              <br />
              Col. Electricistas, CP 24120,
              <br />
              Cd. del Carmen, Campeche
            </p>
          </div>

          {/* Discover */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              {locale === "es" ? "Descubre" : "Discover"}
            </h3>
            <ul className="space-y-2">
              {discoverLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 text-sm hover:text-gold-light transition-colors duration-150 block leading-relaxed"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ───────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/15">
          <p className="text-white/50 text-xs">
            &copy; {new Date().getFullYear()} Ingeniería de Partes S.A. de C.V.{" "}
            {t("rights")}
          </p>
          <div className="flex items-center gap-6 flex-wrap">
            <Link
              href={`${prefix}/nosotros`}
              className="text-white/50 hover:text-gold-light transition-colors duration-150 whitespace-nowrap text-xs"
            >
              {t("privacy")}
            </Link>
            <Link
              href={`${prefix}/nosotros`}
              className="text-white/50 hover:text-gold-light transition-colors duration-150 whitespace-nowrap text-xs"
            >
              {t("terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
