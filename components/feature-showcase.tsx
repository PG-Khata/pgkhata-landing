'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FEATURE_CATEGORIES } from '@/lib/constants';

export function FeatureShowcase() {
  const [activeCategory, setActiveCategory] = useState('property');
  const active = FEATURE_CATEGORIES.find((c) => c.id === activeCategory) ?? FEATURE_CATEGORIES[0];

  return (
    <section
      id="features"
      className="section-gap bg-white border-y border-[rgba(24,24,27,0.06)]"
      aria-labelledby="features-heading"
    >
      <div className="container-pg">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#72796e] mb-4">Features</p>
          <h2 id="features-heading" className="heading-serif text-headline text-[#1a1c1c] mb-4">
            Everything your PG needs.
          </h2>
          <p className="text-[#42493e] text-lg max-w-lg mx-auto text-center">
            From bed tracking to billing and WhatsApp notifications, PGKhata covers every part of running a PG.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 lg:gap-12">
          {/* Category sidebar */}
          <div className="flex sm:flex-col gap-2 overflow-x-auto sm:overflow-visible sm:w-52 shrink-0 pb-2 sm:pb-0">
            <p className="hidden sm:block text-[10px] font-semibold uppercase tracking-[0.12em] text-[#72796e] mb-1">
              Categories
            </p>
            {FEATURE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`
                  shrink-0 text-left px-3.5 py-2.5 text-sm rounded-xl transition-all duration-200 whitespace-nowrap font-medium
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d5a27]
                  ${activeCategory === cat.id
                    ? 'bg-[#f4f3f2] text-[#154212] font-semibold'
                    : 'text-[#42493e] hover:bg-[#f4f3f2] hover:text-[#1a1c1c]'}
                `}
                aria-pressed={activeCategory === cat.id}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Feature grid */}
          <div className="flex-1">
            <h3 className="heading-sans text-xl text-[#1a1c1c] mb-6">{active.label}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {active.features.map((f) => (
                <div
                  key={f.id}
                  className="p-5 rounded-2xl border border-[rgba(24,24,27,0.08)] bg-[#faf9f8] hover:border-[rgba(24,24,27,0.14)] transition-all duration-200"
                >
                  <h4 className="font-semibold text-[#1a1c1c] text-sm mb-1.5">{f.title}</h4>
                  <p className="text-[#72796e] text-xs leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/features"
            className="text-sm font-medium text-[#154212] hover:text-[#2d5a27] transition-colors duration-200 underline underline-offset-4"
          >
            See all features
          </Link>
        </div>
      </div>
    </section>
  );
}
