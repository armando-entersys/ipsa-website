import { Wrench, CheckCircle } from 'lucide-react';
import Button from '@/components/ui/Button';

interface Differential {
  label: string;
  text: string;
}

interface InHouseBannerProps {
  heading: string;
  body: string;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
  /** Key benefit line (e.g. "Mantenimiento preventivo de sistemas...") */
  benefitKey?: string;
  /** Promise tagline (e.g. "Presencia física para una disponibilidad digital del 100%.") */
  promise?: string;
  /** Impact phrase (e.g. "No somos un proveedor externo...") */
  impactPhrase?: string;
  /** Per-line differentials (Automatización / Ingeniería) */
  differentials?: Differential[];
}

export default function InHouseBanner({
  heading,
  body,
  ctaText,
  ctaLink,
  className = '',
  benefitKey,
  promise,
  impactPhrase,
  differentials,
}: InHouseBannerProps) {
  return (
    <section className={`bg-gray-100 py-16 lg:py-20 ${className}`}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-2xl bg-navy p-8 md:p-12">
          {/* Header row */}
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-10">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/15">
              <Wrench className="h-8 w-8 text-gold-light" />
            </div>
            <div className="flex-1">
              <h2 className="font-heading text-2xl font-bold text-white lg:text-3xl">
                {heading}
              </h2>
              <p className="mt-3 leading-relaxed text-white/80">{body}</p>
            </div>
            {ctaText && ctaLink && (
              <div className="shrink-0">
                <Button variant="primary" size="lg" href={ctaLink}>
                  {ctaText}
                </Button>
              </div>
            )}
          </div>

          {/* Benefit key */}
          {benefitKey && (
            <div className="mt-6 flex items-start gap-3 rounded-xl bg-white/8 px-5 py-4">
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold-light" />
              <p className="text-sm leading-relaxed text-white/90">{benefitKey}</p>
            </div>
          )}

          {/* Differentials (hub level: per service line) */}
          {differentials && differentials.length > 0 && (
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              {differentials.map((d) => (
                <div key={d.label} className="rounded-xl bg-white/8 px-5 py-4">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-gold-light">
                    {d.label}
                  </p>
                  <p className="text-sm leading-relaxed text-white/85">{d.text}</p>
                </div>
              ))}
            </div>
          )}

          {/* Promise tagline */}
          {promise && (
            <p className="mt-6 border-t border-white/10 pt-5 text-center text-sm font-medium italic text-gold-light">
              &ldquo;{promise}&rdquo;
            </p>
          )}

          {/* Impact phrase */}
          {impactPhrase && !promise && (
            <p className="mt-6 border-t border-white/10 pt-5 text-center text-sm font-medium italic text-gold-light">
              &ldquo;{impactPhrase}&rdquo;
            </p>
          )}
          {impactPhrase && promise && (
            <p className="mt-4 text-center text-sm font-medium italic text-white/70">
              &ldquo;{impactPhrase}&rdquo;
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
