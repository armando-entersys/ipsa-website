import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import { stockImages, getBlur } from '@/data/images';
import { industries } from '@/data/industries';
import Button from '@/components/ui/Button';
import PASSection from '@/components/ui/PASSection';
import EcosystemGrid from '@/components/ui/EcosystemGrid';
import MatrixTable from '@/components/ui/MatrixTable';
import InHouseBanner from '@/components/ui/InHouseBanner';
import CTABanner from '@/components/ui/CTABanner';

export function generateStaticParams() {
  return industries.flatMap((i) => [
    { locale: 'es', slug: i.slug },
    { locale: 'en', slug: i.slug },
  ]);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return {};
  const l = locale as 'es' | 'en';
  const SITE_URL = 'https://ipsacv.com.mx';
  return {
    title: `${industry.name[l]} | IPSA`,
    description: industry.heroH2[l],
    alternates: {
      canonical: `${SITE_URL}/${locale}/industrias/${slug}`,
      languages: {
        es: `${SITE_URL}/es/industrias/${slug}`,
        en: `${SITE_URL}/en/industries/${slug}`,
      },
    },
    openGraph: {
      title: industry.heroH1[l],
      description: industry.heroH2[l],
      locale: locale === 'es' ? 'es_MX' : 'en_US',
      images: industry.image ? [{ url: `${SITE_URL}${industry.image}`, width: 1200, height: 630 }] : undefined,
    },
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) notFound();

  const l = locale as 'es' | 'en';
  const prefix = `/${locale}`;

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden min-h-[40vh] md:min-h-[55vh]">
        <Image
          src={industry.image}
          alt=""
          fill
          priority
          placeholder="blur"
          blurDataURL={getBlur(industry.image)}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-navy-dark/25 to-transparent" />

        <div
          className="relative mx-auto flex max-w-[1600px] items-center px-5 md:px-10"
          style={{ minHeight: '55vh' }}
        >
          <div className="max-w-3xl py-24 lg:py-32">
            <nav className="mb-6 text-sm text-white/60">
              <Link href={prefix} className="transition-colors hover:text-white">
                {l === 'es' ? 'Inicio' : 'Home'}
              </Link>
              <ChevronRight size={14} className="mx-1 inline" />
              <Link
                href={`${prefix}/industrias`}
                className="transition-colors hover:text-white"
              >
                {l === 'es' ? 'Industrias' : 'Industries'}
              </Link>
              <ChevronRight size={14} className="mx-1 inline" />
              <span className="text-white">{industry.name[l]}</span>
            </nav>
            <h1
              className="font-heading mb-4 leading-tight text-white"
              style={{ fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 500 }}
            >
              {industry.heroH1[l]}
            </h1>
            <p
              className="max-w-2xl leading-relaxed text-white/85"
              style={{ fontSize: '1.15rem', lineHeight: 1.7 }}
            >
              {industry.heroH2[l]}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button variant="primary" size="lg" href={`${prefix}${industry.ctaPrimaryLink}`}>
                {industry.ctaPrimary[l]}
              </Button>
              <Button
                variant="outline"
                size="lg"
                href={`${prefix}${industry.ctaSecondaryLink}`}
                className="border-white text-white hover:bg-white hover:text-navy"
              >
                {industry.ctaSecondary[l]}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PAS SECTION ═══ */}
      <PASSection
        variant="compact"
        heading={industry.pas.h2[l]}
        body={industry.pas.body[l]}
        cta={
          industry.pas.ctaInterconnect && industry.pas.ctaInterconnectLink
            ? {
                text: industry.pas.ctaInterconnect[l],
                href: `${prefix}${industry.pas.ctaInterconnectLink}`,
              }
            : undefined
        }
      />

      {/* ═══ ECOSYSTEM ═══ */}
      {industry.ecosystem.length > 0 && (
        <section
          className="py-16 lg:py-20"
          style={{ background: 'linear-gradient(180deg, #f6f7f9 0%, #f0f1f5 100%)' }}
        >
          <div className="mx-auto max-w-6xl px-6">
            <h2
              className="font-heading mb-10 text-center text-gray-900"
              style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 500 }}
            >
              {l === 'es' ? 'Ecosistema de Soluciones' : 'Solutions Ecosystem'}
            </h2>
            <EcosystemGrid
              items={industry.ecosystem.map((block) => ({
                title: block.title[l],
                copy: block.copy[l],
                ctaText: block.cta[l],
                ctaLink: `${prefix}${block.ctaLink}`,
              }))}
            />
          </div>
        </section>
      )}

      {/* ═══ MATRIX TABLE ═══ */}
      {industry.matrix.length > 0 && (
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <MatrixTable
              heading={l === 'es' ? 'Matriz de Aplicación' : 'Application Matrix'}
              headers={{
                proceso: l === 'es' ? 'Proceso' : 'Process',
                tecnologia: l === 'es' ? 'Tecnología' : 'Technology',
                marca: l === 'es' ? 'Marca' : 'Brand',
                servicio: l === 'es' ? 'Servicio IPSA' : 'IPSA Service',
              }}
              rows={industry.matrix.map((row) => ({
                proceso: row.proceso[l],
                tecnologia: row.tecnologia[l],
                marca: row.marca,
                servicio: row.servicio[l],
                servicioLink: `${prefix}${row.servicioLink}`,
              }))}
            />
          </div>
        </section>
      )}

      {/* ═══ IN-HOUSE DIFFERENTIAL ═══ */}
      <InHouseBanner
        heading={industry.inHouseDifferential.h2[l]}
        body={industry.inHouseDifferential.body[l]}
        ctaText={industry.inHouseDifferential.cta[l]}
        ctaLink={`${prefix}${industry.inHouseDifferential.ctaLink}`}
      />

      {/* ═══ CROSS-REFERENCES ═══ */}
      <section
        className="py-16 lg:py-20"
        style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)' }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Related Products */}
            {industry.relatedProducts.length > 0 && (
              <div>
                <h3 className="font-heading mb-4 text-xl font-semibold text-gray-900">
                  {l === 'es' ? 'Productos Relacionados' : 'Related Products'}
                </h3>
                <ul className="space-y-2">
                  {industry.relatedProducts.map((slug) => (
                    <li key={slug}>
                      <Link
                        href={`${prefix}/productos/${slug}`}
                        className="group flex items-center justify-between rounded-lg px-3 py-2.5 transition-colors hover:bg-gray-50"
                      >
                        <span className="text-sm font-medium text-gray-700 transition-colors group-hover:text-gray-900">
                          {slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
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
            {/* Related Services */}
            {industry.relatedServices.length > 0 && (
              <div>
                <h3 className="font-heading mb-4 text-xl font-semibold text-gray-900">
                  {l === 'es' ? 'Servicios Relacionados' : 'Related Services'}
                </h3>
                <ul className="space-y-2">
                  {industry.relatedServices.map((slug) => (
                    <li key={slug}>
                      <Link
                        href={`${prefix}/servicios/${slug}`}
                        className="group flex items-center justify-between rounded-lg px-3 py-2.5 transition-colors hover:bg-gray-50"
                      >
                        <span className="text-sm font-medium text-gray-700 transition-colors group-hover:text-gray-900">
                          {slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
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
          </div>
        </div>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <CTABanner
        heading={industry.ctaFinal.h2[l]}
        subtext={industry.ctaFinal.subtexto[l]}
        ctaText={industry.ctaFinal.cta[l]}
        ctaLink={`${prefix}/contacto`}
      />
    </>
  );
}
