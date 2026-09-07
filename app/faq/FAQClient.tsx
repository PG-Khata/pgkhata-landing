'use client';

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { FAQ_ITEMS } from '@/lib/constants';
import { Plus, Minus } from 'lucide-react';

export default function FAQClient() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="page-hero text-center" aria-labelledby="faq-page-heading">
          <div className="container-pg max-w-3xl mx-auto">
            <h1 id="faq-page-heading" className="display-serif text-display text-[#1a1c1c] mb-6">
              Frequently asked questions.
            </h1>
            <p className="text-[#42493e] text-lg leading-relaxed max-w-md mx-auto text-center">
              Everything you need to know about PGKhata.
            </p>
          </div>
        </section>

        {/* FAQ accordion */}
        <section className="pb-24 md:pb-32" aria-label="FAQ accordion">
          <div className="container-pg max-w-3xl mx-auto">
            <div className="flex flex-col divide-y divide-[rgba(24,24,27,0.08)]" role="list">
              {FAQ_ITEMS.map((item, idx) => (
                <div key={item.question} role="listitem">
                  <button
                    onClick={() => setOpen(open === idx ? null : idx)}
                    className="w-full flex items-start justify-between gap-6 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d5a27] rounded-sm group"
                    aria-expanded={open === idx}
                    id={`faq-btn-${idx}`}
                    aria-controls={`faq-panel-${idx}`}
                  >
                    <span className="font-medium text-[#1a1c1c] text-base leading-relaxed group-hover:text-[#154212] transition-colors duration-200">
                      {item.question}
                    </span>
                    <span className="shrink-0 mt-1.5 text-[#72796e]">
                      {open === idx ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${idx}`}
                    role="region"
                    aria-labelledby={`faq-btn-${idx}`}
                    className="overflow-hidden transition-all duration-300"
                    style={{
                      maxHeight: open === idx ? '500px' : '0',
                      paddingBottom: open === idx ? '24px' : '0',
                    }}
                  >
                    <p className="text-[#42493e] text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
