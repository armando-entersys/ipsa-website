import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, ArrowRight, Phone, MapPin, Award } from 'lucide-react';
import { notFound } from 'next/navigation';
import { stockImages, getBlur } from '@/data/images';
import { suppliers } from '@/data/suppliers';
import Button from '@/components/ui/Button';
import PASSection from '@/components/ui/PASSection';
import NavCircular from '@/components/ui/NavCircular';
import InHouseBanner from '@/components/ui/InHouseBanner';
import CTABanner from '@/components/ui/CTABanner';

export function generateStaticParams() {
  return suppliers.flatMap((s) => [
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
  const supplier = suppliers.find((s) => s.slug === slug);
  if (!supplier) return {};
  const l = locale as 'es' | 'en';
  return {
    title: supplier.name[l],
    description: supplier.description[l],
    openGraph: {
      title: supplier.heroH1[l],
      description: supplier.heroH2[l],
    },
  };
}

export default async function SupplierPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const supplier = suppliers.find((s) => s.slug === slug);
  if (!supplier) notFound();

  const l = locale as 'es' | 'en';
  const prefix = `/${locale}`;
  const otherSuppliers = suppliers.filter((s) => s.slug !== slug && s.isPriority);

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden" style={{ minHeight: '45vh' }}>
        <Image
          src={supplier.image || stockImages.suppliersHero}
          alt=""
          fill
          priority
          placeholder="blur"
          blurDataURL={getBlur(supplier.image || stockImages.suppliersHero)}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-navy-dark/25 to-transparent" />

        <div
          className="relative mx-auto flex max-w-[1600px] items-center px-5 md:px-10"
          style={{ minHeight: '45vh' }}
        >
          <div className="py-20 lg:py-24">
            <nav className="mb-8 text-sm text-white/60">
              <Link href={prefix} className="transition-colors hover:text-white">
                {l === 'es' ? 'Inicio' : 'Home'}
              </Link>
              <ChevronRight size={14} className="mx-1 inline" />
              <Link
                href={`${prefix}/proveedores`}
                className="transition-colors hover:text-white"
              >
                {l === 'es' ? 'Marcas' : 'Brands'}
              </Link>
              <ChevronRight size={14} className="mx-1 inline" />
              <span className="text-white">{supplier.name[l]}</span>
            </nav>

            <div className="flex items-center gap-6">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl border border-white/15 bg-white/10 md:h-28 md:w-28">
                <Image
                  src={supplier.logo}
                  alt={supplier.name[l]}
                  fill
                  className="object-contain p-3"
                  sizes="112px"
                />
              </div>
              <div>
                <h1
                  className="font-heading mb-2 leading-tight text-white"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 500 }}
                >
                  {supplier.heroH1[l]}
                </h1>
                <p className="max-w-xl text-white/80">{supplier.heroH2[l]}</p>
                <div className="mt-2 flex items-center gap-2">
                  <MapPin size={14} className="text-gold-light" />
                  <span className="text-sm text-white/70">{supplier.country}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button variant="primary" size="lg" href={`${prefix}/contacto`}>
                {supplier.ctaPrimary[l]}
              </Button>
              <Button
                variant="outline"
                size="md"
                href={`${prefix}/catalogo`}
                className="border-white text-white hover:bg-white hover:text-navy"
              >
                {supplier.ctaSecondary[l]}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MAIN CONTENT ═══ */}
      <section
        className="py-20 lg:py-24"
        style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)' }}
      >
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
            {/* ── Main column ── */}
            <div className="space-y-16 lg:col-span-2">
              {/* About */}
              <div>
                <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gold">
                  {l === 'es' ? 'Acerca de' : 'About'}
                </p>
                <h2
                  className="font-heading mb-6 text-gray-900"
                  style={{ fontSize: 'clamp(1.5rem, 3.5vw, 1.75rem)', fontWeight: 500 }}
                >
                  {supplier.name[l]}
                </h2>
                <p className="leading-relaxed text-gray-600" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                  {supplier.longDescription[l]}
                </p>
              </div>

              {/* Product Categories */}
              {supplier.productCategories.length > 0 && (
                <div>
                  <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gold">
                    {l === 'es' ? 'Catálogo' : 'Catalog'}
                  </p>
                  <h2
                    className="font-heading mb-8 text-gray-900"
                    style={{ fontSize: 'clamp(1.5rem, 3.5vw, 1.75rem)', fontWeight: 500 }}
                  >
                    {l === 'es' ? `Productos ${supplier.name[l]}` : `${supplier.name[l]} Products`}
                  </h2>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                    {supplier.productCategories.map((cat) => (
                      <div
                        key={cat.title[l]}
                        className="rounded-xl border border-gray-100 bg-white p-6 shadow-md"
                      >
                        <h3 className="font-heading text-lg font-semibold text-gray-900">
                          {cat.title[l]}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-gray-500">{cat.uso[l]}</p>
                        <div className="mt-4">
                          <Button variant="outline" size="sm" href={`${prefix}${cat.ctaLink}`}>
                            {cat.cta[l]}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Certifications */}
              {supplier.certifications.length > 0 && (
                <div>
                  <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gold">
                    {l === 'es' ? 'Calidad' : 'Quality'}
                  </p>
                  <h2
                    className="font-heading mb-6 text-gray-900"
                    style={{ fontSize: 'clamp(1.5rem, 3.5vw, 1.75rem)', fontWeight: 500 }}
                  >
                    {l === 'es' ? 'Certificaciones' : 'Certifications'}
                  </h2>
                  <div className="flex flex-wrap gap-2.5">
                    {supplier.certifications.map((cert) => (
                      <span
                        key={cert.name}
                        className="flex items-center gap-1.5 rounded-xl bg-navy-deep/[0.06] px-4 py-2 text-sm font-medium text-gray-900"
                      >
                        <Award size={13} strokeWidth={1.5} />
                        {cert.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ── Sidebar ── */}
            <div className="space-y-6">
              {/* Quote CTA */}
              <div className="overflow-hidden rounded-xl bg-navy-deep shadow-lg">
                <div className="h-1 bg-gradient-to-r from-gold to-gold-light" />
                <div className="p-7">
                  <h3 className="font-heading mb-2 text-lg font-semibold text-gold-light">
                    {l === 'es'
                      ? `Cotizar productos ${supplier.name[l]}`
                      : `Quote ${supplier.name[l]} products`}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-white/50">
                    {l === 'es'
                      ? 'Nuestro equipo le asesora para encontrar la solución ideal.'
                      : 'Our team will help you find the ideal solution.'}
                  </p>
                  <Button variant="primary" className="w-full" href={`${prefix}/contacto`}>
                    {supplier.ctaPrimary[l]}
                  </Button>
                  <a
                    href="tel:+525553973703"
                    className="mt-4 flex items-center justify-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
                  >
                    <Phone size={14} /> +52 55 5397 3703
                  </a>
                </div>
              </div>

              {/* Nav Circular */}
              {supplier.navCircular.length > 0 && (
                <div>
                  <h3 className="font-heading mb-4 font-semibold text-gray-900">
                    {l === 'es' ? 'Explorar' : 'Explore'}
                  </h3>
                  <NavCircular
                    items={supplier.navCircular.map((nav) => ({
                      label: nav.label[l],
                      description: nav.description[l],
                      link: `${prefix}${nav.link}`,
                    }))}
                  />
                </div>
              )}

              {/* Other brands */}
              {otherSuppliers.length > 0 && (
                <div className="rounded-xl border border-gray-100 bg-white p-7 shadow-md">
                  <h3 className="font-heading mb-4 font-semibold text-gray-900">
                    {l === 'es' ? 'Otras marcas' : 'Other brands'}
                  </h3>
                  <div className="space-y-1">
                    {otherSuppliers.map((s) => (
                      <Link
                        key={s.slug}
                        href={`${prefix}/proveedores/${s.slug}`}
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

      {/* ═══ PAS ═══ */}
      <PASSection
        variant="full"
        heading={supplier.pas.h2[l]}
        problema={supplier.pas.problema[l]}
        agitacion={supplier.pas.agitacion[l]}
        solucion={supplier.pas.solucion[l]}
        className="bg-gray-50"
      />

      {/* ═══ IN-HOUSE ═══ */}
      <InHouseBanner
        heading={supplier.inHouse.h2[l]}
        body={supplier.inHouse.body[l]}
        ctaText={supplier.inHouse.cta[l]}
        ctaLink={`${prefix}/servicios`}
      />

      {/* ═══ CTA FINAL ═══ */}
      <CTABanner
        heading={supplier.ctaFinal.h2[l]}
        subtext={supplier.ctaFinal.subtexto[l]}
        ctaText={supplier.ctaFinal.cta[l]}
        ctaLink={`${prefix}/contacto`}
      />
    </>
  );
}
