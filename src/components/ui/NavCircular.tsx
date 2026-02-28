import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface NavItem {
  label: string;
  description: string;
  link: string;
}

interface NavCircularProps {
  items: NavItem[];
  className?: string;
}

export default function NavCircular({ items, className = '' }: NavCircularProps) {
  return (
    <div className={`grid gap-4 md:grid-cols-3 ${className}`}>
      {items.map((item) => (
        <Link
          key={item.label}
          href={item.link}
          className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-150 hover:shadow-lg hover:-translate-y-0.5"
        >
          <div className="flex-1">
            <h3 className="font-heading text-lg font-semibold text-gray-900 group-hover:text-navy transition-colors">
              {item.label}
            </h3>
            <p className="mt-1 text-sm text-gray-600 leading-relaxed">{item.description}</p>
          </div>
          <ArrowRight className="h-5 w-5 shrink-0 text-gray-400 transition-all group-hover:text-gold group-hover:translate-x-1" />
        </Link>
      ))}
    </div>
  );
}
