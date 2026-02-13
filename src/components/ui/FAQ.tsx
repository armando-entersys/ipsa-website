'use client';

import { useState, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  className?: string;
}

export default function FAQ({ items, className = '' }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <div className={`divide-y divide-gray-200 border-t border-b border-gray-200 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const id = `faq-answer-${index}`;

        return (
          <div key={index}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-navy cursor-pointer"
              onClick={() => toggle(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggle(index);
                }
              }}
              aria-expanded={isOpen}
              aria-controls={id}
            >
              <span className="font-heading text-base font-semibold text-gray-900 md:text-lg">
                {item.question}
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-navy transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>
            <div
              id={id}
              role="region"
              aria-labelledby={`faq-question-${index}`}
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? 'max-h-96 pb-5' : 'max-h-0'
              }`}
            >
              <p className="text-gray-600 leading-relaxed">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
