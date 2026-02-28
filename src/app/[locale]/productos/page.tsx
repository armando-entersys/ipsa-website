import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { ArrowRight, ChevronRight } from 'lucide-react';
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

export default function ProductsHub() {
  const locale = useLocale();
  const l = locale as 'es' | 'en';
  const prefix = `/${locale}`;

  const blocks: MacroBlock[] = ['A', 'B', 'C', 'D'];

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden" style={{ minHeight: '45vh' }}>
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
                        <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
                          <Image
                            src={cat.image}
                            alt={data.name}
                            fill
                            className="object-cover transition-transform duration-200 group-hover:scale-[1.04]"
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
