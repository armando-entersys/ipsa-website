import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, ArrowRight, Phone, Shield, MapPin } from 'lucide-react';
import { notFound } from 'next/navigation';
import { stockImages, getBlur } from '@/data/images';
import { productCategories, categoryList, manufacturers } from '@/data/products';
import { services as serviceData } from '@/data/services';
import { industries as industryData } from '@/data/industries';
import { Zap } from 'lucide-react';
import Button from '@/components/ui/Button';
import PASSection from '@/components/ui/PASSection';
import CertBadges from '@/components/ui/CertBadges';
import CTABanner from '@/components/ui/CTABanner';

export function generateStaticParams() {
  return categoryList.flatMap((c) => [
    { locale: 'es', slug: c.slug },
    { locale: 'en', slug: c.slug },
  ]);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const category = productCategories[slug];
  if (!category) return {};
  const l = locale as 'es' | 'en';
  const SITE_URL = 'https://ipsacv.com.mx';
  return {
    title: `${category[l].name} | IPSA`,
    description: category.heroH2[l],
    alternates: {
      canonical: `${SITE_URL}/${locale}/productos/${slug}`,
      languages: {
        es: `${SITE_URL}/es/productos/${slug}`,
        en: `${SITE_URL}/en/products/${slug}`,
      },
    },
    openGraph: {
      title: category.heroH1[l],
      description: category.heroH2[l],
      locale: locale === 'es' ? 'es_MX' : 'en_US',
      images: category.image ? [{ url: `${SITE_URL}${category.image}`, width: 1200, height: 630 }] : undefined,
    },
  };
}

