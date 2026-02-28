import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { stockImages, getBlur } from '@/data/images';
import { industriasHub, industries } from '@/data/industries';
import Button from '@/components/ui/Button';
import CTABanner from '@/components/ui/CTABanner';

export default function IndustriesHub() {
  const locale = useLocale();
  const l = locale as 'es' | 'en';
  const prefix = `/${locale}`;

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden" style={{ minHeight: '55vh' }}>
        <Image
          src={stockImages.industriesHero}
          alt=""
          fill
          priority
          placeholder="blur"
          blurDataURL={getBlur(stockImages.industriesHero)}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/50 via-navy-dark/15 to-transparent" />

        <div
          className="relative mx-auto flex max-w-[1600px] items-end px-5 md:px-10"
          style={{ minHeight: '55vh' }}
        >
          <div className="max-w-3xl pb-12 pt-32 lg:pb-16">
            <nav className="mb-5 text-sm text-white/60">
              <Link href={prefix} className="transition-colors hover:text-white">
                {l === 'es' ? 'Inicio' : 'Home'}
              </Link>
              <ChevronRight size={14} className="mx-1 inline" />
              <span className="text-white">{l === 'es' ? 'Industrias' : 'Industries'}</span>
            </nav>
            <h1
              className="font-heading mb-4 leading-tight text-white"
              style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)', fontWeight: 500 }}
            >
              {industriasHub.heroH1[l]}
            </h1>
            <p
              className="max-w-2xl leading-relaxed text-white/85"
              style={{ fontSize: '1.15rem', lineHeight: 1.7 }}
            >
              {industriasHub.heroH2[l]}
            </p>
            <div className="mt-6 h-[3px] w-24 bg-gradient-to-r from-gold to-gold-light" />
          </div>
        </div>
      </section>

      {/* ═══ INDUSTRY CARDS ═══ */}
      <section
        className="py-20 lg:py-24"
        style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)' }}
      >
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`${prefix}/industrias/${industry.slug}`}
                className="group relative block overflow-hidden rounded-xl shadow-lg transition-all duration-200 hover:scale-[1.02]"
                style={{ minHeight: '380px' }}
              >
                <Image
                  src={industry.image}
                  alt={industry.name[l]}
                  fill
                  placeholder="blur"
                  blurDataURL={getBlur(industry.image)}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="font-heading text-2xl font-bold text-white">
                    {industry.name[l]}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {industry.summary[l]}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {industry.certifications.slice(0, 3).map((cert) => (
                      <span
                        key={cert}
                        className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/80"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold-light transition-colors group-hover:text-gold">
                    {industry.ctaCard[l]}
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
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <CTABanner
        heading={
          l === 'es'
            ? '¿Necesita una solución para su sector? Hablemos.'
            : 'Need a solution for your sector? Let\'s talk.'
        }
        ctaText={l === 'es' ? 'Contactar Especialista' : 'Contact a Specialist'}
        ctaLink={`${prefix}/contacto`}
      />
    </>
  );
}
