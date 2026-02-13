import { type LucideIcon } from 'lucide-react';

interface Step {
  number: number;
  title: string;
  description: string;
  icon?: LucideIcon;
}

interface StepsProps {
  steps: Step[];
  activeStep?: number;
  className?: string;
}

export default function Steps({ steps, activeStep, className = '' }: StepsProps) {
  return (
    <div className={className}>
      {/* Desktop: horizontal layout */}
      <div className="hidden md:flex md:items-start md:justify-between">
        {steps.map((step, index) => {
          const isActive = activeStep === step.number;
          const Icon = step.icon;

          return (
            <div key={step.number} className="flex flex-1 flex-col items-center text-center">
              {/* Circle + connecting line */}
              <div className="relative flex w-full items-center justify-center">
                {/* Line before */}
                {index > 0 && (
                  <div className="absolute right-1/2 top-1/2 h-0.5 w-full -translate-y-1/2 bg-gray-200" />
                )}
                {/* Line after */}
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-1/2 h-0.5 w-full -translate-y-1/2 bg-gray-200" />
                )}
                {/* Circle */}
                <div
                  className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 text-lg font-bold transition-colors ${
                    isActive
                      ? 'border-gold bg-gold text-white'
                      : 'border-navy bg-navy text-white'
                  }`}
                >
                  {Icon ? <Icon className="h-6 w-6" /> : step.number}
                </div>
              </div>
              {/* Content */}
              <h3 className="mt-4 font-heading text-base font-semibold text-navy">{step.title}</h3>
              <p className="mt-2 max-w-[200px] text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Mobile: vertical layout */}
      <div className="flex flex-col gap-0 md:hidden">
        {steps.map((step, index) => {
          const isActive = activeStep === step.number;
          const Icon = step.icon;

          return (
            <div key={step.number} className="flex gap-4">
              {/* Circle + vertical line */}
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 text-base font-bold ${
                    isActive
                      ? 'border-gold bg-gold text-white'
                      : 'border-navy bg-navy text-white'
                  }`}
                >
                  {Icon ? <Icon className="h-5 w-5" /> : step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="h-full w-0.5 bg-gray-200" />
                )}
              </div>
              {/* Content */}
              <div className="pb-8">
                <h3 className="font-heading text-base font-semibold text-navy">{step.title}</h3>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