export default async function ProductCategoryPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  const category = productCategories[slug];
  if (!category) notFound();

  const l = locale as 'es' | 'en';
  const prefix = `/${locale}`;
  const data = category[l];

  const categorySuppliers = (category.suppliers ?? [])
    .map((id: string) => manufacturers[id])
    .filter(Boolean);

  const subtypes = category.subtypes ?? [];
  const standards = category.standards ?? [];

  const relatedServices = (category.services ?? []).map((svcSlug: string) => {
    const svc = serviceData.find((s) => s.slug === svcSlug);
    return { slug: svcSlug, name: svc?.name[l] ?? svcSlug };
  });

  const relatedIndustries = (category.industries ?? []).map((indSlug: string) => {
    const ind = industryData.find((i) => i.slug === indSlug);
    return { slug: indSlug, name: ind?.name[l] ?? indSlug };
  });

  // Build JSON-LD structured data
  const SITE_URL = 'https://ipsacv.com.mx';
  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: data.name,
    description: category.heroH2[l],
    image: category.image ? `${SITE_URL}${category.image}` : undefined,
    brand: categorySuppliers.length > 0
      ? categorySuppliers.map((s: { name: string }) => ({ '@type': 'Brand', name: s.name }))
      : undefined,
    category: l === 'es' ? 'Válvulas Industriales' : 'Industrial Valves',
    ...(category.sizes && {
      additionalProperty: [
        { '@type': 'PropertyValue', name: l === 'es' ? 'Tamaños' : 'Sizes', value: category.sizes },
        ...(category.pressureClasses ? [{ '@type': 'PropertyValue', name: l === 'es' ? 'Clases de Presión' : 'Pressure Classes', value: category.pressureClasses }] : []),
        ...(standards.length > 0 ? [{ '@type': 'PropertyValue', name: l === 'es' ? 'Normas' : 'Standards', value: standards.join(', ') }] : []),
      ],
    }),
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      areaServed: { '@type': 'Country', name: 'Mexico' },
      seller: { '@id': `${SITE_URL}/#organization` },
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: l === 'es' ? 'Inicio' : 'Home', item: `${SITE_URL}/${locale}` },
      { '@type': 'ListItem', position: 2, name: l === 'es' ? 'Productos' : 'Products', item: `${SITE_URL}/${locale}/${l === 'es' ? 'productos' : 'products'}` },
      { '@type': 'ListItem', position: 3, name: data.name, item: `${SITE_URL}/${locale}/productos/${slug}` },
    ],
  };

  const faqs = category.faqs;
  const faqJsonLd = faqs && faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question[l],
      acceptedAnswer: { '@type': 'Answer', text: faq.answer[l] },
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden min-h-[38vh] md:min-h-[50vh]">
        <Image
          src={category.heroImage}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-navy-dark/20 to-transparent" />

        <div
          className="relative mx-auto flex max-w-[1600px] items-end px-5 md:px-10"
          style={{ minHeight: '50vh' }}
        >
          <div className="max-w-3xl pb-12 pt-28 lg:pb-16">
            <nav className="mb-6 text-sm text-white/60">
              <Link href={prefix} className="transition-colors hover:text-white">
                {l === 'es' ? 'Inicio' : 'Home'}
              </Link>
              <ChevronRight size={14} className="mx-1 inline" />
              <Link
                href={`${prefix}/productos`}
                className="transition-colors hover:text-white"
              >
                {l === 'es' ? 'Productos' : 'Products'}
              </Link>
              <ChevronRight size={14} className="mx-1 inline" />
              <span className="text-white">{data.name}</span>
            </nav>

            <div className="mb-6 h-1 w-12 rounded-full bg-gradient-to-r from-gold to-gold-light" />

            <h1
              className="font-heading mb-4 leading-tight text-white"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 500 }}
            >
              {category.heroH1[l]}
            </h1>
            <p className="max-w-2xl leading-relaxed text-white/80" style={{ fontSize: '1.1rem' }}>
              {category.heroH2[l]}
            </p>

            {/* Cert badges */}
            {category.certChecklist && category.certChecklist.length > 0 && (
              <CertBadges
                badges={category.certChecklist}
                variant="light"
                className="mt-6 justify-start"
              />
            )}

            {/* Glass stats chips */}
            {(category.sizes || category.pressureClasses) && (
              <div className="mt-6 flex flex-wrap gap-3">
                {category.sizes && (
                  <div className="rounded-lg border border-white/10 bg-white/10 px-4 py-2.5 backdrop-blur-sm">
                    <div className="text-[10px] font-medium uppercase tracking-wider text-white/50">
                      {l === 'es' ? 'Tamaños' : 'Sizes'}
                    </div>
                    <div className="text-sm font-semibold text-white">{category.sizes}</div>
                  </div>
                )}
                {category.pressureClasses && (
                  <div className="rounded-lg border border-white/10 bg-white/10 px-4 py-2.5 backdrop-blur-sm">
                    <div className="text-[10px] font-medium uppercase tracking-wider text-white/50">
                      {l === 'es' ? 'Clases' : 'Classes'}
                    </div>
                    <div className="text-sm font-semibold text-white">{category.pressureClasses}</div>
                  </div>
                )}
              </div>
            )}

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button variant="primary" size="lg" href={`${prefix}/contacto`}>
                {category.ctaPrimary[l]}
              </Button>
              <Button
                variant="outline"
                size="md"
                href={`${prefix}/catalogo`}
                className="border-white text-white hover:bg-white hover:text-navy"
              >
                {category.ctaSecondary[l]}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CONTENT ═══ */}
      <section
        className="py-16 lg:py-20"
        style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)' }}
      >
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-3">
            {/* ── Main content ── */}
            <div className="space-y-16 lg:col-span-2">
              {/* Definition */}
              <div>
                <p
                  className="leading-relaxed text-gray-600"
                  style={{ fontSize: '1.05rem', lineHeight: 1.8 }}
                >
                  {category.definition[l]}
                </p>
              </div>

              {/* PAS Section */}
              {category.pas && (
                <PASSection
                  variant="full"
                  problema={category.pas.problema[l]}
                  agitacion={category.pas.agitacion[l]}
                  solucion={category.pas.solucion[l]}
                  className="!py-0"
                />
              )}

              {/* Subtypes */}
              {subtypes.length > 0 && (
                <div>
                  <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gold">
                    {l === 'es' ? 'Configuraciones' : 'Configurations'}
                  </p>
                  <h2
                    className="font-heading mb-8 text-gray-900"
                    style={{ fontSize: 'clamp(1.5rem, 3.5vw, 1.75rem)', fontWeight: 500 }}
                  >
                    {l === 'es' ? 'Tipos disponibles' : 'Available types'}
                  </h2>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {subtypes.map((st) => {
                      const stSuppliers = (st.manufacturers ?? [])
                        .map((id: string) => manufacturers[id])
                        .filter(Boolean);
                      return (
                        <Link
                          key={st.slug}
                          href={`${prefix}/productos/${slug}/${st.slug}`}
                          className="group block overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md transition-all duration-150 hover:-translate-y-0.5 hover:shadow-lg"
                        >
                          {st.image && (
                            <div className="relative w-full overflow-hidden bg-gray-50" style={{ aspectRatio: '1/1' }}>
                              <Image
                                src={st.image}
                                alt={st[l].name}
                                fill
                                className="object-contain transition-transform duration-200 group-hover:scale-[1.03]"
                                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                              />
                            </div>
                          )}
                          <div className="p-6">
                            <h3 className="font-heading font-semibold text-gray-900 transition-colors group-hover:text-gold">
                              {st[l].name}
                            </h3>
                            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-500">
                              {st[l].desc}
                            </p>
                            {st.sizes && (
                              <span className="mt-3 block text-xs text-gray-400">
                                <span className="font-medium text-gray-600">
                                  {l === 'es' ? 'Tamaños' : 'Sizes'}:
                                </span>{' '}
                                {st.sizes}
                              </span>
                            )}
                            {stSuppliers.length > 0 && (
                              <div className="mt-3 flex flex-wrap gap-1.5">
                                {stSuppliers.map((mfg) => (
                                  <span
                                    key={mfg.slug || mfg.name}
                                    className="rounded-md bg-navy-deep/[0.06] px-2.5 py-1 text-[11px] font-medium text-navy"
                                  >
                                    {mfg.name}
                                  </span>
                                ))}
                              </div>
                            )}
                            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-colors group-hover:text-gold-dark">
                              {l === 'es' ? 'Ver detalles' : 'View details'}
                              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
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
                  <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gold">
                    {l === 'es' ? 'Datos técnicos' : 'Technical data'}
                  </p>
                  <h2
                    className="font-heading mb-8 text-gray-900"
                    style={{ fontSize: 'clamp(1.5rem, 3.5vw, 1.75rem)', fontWeight: 500 }}
                  >
                    {l === 'es' ? 'Especificaciones' : 'Specifications'}
                  </h2>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {category.sizes && (
                      <div
                        className="rounded-xl border border-gray-100 bg-white p-6"
                        style={{ borderLeft: '3px solid var(--color-gold)' }}
                      >
                        <dt className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">
                          {l === 'es' ? 'Rango de tamaños' : 'Size range'}
                        </dt>
                        <dd className="text-lg font-semibold text-gray-900">{category.sizes}</dd>
                      </div>
                    )}
                    {category.pressureClasses && (
                      <div
                        className="rounded-xl border border-gray-100 bg-white p-6"
                        style={{ borderLeft: '3px solid var(--color-gold)' }}
                      >
                        <dt className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">
                          {l === 'es' ? 'Clases de presión' : 'Pressure classes'}
                        </dt>
                        <dd className="text-lg font-semibold text-gray-900">{category.pressureClasses}</dd>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Standards */}
              {standards.length > 0 && (
                <div>
                  <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gold">
                    {l === 'es' ? 'Cumplimiento' : 'Compliance'}
                  </p>
                  <h2
                    className="font-heading mb-8 text-gray-900"
                    style={{ fontSize: 'clamp(1.5rem, 3.5vw, 1.75rem)', fontWeight: 500 }}
                  >
                    {l === 'es' ? 'Normas y certificaciones' : 'Standards & certifications'}
                  </h2>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                    {standards.map((std) => (
                      <div
                        key={std}
                        className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-4"
                      >
                        <div
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                          style={{ background: 'linear-gradient(135deg, #141733, #203c88)' }}
                        >
                          <Shield size={14} className="text-gold-light" strokeWidth={1.5} />
                        </div>
                        <span className="text-sm font-semibold tracking-wide text-gray-900">
                          {std}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Manufacturers */}
              {categorySuppliers.length > 0 && (
                <div>
                  <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gold">
                    {l === 'es' ? 'Representaciones' : 'Partnerships'}
                  </p>
                  <h2
                    className="font-heading mb-8 text-gray-900"
                    style={{ fontSize: 'clamp(1.5rem, 3.5vw, 1.75rem)', fontWeight: 500 }}
                  >
                    {l === 'es' ? 'Marcas disponibles' : 'Available brands'}
                  </h2>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {categorySuppliers.map(
                      (s: { name: string; slug: string; image: string; logo: string; country: string }) => (
                        <Link
                          key={s.slug || s.name}
                          href={s.slug ? `${prefix}/fabricantes/${s.slug}` : `${prefix}/fabricantes`}
                          className="group flex items-center gap-5 rounded-xl border border-gray-100 bg-white p-5 shadow-md transition-all duration-150 hover:-translate-y-0.5 hover:shadow-lg"
                        >
                          <div className="relative flex h-14 w-28 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-gray-100 bg-white">
                            {s.logo ? (
                              /* eslint-disable-next-line @next/next/no-img-element */
                              <img src={s.logo} alt={s.name} width={90} height={36} className="object-contain" />
                            ) : (
                              <span className="text-sm font-bold text-navy">
                                {s.name.split(' ')[0].substring(0, 3).toUpperCase()}
                              </span>
                            )}
                          </div>
                          <div className="min-w-0 flex-1">
                            <span className="block font-semibold text-gray-900 transition-colors group-hover:text-gold">
                              {s.name}
                            </span>
                            <span className="mt-1 flex items-center gap-1.5 text-xs text-gray-400">
                              <MapPin size={11} />
                              {s.country}
                            </span>
                          </div>
                          <ArrowRight size={16} className="shrink-0 text-gray-300 transition-all group-hover:translate-x-0.5 group-hover:text-gold" />
                        </Link>
                      ),
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* ── Sidebar ── */}
            <div className="space-y-6">
              {/* CTA card */}
              <div className="relative overflow-hidden rounded-xl bg-navy-deep">
                <div className="h-1 bg-gradient-to-r from-gold to-gold-light" />
                <div className="p-7">
                  <p className="mb-2 text-sm font-medium uppercase tracking-widest text-gold-light">
                    {l === 'es' ? 'Cotización' : 'Quote'}
                  </p>
                  <h3 className="font-heading mb-3 text-xl font-semibold text-white">
                    {l === 'es' ? 'Solicita tu cotización' : 'Request a quote'}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-white/60">
                    {l === 'es'
                      ? 'Nuestros ingenieros te ayudan a seleccionar el equipo correcto.'
                      : 'Our engineers help you select the right equipment.'}
                  </p>
                  <Button variant="primary" className="w-full" href={`${prefix}/contacto`}>
                    {category.ctaPrimary[l]}
                  </Button>
                  <a
                    href="tel:+525553973703"
                    className="mt-4 flex items-center justify-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
                  >
                    <Phone size={14} />
                    +52 55 5397 3703
                  </a>
                </div>
              </div>

              {/* Product image */}
              <div className="relative overflow-hidden rounded-xl bg-gray-50" style={{ aspectRatio: '1/1' }}>
                <Image
                  src={category.image}
                  alt={data.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-heading text-sm font-semibold text-white">{data.name}</p>
                </div>
              </div>

              {/* Related services */}
              {relatedServices.length > 0 && (
                <div className="rounded-xl border border-gray-100 bg-white p-7 shadow-md">
                  <p className="mb-2 text-sm font-medium uppercase tracking-widest text-gold">
                    {l === 'es' ? 'Soporte' : 'Support'}
                  </p>
                  <h3 className="font-heading mb-4 text-lg font-semibold text-gray-900">
                    {l === 'es' ? 'Servicios relacionados' : 'Related services'}
                  </h3>
                  <ul className="space-y-1">
                    {relatedServices.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`${prefix}/servicios/${s.slug}`}
                          className="group flex items-center justify-between rounded-lg px-3 py-2.5 transition-colors hover:bg-gray-50"
                        >
                          <span className="text-sm font-medium text-gray-700 transition-colors group-hover:text-gray-900">
                            {s.name}
                          </span>
                          <ArrowRight size={14} className="text-gold transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Related industries */}
              {relatedIndustries.length > 0 && (
                <div className="rounded-xl border border-gray-100 bg-white p-7 shadow-md">
                  <p className="mb-2 text-sm font-medium uppercase tracking-widest text-gold">
                    {l === 'es' ? 'Sectores' : 'Sectors'}
                  </p>
                  <h3 className="font-heading mb-4 text-lg font-semibold text-gray-900">
                    {l === 'es' ? 'Industrias' : 'Industries'}
                  </h3>
                  <ul className="space-y-1">
                    {relatedIndustries.map((ind) => (
                      <li key={ind.slug}>
                        <Link
                          href={`${prefix}/industrias/${ind.slug}`}
                          className="group flex items-center justify-between rounded-lg px-3 py-2.5 transition-colors hover:bg-gray-50"
                        >
                          <span className="text-sm font-medium text-gray-700 transition-colors group-hover:text-gray-900">
                            {ind.name}
                          </span>
                          <ArrowRight size={14} className="text-gold transition-transform group-hover:translate-x-0.5" />
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

      {/* ═══ AUTOMATION BANNER ═══ */}
      {category.automationBanner && (
        <section className="bg-navy-deep py-16 lg:py-20">
          <div className="mx-auto max-w-[1600px] px-5 md:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/20">
                  <Zap className="h-6 w-6 text-gold" />
                </div>
              </div>
              <h2
                className="font-heading mb-4 text-white"
                style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: 500 }}
              >
                {category.automationBanner.h2[l]}
              </h2>
              <p className="mb-8 leading-relaxed text-white/60" style={{ fontSize: '1rem', lineHeight: 1.8 }}>
                {category.automationBanner.body[l]}
              </p>
              <Link
                href={`${prefix}/servicios/automatizacion`}
                className="inline-flex items-center gap-2 rounded-lg border border-gold/30 bg-gold/10 px-6 py-3 text-sm font-semibold text-gold-light transition-all hover:border-gold hover:bg-gold hover:text-white"
              >
                {l === 'es' ? 'Conozca nuestra División de Automatización' : 'Learn about our Automation Division'}
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ═══ CTA FINAL ═══ */}
      <CTABanner
        heading={category.ctaFinal?.h2[l] ?? (l === 'es' ? 'Hablemos de su proyecto' : "Let's talk about your project")}
        subtext={category.ctaFinal?.subtexto[l] ?? (l === 'es'
          ? 'Nuestro equipo de ingenieros está listo para ayudarle a encontrar la solución correcta.'
          : 'Our engineering team is ready to help you find the right solution.')}
        ctaText={category.ctaFinal?.cta[l] ?? (l === 'es' ? 'Contactar Especialista' : 'Contact a Specialist')}
        ctaLink={`${prefix}/contacto`}
      />
    </>
  );
}
