import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowRight, Phone } from "lucide-react";
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

  /* ── Services (resolve slugs to display objects) ── */
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

  /* ── Industries (resolve slugs to display objects) ── */
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
      {/* ======== HERO with background image ======== */}
      <section className="relative overflow-hidden" style={{ minHeight: "45vh" }}>
        <Image
          src={stockImages.productsHero}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-navy-dark/25 to-transparent" />

        <div
          className="relative mx-auto max-w-[1600px] px-5 md:px-10 flex items-center"
          style={{ minHeight: "45vh" }}
        >
          <div className="max-w-3xl py-20 lg:py-28">
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
            <h1
              className="font-heading text-white leading-tight mb-6 hero-text-strong"
              style={{
                fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)",
                fontWeight: 400,
              }}
            >
              {data.name}
            </h1>
            <p
              className="text-white/85 hero-subtitle max-w-2xl leading-relaxed"
              style={{ fontSize: "1.1rem", lineHeight: 1.7 }}
            >
              {data.desc}
            </p>
          </div>
        </div>
      </section>

      {/* ======== CONTENT ======== */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* ---- Main content ---- */}
            <div className="lg:col-span-2 space-y-12">
              {/* Subtypes as clickable cards */}
              {subtypes.length > 0 && (
                <div>
                  <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
                    {locale === "es" ? "Configuraciones" : "Configurations"}
                  </p>
                  <h2
                    className="font-heading text-gray-900 mb-6"
                    style={{ fontSize: "clamp(1.5rem, 3.5vw, 1.75rem)", fontWeight: 500 }}
                  >
                    {locale === "es" ? "Tipos disponibles" : "Available types"}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                    {subtypes.map((st) => (
                      <Link
                        key={st.slug}
                        href={`${prefix}/productos/${slug}/${st.slug}`}
                        className="group card-hover rounded-xl overflow-hidden transition-all duration-300 bg-surface-alt shadow-card"
                      >
                        {/* Thumbnail */}
                        {st.image && (
                          <div
                            className="relative w-full overflow-hidden"
                            style={{ aspectRatio: "3/2" }}
                          >
                            <Image
                              src={st.image}
                              alt={st[l].name}
                              fill
                              className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                            />
                          </div>
                        )}
                        <div className="p-5">
                          <h3 className="font-heading text-gray-900 text-sm font-semibold mb-1.5 group-hover:text-gold transition-colors duration-300">
                            {st[l].name}
                          </h3>
                          <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mb-3">
                            {st[l].desc}
                          </p>
                          {st.manufacturers && st.manufacturers.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mb-2">
                              {st.manufacturers.map((mfgId: string) => {
                                const mfg = manufacturers[mfgId];
                                return mfg ? (
                                  <span key={mfgId} className="text-[10px] font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-md">
                                    {mfg.name}
                                  </span>
                                ) : null;
                              })}
                            </div>
                          )}
                          <span className="inline-flex items-center gap-1 text-gold text-xs font-medium">
                            {locale === "es" ? "Ver mas" : "Learn more"}
                            <ArrowRight
                              size={12}
                              className="group-hover:translate-x-0.5 transition-transform duration-300"
                            />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Specifications (sizes + pressure classes) */}
              {(category.sizes || category.pressureClasses) && (
                <div
                  className="p-8 rounded-xl bg-surface-alt shadow-card"
                >
                  <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
                    {locale === "es" ? "Datos tecnicos" : "Technical data"}
                  </p>
                  <h2
                    className="font-heading text-gray-900 mb-6"
                    style={{ fontSize: "clamp(1.5rem, 3.5vw, 2rem)", fontWeight: 500 }}
                  >
                    {locale === "es" ? "Especificaciones" : "Specifications"}
                  </h2>
                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {category.sizes && (
                      <div>
                        <dt className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">
                          {locale === "es" ? "Tamanos" : "Sizes"}
                        </dt>
                        <dd
                          className="text-gray-900 font-semibold"
                          style={{ fontSize: "1.05rem" }}
                        >
                          {category.sizes}
                        </dd>
                      </div>
                    )}
                    {category.pressureClasses && (
                      <div>
                        <dt className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">
                          {locale === "es" ? "Clases de presion" : "Pressure classes"}
                        </dt>
                        <dd
                          className="text-gray-900 font-semibold"
                          style={{ fontSize: "1.05rem" }}
                        >
                          {category.pressureClasses}
                        </dd>
                      </div>
                    )}
                  </dl>
                </div>
              )}

              {/* Standards */}
              {standards.length > 0 && (
                <div>
                  <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
                    {locale === "es" ? "Cumplimiento" : "Compliance"}
                  </p>
                  <h2
                    className="font-heading text-gray-900 mb-6"
                    style={{ fontSize: "clamp(1.5rem, 3.5vw, 2rem)", fontWeight: 500 }}
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

              {/* Suppliers */}
              {categorySuppliers.length > 0 && (
                <div>
                  <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
                    {locale === "es" ? "Representaciones" : "Partnerships"}
                  </p>
                  <h2
                    className="font-heading text-gray-900 mb-6"
                    style={{ fontSize: "clamp(1.5rem, 3.5vw, 2rem)", fontWeight: 500 }}
                  >
                    {locale === "es" ? "Marcas disponibles" : "Available brands"}
                  </h2>
                  <div className="flex flex-wrap gap-4">
                    {categorySuppliers.map(
                      (s: { name: string; slug: string; image: string; country: string }) => (
                        <Link
                          key={s.slug}
                          href={`${prefix}/proveedores/${s.slug}`}
                          className="group flex items-center gap-3 p-4 rounded-xl transition-all duration-300 hover:shadow-sm bg-surface-alt shadow-card"
                        >
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center relative overflow-hidden bg-navy-alt"
                          >
                            {s.image ? (
                              <Image
                                src={s.image}
                                alt={s.name}
                                fill
                                className="object-contain p-1"
                                sizes="40px"
                              />
                            ) : (
                              <span className="text-xs font-bold text-white">
                                {s.name
                                  .split(" ")[0]
                                  .substring(0, 3)
                                  .toUpperCase()}
                              </span>
                            )}
                          </div>
                          <div>
                            <span className="text-sm font-semibold text-gray-900 group-hover:text-gold transition-colors duration-300">
                              {s.name}
                            </span>
                          </div>
                          <ArrowRight
                            size={14}
                            className="text-gray-300 group-hover:text-gold group-hover:translate-x-0.5 transition-all duration-300 ml-1"
                          />
                        </Link>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* ---- Sidebar ---- */}
            <div className="space-y-6">
              {/* CTA */}
              <div
                className="p-7 rounded-xl relative overflow-hidden bg-navy-section"
              >
                <div className="relative">
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

              {/* Related services */}
              {services.length > 0 && (
                <div
                  className="p-7 rounded-xl bg-surface-alt shadow-card"
                >
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
                  <ul className="space-y-3">
                    {services.map(
                      (s: { es: string; en: string; slug: string }) => (
                        <li key={s.slug}>
                          <Link
                            href={`${prefix}/servicios/${s.slug}`}
                            className="group flex items-center justify-between py-2 px-3 rounded-xl hover:bg-white transition-colors duration-300"
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
                      )
                    )}
                  </ul>
                </div>
              )}

              {/* Related industries */}
              {industries.length > 0 && (
                <div
                  className="p-7 rounded-xl bg-surface-alt shadow-card"
                >
                  <p className="text-gold font-medium text-sm tracking-widest uppercase mb-2">
                    {locale === "es" ? "Sectores" : "Sectors"}
                  </p>
                  <h3
                    className="font-heading text-gray-900 mb-4"
                    style={{ fontSize: "1.1rem", fontWeight: 600 }}
                  >
                    {locale === "es" ? "Industrias" : "Industries"}
                  </h3>
                  <ul className="space-y-3">
                    {industries.map(
                      (ind: { es: string; en: string; slug: string }) => (
                        <li key={ind.slug}>
                          <Link
                            href={`${prefix}/industrias/${ind.slug}`}
                            className="group flex items-center justify-between py-2 px-3 rounded-xl hover:bg-white transition-colors duration-300"
                          >
                            <span className="text-sm text-gray-700 group-hover:text-gray-900 font-medium transition-colors duration-300">
                              {ind[l]}
                            </span>
                            <ArrowRight
                              size={14}
                              className="text-gold group-hover:translate-x-0.5 transition-transform duration-300"
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

      {/* ======== CONTACT CTA (with background image) ======== */}
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
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 2rem)", fontWeight: 500 }}
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
