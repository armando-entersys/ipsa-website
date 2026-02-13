import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const locale = useLocale();
  const prefix = `/${locale}`;

  const discoverLinks = [
    { label: tNav("products"), href: `${prefix}/productos` },
    { label: tNav("services"), href: `${prefix}/servicios` },
    { label: tNav("industries"), href: `${prefix}/industrias` },
    { label: tNav("suppliers"), href: `${prefix}/proveedores` },
    { label: tNav("about"), href: `${prefix}/nosotros` },
    { label: tNav("contact"), href: `${prefix}/contacto` },
  ];

  return (
    <footer className="bg-[#0f1b2d] text-white" style={{ padding: "4rem 0 2rem 0" }}>
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        {/* ── Main grid ────────────────────────────── */}
        <div
          className="grid gap-10 mb-16"
          style={{
            gridTemplateColumns: "2fr 1.5fr 1.5fr 1fr",
          }}
        >
          {/* Col 1: Brand + Tagline */}
          <div className="col-span-full lg:col-span-1" style={{ gridColumn: "1" }}>
            <p
              className="font-heading font-normal leading-tight mb-20 max-w-[80%]"
              style={{
                fontSize: "2rem",
                color: "rgba(255, 255, 255, 0.95)",
              }}
            >
              {locale === "es"
                ? "Tus expertos en valvulas y automatizacion industrial"
                : "Your valve and industrial automation experts"}
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-light to-gold rounded-lg flex items-center justify-center">
                <span className="text-[#0d0f1f] font-heading font-bold text-xl">IP</span>
              </div>
              <div>
                <div className="font-heading font-bold text-lg">IPSA</div>
                <div className="text-[10px] text-white/50 tracking-[0.15em]">
                  INGENIERIA DE PARTES
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: Mexico HQ */}
          <div className="hidden lg:block">
            <h3
              className="text-white font-semibold mb-4"
              style={{ fontSize: "1.1rem", fontFamily: "var(--font-body)" }}
            >
              IPSA (Mexico)
            </h3>
            <p className="text-white/85 text-sm leading-relaxed">
              Convento de Actopan No. 33,
              <br />
              Col. Jardines de Sta. Monica,
              <br />
              54050 Tlalnepantla, Edo. Mex.
            </p>
            <p className="mt-3">
              <a
                href="tel:+525553973703"
                className="text-white/85 text-sm hover:text-gold-light transition-colors duration-300"
              >
                +52 55 5397 3703
              </a>
            </p>
            <p className="mt-1">
              <a
                href="mailto:ventas.mexico@ipsa-cv.com.mx"
                className="text-white/85 text-sm hover:text-gold-light transition-colors duration-300"
              >
                ventas.mexico@ipsa-cv.com.mx
              </a>
            </p>
          </div>

          {/* Col 3: Houston */}
          <div className="hidden lg:block">
            <h3
              className="text-white font-semibold mb-4"
              style={{ fontSize: "1.1rem", fontFamily: "var(--font-body)" }}
            >
              IPSA (Houston)
            </h3>
            <p className="text-white/85 text-sm leading-relaxed">
              1601 Peach Leaf St,
              <br />
              Houston, TX 77039
              <br />
              United States
            </p>
          </div>

          {/* Col 4: Discover */}
          <div>
            <h3
              className="text-white font-semibold mb-4"
              style={{ fontSize: "1.1rem", fontFamily: "var(--font-body)" }}
            >
              {locale === "es" ? "Descubre" : "Discover"}
            </h3>
            <ul className="space-y-2">
              {discoverLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/85 text-sm hover:text-gold-light transition-colors duration-300 block leading-relaxed"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ───────────────────────────── */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6"
          style={{ borderTop: "1px solid rgba(255, 255, 255, 0.15)" }}
        >
          <p className="text-white/70" style={{ fontSize: "0.85rem" }}>
            &copy; {new Date().getFullYear()} Ingenieria de Partes S.A. de C.V.{" "}
            {t("rights")}
          </p>
          <div className="flex items-center gap-6 flex-wrap">
            <Link
              href={`${prefix}/nosotros`}
              className="text-white/70 hover:text-gold-light transition-colors duration-300 whitespace-nowrap"
              style={{ fontSize: "0.85rem" }}
            >
              {t("privacy")}
            </Link>
            <Link
              href={`${prefix}/nosotros`}
              className="text-white/70 hover:text-gold-light transition-colors duration-300 whitespace-nowrap"
              style={{ fontSize: "0.85rem" }}
            >
              {t("terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
