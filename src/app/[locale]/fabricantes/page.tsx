import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { ChevronRight, ArrowRight, MapPin, ShieldCheck } from 'lucide-react';
import { stockImages, getBlur } from '@/data/images';
import { marcasHub, suppliers } from '@/data/suppliers';
import Button from '@/components/ui/Button';
import CTABanner from '@/components/ui/CTABanner';

const SITE_URL = 'https://ipsacv.com.mx';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo.suppliers' });
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: `${SITE_URL}/${locale}/${locale === 'es' ? 'fabricantes' : 'manufacturers'}`,
      languages: {
        es: `${SITE_URL}/es/fabricantes`,
        en: `${SITE_URL}/en/manufacturers`,
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      locale: locale === 'es' ? 'es_MX' : 'en_US',
      images: [{ url: `${SITE_URL}/images/heroes/suppliers-hero.jpg`, width: 1200, height: 630 }],
    },
  };
}

export default function SuppliersHub() {
  const locale = useLocale();
  const l = locale as 'es' | 'en';
  const prefix = `/${locale}`;

  const priority = suppliers.filter((s) => s.isPriority);

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden min-h-[35vh] md:min-h-[45vh]">
        <Image
          src={stockImages.suppliersHero}
          alt=""
          fill
          priority
          placeholder="blur"
          blurDataURL={getBlur(stockImages.suppliersHero)}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/50 via-navy-dark/15 to-transparent" />

        <div
          className="relative mx-auto flex min-h-[35vh] md:min-h-[45vh] max-w-[1600px] items-end px-5 md:px-10"
        >
          <div className="max-w-3xl pb-10 pt-28 lg:pb-14">
            <nav className="mb-5 text-sm text-white/60">
              <Link href={prefix} className="transition-colors hover:text-white">
                {l === 'es' ? 'Inicio' : 'Home'}
              </Link>
              <ChevronRight size={14} className="mx-1 inline" />
              <span className="text-white">{l === 'es' ? 'Marcas' : 'Brands'}</span>
            </nav>
            <h1
              className="font-heading mb-4 leading-tight text-white"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: 500 }}
            >
              {marcasHub.heroH1[l]}
            </h1>
            <p
              className="max-w-2xl leading-relaxed text-white/85"
              style={{ fontSize: '1.1rem', lineHeight: 1.7 }}
            >
              {marcasHub.heroH2[l]}
            </p>
            <div className="mt-8">
              <Button variant="primary" size="lg" href={`${prefix}/contacto`}>
                {marcasHub.ctaHero[l]}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PRIORITY BRANDS ═══ */}
      <section
        className="py-20 lg:py-24"
        style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)' }}
      >
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gold">
              {l === 'es' ? 'Marcas principales' : 'Main brands'}
            </p>
            <h2
              className="font-heading text-gray-900"
              style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 500 }}
            >
              {l === 'es'
                ? 'Alianzas con fabricantes de clase mundial'
                : 'World-class manufacturer partnerships'}
            </h2>
          </div>

          <div className="space-y-6">
            {priority.map((supplier) => (
              <Link
                key={supplier.slug}
                href={`${prefix}/fabricantes/${supplier.slug}`}
                className="group block overflow-hidden rounded-xl shadow-lg transition-all duration-150 hover:-translate-y-0.5 hover:shadow-xl"
              >
                <div className="flex flex-col md:flex-row">
                  <div
                    className="flex w-full shrink-0 items-center justify-center overflow-hidden bg-white md:w-56"
                    style={{ minHeight: '180px' }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={supplier.logo}
                      alt={supplier.name[l]}
                      width={160}
                      height={60}
                      className="object-contain transition-transform duration-200 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 p-7 md:p-8">
                    <div className="mb-3 flex items-center gap-3">
                      <h2
                        className="font-heading text-xl text-gray-900 md:text-2xl"
                        style={{ fontWeight: 500 }}
                      >
                        {supplier.name[l]}
                      </h2>
                      <span className="inline-flex items-center gap-1 rounded-xl bg-navy-deep/[0.06] px-2.5 py-1 text-xs font-medium text-gray-600">
                        <MapPin size={11} />
                        {supplier.country}
                      </span>
                    </div>
                    <p className="mb-3 text-sm font-medium text-gray-500 italic">
                      {supplier.tagline[l]}
                    </p>
                    <p className="mb-4 text-sm leading-relaxed text-gray-600 md:text-base">
                      {supplier.description[l]}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gold transition-colors group-hover:text-gold-dark">
                      {l === 'es' ? 'Ver más' : 'Learn more'}
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ COMPLEMENTARY BRANDS ═══ */}
      <section
        className="py-20 lg:py-24"
        style={{ background: 'linear-gradient(180deg, #f6f7f9 0%, #f0f1f5 100%)' }}
      >
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gold">
              {l === 'es' ? 'Portafolio complementario' : 'Complementary portfolio'}
            </p>
            <h2
              className="font-heading mb-4 text-gray-900"
              style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 500 }}
            >
              {marcasHub.complementaryH3[l]}
            </h2>
            <p className="mb-10 leading-relaxed text-gray-500">
              {marcasHub.complementaryBody[l]}
            </p>
            <div className="mb-12 flex flex-wrap items-center justify-center gap-6">
              {marcasHub.complementaryBrands.map((name) => (
                <div
                  key={name}
                  className="flex items-center gap-3 rounded-xl bg-white px-6 py-4 shadow-md"
                >
                  <span className="text-base font-semibold text-navy">{name}</span>
                </div>
              ))}
            </div>
            <Button variant="primary" size="lg" href={`${prefix}/contacto`}>
              {l === 'es' ? 'Consultar Disponibilidad' : 'Check Availability'}
            </Button>
          </div>
        </div>
      </section>

      {/* ═══ DIFERENCIAL IPSA ═══ */}
      <section
        className="py-20 lg:py-24"
        style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)' }}
      >
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-deep/[0.06]">
                <ShieldCheck className="h-7 w-7 text-gold" />
              </div>
            </div>
            <h2
              className="font-heading mb-4 text-gray-900"
              style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 500 }}
            >
              {marcasHub.diferencialH2[l]}
            </h2>
            <p className="leading-relaxed text-gray-500" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
              {marcasHub.diferencialBody[l]}
            </p>
          </div>
        </div>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <CTABanner
        heading={marcasHub.ctaFinalH2[l]}
        subtext={marcasHub.ctaFinalSubtexto[l]}
        ctaText={marcasHub.ctaFinal[l]}
        ctaLink={`${prefix}/contacto`}
      />
    </>
  );
}
