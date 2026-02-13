import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  inverted?: boolean;
}

export default function Breadcrumb({ items, inverted = false }: BreadcrumbProps) {
  const textColor = inverted ? 'text-white/70' : 'text-gray-500';
  const activeColor = inverted ? 'text-white' : 'text-navy';
  const hoverColor = inverted ? 'hover:text-white' : 'hover:text-navy';
  const separatorColor = inverted ? 'text-white/40' : 'text-gray-400';

  return (
    <nav aria-label="breadcrumb">
      <ol className="flex flex-wrap items-center gap-1 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-1">
              {index > 0 && (
                <ChevronRight className={`h-4 w-4 shrink-0 ${separatorColor}`} aria-hidden="true" />
              )}
              {isLast || !item.href ? (
                <span
                  className={`font-medium ${isLast ? activeColor : textColor}`}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={`${textColor} ${hoverColor} transition-colors`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
