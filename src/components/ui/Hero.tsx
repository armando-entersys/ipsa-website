import Image from 'next/image';
import Button from '@/components/ui/Button';
import Breadcrumb from '@/components/ui/Breadcrumb';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface HeroHomeProps {
  variant: 'home';
  title: string;
  subtitle?: string;
  ctaPrimary?: { text: string; href: string };
  ctaSecondary?: { text: string; href: string };
  backgroundImage?: string;
  breadcrumbs?: never;
}

interface HeroInternalProps {
  variant: 'internal';
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  breadcrumbs?: BreadcrumbItem[];
  ctaPrimary?: never;
  ctaSecondary?: never;
}

type HeroProps = HeroHomeProps | HeroInternalProps;

export default function Hero(props: HeroProps) {
  if (props.variant === 'home') {
    return <HeroHome {...props} />;
  }
  return <HeroInternal {...props} />;
}

function HeroHome({ title, subtitle, ctaPrimary, ctaSecondary, backgroundImage }: HeroHomeProps) {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      )}
      <div className="absolute inset-0 bg-navy-deep/70" />
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 text-center">
        <h1 className="font-heading text-4xl font-bold leading-tight text-white lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            {subtitle}
          </p>
        )}
        {(ctaPrimary || ctaSecondary) && (
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {ctaPrimary && (
              <Button variant="primary" size="lg" href={ctaPrimary.href}>
                {ctaPrimary.text}
              </Button>
            )}
            {ctaSecondary && (
              <Button variant="outline" size="lg" href={ctaSecondary.href} className="border-white text-white hover:bg-white hover:text-navy">
                {ctaSecondary.text}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

function HeroInternal({ title, subtitle, backgroundImage, breadcrumbs }: HeroInternalProps) {
  return (
    <section className="relative flex min-h-[40vh] items-center overflow-hidden">
      {backgroundImage ? (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy-deep/75" />
        </>
      ) : (
        <div className="absolute inset-0 bg-navy-deep" />
      )}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-16">
        <h1 className="font-heading text-4xl font-bold leading-tight text-white lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-white/80">{subtitle}</p>
        )}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="mt-6">
            <Breadcrumb items={breadcrumbs} inverted />
          </div>
        )}
      </div>
    </section>
  );
}
