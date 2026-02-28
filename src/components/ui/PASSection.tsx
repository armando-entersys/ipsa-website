import { AlertTriangle, Flame, CheckCircle } from 'lucide-react';

interface PASFullProps {
  variant: 'full';
  heading?: string;
  problema: string;
  agitacion: string;
  solucion: string;
  className?: string;
}

interface PASCompactProps {
  variant: 'compact';
  heading?: string;
  body: string;
  cta?: { text: string; href: string };
  className?: string;
}

type PASSectionProps = PASFullProps | PASCompactProps;

export default function PASSection(props: PASSectionProps) {
  if (props.variant === 'compact') {
    return <PASCompact {...props} />;
  }
  return <PASFull {...props} />;
}

function PASFull({ heading, problema, agitacion, solucion, className = '' }: PASFullProps) {
  return (
    <section className={`py-16 lg:py-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">
        {heading && (
          <h2 className="font-heading text-3xl font-bold text-gray-900 lg:text-4xl mb-10 text-center">
            {heading}
          </h2>
        )}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Problema */}
          <div className="rounded-2xl bg-gray-100 p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
              </div>
              <h3 className="font-heading text-lg font-bold text-gray-900">Problema</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">{problema}</p>
          </div>

          {/* Agitación */}
          <div className="rounded-2xl bg-amber-50 p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-200">
                <Flame className="h-5 w-5 text-amber-700" />
              </div>
              <h3 className="font-heading text-lg font-bold text-gray-900">Impacto</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">{agitacion}</p>
          </div>

          {/* Solución */}
          <div className="rounded-2xl bg-navy p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                <CheckCircle className="h-5 w-5 text-gold-light" />
              </div>
              <h3 className="font-heading text-lg font-bold text-white">Solución IPSA</h3>
            </div>
            <p className="text-white/85 leading-relaxed">{solucion}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PASCompact({ heading, body, cta, className = '' }: PASCompactProps) {
  return (
    <section className={`py-16 lg:py-20 ${className}`}>
      <div className="mx-auto max-w-4xl px-6 text-center">
        {heading && (
          <h2 className="font-heading text-3xl font-bold text-gray-900 lg:text-4xl mb-6">
            {heading}
          </h2>
        )}
        <p className="text-lg text-gray-700 leading-relaxed">{body}</p>
        {cta && (
          <div className="mt-8">
            <a
              href={cta.href}
              className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-lg font-semibold text-white transition-colors hover:bg-gold-dark"
            >
              {cta.text}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
