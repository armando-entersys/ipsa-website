import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import {
  ChevronRight,
  ArrowRight,
  MapPin,
  Users,
  Shield,
  Target,
  Heart,
  Lightbulb,
  Warehouse,
  Globe,
  HardHat,
} from 'lucide-react';
import { stockImages, getBlur } from '@/data/images';
import Button from '@/components/ui/Button';
import CertBadges from '@/components/ui/CertBadges';
import CTABanner from '@/components/ui/CTABanner';

const brandLogos = [
  { name: 'Perar', logo: '/images/logos/perar-official.png', slug: 'perar' },
  { name: 'Della Foglia', logo: '/images/logos/della-foglia-official.svg', slug: 'della-foglia' },
  { name: 'DHV Valve Group', logo: '/images/logos/dhv-official.png', slug: 'dhv' },
  { name: 'Versa Valves', logo: '/images/logos/versa-official.png', slug: 'versa' },
  { name: 'Masoneilan', logo: '/images/logos/bakerhughes.svg', slug: 'masoneilan' },
  { name: 'Consolidated', logo: '/images/logos/consolidated.svg', slug: '' },
];

const timelineItems = [
  { year: '1986', key: 'timeline1986' as const },
  { year: '2000s', key: 'timelineExpansion' as const },
  { year: '2010s', key: 'timelineEPC' as const },
  { year: '2020s', key: 'timelineAlliances' as const },
];

