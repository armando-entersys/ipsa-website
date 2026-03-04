import { type ReactNode } from 'react';
import Button from '@/components/ui/Button';

interface CTABannerProps {
  heading: string;
  subtext?: string;
  ctaText: string;
  ctaLink: string;
  variant?: 'navy' | 'gold';
  className?: string;
  ctaIcon?: ReactNode;
}

export default function CTABanner({
  heading,
  subtext,
  ctaText,
  ctaLink,
  variant = 'navy',
  className = '',
  ctaIcon,
}: CTABannerProps) {
  const bg = variant === 'navy'
    ? 'bg-navy-deep'
    : 'bg-gold';

  const headingColor = 'text-white';
  const subtextColor = variant === 'navy' ? 'text-white/80' : 'text-white/90';
  const btnVariant = variant === 'navy' ? 'primary' : 'secondary';

  return (
    <section className={`${bg} relative overflow-hidden py-16 lg:py-20 ${className}`}>
      {variant === 'navy' && (
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      )}
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className={`font-heading text-3xl font-bold lg:text-4xl ${headingColor}`}>
          {heading}
        </h2>
        {subtext && (
          <p className={`mx-auto mt-4 max-w-2xl text-lg leading-relaxed ${subtextColor}`}>
            {subtext}
          </p>
        )}
        <div className="mt-8">
          <Button variant={btnVariant} size="lg" href={ctaLink}>
            {ctaIcon && <span className="mr-2">{ctaIcon}</span>}
            {ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
}
