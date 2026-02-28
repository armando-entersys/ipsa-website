import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import {
  Clock,
  ShieldCheck,
  MapPin,
  ArrowRight,
} from 'lucide-react';
import { type LucideIcon } from 'lucide-react';
import { stockImages, getBlur } from '@/data/images';
import { homeData } from '@/data/home';
import { suppliers } from '@/data/suppliers';
import { categoryList } from '@/data/products';
import { services } from '@/data/services';
import { industries } from '@/data/industries';
import Button from '@/components/ui/Button';
import CertBadges from '@/components/ui/CertBadges';
import CounterSection from '@/components/ui/CounterSection';
import CTABanner from '@/components/ui/CTABanner';
import LogoGrid from '@/components/ui/LogoGrid';

/* ── Icon map for pain point cards ─────────────────── */

const iconMap: Record<string, LucideIcon> = { Clock, ShieldCheck, MapPin };

/* ── Page ─────────────────────────────────────────── */

export default function HomePage() {
  const locale = useLocale();
  const l = locale as 'es' | 'en';
  const prefix = `/${locale}`;

  const { hero, painPoints, brands, productPAS, about, ctaFinal } = homeData;

  return (
    <>
      {/* ═══ SECTION 1: HERO ═══════════════════════════ */}
      <section className="relative overflow-hidden bg-navy-dark" style={{ minHeight: '80vh' }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/hero-refinery.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-navy-dark/20 to-transparent" />

        <div
          className="relative mx-auto flex max-w-[1600px] items-end px-5 md:px-10"
          style={{ minHeight: '80vh' }}
        >
          <div className="max-w-3xl pb-16 pt-32 lg:pb-24">
            <div className="mb-8 h-1.5 w-20 rounded-full bg-gold" />
            <h1
              className="font-heading mb-6 leading-tight text-white"
              style={{ fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 500 }}
            >
              {hero.h1[l]}
            </h1>
            <p
              className="mb-8 max-w-2xl leading-relaxed text-white/90"
              style={{ fontSize: '1.15rem', lineHeight: 1.7 }}
            >
              {hero.h2[l]}
            </p>

            {/* Cert badges */}
            <CertBadges badges={hero.certBadges} variant="light" className="mb-10 justify-start" />

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button variant="primary" size="lg" href={`${prefix}${hero.ctaLink}`}>
                {hero.cta[l]}
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                href={`${prefix}/contacto`}
                className="border-white text-white hover:bg-white hover:text-navy"
              >
                {l === 'es' ? 'Solicitar Cotización' : 'Request a Quote'}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2: PAIN POINTS ════════════════════ */}
      <section
        className="py-20 lg:py-28"
        style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)' }}
      >
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <h2
            className="font-heading mb-16 text-center text-gray-900"
            style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 500 }}
          >
            {painPoints.h2[l]}
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {painPoints.cards.map((card) => {
              const Icon = iconMap[card.icon] ?? ShieldCheck;
              return (
                <div
                  key={card.key}
                  className="group rounded-xl bg-white p-8 shadow-md transition-all duration-150 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl icon-bg-navy transition-colors group-hover:bg-gold group-hover:text-white">
                    <Icon className="h-7 w-7 text-gray-700 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-gray-900">
                    {card.title[l]}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{card.body[l]}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3: MARCAS REPRESENTADAS ═══════════ */}
      <section
        className="relative overflow-hidden py-20 lg:py-28"
        style={{
          background: 'linear-gradient(160deg, #141733 0%, #1a2550 50%, #1e2d5a 100%)',
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative mx-auto max-w-[1600px] px-5 text-center md:px-10">
          <h2
            className="font-heading mb-14 text-white"
            style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 500 }}
          >
            {brands.h3[l]}
          </h2>
          <LogoGrid
            logos={brands.logos.map((slug) => {
              const supplier = suppliers.find((s) => s.slug === slug);
              return {
                name: supplier?.name[l] ?? slug,
                image: supplier?.logo ?? `/images/logos/${slug}.svg`,
                href: `${prefix}/proveedores/${slug}`,
              };
            })}
            columns={5}
            className="mx-auto max-w-5xl"
          />
          <div className="mt-12">
            <Button variant="primary" size="lg" href={`${prefix}/proveedores`}>
              {l === 'es' ? 'Conoce Todas Nuestras Marcas' : 'See All Our Brands'}
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4: PRODUCT PAS BLOCKS ═════════════ */}
      <section
        className="py-20 lg:py-28"
        style={{ background: 'linear-gradient(180deg, #f6f7f9 0%, #f0f1f5 100%)' }}
      >
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="flex flex-col gap-16">
            {productPAS.blocks.map((block, i) => (
              <div
                key={block.title[l]}
                className={`flex flex-col items-center gap-10 lg:flex-row ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl lg:w-1/2">
                  <Image
                    src={block.image}
                    alt={block.title[l]}
                    fill
                    placeholder="blur"
                    blurDataURL={getBlur(block.image)}
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* Copy */}
                <div className="flex-1 lg:w-1/2">
                  <h3 className="font-heading text-2xl font-bold text-gray-900 lg:text-3xl">
                    {block.title[l]}
                  </h3>
                  <p className="mt-4 text-gray-600 leading-relaxed">{block.pas[l]}</p>
                  <div className="mt-6">
                    <Button variant="outline" size="md" href={`${prefix}/productos`}>
                      {l === 'es' ? 'Ver Productos' : 'View Products'}
                      <ArrowRight size={14} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5: SOBRE NOSOTROS + COUNTERS ══════ */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0">
          <div
            className="absolute inset-y-0 left-0 w-1/2"
            style={{ background: 'linear-gradient(180deg, #f6f7f9 0%, #f0f1f5 100%)' }}
          />
          <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
            <Image
              src={stockImages.industrial}
              alt=""
              fill
              placeholder="blur"
              blurDataURL={getBlur(stockImages.industrial)}
              className="object-cover"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-navy-deep/45" />
          </div>
        </div>

        <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <h2
                className="font-heading mb-6 text-gray-900"
                style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 500 }}
              >
                {about.h2[l]}
              </h2>
              <p className="mb-10 leading-relaxed text-gray-600">{about.body[l]}</p>

              <CounterSection
                counters={about.counters.map((c) => ({
                  value: c.value,
                  suffix: c.suffix,
                  label: c.label[l],
                }))}
                className="mb-10"
              />

              <Button variant="secondary" size="lg" href={`${prefix}/nosotros`}>
                {l === 'es' ? 'Conocer Más' : 'Learn More'}
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
            {/* Mobile image fallback */}
            <div className="relative h-64 overflow-hidden rounded-xl shadow-md lg:hidden">
              <Image
                src={stockImages.industrial}
                alt=""
                fill
                placeholder="blur"
                blurDataURL={getBlur(stockImages.industrial)}
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-navy-deep/30" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FEATURED: Products / Services / Industries ═ */}
      <section
        className="py-20 lg:py-28"
        style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)' }}
      >
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          {/* Products preview */}
          <div className="mb-20">
            <div className="mb-10 flex items-end justify-between">
              <h2
                className="font-heading text-gray-900"
                style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 500 }}
              >
                {l === 'es' ? 'Nuestros Productos' : 'Our Products'}
              </h2>
              <Link
                href={`${prefix}/productos`}
                className="hidden items-center gap-1 font-medium text-gold transition-colors hover:text-gold-dark md:inline-flex"
              >
                {l === 'es' ? 'Ver todos' : 'View all'} <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {categoryList.slice(0, 4).map((cat) => (
                <Link
                  key={cat.slug}
                  href={`${prefix}/productos/${cat.slug}`}
                  className="group block rounded-xl bg-white p-6 shadow-md transition-all duration-150 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <h3 className="font-heading text-base font-semibold text-gray-900">
                    {cat[l].name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-2">
                    {cat[l].desc}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-gold transition-colors group-hover:text-gold-dark">
                    {l === 'es' ? 'Ver más' : 'Read more'}
                    <ArrowRight
                      size={13}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Services preview */}
          <div className="mb-20">
            <div className="mb-10 flex items-end justify-between">
              <h2
                className="font-heading text-gray-900"
                style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 500 }}
              >
                {l === 'es' ? 'Servicios Especializados' : 'Specialized Services'}
              </h2>
              <Link
                href={`${prefix}/servicios`}
                className="hidden items-center gap-1 font-medium text-gold transition-colors hover:text-gold-dark md:inline-flex"
              >
                {l === 'es' ? 'Ver todos' : 'View all'} <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {services.map((svc) => (
                <Link
                  key={svc.slug}
                  href={`${prefix}/servicios/${svc.slug}`}
                  className="group block overflow-hidden rounded-xl bg-white shadow-md transition-all duration-150 hover:shadow-lg"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={svc.image}
                      alt={svc.name[l]}
                      fill
                      placeholder="blur"
                      blurDataURL={getBlur(svc.image)}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-lg font-semibold text-gray-900">
                      {svc.name[l]}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">
                      {svc.description[l]}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-gold transition-colors group-hover:text-gold-dark">
                      {l === 'es' ? 'Conoce más' : 'Learn more'}
                      <ArrowRight
                        size={13}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Industries preview */}
          <div>
            <div className="mb-10 flex items-end justify-between">
              <h2
                className="font-heading text-gray-900"
                style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 500 }}
              >
                {l === 'es' ? 'Industrias que Atendemos' : 'Industries We Serve'}
              </h2>
              <Link
                href={`${prefix}/industrias`}
                className="hidden items-center gap-1 font-medium text-gold transition-colors hover:text-gold-dark md:inline-flex"
              >
                {l === 'es' ? 'Ver todas' : 'View all'} <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {industries.map((ind) => (
                <Link
                  key={ind.slug}
                  href={`${prefix}/industrias/${ind.slug}`}
                  className="group relative block overflow-hidden rounded-xl shadow-md transition-all duration-200 hover:scale-[1.02]"
                  style={{ minHeight: '300px' }}
                >
                  <Image
                    src={ind.image}
                    alt={ind.name[l]}
                    fill
                    placeholder="blur"
                    blurDataURL={getBlur(ind.image)}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy-deep/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="font-heading text-2xl font-bold text-white">
                      {ind.name[l]}
                    </h3>
                    <p className="mt-2 text-sm text-white/60">{ind.description[l]}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-gold-light transition-colors group-hover:text-gold">
                      {l === 'es' ? 'Conoce más' : 'Learn more'}
                      <ArrowRight
                        size={13}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 6: CTA FINAL ══════════════════════ */}
      <CTABanner
        heading={ctaFinal.h2[l]}
        ctaText={ctaFinal.cta[l]}
        ctaLink={`${prefix}${ctaFinal.ctaLink}`}
      />
    </>
  );
}