export default function AboutPage() {
  const t = useTranslations('aboutPage');
  const locale = useLocale();
  const l = locale as 'es' | 'en';
  const prefix = `/${locale}`;

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden" style={{ minHeight: '50vh' }}>
        <Image
          src={stockImages.aboutHero}
          alt=""
          fill
          priority
          placeholder="blur"
          blurDataURL={getBlur(stockImages.aboutHero)}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-navy-dark/20 to-transparent" />

        <div
          className="relative mx-auto flex max-w-[1600px] items-end px-5 md:px-10"
          style={{ minHeight: '50vh' }}
        >
          <div className="max-w-3xl pb-12 pt-28 lg:pb-16">
            <nav className="mb-5 text-sm text-white/60">
              <Link href={prefix} className="transition-colors hover:text-white">
                {l === 'es' ? 'Inicio' : 'Home'}
              </Link>
              <ChevronRight size={14} className="mx-1 inline" />
              <span className="text-white">{l === 'es' ? 'Nosotros' : 'About Us'}</span>
            </nav>

            {/* Badge "Desde 1986" */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 backdrop-blur-sm">
              <span className="text-xs font-semibold tracking-wider text-gold-light">
                {l === 'es' ? 'DESDE 1986' : 'SINCE 1986'}
              </span>
            </div>

            <h1
              className="font-heading mb-4 leading-tight text-white"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 500 }}
            >
              {t('title')}
            </h1>
            <p
              className="max-w-2xl leading-relaxed text-white/85"
              style={{ fontSize: '1.1rem', lineHeight: 1.7 }}
            >
              {t('subtitle')}
            </p>

            <div className="mt-8">
              <Button variant="primary" size="lg" href={`#capacidad`}>
                {t('heroCta')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ HISTORIA Y EVOLUCIÓN ═══ */}
      <section
        className="py-20 lg:py-24"
        style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)' }}
      >
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left: Storytelling */}
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gold">
                {l === 'es' ? 'Nuestra trayectoria' : 'Our trajectory'}
              </p>
              <h2
                className="font-heading mb-6 text-gray-900"
                style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 500 }}
              >
                {t('historyTitle')}
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">{t('historyText')}</p>
            </div>

            {/* Right: Timeline */}
            <div className="relative pl-8">
              <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-gold/40 to-transparent" />
              <div className="space-y-8">
                {timelineItems.map((item) => (
                  <div key={item.year} className="relative">
                    <div className="absolute -left-[1.625rem] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-gold bg-white">
                      <div className="h-2 w-2 rounded-full bg-gold" />
                    </div>
                    <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                      <span className="mb-1 block text-xs font-bold tracking-wider text-gold">
                        {item.year}
                      </span>
                      <p className="text-sm leading-relaxed text-gray-600">{t(item.key)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ QUIÉNES SOMOS ═══ */}
      <section
        className="py-20 lg:py-24"
        style={{ background: 'linear-gradient(180deg, #f6f7f9 0%, #f0f1f5 100%)' }}
      >
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gold">
                {t('whoWeAre')}
              </p>
              <h2
                className="font-heading mb-6 text-gray-900"
                style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 500 }}
              >
                {t('whoWeAre')}
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">{t('whoWeAreText')}</p>
            </div>
            <div className="relative h-[360px] overflow-hidden rounded-xl bg-gray-100 lg:h-[440px]">
              <Image
                src={stockImages.team}
                alt={l === 'es' ? 'Equipo IPSA' : 'IPSA Team'}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="eager"
                placeholder="blur"
                blurDataURL={getBlur(stockImages.team)}
              />
              <div className="absolute inset-0 bg-navy-deep/20" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CAPACIDAD INSTALADA ═══ */}
      <section id="capacidad" className="py-20 lg:py-24">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gold">
              {l === 'es' ? 'Infraestructura' : 'Infrastructure'}
            </p>
            <h2
              className="font-heading mx-auto max-w-3xl text-gray-900"
              style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 500 }}
            >
              {t('capacityTitle')}
            </h2>
          </div>

          {/* Capacity cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: Warehouse,
                title: t('capacityNacional'),
                text: t('capacityNacionalText'),
              },
              {
                icon: Globe,
                title: t('capacityHouston'),
                text: t('capacityHoustonText'),
              },
              {
                icon: HardHat,
                title: t('capacityTecnica'),
                text: t('capacityTecnicaText'),
              },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-xl border border-gray-100 bg-white p-8 shadow-md transition-all duration-150 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-navy">
                  <Icon size={28} className="text-gold-light" />
                </div>
                <h3 className="font-heading mb-3 text-lg font-semibold text-gray-900">{title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{text}</p>
              </div>
            ))}
          </div>

          {/* Location badges */}
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              { city: 'CDMX', label: 'HQ', full: 'Ciudad de México' },
              { city: 'Cd. del Carmen', label: 'CAD', full: 'Campeche' },
              {
                city: 'Paraíso',
                label: l === 'es' ? 'Taller' : 'Workshop',
                full: 'Tabasco',
              },
              { city: 'Houston', label: 'Intl.', full: 'Texas, USA' },
              {
                city: 'Villahermosa',
                label: l === 'es' ? 'Ventas' : 'Sales',
                full: 'Tabasco',
              },
              {
                city: 'Tampico',
                label: l === 'es' ? 'Ventas' : 'Sales',
                full: 'Tamaulipas',
              },
            ].map((loc) => (
              <div
                key={loc.city}
                className="rounded-xl bg-white p-5 text-center shadow-md transition-all duration-150 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <MapPin size={20} className="mx-auto mb-2 text-gold" />
                <div className="font-heading text-sm font-semibold text-gray-900">{loc.city}</div>
                <div className="text-[11px] text-gray-500">{loc.full}</div>
                <div className="mt-2 inline-block rounded bg-gold/10 px-2 py-0.5 text-[10px] font-medium text-gold">
                  {loc.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ALIANZAS COMERCIALES ═══ */}
      <section
        className="py-20 lg:py-24"
        style={{ background: 'linear-gradient(180deg, #f6f7f9 0%, #f0f1f5 100%)' }}
      >
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gold">
              {l === 'es' ? 'Representaciones' : 'Partnerships'}
            </p>
            <h2
              className="font-heading mb-4 text-gray-900"
              style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 500 }}
            >
              {t('alliancesTitle')}
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">{t('alliancesText')}</p>
          </div>

          {/* Logo grid */}
          <div className="mx-auto mb-10 grid max-w-4xl grid-cols-3 gap-5 md:grid-cols-6">
            {brandLogos.map((brand) => (
              <Link
                key={brand.name}
                href={brand.slug ? `${prefix}/fabricantes/${brand.slug}` : `${prefix}/fabricantes`}
                className="group flex h-20 items-center justify-center rounded-xl border border-gray-100 bg-white p-3 shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-10 w-auto object-contain opacity-70 transition-opacity group-hover:opacity-100"
                />
              </Link>
            ))}
          </div>

          {/* Certification badges */}
          <div className="text-center">
            <CertBadges
              badges={['API 6D', 'ASME', 'SIL 3', 'ISO 9001', 'NACE MR0175']}
              variant="dark"
              className="justify-center"
            />
            <p className="mt-4 text-sm text-gray-500">{t('alliancesCerts')}</p>
          </div>
        </div>
      </section>

      {/* ═══ SINERGIA DE GRUPO ═══ */}
      <section className="bg-navy-deep py-20 lg:py-24">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gold">
              {l === 'es' ? 'Nuestro ecosistema' : 'Our ecosystem'}
            </p>
            <h2
              className="font-heading mb-4 text-white"
              style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 500 }}
            >
              {t('group')}
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-white/70">{t('groupText')}</p>
          </div>

          {/* Ecosystem circles */}
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                { key: 'ipsa' as const, icon: Users, color: 'from-gold to-gold-light' },
                { key: 'maepsa' as const, icon: Shield, color: 'from-gold/80 to-gold' },
                { key: 'certus' as const, icon: Target, color: 'from-gold-light to-gold' },
              ].map(({ key, icon: Icon, color }) => (
                <div key={key} className="text-center">
                  <div
                    className={`mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br ${color} shadow-lg`}
                  >
                    <Icon size={36} className="text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-white">{t(key)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{t(`${key}Desc`)}</p>
                </div>
              ))}
            </div>

            {/* Connecting visual */}
            <div className="mt-8 flex items-center justify-center">
              <div className="rounded-full border border-gold/30 bg-gold/10 px-6 py-2 text-sm font-medium text-gold-light">
                {l === 'es' ? 'Solución Integral 360°' : '360° Integrated Solution'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ VALUES ═══ */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gold">
              {l === 'es' ? 'Lo que nos define' : 'What defines us'}
            </p>
            <h2
              className="font-heading text-gray-900"
              style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 500 }}
            >
              {t('values')}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Shield,
                es: 'Confiabilidad',
                en: 'Reliability',
                desc_es: 'Cumplimos lo que prometemos, siempre.',
                desc_en: 'We deliver on our promises, always.',
              },
              {
                icon: Lightbulb,
                es: 'Experiencia',
                en: 'Expertise',
                desc_es: '+38 años de conocimiento técnico acumulado.',
                desc_en: '38+ years of accumulated technical knowledge.',
              },
              {
                icon: Heart,
                es: 'Servicio',
                en: 'Service',
                desc_es: 'El cliente es el centro de todo lo que hacemos.',
                desc_en: 'The customer is at the center of everything we do.',
              },
              {
                icon: Target,
                es: 'Integridad',
                en: 'Integrity',
                desc_es: 'Transparencia y ética en cada relación.',
                desc_en: 'Transparency and ethics in every relationship.',
              },
            ].map(({ icon: Icon, ...val }) => (
              <div
                key={val.es}
                className="rounded-xl border border-gray-100 bg-white p-7 text-center shadow-md transition-all duration-150 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-navy">
                  <Icon size={28} className="text-gold-light" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-gray-900">
                  {l === 'es' ? val.es : val.en}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {l === 'es' ? val.desc_es : val.desc_en}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SUB-PAGES ═══ */}
      <section
        className="py-16 lg:py-20"
        style={{ background: 'linear-gradient(180deg, #f6f7f9 0%, #f0f1f5 100%)' }}
      >
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Link
              href={`${prefix}/nosotros/alianzas`}
              className="group rounded-xl bg-white p-8 shadow-md transition-all duration-150 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <h3 className="font-heading text-xl font-semibold text-gray-900">
                {l === 'es' ? 'Alianzas estratégicas' : 'Strategic alliances'}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {l === 'es'
                  ? 'Conoce nuestras relaciones con fabricantes de clase mundial.'
                  : 'Learn about our relationships with world-class manufacturers.'}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold">
                {l === 'es' ? 'Ver más' : 'Learn more'}
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>
            <Link
              href={`${prefix}/nosotros/historia`}
              className="group rounded-xl bg-white p-8 shadow-md transition-all duration-150 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <h3 className="font-heading text-xl font-semibold text-gray-900">
                {l === 'es' ? 'Nuestra historia' : 'Our history'}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {l === 'es'
                  ? 'Más de tres décadas de trayectoria e innovación.'
                  : 'Over three decades of trajectory and innovation.'}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold">
                {l === 'es' ? 'Ver más' : 'Learn more'}
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <CTABanner
        heading={t('ctaFinalTitle')}
        subtext={
          l === 'es'
            ? 'Contáctenos para encontrar la solución que su proyecto necesita.'
            : 'Contact us to find the solution your project needs.'
        }
        ctaText={t('ctaFinalButton')}
        ctaLink={`${prefix}/contacto`}
      />
    </>
  );
}
