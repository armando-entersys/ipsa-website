import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowRight, Phone, Mail, MapPin, Shield } from "lucide-react";
import { notFound } from "next/navigation";
import { stockImages, getBlur } from "@/data/images";
import { productCategories, manufacturers } from "@/data/products";

export default async function SubtypeDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string; subtype: string }>;
}) {
  const { locale, slug, subtype } = await params;
  const l = locale as "es" | "en";
  const prefix = `/${locale}`;

  /* ── Look up category, then subtype ── */
  const category = productCategories[slug];
  if (!category) notFound();

  const subtypeData = category.subtypes.find((s) => s.slug === subtype);
  if (!subtypeData) notFound();

  const catName = category[l].name;
  const stName = subtypeData[l].name;
  const stDesc = subtypeData[l].desc;

  /* ── Resolve manufacturers for this subtype ── */
  const subtypeManufacturers = (subtypeData.manufacturers ?? [])
    .map((id) => manufacturers[id])
    .filter(Boolean);

  /* ── Sibling subtypes (other types in same category) ── */
  const siblings = category.subtypes.filter((s) => s.slug !== subtype);

  /* ── Standards: subtype-level first, fall back to category ── */
  const standards =
    subtypeData.standards && subtypeData.standards.length > 0
      ? subtypeData.standards
      : category.standards ?? [];

  /* ── Related services from parent category ── */
  const serviceNames: Record<string, { es: string; en: string }> = {
    automatizacion: { es: "Automatización de Válvulas", en: "Valve Automation" },
    ingenieria: { es: "Ingeniería y Proyectos EPC", en: "Engineering & EPC Projects" },
    "soporte-in-house": { es: "Centro de Automatización (CAD)", en: "Automation Center (CAD)" },
  };
  const relatedServices = (category.services ?? []).map((slug: string) => ({
    slug,
    es: serviceNames[slug]?.es ?? slug,
    en: serviceNames[slug]?.en ?? slug,
  }));

  return (
    <>
      {/* ======== HERO (subtype-specific image) ======== */}
      <section className="relative overflow-hidden" style={{ minHeight: "50vh" }}>
        <Image
          src={subtypeData.image || stockImages.productsHero}
          alt=""
          fill
          priority
          placeholder="blur"
          blurDataURL={getBlur(subtypeData.image || stockImages.productsHero)}
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
              <Link
                href={`${prefix}/productos/${slug}`}
                className="hover:text-white transition-colors"
              >
                {catName}
              </Link>
              <ChevronRight size={14} className="inline mx-1" />
              <span className="text-white">{stName}</span>
            </nav>

            <div className="w-12 h-1 bg-gradient-to-r from-gold to-gold-light rounded-full mb-6" />

            <h1
              className="font-heading text-white leading-tight mb-6 hero-text-strong"
              style={{
                fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)",
                fontWeight: 500,
              }}
            >
              {stName}
            </h1>
            {/* Glass stats chips */}
            {(subtypeData.sizes || subtypeData.pressureClasses || subtypeManufacturers.length > 0) && (
              <div className="flex flex-wrap gap-3 mt-8">
                {subtypeData.sizes && (
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2.5 border border-white/10">
                    <div className="text-[10px] text-white/50 font-medium uppercase tracking-wider">
                      {locale === "es" ? "Tamaños" : "Sizes"}
                    </div>
                    <div className="text-white font-semibold text-sm">{subtypeData.sizes}</div>
                  </div>
                )}
                {subtypeData.pressureClasses && (
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2.5 border border-white/10">
                    <div className="text-[10px] text-white/50 font-medium uppercase tracking-wider">
                      {locale === "es" ? "Clases" : "Classes"}
                    </div>
                    <div className="text-white font-semibold text-sm">{subtypeData.pressureClasses}</div>
                  </div>
                )}
                {subtypeManufacturers.length > 0 && (
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2.5 border border-white/10">
                    <div className="text-[10px] text-white/50 font-medium uppercase tracking-wider">
                      {locale === "es" ? "Fabricantes" : "Manufacturers"}
                    </div>
                    <div className="text-white font-semibold text-sm">
                      {subtypeManufacturers.map((m) => m.name).join(", ")}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ======== MAIN CONTENT ======== */}
      <section
        className="py-16 lg:py-20"
        style={{ background: "linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)" }}
      >
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
            {/* ── Main column ── */}
            <div className="lg:col-span-2 space-y-16">
              {/* Subtype description */}
              <div>
                <p className="text-gray-600 leading-relaxed" style={{ fontSize: "1.05rem", lineHeight: 1.8 }}>
                  {stDesc}
                </p>
              </div>

              {/* Product showcase image */}
              {subtypeData.image && (
                <div
                  className="relative w-full rounded-xl overflow-hidden shadow-card"
                  style={{ aspectRatio: "16/9" }}
                >
                  <Image
                    src={subtypeData.image}
                    alt={stName}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                </div>
              )}

              {/* Manufacturers */}
              {subtypeManufacturers.length > 0 && (
                <div>
                  <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
                    {locale === "es" ? "Representaciones" : "Partnerships"}
                  </p>
                  <h2
                    className="font-heading text-gray-900 mb-8"
                    style={{
                      fontSize: "clamp(1.5rem, 3.5vw, 1.75rem)",
                      fontWeight: 500,
                    }}
                  >
                    {locale === "es" ? "Disponible de" : "Available from"}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {subtypeManufacturers.map((mfr) => {
                      const card = (
                        <div className="flex items-center gap-5">
                          <div className="w-28 h-14 shrink-0 relative rounded-xl overflow-hidden bg-white border border-gray-100 flex items-center justify-center">
                            {mfr.logo ? (
                              <Image
                                src={mfr.logo}
                                alt={mfr.name}
                                width={90}
                                height={36}
                                className="object-contain"
                              />
                            ) : mfr.image ? (
                              <Image
                                src={mfr.image}
                                alt={mfr.name}
                                fill
                                className="object-contain p-2"
                                sizes="112px"
                              />
                            ) : (
                              <span className="flex items-center justify-center w-full h-full text-sm font-bold text-navy-alt">
                                {mfr.name
                                  .split(" ")[0]
                                  .substring(0, 3)
                                  .toUpperCase()}
                              </span>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="block text-gray-900 font-semibold group-hover:text-gold transition-colors duration-150">
                              {mfr.name}
                            </span>
                            <span className="flex items-center gap-1.5 text-xs text-gray-400 mt-1">
                              <MapPin size={11} />
                              {mfr.country}
                            </span>
                          </div>
                          <ArrowRight
                            size={16}
                            className="text-gray-300 group-hover:text-gold group-hover:translate-x-0.5 transition-all duration-150 shrink-0"
                          />
                        </div>
                      );

                      return mfr.slug ? (
                        <Link
                          key={mfr.slug}
                          href={`${prefix}/proveedores/${mfr.slug}`}
                          className="group p-5 rounded-xl bg-white border border-gray-100 card-modern transition-all duration-150"
                        >
                          {card}
                        </Link>
                      ) : (
                        <div
                          key={mfr.name}
                          className="group p-5 rounded-xl bg-white border border-gray-100 shadow-card"
                        >
                          {card}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Technical specifications */}
              {(subtypeData.sizes || subtypeData.pressureClasses) && (
                <div>
                  <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
                    {locale === "es" ? "Datos tecnicos" : "Technical data"}
                  </p>
                  <h2
                    className="font-heading text-gray-900 mb-8"
                    style={{
                      fontSize: "clamp(1.5rem, 3.5vw, 1.75rem)",
                      fontWeight: 500,
                    }}
                  >
                    {locale === "es" ? "Especificaciones" : "Specifications"}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {subtypeData.sizes && (
                      <div
                        className="p-6 rounded-xl bg-white border border-gray-100"
                        style={{ borderLeft: "3px solid var(--color-gold)" }}
                      >
                        <dt className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-2">
                          {locale === "es" ? "Rango de tamaños" : "Size range"}
                        </dt>
                        <dd
                          className="text-gray-900 font-semibold"
                          style={{ fontSize: "1.1rem" }}
                        >
                          {subtypeData.sizes}
                        </dd>
                      </div>
                    )}
                    {subtypeData.pressureClasses && (
                      <div
                        className="p-6 rounded-xl bg-white border border-gray-100"
                        style={{ borderLeft: "3px solid var(--color-gold)" }}
                      >
                        <dt className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-2">
                          {locale === "es" ? "Clases de presión" : "Pressure classes"}
                        </dt>
                        <dd
                          className="text-gray-900 font-semibold"
                          style={{ fontSize: "1.1rem" }}
                        >
                          {subtypeData.pressureClasses}
                        </dd>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Standards badges */}
              {standards.length > 0 && (
                <div>
                  <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
                    {locale === "es" ? "Cumplimiento" : "Compliance"}
                  </p>
                  <h2
                    className="font-heading text-gray-900 mb-8"
                    style={{
                      fontSize: "clamp(1.5rem, 3.5vw, 1.75rem)",
                      fontWeight: 500,
                    }}
                  >
                    {locale === "es"
                      ? "Normas y certificaciones"
                      : "Standards & certifications"}
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {standards.map((std) => {
                      const logoMap: Record<string, string> = {
                        "API 6D": "/images/logos/api.png",
                        "API 6A": "/images/logos/api.png",
                        "API 6DSS": "/images/logos/api.png",
                        "API 607": "/images/logos/api.png",
                        "API 6FA": "/images/logos/api.png",
                        "API 600": "/images/logos/api.png",
                        "API 602": "/images/logos/api.png",
                        "API 526": "/images/logos/api.png",
                        "API 527": "/images/logos/api.png",
                        "API 520": "/images/logos/api.png",
                        "API 553": "/images/logos/api.png",
                        "NACE MR0175": "/images/logos/nace.svg",
                        "ISO 15848": "/images/logos/iso.png",
                        "ISO 10497": "/images/logos/iso.png",
                        "ISO 5211": "/images/logos/iso.png",
                        "ASME VIII": "/images/logos/asme.svg",
                        "NORSOK M-650": "/images/logos/norsok.svg",
                        "ATEX": "/images/logos/atex.png",
                        "SIL": "/images/logos/sil.png",
                      };
                      const logo = logoMap[std];
                      return (
                        <div
                          key={std}
                          className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-100"
                        >
                          {logo ? (
                            <div className="w-8 h-8 shrink-0 flex items-center justify-center">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src={logo} alt={std} width={32} height={32} className="object-contain" />
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
            </div>

            {/* ── Sidebar ── */}
            <div className="space-y-6">
              {/* Quote CTA with gold top accent */}
              <div className="rounded-xl relative overflow-hidden bg-navy-section">
                <div className="h-1 bg-gradient-to-r from-gold to-gold-light" />
                <div className="p-7">
                  <p className="text-gold-light font-medium text-sm tracking-widest uppercase mb-2">
                    {locale === "es" ? "Cotización" : "Quote"}
                  </p>
                  <h3
                    className="font-heading text-white mb-3"
                    style={{ fontSize: "1.25rem", fontWeight: 600 }}
                  >
                    {locale === "es"
                      ? "Solicita tu cotización"
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
                      ? "Solicitar cotización"
                      : "Request a quote"}
                  </Link>
                  <a
                    href="tel:+525553973703"
                    className="flex items-center justify-center gap-2 mt-4 text-white/50 text-sm hover:text-white transition-colors"
                  >
                    <Phone size={14} />
                    +52 55 5397 3703
                  </a>
                  <a
                    href="mailto:ventas.mexico@ipsa-cv.com.mx"
                    className="flex items-center justify-center gap-2 mt-2 text-white/50 text-sm hover:text-white transition-colors"
                  >
                    <Mail size={14} />
                    ventas.mexico@ipsa-cv.com.mx
                  </a>
                </div>
              </div>

              {/* Back to category */}
              <Link
                href={`${prefix}/productos/${slug}`}
                className="group flex items-center gap-4 p-5 rounded-xl bg-white border border-gray-100 shadow-card transition-all duration-150 hover:shadow-md"
              >
                <div
                  className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0"
                >
                  <Image
                    src={category.image}
                    alt={catName}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider block">
                    {locale === "es" ? "Categoria" : "Category"}
                  </span>
                  <span className="text-sm text-gray-900 font-semibold group-hover:text-gold transition-colors duration-150 block truncate">
                    {catName}
                  </span>
                </div>
                <ArrowRight
                  size={14}
                  className="text-gold group-hover:translate-x-0.5 transition-transform duration-150 shrink-0"
                />
              </Link>

              {/* Other types */}
              {siblings.length > 0 && (
                <div className="p-7 rounded-xl bg-white border border-gray-100 shadow-card">
                  <p className="text-gold font-medium text-sm tracking-widest uppercase mb-2">
                    {locale === "es" ? "Más opciones" : "More options"}
                  </p>
                  <h3
                    className="font-heading text-gray-900 mb-4"
                    style={{ fontSize: "1.1rem", fontWeight: 600 }}
                  >
                    {locale === "es" ? "Otros tipos" : "Other types"}
                  </h3>
                  <ul className="space-y-1">
                    {siblings.map((sib) => (
                      <li key={sib.slug}>
                        <Link
                          href={`${prefix}/productos/${slug}/${sib.slug}`}
                          className="group flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-gray-50 transition-colors duration-150"
                        >
                          <span className="text-sm text-gray-700 group-hover:text-gray-900 font-medium transition-colors duration-150">
                            {sib[l].name}
                          </span>
                          <ArrowRight
                            size={14}
                            className="text-gold group-hover:translate-x-0.5 transition-transform duration-150"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Related services */}
              {relatedServices.length > 0 && (
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
                    {relatedServices.map((s) => (
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
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ======== BOTTOM CTA ======== */}
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
                ? "Nuestro equipo de ingenieros está listo para ayudarte a encontrar la solución correcta."
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
