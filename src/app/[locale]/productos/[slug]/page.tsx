import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowRight, Phone, Shield, MapPin } from "lucide-react";
import { notFound } from "next/navigation";
import { stockImages } from "@/data/images";
import { productCategories, manufacturers } from "@/data/products";

export default async function ProductCategoryPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  const category = productCategories[slug];
  if (!category) notFound();

  const l = locale as "es" | "en";
  const prefix = `/${locale}`;
  const data = category[l];

  /* ── Resolve suppliers from manufacturer IDs ── */
  const categorySuppliers = (category.suppliers ?? [])
    .map((id: string) => manufacturers[id])
    .filter(Boolean);

  /* ── Subtypes ── */
  const subtypes = category.subtypes ?? [];

  /* ── Standards ── */
  const standards = category.standards ?? [];

  /* ── Services ── */
  const serviceNames: Record<string, { es: string; en: string }> = {
    automatizacion: { es: "Automatizacion de Valvulas", en: "Valve Automation" },
    ingenieria: { es: "Ingenieria y Proyectos EPC", en: "Engineering & EPC Projects" },
    "soporte-in-house": { es: "Centro de Automatizacion (CAD)", en: "Automation Center (CAD)" },
  };
  const services = (category.services ?? []).map((slug: string) => ({
    slug,
    es: serviceNames[slug]?.es ?? slug,
    en: serviceNames[slug]?.en ?? slug,
  }));

  /* ── Industries ── */
  const industryNames: Record<string, { es: string; en: string }> = {
    petroleras: { es: "Petroleras", en: "Oil & Gas" },
    aceites: { es: "Aceites", en: "Oils" },
    gas: { es: "Gas", en: "Gas" },
  };
  const industries = (category.industries ?? []).map((slug: string) => ({
    slug,
    es: industryNames[slug]?.es ?? slug,
    en: industryNames[slug]?.en ?? slug,
  }));

  return (
    <>
      {/* ======== HERO (product-specific image) ======== */}
      <section className="relative overflow-hidden" style={{ minHeight: "50vh" }}>
        <Image
          src={category.image}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-navy-dark/20 to-transparent" />

        <div
          className="relative mx-auto max-w-[1600px] px-5 md:px-10 flex items-end"
          style={{ minHeight: "50vh" }}
        >
          <div className="max-w-3xl pb-12 lg:pb-16 pt-28">
            {/* Breadcrumb */}
            <nav className="text-sm text-white/60 hero-subtitle mb-6">
              <Link href={prefix} className="hover:text-white transition-colors">
                {locale === "es" ? "Inicio" : "Home"}
              </Link>
              <ChevronRight size={14} className="inline mx-1" />
              <Link
                href={`${prefix}/productos`}
                className="hover:text-white transition-colors"
              >
                {locale === "es" ? "Productos" : "Products"}
              </Link>
              <ChevronRight size={14} className="inline mx-1" />
              <span className="text-white">{data.name}</span>
            </nav>

            <div className="w-12 h-1 bg-gradient-to-r from-gold to-gold-light rounded-full mb-6" />

            <h1
              className="font-heading text-white leading-tight mb-6 hero-text-strong"
              style={{
                fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)",
                fontWeight: 500,
              }}
            >
              {data.name}
            </h1>
            {/* Glass stats chips */}
            {(category.sizes || category.pressureClasses) && (
              <div className="flex flex-wrap gap-3 mt-8">
                {category.sizes && (
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2.5 border border-white/10">
                    <div className="text-[10px] text-white/50 font-medium uppercase tracking-wider">
                      {locale === "es" ? "Tamanos" : "Sizes"}
                    </div>
                    <div className="text-white font-semibold text-sm">{category.sizes}</div>
                  </div>
                )}
                {category.pressureClasses && (
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2.5 border border-white/10">
                    <div className="text-[10px] text-white/50 font-medium uppercase tracking-wider">
                      {locale === "es" ? "Clases" : "Classes"}
                    </div>
                    <div className="text-white font-semibold text-sm">{category.pressureClasses}</div>
                  </div>
                )}
                {subtypes.length > 0 && (
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2.5 border border-white/10">
                    <div className="text-[10px] text-white/50 font-medium uppercase tracking-wider">
                      {locale === "es" ? "Configuraciones" : "Configurations"}
                    </div>
                    <div className="text-white font-semibold text-sm">
                      {subtypes.length} {locale === "es" ? "tipos" : "types"}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ======== CONTENT ======== */}
      <section
        className="py-16 lg:py-20"
        style={{ background: "linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)" }}
      >
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
            {/* ──── Main content ──── */}
            <div className="lg:col-span-2 space-y-16">
              {/* Category description */}
              <div>
                <p className="text-gray-600 leading-relaxed" style={{ fontSize: "1.05rem", lineHeight: 1.8 }}>
                  {data.desc}
                </p>
              </div>

              {/* Subtypes as rich product cards */}
              {subtypes.length > 0 && (
                <div>
                  <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
                    {locale === "es" ? "Configuraciones" : "Configurations"}
                  </p>
                  <h2
                    className="font-heading text-gray-900 mb-2"
                    style={{ fontSize: "clamp(1.5rem, 3.5vw, 1.75rem)", fontWeight: 500 }}
                  >
                    {locale === "es" ? "Tipos disponibles" : "Available types"}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-xl">
                    {locale === "es"
                      ? "Selecciona la configuracion que mejor se adapte a tu aplicacion."
                      : "Select the configuration that best fits your application."}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {subtypes.map((st) => {
                      const stSuppliers = (st.manufacturers ?? [])
                        .map((id: string) => manufacturers[id])
                        .filter(Boolean);
                      return (
                        <Link
                          key={st.slug}
                          href={`${prefix}/productos/${slug}/${st.slug}`}
                          className="group block rounded-xl overflow-hidden bg-white border border-gray-100 card-modern transition-all duration-150"
                        >
                          {/* Thumbnail */}
                          {st.image && (
                            <div
                              className="relative w-full overflow-hidden"
                              style={{ aspectRatio: "16/10" }}
                            >
                              <Image
                                src={st.image}
                                alt={st[l].name}
                                fill
                                className="object-cover group-hover:scale-[1.03] transition-transform duration-200"
                                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>
                          )}
                          <div className="p-6">
                            <h3
                              className="font-heading text-gray-900 font-semibold mb-2 group-hover:text-gold transition-colors duration-150"
                              style={{ fontSize: "1.05rem" }}
                            >
                              {st[l].name}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
                              {st[l].desc}
                            </p>

                            {/* Specs row */}
                            <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4">
                              {st.sizes && (
                                <span className="text-xs text-gray-400">
                                  <span className="font-medium text-gray-600">
                                    {locale === "es" ? "Tamanos" : "Sizes"}:
                                  </span>{" "}
                                  {st.sizes}
                                </span>
                              )}
                              {st.pressureClasses && (
                                <span className="text-xs text-gray-400">
                                  <span className="font-medium text-gray-600">
                                    {locale === "es" ? "Clases" : "Classes"}:
                                  </span>{" "}
                                  {st.pressureClasses}
                                </span>
                              )}
                            </div>

                            {/* Manufacturer badges */}
                            {stSuppliers.length > 0 && (
                              <div className="flex flex-wrap gap-1.5 mb-4">
                                {stSuppliers.map((mfg) => (
                                  <span
                                    key={mfg.slug || mfg.name}
                                    className="text-[11px] font-medium text-navy-alt bg-navy-deep/[0.06] px-2.5 py-1 rounded-md"
                                  >
                                    {mfg.name}
                                  </span>
                                ))}
                              </div>
                            )}

                            <span className="inline-flex items-center gap-1.5 text-sm text-gold font-semibold group-hover:text-gold-dark transition-colors duration-150">
                              {locale === "es" ? "Ver detalles" : "View details"}
                              <ArrowRight
                                size={14}
                                className="group-hover:translate-x-0.5 transition-transform duration-150"
                              />
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Technical specifications */}
              {(category.sizes || category.pressureClasses) && (
                <div>
                  <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
                    {locale === "es" ? "Datos tecnicos" : "Technical data"}
                  </p>
                  <h2
                    className="font-heading text-gray-900 mb-8"
                    style={{ fontSize: "clamp(1.5rem, 3.5vw, 1.75rem)", fontWeight: 500 }}
                  >
                    {locale === "es" ? "Especificaciones" : "Specifications"}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {category.sizes && (
                      <div
                        className="p-6 rounded-xl bg-white border border-gray-100"
                        style={{ borderLeft: "3px solid var(--color-gold)" }}
                      >
                        <dt className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-2">
                          {locale === "es" ? "Rango de tamanos" : "Size range"}
                        </dt>
                        <dd
                          className="text-gray-900 font-semibold"
                          style={{ fontSize: "1.1rem" }}
                        >
                          {category.sizes}
                        </dd>
                      </div>
                    )}
                    {category.pressureClasses && (
                      <div
                        className="p-6 rounded-xl bg-white border border-gray-100"
                        style={{ borderLeft: "3px solid var(--color-gold)" }}
                      >
                        <dt className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-2">
                          {locale === "es" ? "Clases de presion" : "Pressure classes"}
                        </dt>
                        <dd
                          className="text-gray-900 font-semibold"
                          style={{ fontSize: "1.1rem" }}
                        >
                          {category.pressureClasses}
                        </dd>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Standards & certifications */}
              {standards.length > 0 && (
                <div>
                  <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
                    {locale === "es" ? "Cumplimiento" : "Compliance"}
                  </p>
                  <h2
                    className="font-heading text-gray-900 mb-8"
                    style={{ fontSize: "clamp(1.5rem, 3.5vw, 1.75rem)", fontWeight: 500 }}
                  >
                    {locale === "es"
                      ? "Normas y certificaciones"
                      : "Standards & certifications"}
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {standards.map((std) => {
                      const logoMap: Record<string, string> = {
                        "API 6D": "/images/logos/api.svg",
                        "API 6A": "/images/logos/api.svg",
                        "API 6DSS": "/images/logos/api.svg",
                        "API 607": "/images/logos/api.svg",
                        "API 6FA": "/images/logos/api.svg",
                        "API 600": "/images/logos/api.svg",
                        "API 602": "/images/logos/api.svg",
                        "API 526": "/images/logos/api.svg",
                        "API 527": "/images/logos/api.svg",
                        "API 520": "/images/logos/api.svg",
                        "API 553": "/images/logos/api.svg",
                        "NACE MR0175": "/images/logos/nace.svg",
                        "ISO 15848": "/images/logos/iso.svg",
                        "ISO 10497": "/images/logos/iso.svg",
                        "ISO 5211": "/images/logos/iso.svg",
                        "ASME VIII": "/images/logos/asme.svg",
                        "NORSOK M-650": "/images/logos/norsok.svg",
                        "ATEX": "/images/logos/atex.svg",
                        "SIL": "/images/logos/sil.svg",
                      };
                      const logo = logoMap[std];
                      return (
                        <div
                          key={std}
                          className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-100"
                        >
                          {logo ? (
                            <div className="w-8 h-8 shrink-0 relative">
                              <Image src={logo} alt={std} fill className="object-contain" sizes="32px" />
                            </div>
                          ) : (
                            <div
                              className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                              style={{
                                background: "linear-gradient(135deg, #141733, #203c88)",
                              }}
                            >
                              <Shield
                                size={14}
                                className="text-gold-light"
                                strokeWidth={1.5}
                              />
                            </div>
                          )}
                          <span className="text-sm font-semibold text-gray-900 tracking-wide">
                            {std}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Manufacturers */}
              {categorySuppliers.length > 0 && (
                <div>
                  <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
                    {locale === "es" ? "Representaciones" : "Partnerships"}
                  </p>
                  <h2
                    className="font-heading text-gray-900 mb-8"
                    style={{ fontSize: "clamp(1.5rem, 3.5vw, 1.75rem)", fontWeight: 500 }}
                  >
                    {locale === "es" ? "Marcas disponibles" : "Available brands"}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {categorySuppliers.map(
                      (s: {
                        name: string;
                        slug: string;
                        image: string;
                        logo: string;
                        country: string;
                      }) => (
                        <Link
                          key={s.slug || s.name}
                          href={
                            s.slug
                              ? `${prefix}/proveedores/${s.slug}`
                              : `${prefix}/proveedores`
                          }
                          className="group flex items-center gap-5 p-5 rounded-xl bg-white border border-gray-100 card-modern transition-all duration-150"
                        >
                          <div className="w-28 h-14 rounded-xl flex items-center justify-center relative overflow-hidden shrink-0 bg-white border border-gray-100">
                            {s.logo ? (
                              <Image
                                src={s.logo}
                                alt={s.name}
                                width={90}
                                height={36}
                                className="object-contain"
                              />
                            ) : s.image ? (
                              <Image
                                src={s.image}
                                alt={s.name}
                                fill
                                className="object-contain p-2"
                                sizes="112px"
                              />
                            ) : (
                              <span className="text-sm font-bold text-navy-alt">
                                {s.name
                                  .split(" ")[0]
                                  .substring(0, 3)
                                  .toUpperCase()}
                              </span>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="block text-gray-900 font-semibold group-hover:text-gold transition-colors duration-150">
                              {s.name}
                            </span>
                            <span className="flex items-center gap-1.5 text-xs text-gray-400 mt-1">
                              <MapPin size={11} />
                              {s.country}
                            </span>
                          </div>
                          <ArrowRight
                            size={16}
                            className="text-gray-300 group-hover:text-gold group-hover:translate-x-0.5 transition-all duration-150 shrink-0"
                          />
                        </Link>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* ──── Sidebar ──── */}
            <div className="space-y-6">
              {/* CTA with gold top accent */}
              <div className="rounded-xl relative overflow-hidden bg-navy-section">
                <div className="h-1 bg-gradient-to-r from-gold to-gold-light" />
                <div className="p-7">
                  <p className="text-gold-light font-medium text-sm tracking-widest uppercase mb-2">
                    {locale === "es" ? "Cotizacion" : "Quote"}
                  </p>
                  <h3
                    className="font-heading text-white mb-3"
                    style={{ fontSize: "1.25rem", fontWeight: 600 }}
                  >
                    {locale === "es"
                      ? "Solicita tu cotizacion"
                      : "Request a quote"}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-5">
                    {locale === "es"
                      ? "Nuestros ingenieros te ayudan a seleccionar el equipo correcto."
                      : "Our engineers help you select the right equipment."}
                  </p>
                  <Link
                    href={`${prefix}/contacto`}
                    className="block w-full text-center px-6 py-3.5 bg-gold text-white font-semibold rounded-xl btn-lift hover:bg-gold-dark transition-colors"
                  >
                    {locale === "es"
                      ? "Solicitar cotizacion"
                      : "Request a quote"}
                  </Link>
                  <a
                    href="tel:+525553973703"
                    className="flex items-center justify-center gap-2 mt-4 text-white/50 text-sm hover:text-white transition-colors"
                  >
                    <Phone size={14} />
                    +52 55 5397 3703
                  </a>
                </div>
              </div>

              {/* Category product image */}
              <div
                className="relative rounded-xl overflow-hidden"
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  src={category.image}
                  alt={data.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white font-heading font-semibold text-sm">
                    {data.name}
                  </p>
                </div>
              </div>

              {/* Related services */}
              {services.length > 0 && (
                <div className="p-7 rounded-xl bg-white border border-gray-100 shadow-card">
                  <p className="text-gold font-medium text-sm tracking-widest uppercase mb-2">
                    {locale === "es" ? "Soporte" : "Support"}
                  </p>
                  <h3
                    className="font-heading text-gray-900 mb-4"
                    style={{ fontSize: "1.1rem", fontWeight: 600 }}
                  >
                    {locale === "es"
                      ? "Servicios relacionados"
                      : "Related services"}
                  </h3>
                  <ul className="space-y-1">
                    {services.map(
                      (s: { es: string; en: string; slug: string }) => (
                        <li key={s.slug}>
                          <Link
                            href={`${prefix}/servicios/${s.slug}`}
                            className="group flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-gray-50 transition-colors duration-150"
                          >
                            <span className="text-sm text-gray-700 group-hover:text-gray-900 font-medium transition-colors duration-150">
                              {s[l]}
                            </span>
                            <ArrowRight
                              size={14}
                              className="text-gold group-hover:translate-x-0.5 transition-transform duration-150"
                            />
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}

              {/* Related industries */}
              {industries.length > 0 && (
                <div className="p-7 rounded-xl bg-white border border-gray-100 shadow-card">
                  <p className="text-gold font-medium text-sm tracking-widest uppercase mb-2">
                    {locale === "es" ? "Sectores" : "Sectors"}
                  </p>
                  <h3
                    className="font-heading text-gray-900 mb-4"
                    style={{ fontSize: "1.1rem", fontWeight: 600 }}
                  >
                    {locale === "es" ? "Industrias" : "Industries"}
                  </h3>
                  <ul className="space-y-1">
                    {industries.map(
                      (ind: { es: string; en: string; slug: string }) => (
                        <li key={ind.slug}>
                          <Link
                            href={`${prefix}/industrias/${ind.slug}`}
                            className="group flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-gray-50 transition-colors duration-150"
                          >
                            <span className="text-sm text-gray-700 group-hover:text-gray-900 font-medium transition-colors duration-150">
                              {ind[l]}
                            </span>
                            <ArrowRight
                              size={14}
                              className="text-gold group-hover:translate-x-0.5 transition-transform duration-150"
                            />
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ======== CONTACT CTA ======== */}
      <section className="relative py-24 lg:py-28 overflow-hidden">
        <Image
          src={stockImages.industrial}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy-deep/65" />
        <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="font-heading text-white mb-4 hero-text"
              style={{
                fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
                fontWeight: 500,
              }}
            >
              {locale === "es"
                ? "Hablemos de tu proyecto"
                : "Let's talk about your project"}
            </h2>
            <p
              className="text-white/60 mb-10 leading-relaxed hero-subtitle"
              style={{ fontSize: "1.05rem" }}
            >
              {locale === "es"
                ? "Nuestro equipo de ingenieros esta listo para ayudarte a encontrar la solucion correcta."
                : "Our engineering team is ready to help you find the right solution."}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`${prefix}/contacto`}
                className="inline-flex items-center px-8 py-4 bg-gold text-white font-semibold rounded-xl btn-lift hover:bg-gold-dark"
                style={{ fontSize: "1.05rem" }}
              >
                {locale === "es" ? "Enviar mensaje" : "Send a message"}
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
