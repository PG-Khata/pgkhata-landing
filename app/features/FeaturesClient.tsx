'use client';

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { FEATURE_CATEGORIES } from '@/lib/constants';

export default function FeaturesPage() {
  const [activeCategory, setActiveCategory] = useState('property');
  const active = FEATURE_CATEGORIES.find((c) => c.id === activeCategory) ?? FEATURE_CATEGORIES[0];

  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="page-hero text-center" aria-labelledby="features-page-heading">
          <div className="container-pg max-w-3xl mx-auto">
            <h1 id="features-page-heading" className="display-serif text-display text-[#1a1c1c] mb-6">
              Everything your PG needs.<br />
              <span className="text-[#72796e]">In one place.</span>
            </h1>
            <p className="text-[#42493e] text-lg leading-relaxed max-w-xl mx-auto text-center">
              A comprehensive directory of tools designed specifically for PG owners in India. Manage beds, track payments and automate bills with precision.
            </p>
          </div>
        </section>

        {/* Feature explorer */}
        <section className="pb-24 md:pb-32" aria-label="Feature explorer">
          <div className="container-pg">
            <div className="flex flex-col md:flex-row gap-10 lg:gap-16">
              {/* Sidebar */}
              <aside className="md:w-56 shrink-0" aria-label="Feature categories">
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#72796e] mb-4 hidden md:block">
                  Categories
                </p>
                <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
                  {FEATURE_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`
                        shrink-0 md:w-full text-left px-3.5 py-2.5 text-sm rounded-xl transition-all duration-200 whitespace-nowrap font-medium
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
              </aside>

              {/* Features grid */}
              <div className="flex-1">
                <div className="mb-8">
                  <h2 className="heading-serif text-subhead text-[#1a1c1c]">
                    {active.label}
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {active.features.map((f) => (
                    <div
                      key={f.id}
                      className="p-6 rounded-2xl border border-[rgba(24,24,27,0.08)] bg-white hover:border-[rgba(24,24,27,0.14)] transition-all duration-200"
                    >
                      <h3 className="font-semibold text-[#1a1c1c] text-sm mb-2">{f.title}</h3>
                      <p className="text-[#72796e] text-xs leading-relaxed">{f.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
