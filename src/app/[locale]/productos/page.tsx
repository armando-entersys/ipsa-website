import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { ArrowRight, ChevronRight, Ruler, ShieldCheck, Wrench } from 'lucide-react';
import { stockImages, getBlur } from '@/data/images';
import {
  productosHub,
  categoryList,
  macroBlockLabels,
  getCategoriesByBlock,
  manufacturers,
  type MacroBlock,
} from '@/data/products';
import Button from '@/components/ui/Button';
import CTABanner from '@/components/ui/CTABanner';
import InHouseBanner from '@/components/ui/InHouseBanner';
import { inHouseTransversal } from '@/data/services';

const SITE_URL = 'https://ipsacv.com.mx';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo.products' });
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: `${SITE_URL}/${locale}/${locale === 'es' ? 'productos' : 'products'}`,
      languages: {
        es: `${SITE_URL}/es/productos`,
        en: `${SITE_URL}/en/products`,
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      locale: locale === 'es' ? 'es_MX' : 'en_US',
      images: [{ url: `${SITE_URL}/images/heroes/products-hero.jpg`, width: 1200, height: 630 }],
    },
  };
}

export default function ProductsHub() {
  const locale = useLocale();
  const l = locale as 'es' | 'en';
  const prefix = `/${locale}`;

  const blocks: MacroBlock[] = ['A', 'B', 'C', 'D'];

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden min-h-[35vh] md:min-h-[45vh]">
        <Image
          src={stockImages.productsHero}
          alt=""
          fill
          priority
          placeholder="blur"
          blurDataURL={getBlur(stockImages.productsHero)}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/50 via-navy-dark/15 to-transparent" />

        <div
          className="relative mx-auto flex max-w-[1600px] items-end px-5 md:px-10"
          style={{ minHeight: '45vh' }}
        >
          <div className="max-w-3xl pb-10 pt-28 lg:pb-14">
            <nav className="mb-6 text-sm text-white/60">
              <Link href={prefix} className="transition-colors hover:text-white">
                {l === 'es' ? 'Inicio' : 'Home'}
              </Link>
              <ChevronRight size={14} className="mx-1 inline" />
              <span className="text-white">{l === 'es' ? 'Productos' : 'Products'}</span>
            </nav>
            <div className="mb-6 h-1 w-12 rounded-full bg-gradient-to-r from-gold to-gold-light" />
            <h1
              className="font-heading mb-4 leading-tight text-white"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 500 }}
            >
              {productosHub.heroH1[l]}
            </h1>
            <p className="max-w-2xl leading-relaxed text-white/80" style={{ fontSize: '1.1rem' }}>
              {productosHub.heroH2[l]}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button variant="primary" size="lg" href={`${prefix}/contacto`}>
                {productosHub.ctaPrimary[l]}
              </Button>
              <Button
                variant="outline"
                size="lg"
                href={`${prefix}/catalogo`}
                className="border-white text-white hover:bg-white hover:text-navy"
              >
                {productosHub.ctaSecondary[l]}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PRODUCTS BY MACRO-BLOCK ═══ */}
      <section
        style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)' }}
      >
        <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 lg:py-24">
          {blocks.map((block) => {
            const cats = getCategoriesByBlock(block);
            if (cats.length === 0) return null;
            const label = macroBlockLabels[block];

            return (
              <div key={block} className="mb-20 last:mb-0">
                {/* Block heading */}
                <div className="mb-10">
                  <p className="mb-2 text-sm font-medium uppercase tracking-widest text-gold">
                    {l === 'es' ? `Bloque ${block}` : `Block ${block}`}
                  </p>
                  <h2
                    className="font-heading text-gray-900"
                    style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 500 }}
                  >
                    {label[l]}
                  </h2>
                  <p className="mt-2 max-w-3xl leading-relaxed text-gray-500">
                    {label.copy[l]}
                  </p>
                </div>

                {/* Category cards */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                  {cats.map((cat) => {
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
                        className="group block overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md transition-all duration-150 hover:-translate-y-0.5 hover:shadow-lg"
                      >
                        <div className="relative overflow-hidden bg-gray-50" style={{ aspectRatio: '1/1' }}>
                          <Image
                            src={cat.image}
                            alt={data.name}
                            fill
                            className="object-contain transition-transform duration-200 group-hover:scale-[1.04]"
                            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                          {subtypeCount > 0 && (
                            <div className="absolute right-4 top-4 rounded-lg bg-white/90 px-3 py-1 text-xs font-semibold text-gray-700 backdrop-blur-sm">
                              {subtypeCount} {l === 'es' ? 'tipos' : 'types'}
                            </div>
                          )}
                        </div>
                        <div className="p-6">
                          <h3 className="font-heading text-lg font-semibold text-gray-900 transition-colors group-hover:text-gold">
                            {data.name}
                          </h3>
                          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-500">
                            {data.desc}
                          </p>
                          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
                            {cat.sizes && (
                              <span className="text-xs text-gray-400">
                                <span className="font-medium text-gray-600">
                                  {l === 'es' ? 'Tamaños' : 'Sizes'}:
                                </span>{' '}
                                {cat.sizes}
                              </span>
                            )}
                            {cat.pressureClasses && (
                              <span className="text-xs text-gray-400">
                                <span className="font-medium text-gray-600">
                                  {l === 'es' ? 'Clases' : 'Classes'}:
                                </span>{' '}
                                {cat.pressureClasses}
                              </span>
                            )}
                          </div>
                          {supplierNames.length > 0 && (
                            <div className="mt-3 flex flex-wrap gap-1.5">
                              {supplierNames.map((name) => (
                                <span
                                  key={name}
                                  className="rounded-md bg-navy-deep/[0.06] px-2.5 py-1 text-[11px] font-medium text-navy"
                                >
                                  {name}
                                </span>
                              ))}
                            </div>
                          )}
                          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-colors group-hover:text-gold-dark">
                            {l === 'es' ? 'Ver productos' : 'View products'}
                            <ArrowRight
                              size={14}
                              className="transition-transform group-hover:translate-x-0.5"
                            />
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══ MARCAS ALIADAS ═══ */}
      <section
        className="py-20 lg:py-24"
        style={{ background: 'linear-gradient(180deg, #f6f7f9 0%, #f0f1f5 100%)' }}
      >
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gold">
              {l === 'es' ? 'Nuestras Representaciones' : 'Our Partnerships'}
            </p>
            <h2
              className="font-heading mb-4 text-gray-900"
              style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 500 }}
            >
              {l === 'es' ? 'Marcas Aliadas' : 'Allied Brands'}
            </h2>
            <p className="mx-auto max-w-2xl text-gray-500 leading-relaxed">
              {l === 'es'
                ? 'No somos solo distribuidores; somos el canal técnico y de integración de los fabricantes más respetados a nivel global en la industria pesada.'
                : 'We are not just distributors; we are the technical and integration channel for the most respected manufacturers globally in heavy industry.'}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
            {[
              { id: 'perar', tagline: { es: 'Excelencia italiana en válvulas Trunnion de alta exigencia, servicio submarino y criogénico.', en: 'Italian excellence in high-demand Trunnion valves, subsea and cryogenic service.' } },
              { id: 'della-foglia', tagline: { es: 'Soluciones europeas hechas a medida para condiciones extremas y cero emisiones.', en: 'Custom European solutions for extreme conditions and zero emissions.' } },
              { id: 'dhv', tagline: { es: 'Versatilidad absoluta en válvulas de proceso estandarizadas con calidad API.', en: 'Absolute versatility in standardized process valves with API quality.' } },
              { id: 'versa', tagline: { es: 'El cerebro de la automatización. Líderes en control direccional y electroválvulas.', en: 'The brain of automation. Leaders in directional control and solenoid valves.' } },
              { id: 'masoneilan', tagline: { es: 'Control de procesos con inteligencia y modulación exacta.', en: 'Process control with intelligence and exact modulation.' } },
            ].map((brand) => {
              const mfr = manufacturers[brand.id];
              if (!mfr) return null;
              return (
                <div
                  key={brand.id}
                  className="flex flex-col items-center rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm"
                >
                  <div className="mb-4 flex h-16 w-full items-center justify-center">
                    {mfr.logo ? (
                      <Image src={mfr.logo} alt={mfr.name} width={100} height={40} className="object-contain" />
                    ) : (
                      <span className="text-lg font-bold text-navy">{mfr.name}</span>
                    )}
                  </div>
                  <h3 className="font-heading text-sm font-semibold text-gray-900">{mfr.name}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray-400">{brand.tagline[l]}</p>
                  {mfr.slug && (
                    <Link
                      href={`${prefix}/fabricantes/${mfr.slug}`}
                      className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-gold transition-colors hover:text-gold-dark"
                    >
                      {l === 'es' ? 'Ver más' : 'Learn more'}
                      <ArrowRight size={11} />
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ DIFERENCIADOR IPSA ═══ */}
      <section
        className="py-20 lg:py-24"
        style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)' }}
      >
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gold">
              {l === 'es' ? 'Valor Agregado' : 'Added Value'}
            </p>
            <h2
              className="font-heading text-gray-900"
              style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 500 }}
            >
              {l === 'es' ? '¿Por qué elegir el Portafolio IPSA?' : 'Why choose the IPSA Portfolio?'}
            </h2>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: Ruler,
                title: { es: 'Selección y Dimensionamiento', en: 'Selection & Sizing' },
                body: {
                  es: 'Nuestros ingenieros calculan coeficientes de flujo (Cv), torques y requerimientos metalúrgicos para asegurar que usted compre exactamente lo que su proceso necesita.',
                  en: 'Our engineers calculate flow coefficients (Cv), torques, and metallurgical requirements to ensure you buy exactly what your process needs.',
                },
              },
              {
                icon: ShieldCheck,
                title: { es: 'Cumplimiento Normativo Estricto', en: 'Strict Regulatory Compliance' },
                body: {
                  es: 'Equipos certificados bajo API 6D, API 6A, ASME, NACE, y estándares de emisiones fugitivas e integridad SIL.',
                  en: 'Equipment certified under API 6D, API 6A, ASME, NACE, and fugitive emissions and SIL integrity standards.',
                },
              },
              {
                icon: Wrench,
                title: { es: 'Integración en Taller Propio', en: 'In-House Workshop Integration' },
                body: {
                  es: 'No tercerizamos. Ensamblamos válvulas, actuadores y tableros neumáticos, entregando equipos con Pruebas de Aceptación en Fábrica (FAT) documentadas.',
                  en: 'We don\'t outsource. We assemble valves, actuators, and pneumatic panels, delivering equipment with documented Factory Acceptance Tests (FAT).',
                },
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title[l]} className="rounded-xl border border-gray-100 bg-white p-8 shadow-md">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-navy-deep/[0.06]">
                    <Icon className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-gray-900">{item.title[l]}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">{item.body[l]}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ BUSCADOR POR INDUSTRIA ═══ */}
      <section className="bg-navy-deep py-16">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-10">
          <h2
            className="font-heading mb-4 text-white"
            style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: 500 }}
          >
            {l === 'es' ? 'Buscar por Industria' : 'Search by Industry'}
          </h2>
          <p className="mb-8 text-sm text-white/50">
            {l === 'es'
              ? 'Encuentre las soluciones específicas para su sector industrial.'
              : 'Find the specific solutions for your industrial sector.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: { es: 'Oil & Gas', en: 'Oil & Gas' }, href: '/industrias/oil-gas' },
              { label: { es: 'Generación de Energía', en: 'Power Generation' }, href: '/industrias/energetico' },
              { label: { es: 'Industria General', en: 'General Industry' }, href: '/industrias/privado' },
            ].map((ind) => (
              <Link
                key={ind.href}
                href={`${prefix}${ind.href}`}
                className="group rounded-lg border border-white/20 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-150 hover:border-gold hover:bg-gold hover:text-white"
              >
                {ind.label[l]}
                <ArrowRight size={14} className="ml-2 inline transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ IN-HOUSE BANNER ═══ */}
      <InHouseBanner
        heading={inHouseTransversal.defaultH2[l]}
        body={inHouseTransversal.defaultBody[l]}
        ctaText={l === 'es' ? 'Conocer Servicios' : 'Learn About Services'}
        ctaLink={`${prefix}/servicios`}
      />

      {/* ═══ CTA FINAL ═══ */}
      <CTABanner
        heading={l === 'es' ? '¿No encuentra lo que busca? Consulte con un especialista.' : "Can't find what you're looking for? Consult a specialist."}
        ctaText={l === 'es' ? 'Contactar Especialista' : 'Contact a Specialist'}
        ctaLink={`${prefix}/contacto`}
      />
    </>
  );
}
