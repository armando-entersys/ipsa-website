import { ShieldCheck } from 'lucide-react';

interface CertBadgesProps {
  badges: string[];
  variant?: 'light' | 'dark';
  className?: string;
}

export default function CertBadges({ badges, variant = 'light', className = '' }: CertBadgesProps) {
  const pillClasses = variant === 'light'
    ? 'border-white/30 bg-white/10 text-white'
    : 'border-navy/20 bg-navy/5 text-navy';

  const iconColor = variant === 'light' ? 'text-gold-light' : 'text-gold';

  return (
    <div className={`flex flex-wrap items-center justify-center gap-3 ${className}`}>
      {badges.map((badge) => (
        <span
          key={badge}
          className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-medium ${pillClasses}`}
        >
          <ShieldCheck className={`h-4 w-4 ${iconColor}`} />
          {badge}
        </span>
      ))}
    </div>
  );
}
