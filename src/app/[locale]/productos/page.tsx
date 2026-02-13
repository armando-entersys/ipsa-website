import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { ArrowRight, ChevronRight, Zap, Phone } from "lucide-react";
import { stockImages } from "@/data/images";
import { productCategories, categoryList, manufacturers } from "@/data/products";

export default function ProductsHub() {
  const t = useTranslations("products");
  const locale = useLocale();
  const prefix = `/${locale}`;
  const l = locale as "es" | "en";

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden" style={{ minHeight: "45vh" }}>
        <Image
          src={stockImages.productsHero}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/50 via-navy-dark/15 to-transparent" />

        <div className="relative mx-auto max-w-[1600px] px-5 md:px-10 flex items-end" style={{ minHeight: "45vh" }}>
          <div className="max-w-3xl pb-10 lg:pb-14 pt-28">
            <nav className="text-sm text-white/60 mb-6 hero-subtitle">
              <Link href={prefix} className="hover:text-white transition-colors">
                {locale === "es" ? "Inicio" : "Home"}
              </Link>
              <ChevronRight size={14} className="inline mx-1" />
              <span className="text-white">{t("title")}</span>
            </nav>
            <div className="w-12 h-1 bg-gradient-to-r from-gold to-gold-light rounded-full mb-6" />
            <div className="flex items-center gap-4 mb-4">
              <h1
                className="font-heading text-white leading-tight hero-text-strong"
                style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)", fontWeight: 500 }}
              >
                {t("title")}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PRODUCT CATEGORIES - ACV-style image cards ═══ */}
      <section style={{ background: "linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)" }}>
        <div className="mx-auto max-w-[1600px] px-5 md:px-10 py-20 lg:py-24">
          <div className="text-center mb-14">
            <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
              {locale === "es" ? "Catálogo completo" : "Full catalog"}
            </p>
            <h2 className="font-heading text-gray-900" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2rem)", fontWeight: 500 }}>
              {locale === "es" ? "Nuestros productos" : "Our products"}
            </h2>
            <p className="text-gray-500 mt-2 max-w-2xl mx-auto leading-relaxed">
              {locale === "es"
                ? "Soluciones completas en control de fluidos para la industria de proceso. Cada categoría incluye múltiples configuraciones, fabricantes y servicios asociados."
                : "Complete fluid control solutions for the process industry. Each category includes multiple configurations, manufacturers, and associated services."}
            </p>
          </div>

          {/* Main product grid - large image cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {categoryList.map((cat) => {
              const data = cat[l];
              const supplierNames = (cat.suppliers ?? [])
                .map((id) => manufacturers[id])
                .filter(Boolean)
                .map((m) => m.name);
              const subtypeCount = cat.subtypes?.length ?? 0;

              return (
                <Link
                  key={cat.slug}
                  href={`${prefix}/productos/${cat.slug}`}
                  className="group block bg-white rounded-xl overflow-hidden border border-gray-100 card-modern transition-all duration-150"
                >
                  {/* Product image */}
                  <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
                    <Image
                      src={cat.image}
                      alt={data.name}
                      fill
                      className="object-cover transition-transform duration-200 group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    {/* Subtle gradient overlay at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    {/* Subtype count badge */}
                    {subtypeCount > 0 && (
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-semibold px-3 py-1 rounded-lg">
                        {subtypeCount} {locale === "es" ? "tipos" : "types"}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-heading text-gray-900 text-lg font-semibold mb-2 group-hover:text-gold transition-colors duration-150">
                      {data.name}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                      {data.desc}
                    </p>

                    {/* Specs row */}
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4">
                      {cat.sizes && (
                        <span className="text-xs text-gray-400">
                          <span className="font-medium text-gray-600">{locale === "es" ? "Tamaños" : "Sizes"}:</span> {cat.sizes}
                        </span>
                      )}
                      {cat.pressureClasses && (
                        <span className="text-xs text-gray-400">
                          <span className="font-medium text-gray-600">{locale === "es" ? "Clases" : "Classes"}:</span> {cat.pressureClasses}
                        </span>
                      )}
                    </div>

                    {/* Manufacturers */}
                    {supplierNames.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {supplierNames.map((name) => (
                          <span key={name} className="text-[11px] font-medium text-navy-alt bg-navy-deep/[0.06] px-2.5 py-1 rounded-md">
                            {name}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* CTA link */}
                    <span className="inline-flex items-center gap-1.5 text-sm text-gold font-semibold group-hover:text-gold-dark transition-colors duration-150">
                      {locale === "es" ? "Ver productos" : "View products"}
                      <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-150" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ AUTOMATION BANNER ═══ */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        <Image
          src={stockImages.automation}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy-deep/70" />
        <div className="relative mx-auto max-w-[1600px] px-5 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-5">
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: "rgba(187, 144, 52, 0.15)" }}
            >
              <Zap size={28} className="text-gold-light" strokeWidth={1.5} />
            </div>
            <div>
              <h2 className="font-heading text-white mb-1 hero-text" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2rem)", fontWeight: 500 }}>
                {locale === "es" ? "Automatizamos tus válvulas" : "We automate your valves"}
              </h2>
              <p className="text-white/70 leading-relaxed" style={{ fontSize: "0.95rem" }}>
                {locale === "es"
                  ? "Paquetes completos de válvula + actuador + accesorios, listos para instalar."
                  : "Complete valve + actuator + accessories packages, ready to install."}
              </p>
            </div>
          </div>
          <Link
            href={`${prefix}/servicios/automatizacion`}
            className="inline-flex items-center px-7 py-3.5 bg-gold text-white font-semibold rounded-xl btn-lift hover:bg-gold-dark shrink-0"
          >
            {locale === "es" ? "Conoce el servicio" : "Learn about the service"}
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
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
            <h2 className="font-heading text-white mb-4 hero-text" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2rem)", fontWeight: 500 }}>
              {locale === "es" ? "¿No encuentras lo que buscas?" : "Can't find what you're looking for?"}
            </h2>
            <p className="text-white/70 mb-10 leading-relaxed hero-subtitle" style={{ fontSize: "1.05rem" }}>
              {t("notFound")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`${prefix}/contacto`}
                className="inline-flex items-center px-7 py-3.5 bg-gold text-white font-semibold rounded-xl btn-lift hover:bg-gold-dark"
              >
                {t("notFoundCta")}
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <a
                href="tel:+525553973703"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium rounded-xl btn-lift hover:bg-white/20"
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
