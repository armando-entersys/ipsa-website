import Button from '@/components/ui/Button';

interface EcosystemItem {
  title: string;
  copy: string;
  ctaText: string;
  ctaLink: string;
}

interface EcosystemGridProps {
  items: EcosystemItem[];
  className?: string;
}

export default function EcosystemGrid({ items, className = '' }: EcosystemGridProps) {
  return (
    <div className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {items.map((item) => (
        <div
          key={item.title}
          className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-150 hover:shadow-lg hover:-translate-y-0.5"
        >
          <h3 className="font-heading text-xl font-semibold text-gray-900">
            {item.title}
          </h3>
          <p className="mt-3 flex-1 text-gray-600 leading-relaxed">{item.copy}</p>
          <div className="mt-6">
            <Button variant="outline" size="sm" href={item.ctaLink}>
              {item.ctaText}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
