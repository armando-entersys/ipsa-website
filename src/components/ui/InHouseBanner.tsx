import { Wrench } from 'lucide-react';
import Button from '@/components/ui/Button';

interface InHouseBannerProps {
  heading: string;
  body: string;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
}

export default function InHouseBanner({
  heading,
  body,
  ctaText,
  ctaLink,
  className = '',
}: InHouseBannerProps) {
  return (
    <section className={`bg-gray-100 py-16 lg:py-20 ${className}`}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-2xl bg-navy p-8 md:p-12">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-10">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/15">
              <Wrench className="h-8 w-8 text-gold-light" />
            </div>
            <div className="flex-1">
              <h2 className="font-heading text-2xl font-bold text-white lg:text-3xl">
                {heading}
              </h2>
              <p className="mt-3 text-white/80 leading-relaxed">{body}</p>
            </div>
            {ctaText && ctaLink && (
              <div className="shrink-0">
                <Button variant="primary" size="lg" href={ctaLink}>
                  {ctaText}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
