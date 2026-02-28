import * as LucideIcons from 'lucide-react';
import { type LucideIcon } from 'lucide-react';

interface Feature {
  title: string;
  detail: string;
  icon: string;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
  className?: string;
}

const colsClass: Record<number, string> = {
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-2 lg:grid-cols-3',
  4: 'md:grid-cols-2 lg:grid-cols-4',
};

function getIcon(name: string): LucideIcon {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const icons = LucideIcons as unknown as Record<string, LucideIcon>;
  return icons[name] ?? (LucideIcons as any).Box;
}

export default function FeatureGrid({ features, columns = 4, className = '' }: FeatureGridProps) {
  return (
    <div className={`grid gap-6 ${colsClass[columns] ?? colsClass[4]} ${className}`}>
      {features.map((feature) => {
        const Icon = getIcon(feature.icon);
        return (
          <div
            key={feature.title}
            className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-150 hover:shadow-lg hover:-translate-y-0.5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl icon-bg-navy text-gray-700 transition-colors group-hover:bg-gold group-hover:text-white">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-heading text-lg font-semibold text-gray-900">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">{feature.detail}</p>
          </div>
        );
      })}
    </div>
  );
}
