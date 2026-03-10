"use client";

import { useState } from "react";
import { useLocale } from "next-intl";

const PHONE = "5215541886380";
const MESSAGES = {
  es: "Hola, me gustaría obtener más información sobre sus productos y servicios.",
  en: "Hello, I would like to get more information about your products and services.",
};

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const locale = useLocale();
  const message = MESSAGES[locale as keyof typeof MESSAGES] || MESSAGES.es;

  const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`fixed right-28 bottom-10 z-50 flex items-center justify-center rounded-full bg-[#25D366] text-white cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#1eba57] hover:-translate-y-[3px] max-[600px]:right-20 max-[600px]:bottom-5 ${
        hovered ? "gap-2 pr-5 pl-4" : "w-14 max-[600px]:w-12"
      } h-14 max-[600px]:h-12`}
      style={{ boxShadow: "0 10px 25px rgba(37, 211, 102, 0.35)" }}
    >
      <svg
        viewBox="0 0 32 32"
        fill="currentColor"
        className="h-7 w-7 shrink-0 max-[600px]:h-6 max-[600px]:w-6"
      >
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.14l5.942-1.96A15.93 15.93 0 0 0 16.004 32C24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0zm9.55 22.612c-.396 1.116-2.324 2.136-3.24 2.268-.828.12-1.872.168-3.024-.192a27.5 27.5 0 0 1-2.736-1.008c-4.812-2.076-7.956-6.96-8.196-7.284-.24-.324-1.956-2.604-1.956-4.968s1.236-3.528 1.68-4.008c.444-.48.96-.6 1.284-.6s.636.012.912.024c.3.012.696-.108 1.08.828.396.96 1.344 3.288 1.464 3.528.12.24.192.528.036.852-.156.324-.24.528-.468.816-.24.288-.492.636-.708.852-.24.24-.48.48-.204.96.276.48 1.224 2.016 2.628 3.264 1.812 1.608 3.336 2.112 3.816 2.352.48.24.756.204 1.032-.12.276-.324 1.188-1.38 1.5-1.86.312-.48.636-.396 1.068-.24.432.168 2.76 1.3 3.24 1.536.48.24.792.36.912.552.12.192.12 1.116-.276 2.232z" />
      </svg>
      <span
        className={`whitespace-nowrap text-sm font-semibold transition-all duration-300 ${
          hovered ? "opacity-100 max-w-40" : "opacity-0 max-w-0 overflow-hidden"
        }`}
      >
        WhatsApp
      </span>
    </a>
  );
}
