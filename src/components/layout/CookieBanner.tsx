'use client';

import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { Cookie, X } from 'lucide-react';

const COOKIE_KEY = 'ipsa-cookies-accepted';

export default function CookieBanner() {
  const locale = useLocale();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(COOKIE_KEY);
    if (!accepted) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem(COOKIE_KEY, 'true');
    setVisible(false);
  }

  if (!visible) return null;

  const isEs = locale === 'es';

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 md:p-6">
      <div className="mx-auto max-w-4xl rounded-2xl bg-navy-deep/95 backdrop-blur-md border border-white/10 shadow-2xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Cookie className="h-6 w-6 text-gold shrink-0 mt-0.5 sm:mt-0" />
        <p className="flex-1 text-sm leading-relaxed text-white/80">
          {isEs
            ? 'Este sitio utiliza cookies para mejorar tu experiencia de navegación. Al continuar navegando, aceptas el uso de cookies.'
            : 'This site uses cookies to improve your browsing experience. By continuing to browse, you accept the use of cookies.'}
          {' '}
          <Link
            href={`/${locale}/legal`}
            className="text-gold-light hover:text-gold underline underline-offset-2 transition-colors"
          >
            {isEs ? 'Más información' : 'Learn more'}
          </Link>
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={accept}
            className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-navy-deep transition-colors hover:bg-gold-light"
          >
            {isEs ? 'Aceptar' : 'Accept'}
          </button>
          <button
            onClick={accept}
            className="rounded-full p-1.5 text-white/50 hover:text-white transition-colors"
            aria-label={isEs ? 'Cerrar' : 'Close'}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
