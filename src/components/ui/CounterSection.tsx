'use client';

import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

interface Counter {
  value: string;
  suffix?: string;
  label: string;
}

interface CounterSectionProps {
  counters: Counter[];
  className?: string;
}

export default function CounterSection({ counters, className = '' }: CounterSectionProps) {
  return (
    <div className={`grid grid-cols-2 gap-8 md:grid-cols-3 lg:gap-12 ${className}`}>
      {counters.map((counter) => (
        <div key={counter.label} className="text-center">
          <div className="flex items-baseline justify-center gap-1">
            <AnimatedCounter
              value={counter.value}
              className="font-heading text-4xl font-bold text-gold lg:text-5xl"
            />
            {counter.suffix && (
              <span className="font-heading text-2xl font-bold text-gold lg:text-3xl">
                {counter.suffix}
              </span>
            )}
          </div>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed lg:text-base">
            {counter.label}
          </p>
        </div>
      ))}
    </div>
  );
}
