import { AlertTriangle, CheckCircle } from 'lucide-react';

interface ChallengeBlockProps {
  challenge: {
    title: string;
    text: string;
  };
  solution: {
    title: string;
    text: string;
  };
  className?: string;
}

export default function ChallengeBlock({ challenge, solution, className = '' }: ChallengeBlockProps) {
  return (
    <div className={`grid gap-6 md:grid-cols-2 ${className}`}>
      {/* Challenge column */}
      <div className="rounded-2xl bg-gray-100 p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
          </div>
          <h3 className="font-heading text-xl font-bold text-gray-900">{challenge.title}</h3>
        </div>
        <p className="mt-4 text-gray-700 leading-relaxed">{challenge.text}</p>
      </div>

      {/* Solution column */}
      <div className="rounded-2xl bg-navy p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
            <CheckCircle className="h-5 w-5 text-gold-light" />
          </div>
          <h3 className="font-heading text-xl font-bold text-white">{solution.title}</h3>
        </div>
        <p className="mt-4 text-white/85 leading-relaxed">{solution.text}</p>
      </div>
    </div>
  );
}
