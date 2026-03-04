import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { ChevronRight, ArrowRight, ShieldCheck, CalendarCheck } from 'lucide-react';
import { stockImages, getBlur } from '@/data/images';
import { serviciosHub, services } from '@/data/services';
import Button from '@/components/ui/Button';
import CounterSection from '@/components/ui/CounterSection';
import InHouseBanner from '@/components/ui/InHouseBanner';
import CTABanner from '@/components/ui/CTABanner';

const SITE_URL = 'https://ipsacv.com.mx';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo.services' });
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: `${SITE_URL}/${locale}/${locale === 'es' ? 'servicios' : 'services'}`,
      languages: {
        es: `${SITE_URL}/es/servicios`,
        en: `${SITE_URL}/en/services`,
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      locale: locale === 'es' ? 'es_MX' : 'en_US',
      images: [{ url: `${SITE_URL}/images/heroes/services-hero.jpg`, width: 1200, height: 630 }],
    },
  };
}

export default function ServicesHub() {
  const locale = useLocale();
  const l = locale as 'es' | 'en';
  const prefix = `/${locale}`;

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden" style={{ minHeight: '50vh' }}>
        <Image
          src={stockImages.servicesHero}
          alt=""
          fill
          priority
          placeholder="blur"
          blurDataURL={getBlur(stockImages.servicesHero)}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/50 via-navy-dark/15 to-transparent" />

        <div
          className="relative mx-auto flex max-w-[1600px] items-end px-5 md:px-10"
          style={{ minHeight: '50vh' }}
        >
          <div className="max-w-3xl pb-10 pt-28 lg:pb-14">
            <nav className="mb-5 text-sm text-white/60">
              <Link href={prefix} className="transition-colors hover:text-white">
                {l === 'es' ? 'Inicio' : 'Home'}
              </Link>
              <ChevronRight size={14} className="mx-1 inline" />
              <span className="text-white">{l === 'es' ? 'Servicios' : 'Services'}</span>
            </nav>
            <div className="mb-5 flex items-center gap-3">
              <ShieldCheck className="h-8 w-8 text-gold" />
              <span className="text-sm font-semibold uppercase tracking-widest text-gold">
                {l === 'es' ? 'Protección y Optimización Operativa' : 'Operational Protection & Optimization'}
              </span>
            </div>
            <h1
              className="font-heading mb-4 leading-tight text-white"
              style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', fontWeight: 500 }}
            >
              {serviciosHub.heroH1[l]}
            </h1>
            <p
              className="max-w-2xl leading-relaxed text-white/85"
              style={{ fontSize: '1.1rem', lineHeight: 1.7 }}
            >
              {serviciosHub.heroH2[l]}
            </p>
            <div className="mt-6">
              <CounterSection
                counters={[
                  { value: '38', suffix: '+', label: l === 'es' ? 'años asegurando la continuidad industrial' : 'years ensuring industrial continuity' },
                ]}
                className="justify-start"
                variant="light"
              />
            </div>
            <div className="mt-8">
              <Button variant="primary" size="lg" href={`${prefix}/contacto`}>
                {serviciosHub.ctaHero[l]}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICE LINE A: Automatización ═══ */}
      <section
        className="py-20 lg:py-24"
        style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)' }}
      >
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative overflow-hidden rounded-xl" style={{ minHeight: '400px' }}>
              <Image
                src={stockImages.automation}
                alt={services[0].name[l]}
                fill
                placeholder="blur"
                blurDataURL={getBlur(stockImages.automation)}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-navy-deep/15" />
            </div>
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gold">
                {l === 'es' ? 'Línea de Servicio A' : 'Service Line A'}
              </p>
              <h2
                className="font-heading mb-4 text-gray-900"
                style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 500 }}
              >
                {serviciosHub.lineaA.h2[l]}
              </h2>
              <p className="mb-6 leading-relaxed text-gray-600">{serviciosHub.lineaA.body[l]}</p>
              <ul className="mb-8 space-y-2.5">
                {serviciosHub.lineaA.features[l].map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm text-gray-600">
                    <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {feat}
                  </li>
                ))}
              </ul>
              <Link
                href={`${prefix}/servicios/automatizacion`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-gold transition-colors hover:text-gold-dark"
              >
                {serviciosHub.lineaA.cta[l]}
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICE LINE B: Ingeniería ═══ */}
      <section
        className="py-20 lg:py-24"
        style={{ background: 'linear-gradient(180deg, #f6f7f9 0%, #f0f1f5 100%)' }}
      >
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 lg:order-1">
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gold">
                {l === 'es' ? 'Línea de Servicio B' : 'Service Line B'}
              </p>
              <h2
                className="font-heading mb-4 text-gray-900"
                style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 500 }}
              >
                {serviciosHub.lineaB.h2[l]}
              </h2>
              <p className="mb-6 leading-relaxed text-gray-600">{serviciosHub.lineaB.body[l]}</p>
              <ul className="mb-8 space-y-2.5">
                {serviciosHub.lineaB.features[l].map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm text-gray-600">
                    <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {feat}
                  </li>
                ))}
              </ul>
              <Link
                href={`${prefix}/servicios/ingenieria`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-gold transition-colors hover:text-gold-dark"
              >
                {serviciosHub.lineaB.cta[l]}
                <ArrowRight size={14} />
              </Link>
            </div>
            <div
              className="relative order-1 overflow-hidden rounded-xl lg:order-2"
              style={{ minHeight: '400px' }}
            >
              <Image
                src={stockImages.engineering}
                alt={services[1].name[l]}
                fill
                placeholder="blur"
                blurDataURL={getBlur(stockImages.engineering)}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-navy-deep/15" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ IN-HOUSE TRANSVERSAL ═══ */}
      <InHouseBanner
        heading={serviciosHub.inHouse.h2[l]}
        body={serviciosHub.inHouse.body[l]}
        ctaText={l === 'es' ? 'Conocer el Soporte In-House' : 'Learn about In-House Support'}
        ctaLink={`${prefix}/contacto`}
        differentials={[
          {
            label: l === 'es' ? 'En Automatización' : 'In Automation',
            text: serviciosHub.inHouse.enAutomatizacion[l],
          },
          {
            label: l === 'es' ? 'En Ingeniería' : 'In Engineering',
            text: serviciosHub.inHouse.enIngenieria[l],
          },
        ]}
        impactPhrase={serviciosHub.inHouse.impactPhrase[l]}
      />

      {/* ═══ CTA FINAL ═══ */}
      <CTABanner
        heading={serviciosHub.ctaFinal.h2[l]}
        subtext={serviciosHub.ctaFinal.subtexto[l]}
        ctaText={serviciosHub.ctaFinal.cta[l]}
        ctaLink={`${prefix}/contacto`}
        ctaIcon={<CalendarCheck size={18} />}
      />
    </>
  );
}
