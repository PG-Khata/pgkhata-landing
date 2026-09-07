'use client';

import { useState } from 'react';
import { FAQ_ITEMS } from '@/lib/constants';
import { Plus, Minus } from 'lucide-react';

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  // Show first 6 on homepage
  const items = FAQ_ITEMS.slice(0, 6);

  return (
    <section
      id="faq"
      className="section-gap"
      aria-labelledby="faq-heading"
    >
      <div className="container-pg max-w-3xl mx-auto">
        <div className="mb-14 text-center">
          <h2 id="faq-heading" className="heading-serif text-headline text-[#1a1c1c]">
            Questions owners ask before switching.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-[#42493e]">
            The useful details about price, setup and what tenants need to do.
          </p>
        </div>

        <div className="flex flex-col divide-y divide-[rgba(24,24,27,0.08)]" role="list">
          {items.map((item, idx) => (
            <div key={item.question} role="listitem">
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full flex items-start justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d5a27] rounded-sm group"
                aria-expanded={open === idx}
                id={`faq-btn-${idx}`}
                aria-controls={`faq-panel-${idx}`}
              >
                <span className="font-medium text-[#1a1c1c] text-sm leading-relaxed group-hover:text-[#154212] transition-colors duration-200">
                  {item.question}
                </span>
                <span className="shrink-0 mt-0.5 text-[#72796e]">
                  {open === idx ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              <div
                id={`faq-panel-${idx}`}
                role="region"
                aria-labelledby={`faq-btn-${idx}`}
                className="overflow-hidden transition-[max-height,padding] duration-300"
                style={{ maxHeight: open === idx ? '500px' : '0', paddingBottom: open === idx ? '20px' : '0' }}
              >
                <p className="text-sm text-[#42493e] leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
