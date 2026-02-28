import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, ArrowRight, Phone } from 'lucide-react';
import { notFound } from 'next/navigation';
import { stockImages, getBlur } from '@/data/images';
import { services } from '@/data/services';
import { industries } from '@/data/industries';
import Button from '@/components/ui/Button';
import FeatureGrid from '@/components/ui/FeatureGrid';
import Steps from '@/components/ui/Steps';
import InHouseBanner from '@/components/ui/InHouseBanner';
import CTABanner from '@/components/ui/CTABanner';

export function generateStaticParams() {
  return services.flatMap((s) => [
    { locale: 'es', slug: s.slug },
    { locale: 'en', slug: s.slug },
  ]);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  const l = locale as 'es' | 'en';
  return {
    title: service.name[l],
    description: service.description[l],
    openGraph: {
      title: service.heroH1[l],
      description: service.heroH2[l],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const l = locale as 'es' | 'en';
  const prefix = `/${locale}`;
  const otherServices = services.filter((s) => s.slug !== slug);

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden" style={{ minHeight: '55vh' }}>
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
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-navy-dark/25 to-transparent" />

        <div
          className="relative mx-auto flex max-w-[1600px] items-center px-5 md:px-10"
          style={{ minHeight: '55vh' }}
        >
          <div className="max-w-3xl py-20 lg:py-28">
            <nav className="mb-6 text-sm text-white/60">
              <Link href={prefix} className="transition-colors hover:text-white">
                {l === 'es' ? 'Inicio' : 'Home'}
              </Link>
              <ChevronRight size={14} className="mx-1 inline" />
              <Link
                href={`${prefix}/servicios`}
                className="transition-colors hover:text-white"
              >
                {l === 'es' ? 'Servicios' : 'Services'}
              </Link>
              <ChevronRight size={14} className="mx-1 inline" />
              <span className="text-white">{service.name[l]}</span>
            </nav>
            <h1
              className="font-heading mb-4 leading-tight text-white"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 500 }}
            >
              {service.heroH1[l]}
            </h1>
            <p
              className="max-w-2xl leading-relaxed text-white/85"
              style={{ fontSize: '1.1rem', lineHeight: 1.7 }}
            >
              {service.heroH2[l]}
            </p>
            <div className="mt-8">
              <Button variant="primary" size="lg" href={`${prefix}/contacto`}>
                {service.ctaHero[l]}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ INTRODUCTION ═══ */}
      <section
        className="py-20 lg:py-24"
        style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)' }}
      >
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
            <div className="lg:col-span-2">
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gold">
                {l === 'es' ? 'Introducción' : 'Introduction'}
              </p>
              <h2
                className="font-heading mb-6 text-gray-900"
                style={{ fontSize: 'clamp(1.5rem, 3.5vw, 1.75rem)', fontWeight: 500 }}
              >
                {service.introduction.h2[l]}
              </h2>
              <p
                className="leading-relaxed text-gray-600"
                style={{ fontSize: '1.05rem', lineHeight: 1.8 }}
              >
                {service.introduction.body[l]}
              </p>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="overflow-hidden rounded-xl bg-navy-deep shadow-lg">
                <div className="h-1 bg-gradient-to-r from-gold to-gold-light" />
                <div className="p-7">
                  <h3 className="font-heading mb-2 text-lg font-semibold text-gold-light">
                    {l === 'es' ? 'Comienza tu proyecto' : 'Start your project'}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-white/50">
                    {l === 'es'
                      ? 'Nuestros ingenieros te ayudan a encontrar la solución correcta.'
                      : 'Our engineers help you find the right solution.'}
                  </p>
                  <Button variant="primary" className="w-full" href={`${prefix}/contacto`}>
                    {service.ctaHero[l]}
                  </Button>
                  <a
                    href="tel:+525553973703"
                    className="mt-4 flex items-center justify-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
                  >
                    <Phone size={14} /> +52 55 5397 3703
                  </a>
                </div>
              </div>

              {otherServices.length > 0 && (
                <div className="rounded-xl border border-gray-100 bg-white p-7 shadow-md">
                  <h3 className="font-heading mb-4 font-semibold text-gray-900">
                    {l === 'es' ? 'Otros servicios' : 'Other services'}
                  </h3>
                  <div className="space-y-1">
                    {otherServices.map((s) => (
                      <Link
                        key={s.slug}
                        href={`${prefix}/servicios/${s.slug}`}
                        className="group flex items-center justify-between rounded-lg border-b border-gray-100 px-3 py-2.5 last:border-0"
                      >
                        <span className="text-sm font-medium text-gray-600 transition-colors group-hover:text-gold">
                          {s.name[l]}
                        </span>
                        <ArrowRight
                          size={13}
                          className="text-gold transition-transform group-hover:translate-x-0.5"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FEATURE BLOCKS ═══ */}
      {service.featureBlocks.length > 0 && (
        <section
          className="py-20 lg:py-24"
          style={{ background: 'linear-gradient(180deg, #f6f7f9 0%, #f0f1f5 100%)' }}
        >
          <div className="mx-auto max-w-[1600px] px-5 md:px-10">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gold">
                {l === 'es' ? 'Capacidades' : 'Capabilities'}
              </p>
              <h2
                className="font-heading text-gray-900"
                style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 500 }}
              >
                {l === 'es' ? 'Qué ofrecemos' : 'What we offer'}
              </h2>
            </div>
            <FeatureGrid
              features={service.featureBlocks.map((fb) => ({
                title: fb.title[l],
                detail: fb.detail[l],
                icon: fb.icon,
              }))}
              columns={service.featureBlocks.length <= 3 ? 3 : 4}
            />
          </div>
        </section>
      )}

      {/* ═══ IN-HOUSE DIFFERENTIAL ═══ */}
      <InHouseBanner
        heading={service.inHouse.h2[l]}
        body={service.inHouse.body[l]}
        ctaText={l === 'es' ? 'Hablar con un Especialista' : 'Talk to a Specialist'}
        ctaLink={`${prefix}/contacto`}
      />

      {/* ═══ BENEFITS ═══ */}
      {service.benefits.length > 0 && (
        <section
          className="py-20 lg:py-24"
          style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)' }}
        >
          <div className="mx-auto max-w-[1600px] px-5 md:px-10">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gold">
                {l === 'es' ? 'Beneficios' : 'Benefits'}
              </p>
              <h2
                className="font-heading text-gray-900"
                style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 500 }}
              >
                {l === 'es' ? 'Ventajas clave' : 'Key advantages'}
              </h2>
            </div>
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
              {service.benefits.map((benefit) => (
                <div
                  key={benefit.title[l]}
                  className="rounded-xl border border-gray-100 bg-white p-6 shadow-md"
                >
                  <h3 className="font-heading text-lg font-semibold text-gray-900">
                    {benefit.title[l]}
                  </h3>
                  {benefit.description && (
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">
                      {benefit.description[l]}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ PROCESS STEPS ═══ */}
      {service.processSteps.length > 0 && (
        <section
          className="py-20 lg:py-24"
          style={{ background: 'linear-gradient(180deg, #f6f7f9 0%, #f0f1f5 100%)' }}
        >
          <div className="mx-auto max-w-[1600px] px-5 md:px-10">
            <div className="mb-14 text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gold">
                {l === 'es' ? 'Metodología' : 'Methodology'}
              </p>
              <h2
                className="font-heading text-gray-900"
                style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 500 }}
              >
                {l === 'es' ? 'Nuestro proceso' : 'Our process'}
              </h2>
            </div>
            <Steps
              steps={service.processSteps.map((ps) => ({
                number: ps.order,
                title: ps.name[l],
                description: ps.description[l],
              }))}
            />
          </div>
        </section>
      )}

      {/* ═══ CROSS-REFERENCES ═══ */}
      <section
        className="py-16 lg:py-20"
        style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)' }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {service.relatedProducts.length > 0 && (
              <div>
                <h3 className="font-heading mb-4 text-xl font-semibold text-gray-900">
                  {l === 'es' ? 'Productos Relacionados' : 'Related Products'}
                </h3>
                <ul className="space-y-2">
                  {service.relatedProducts.map((productSlug) => (
                    <li key={productSlug}>
                      <Link
                        href={`${prefix}/productos/${productSlug}`}
                        className="group flex items-center justify-between rounded-lg px-3 py-2.5 transition-colors hover:bg-gray-50"
                      >
                        <span className="text-sm font-medium text-gray-700 transition-colors group-hover:text-gray-900">
                          {productSlug
                            .replace(/-/g, ' ')
                            .replace(/\b\w/g, (c) => c.toUpperCase())}
                        </span>
                        <ArrowRight
                          size={14}
                          className="text-gold transition-transform group-hover:translate-x-0.5"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {service.relatedIndustries.length > 0 && (
              <div>
                <h3 className="font-heading mb-4 text-xl font-semibold text-gray-900">
                  {l === 'es' ? 'Industrias Atendidas' : 'Industries Served'}
                </h3>
                <ul className="space-y-2">
                  {service.relatedIndustries.map((indSlug) => {
                    const ind = industries.find((i) => i.slug === indSlug);
                    return (
                      <li key={indSlug}>
                        <Link
                          href={`${prefix}/industrias/${indSlug}`}
                          className="group flex items-center justify-between rounded-lg px-3 py-2.5 transition-colors hover:bg-gray-50"
                        >
                          <span className="text-sm font-medium text-gray-700 transition-colors group-hover:text-gray-900">
                            {ind ? ind.name[l] : indSlug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
                          </span>
                          <ArrowRight
                            size={14}
                            className="text-gold transition-transform group-hover:translate-x-0.5"
                          />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <CTABanner
        heading={service.ctaFinal.h2[l]}
        subtext={service.ctaFinal.subtexto[l]}
        ctaText={service.ctaFinal.cta[l]}
        ctaLink={`${prefix}/contacto`}
      />
    </>
  );
}
