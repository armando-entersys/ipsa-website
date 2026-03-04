import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { stockImages, getBlur } from '@/data/images';
import { industriasHub, industries } from '@/data/industries';
import Button from '@/components/ui/Button';
import CertBadges from '@/components/ui/CertBadges';
import InHouseBanner from '@/components/ui/InHouseBanner';
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
            <div className="mt-8">
              <Button variant="primary" size="lg" href="#sectores">
                {industriasHub.ctaHero[l]}
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cert badges strip */}
      <div className="bg-navy-deep py-4">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <CertBadges
            badges={['API 6D', 'API 6A', 'ASME', 'SIL 3', 'ISO 9001']}
            variant="light"
            className="justify-center"
          />
        </div>
      </div>

      {/* ═══ ENFOQUE DEL GUARDIÁN ═══ */}
      <section
        className="py-20 lg:py-24"
        style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)' }}
      >
        <div className="mx-auto max-w-4xl px-5 text-center md:px-10">
          <h2
            className="font-heading mb-6 text-gray-900"
            style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 500 }}
          >
            {industriasHub.enfoqueH2[l]}
          </h2>
          <p
            className="leading-relaxed text-gray-600"
            style={{ fontSize: '1.05rem', lineHeight: 1.8 }}
          >
            {industriasHub.enfoqueCuerpo[l]}
          </p>
        </div>
      </section>

      {/* ═══ INDUSTRY CARDS ═══ */}
      <section
        id="sectores"
        className="py-20 lg:py-24"
        style={{ background: 'linear-gradient(180deg, #f6f7f9 0%, #f0f1f5 100%)' }}
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
                  <p className="mt-2 text-sm leading-relaxed text-white/50">
                    {industry.criticalSolution[l]}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {industry.certifications.map((cert) => (
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

      {/* ═══ MATRIZ DE CAPACIDADES ═══ */}
      <section
        className="py-20 lg:py-24"
        style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)' }}
      >
        <div className="mx-auto max-w-4xl px-5 text-center md:px-10">
          <h2
            className="font-heading mb-4 text-gray-900"
            style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 500 }}
          >
            {industriasHub.matrizH2[l]}
          </h2>
          <p className="mb-12 text-gray-600 leading-relaxed">
            {industriasHub.matrizMicrocopy[l]}
          </p>
        </div>
        <div className="mx-auto max-w-5xl px-5 md:px-10">
          <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-navy-deep text-white">
                  <th className="px-6 py-4 font-semibold">{l === 'es' ? 'Sector' : 'Sector'}</th>
                  <th className="px-6 py-4 font-semibold">{l === 'es' ? 'Solución Crítica' : 'Critical Solution'}</th>
                  <th className="px-6 py-4 font-semibold">{l === 'es' ? 'Marcas' : 'Brands'}</th>
                  <th className="px-6 py-4 font-semibold">{l === 'es' ? 'Certificaciones' : 'Certifications'}</th>
                </tr>
              </thead>
              <tbody>
                {industries.map((ind, idx) => (
                  <tr key={ind.slug} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 font-medium text-gray-900">
                      <Link href={`${prefix}/industrias/${ind.slug}`} className="text-navy hover:text-gold transition-colors">
                        {ind.name[l]}
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{ind.criticalSolution[l]}</td>
                    <td className="px-6 py-4 text-gray-600">
                      {ind.ecosystem.map((e) => e.title[l].split('(')[1]?.replace(')', '') || '').filter(Boolean).join(', ')}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {ind.certifications.map((cert) => (
                          <span key={cert} className="rounded bg-navy-deep/5 px-2 py-0.5 text-xs font-medium text-navy">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══ IN-HOUSE DIFERENCIAL ═══ */}
      <InHouseBanner
        heading={industriasHub.inHouseH2[l]}
        body={industriasHub.inHouseCuerpo[l]}
        ctaText={l === 'es' ? 'Conozca nuestro Soporte In-House' : 'Learn about our In-House Support'}
        ctaLink={`${prefix}/servicios`}
      />

      {/* ═══ CTA FINAL ═══ */}
      <CTABanner
        heading={industriasHub.ctaFinalH2[l]}
        subtext={industriasHub.ctaFinalSubtexto[l]}
        ctaText={industriasHub.ctaFinal[l]}
        ctaLink={`${prefix}/contacto`}
      />
    </>
  );
}
