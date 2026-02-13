import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowRight, Phone, MapPin, Mail } from "lucide-react";
import { notFound } from "next/navigation";
import { stockImages } from "@/data/images";
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
    automatizacion: { es: "Automatizacion de Valvulas", en: "Valve Automation" },
    ingenieria: { es: "Ingenieria y Proyectos EPC", en: "Engineering & EPC Projects" },
    "soporte-in-house": { es: "Centro de Automatizacion (CAD)", en: "Automation Center (CAD)" },
  };
  const relatedServices = (category.services ?? []).map((slug: string) => ({
    slug,
    es: serviceNames[slug]?.es ?? slug,
    en: serviceNames[slug]?.en ?? slug,
  }));

  return (
    <>
      {/* ======== HERO (45vh, dark overlay) ======== */}
      <section className="relative overflow-hidden" style={{ minHeight: "45vh" }}>
        <Image
          src={stockImages.productsHero}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy-deep/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy-deep/60 to-transparent" />

        <div
          className="relative mx-auto max-w-[1600px] px-5 md:px-10 flex items-center"
          style={{ minHeight: "45vh" }}
        >
          <div className="max-w-3xl py-20 lg:py-28">
            {/* Breadcrumb */}
            <nav className="text-sm text-white/50 mb-6">
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

            <h1
              className="font-heading text-white leading-tight mb-6"
              style={{
                fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)",
                fontWeight: 400,
              }}
            >
              {stName}
            </h1>
            <p
              className="text-white/80 max-w-2xl leading-relaxed"
              style={{ fontSize: "1.1rem", lineHeight: 1.7 }}
            >
              {stDesc}
            </p>
          </div>
        </div>
      </section>

      {/* ======== MAIN CONTENT (2-col + sidebar) ======== */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* ── Main column ── */}
            <div className="lg:col-span-2 space-y-12">
              {/* Available from (manufacturers) */}
              {subtypeManufacturers.length > 0 && (
                <div>
                  <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
                    {locale === "es" ? "Representaciones" : "Partnerships"}
                  </p>
                  <h2
                    className="font-heading text-gray-900 mb-6"
                    style={{ fontSize: "1.75rem", fontWeight: 600 }}
                  >
                    {locale === "es" ? "Disponible de" : "Available from"}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {subtypeManufacturers.map((mfr) => {
                      const inner = (
                        <div className="flex items-center gap-4">
                          <div
                            className="w-16 h-16 shrink-0 relative rounded-2xl overflow-hidden bg-surface-alt shadow-card"
                          >
                            <Image
                              src={mfr.image}
                              alt={mfr.name}
                              fill
                              className="object-contain p-2"
                              sizes="64px"
                            />
                          </div>
                          <div className="min-w-0">
                            <span className="block text-gray-900 font-semibold text-sm group-hover:text-gold transition-colors duration-300 truncate">
                              {mfr.name}
                            </span>
                            <span className="flex items-center gap-1.5 text-xs text-gray-400 mt-1">
                              <MapPin size={11} />
                              {mfr.country}
                            </span>
                          </div>
                          <ArrowRight
                            size={14}
                            className="text-gray-300 group-hover:text-gold group-hover:translate-x-0.5 transition-all duration-300 ml-auto shrink-0"
                          />
                        </div>
                      );

                      return mfr.slug ? (
                        <Link
                          key={mfr.slug}
                          href={`${prefix}/proveedores/${mfr.slug}`}
                          className="group card-hover p-4 rounded-2xl transition-all duration-300 bg-surface-alt shadow-card"
                        >
                          {inner}
                        </Link>
                      ) : (
                        <div
                          key={mfr.name}
                          className="group p-4 rounded-2xl bg-surface-alt shadow-card"
                        >
                          {inner}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Product image */}
              {subtypeData.image && (
                <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <Image
                    src={subtypeData.image}
                    alt={stName}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                </div>
              )}

              {/* Specifications */}
              {(subtypeData.sizes || subtypeData.pressureClasses) && (
                <div
                  className="p-8 rounded-2xl bg-surface-alt shadow-card"
                >
                  <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
                    {locale === "es" ? "Datos tecnicos" : "Technical data"}
                  </p>
                  <h2
                    className="font-heading text-gray-900 mb-6"
                    style={{ fontSize: "1.5rem", fontWeight: 600 }}
                  >
                    {locale === "es" ? "Especificaciones" : "Specifications"}
                  </h2>
                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {subtypeData.sizes && (
                      <div>
                        <dt className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">
                          {locale === "es" ? "Tamanos" : "Sizes"}
                        </dt>
                        <dd
                          className="text-gray-900 font-semibold"
                          style={{ fontSize: "1.05rem" }}
                        >
                          {subtypeData.sizes}
                        </dd>
                      </div>
                    )}
                    {subtypeData.pressureClasses && (
                      <div>
                        <dt className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">
                          {locale === "es" ? "Clases de presion" : "Pressure classes"}
                        </dt>
                        <dd
                          className="text-gray-900 font-semibold"
                          style={{ fontSize: "1.05rem" }}
                        >
                          {subtypeData.pressureClasses}
                        </dd>
                      </div>
                    )}
                  </dl>
                </div>
              )}

              {/* Standards badges */}
              {standards.length > 0 && (
                <div>
                  <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
                    {locale === "es" ? "Cumplimiento" : "Compliance"}
                  </p>
                  <h2
                    className="font-heading text-gray-900 mb-6"
                    style={{ fontSize: "1.5rem", fontWeight: 600 }}
                  >
                    {locale === "es"
                      ? "Normas y certificaciones"
                      : "Standards and certifications"}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {standards.map((std) => (
                      <span
                        key={std}
                        className="text-gray-900 text-sm font-medium px-4 py-2 rounded-xl bg-navy-deep/[0.06]"
                      >
                        {std}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ── Sidebar ── */}
            <div className="space-y-6">
              {/* Quote CTA */}
              <div
                className="p-7 rounded-2xl relative overflow-hidden bg-navy-section"
              >
                <div className="relative">
                  <p className="text-gold-light font-medium text-sm tracking-widest uppercase mb-2">
                    {locale === "es" ? "Cotizacion" : "Quote"}
                  </p>
                  <h3
                    className="font-heading text-white mb-3"
                    style={{ fontSize: "1.25rem", fontWeight: 600 }}
                  >
                    {locale === "es" ? "Solicita tu cotizacion" : "Request a quote"}
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
                    {locale === "es" ? "Solicitar cotizacion" : "Request a quote"}
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

              {/* Other types */}
              {siblings.length > 0 && (
                <div
                  className="p-7 rounded-2xl bg-surface-alt shadow-card"
                >
                  <p className="text-gold font-medium text-sm tracking-widest uppercase mb-2">
                    {locale === "es" ? "Mas opciones" : "More options"}
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
                          className="group flex items-center justify-between py-2.5 px-3 rounded-2xl hover:bg-white transition-colors duration-300"
                        >
                          <span className="text-sm text-gray-700 group-hover:text-gray-900 font-medium transition-colors duration-300">
                            {sib[l].name}
                          </span>
                          <ArrowRight
                            size={14}
                            className="text-gold group-hover:translate-x-0.5 transition-transform duration-300"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Related services */}
              {relatedServices.length > 0 && (
                <div
                  className="p-7 rounded-2xl bg-surface-alt shadow-card"
                >
                  <p className="text-gold font-medium text-sm tracking-widest uppercase mb-2">
                    {locale === "es" ? "Soporte" : "Support"}
                  </p>
                  <h3
                    className="font-heading text-gray-900 mb-4"
                    style={{ fontSize: "1.1rem", fontWeight: 600 }}
                  >
                    {locale === "es" ? "Servicios relacionados" : "Related services"}
                  </h3>
                  <ul className="space-y-1">
                    {relatedServices.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`${prefix}/servicios/${s.slug}`}
                          className="group flex items-center justify-between py-2.5 px-3 rounded-2xl hover:bg-white transition-colors duration-300"
                        >
                          <span className="text-sm text-gray-700 group-hover:text-gray-900 font-medium transition-colors duration-300">
                            {s[l]}
                          </span>
                          <ArrowRight
                            size={14}
                            className="text-gold group-hover:translate-x-0.5 transition-transform duration-300"
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

      {/* ======== BOTTOM CTA (dark with background image) ======== */}
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
            <h2
              className="font-heading text-white mb-4"
              style={{ fontSize: "2rem", fontWeight: 600 }}
            >
              {locale === "es"
                ? "Hablemos de tu proyecto"
                : "Let's talk about your project"}
            </h2>
            <p
              className="text-white/60 mb-10 leading-relaxed"
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
