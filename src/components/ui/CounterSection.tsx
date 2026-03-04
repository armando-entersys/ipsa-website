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
  variant?: 'default' | 'light';
}

export default function CounterSection({ counters, className = '', variant = 'default' }: CounterSectionProps) {
  const valueColor = variant === 'light' ? 'text-white' : 'text-gold';
  const suffixColor = variant === 'light' ? 'text-white' : 'text-gold';
  const labelColor = variant === 'light' ? 'text-white/70' : 'text-gray-600';

  return (
    <div className={`grid grid-cols-2 gap-8 md:grid-cols-3 lg:gap-12 ${className}`}>
      {counters.map((counter) => (
        <div key={counter.label} className={variant === 'light' ? 'text-left' : 'text-center'}>
          <div className={`flex items-baseline gap-1 ${variant === 'light' ? 'justify-start' : 'justify-center'}`}>
            <AnimatedCounter
              value={counter.value}
              className={`font-heading text-4xl font-bold ${valueColor} lg:text-5xl`}
            />
            {counter.suffix && (
              <span className={`font-heading text-2xl font-bold ${suffixColor} lg:text-3xl`}>
                {counter.suffix}
              </span>
            )}
          </div>
          <p className={`mt-2 text-sm leading-relaxed lg:text-base ${labelColor}`}>
            {counter.label}
          </p>
        </div>
      ))}
    </div>
  );
}
