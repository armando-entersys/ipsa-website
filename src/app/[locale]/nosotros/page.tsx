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
} from 'lucide-react';
import { stockImages, getBlur } from '@/data/images';
import { inHouseTransversal } from '@/data/services';
import Button from '@/components/ui/Button';
import InHouseBanner from '@/components/ui/InHouseBanner';
import CTABanner from '@/components/ui/CTABanner';

export default function AboutPage() {
  const t = useTranslations('aboutPage');
  const locale = useLocale();
  const l = locale as 'es' | 'en';
  const prefix = `/${locale}`;
  const ctx = inHouseTransversal.contexts.home;

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden" style={{ minHeight: '45vh' }}>
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
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/50 via-navy-dark/15 to-transparent" />

        <div
          className="relative mx-auto flex max-w-[1600px] items-end px-5 md:px-10"
          style={{ minHeight: '45vh' }}
        >
          <div className="max-w-3xl pb-10 pt-28 lg:pb-14">
            <nav className="mb-5 text-sm text-white/60">
              <Link href={prefix} className="transition-colors hover:text-white">
                {l === 'es' ? 'Inicio' : 'Home'}
              </Link>
              <ChevronRight size={14} className="mx-1 inline" />
              <span className="text-white">{t('title')}</span>
            </nav>
            <h1
              className="font-heading mb-4 leading-tight text-white"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.75rem)', fontWeight: 500 }}
            >
              {t('title')}
            </h1>
            <p
              className="max-w-2xl leading-relaxed text-white/85"
              style={{ fontSize: '1.15rem', lineHeight: 1.7 }}
            >
              {t('subtitle')}
            </p>
            <div className="mt-5 h-[3px] w-16 bg-gradient-to-r from-gold to-gold-light" />
          </div>
        </div>
      </section>

      {/* ═══ WHO WE ARE ═══ */}
      <section
        className="py-20 lg:py-24"
        style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)' }}
      >
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gold">
                {l === 'es' ? 'Quiénes somos' : 'Who we are'}
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
                alt={l === 'es' ? 'Nuestro equipo' : 'Our team'}
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

      {/* ═══ GROUP ═══ */}
      <section
        className="py-20 lg:py-24"
        style={{ background: 'linear-gradient(180deg, #f6f7f9 0%, #f0f1f5 100%)' }}
      >
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gold">
              {l === 'es' ? 'Nuestras empresas' : 'Our companies'}
            </p>
            <h2
              className="font-heading mb-4 text-gray-900"
              style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 500 }}
            >
              {t('group')}
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">{t('groupText')}</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { key: 'ipsa' as const, color: 'bg-navy', icon: Users },
              { key: 'maepsa' as const, color: 'bg-gold', icon: Shield },
              { key: 'certus' as const, color: 'bg-navy-light', icon: Target },
            ].map(({ key, color, icon: Icon }) => (
              <div
                key={key}
                className="rounded-xl bg-white p-8 text-center shadow-md transition-all duration-150 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div
                  className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl ${color}`}
                >
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-gray-900">{t(key)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{t(`${key}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LOCATIONS ═══ */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gold">
              {l === 'es' ? 'Presencia' : 'Presence'}
            </p>
            <h2
              className="font-heading text-gray-900"
              style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 500 }}
            >
              {t('locations')}
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
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

      {/* ═══ VALUES ═══ */}
      <section className="bg-navy-deep py-20 lg:py-24">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gold">
              {l === 'es' ? 'Lo que nos define' : 'What defines us'}
            </p>
            <h2
              className="font-heading text-white"
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
              <div key={val.es} className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/20">
                  <Icon size={28} className="text-gold-light" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-white">
                  {l === 'es' ? val.es : val.en}
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  {l === 'es' ? val.desc_es : val.desc_en}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ IN-HOUSE DIFFERENTIAL ═══ */}
      <InHouseBanner
        heading={ctx.h2[l]}
        body={ctx.body[l]}
        ctaText={ctx.cta[l]}
        ctaLink={`${prefix}${ctx.ctaLink}`}
      />

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
        heading={l === 'es' ? 'Trabajemos juntos' : "Let's work together"}
        subtext={
          l === 'es'
            ? 'Contáctenos para encontrar la solución que su proyecto necesita.'
            : 'Contact us to find the solution your project needs.'
        }
        ctaText={t('ctaWork')}
        ctaLink={`${prefix}/contacto`}
      />
    </>
  );
}
