import Link from 'next/link';
import Image from 'next/image';
import { type LucideIcon } from 'lucide-react';

type CardVariant = 'product' | 'service' | 'industry' | 'supplier';

interface CardBaseProps {
  variant: CardVariant;
  title: string;
  className?: string;
  href?: string;
}

interface ProductCardProps extends CardBaseProps {
  variant: 'product';
  description: string;
  image: string;
  icon?: never;
}

interface ServiceCardProps extends CardBaseProps {
  variant: 'service';
  description: string;
  icon: LucideIcon;
  image?: never;
}

interface IndustryCardProps extends CardBaseProps {
  variant: 'industry';
  image: string;
  description?: never;
  icon?: never;
}

interface SupplierCardProps extends CardBaseProps {
  variant: 'supplier';
  image: string;
  description?: never;
  icon?: never;
}

type CardProps = ProductCardProps | ServiceCardProps | IndustryCardProps | SupplierCardProps;

function ProductCard({ title, description, image, href, className = '' }: ProductCardProps) {
  return (
    <div
      className={`group flex flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all duration-150 hover:shadow-lg hover:-translate-y-0.5 ${className}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-150 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 flex-1 text-sm text-gray-600 leading-relaxed">{description}</p>
        {href && (
          <Link
            href={href}
            className="mt-4 inline-flex items-center text-sm font-semibold text-gold hover:text-gold-dark transition-colors"
          >
            Ver m&aacute;s
            <svg
              className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
}

function ServiceCard({ title, description, icon: Icon, href, className = '' }: ServiceCardProps) {
  return (
    <div
      className={`group flex flex-row items-start gap-5 rounded-xl bg-white p-6 shadow-md transition-all duration-150 hover:shadow-lg hover:-translate-y-0.5 ${className}`}
    >
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl icon-bg-navy text-gray-700 transition-colors group-hover:bg-gold group-hover:text-white">
        <Icon className="h-7 w-7" />
      </div>
      <div className="flex flex-1 flex-col">
        <h3 className="font-heading text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-600 leading-relaxed">{description}</p>
        {href && (
          <Link
            href={href}
            className="mt-3 inline-flex items-center text-sm font-semibold text-gold hover:text-gold-dark transition-colors"
          >
            Ver m&aacute;s
            <svg
              className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
}

function IndustryCard({ title, image, href, className = '' }: IndustryCardProps) {
  const content = (
    <div
      className={`group relative flex h-64 items-center justify-center overflow-hidden rounded-xl ${className}`}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-200 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-navy-deep/60 transition-colors group-hover:bg-navy-deep/75" />
      <h3 className="relative z-10 px-6 text-center font-heading text-2xl font-bold text-white">
        {title}
      </h3>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}

function SupplierCard({ title, image, href, className = '' }: SupplierCardProps) {
  const content = (
    <div
      className={`group flex flex-col items-center justify-center gap-4 rounded-xl border border-gray-200 bg-white p-8 transition-all duration-150 hover:shadow-lg hover:-translate-y-0.5 ${className}`}
    >
      <div className="relative h-16 w-36">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
        />
      </div>
      <span className="text-sm font-medium text-gray-700 group-hover:text-navy transition-colors">
        {title}
      </span>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}

export default function Card(props: CardProps) {
  switch (props.variant) {
    case 'product':
      return <ProductCard {...props} />;
    case 'service':
      return <ServiceCard {...props} />;
    case 'industry':
      return <IndustryCard {...props} />;
    case 'supplier':
      return <SupplierCard {...props} />;
  }
}
