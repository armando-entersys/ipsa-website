import Link from 'next/link';
import Image from 'next/image';

interface Logo {
  name: string;
  image: string;
  href?: string;
}

interface LogoGridProps {
  logos: Logo[];
  columns?: number;
  className?: string;
}

export default function LogoGrid({ logos, columns = 4, className = '' }: LogoGridProps) {
  const gridCols: Record<number, string> = {
    2: 'grid-cols-2',
    3: 'grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4',
    5: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5',
    6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
  };

  const colClass = gridCols[columns] ?? 'grid-cols-2 md:grid-cols-4';

  return (
    <div className={`grid ${colClass} gap-6 ${className}`}>
      {logos.map((logo) => {
        const content = (
          <div
            key={logo.name}
            className="group flex items-center justify-center rounded-xl border border-gray-200 bg-white p-6 transition-all duration-150 hover:shadow-lg"
          >
            <div className="relative h-14 w-full max-w-[160px]">
              <Image
                src={logo.image}
                alt={logo.name}
                fill
                className="object-contain grayscale transition-all duration-150 group-hover:grayscale-0"
              />
            </div>
          </div>
        );

        if (logo.href) {
          return (
            <Link key={logo.name} href={logo.href} title={logo.name}>
              {content}
            </Link>
          );
        }

        return <div key={logo.name}>{content}</div>;
      })}
    </div>
  );
}
