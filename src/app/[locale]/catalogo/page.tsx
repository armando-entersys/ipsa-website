import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { ChevronRight, ArrowRight, BookOpen } from "lucide-react";
import { stockImages, getBlur } from "@/data/images";

export default function CatalogPage() {
  const t = useTranslations("catalog");
  const locale = useLocale();
  const prefix = `/${locale}`;

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[420px] flex items-center">
        <Image
          src={stockImages.catalogHero}
          alt=""
          fill
          className="object-cover"
          priority
          placeholder="blur"
          blurDataURL={getBlur(stockImages.catalogHero)}
        />
        <div className="absolute inset-0 bg-navy-deep/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/65 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 md:px-10 py-20 lg:py-28">
          <nav className="text-sm text-white/50 mb-6">
            <Link href={prefix} className="hover:text-white transition-colors">
              {locale === "es" ? "Inicio" : "Home"}
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

      {/* Content */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BookOpen size={40} className="text-gold" />
            </div>
            <span className="text-gold font-medium text-sm tracking-widest uppercase mb-3 block">
              {locale === "es" ? "Próximamente" : "Coming soon"}
            </span>
            <h2 className="font-heading font-bold text-gray-900 text-3xl mb-4">
              {t("comingSoon")}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {t("description")}
            </p>
            <Link
              href={`${prefix}/contacto`}
              className="inline-flex items-center px-8 py-3.5 bg-gold text-white font-medium rounded-xl btn-lift hover:bg-gold-dark transition-colors"
            >
              {t("cta")}
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
