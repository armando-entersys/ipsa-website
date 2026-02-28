import Button from '@/components/ui/Button';

interface CTABannerProps {
  heading: string;
  subtext?: string;
  ctaText: string;
  ctaLink: string;
  variant?: 'navy' | 'gold';
  className?: string;
}

export default function CTABanner({
  heading,
  subtext,
  ctaText,
  ctaLink,
  variant = 'navy',
  className = '',
}: CTABannerProps) {
  const bg = variant === 'navy'
    ? 'bg-navy-deep'
    : 'bg-gold';

  const headingColor = 'text-white';
  const subtextColor = variant === 'navy' ? 'text-white/80' : 'text-white/90';
  const btnVariant = variant === 'navy' ? 'primary' : 'secondary';

  return (
    <section className={`${bg} py-16 lg:py-20 ${className}`}>
      <div className="mx-auto max-w-4xl px-6 text-center">
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
            {ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
}
