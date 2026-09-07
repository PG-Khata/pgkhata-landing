'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BRAND } from '@/lib/constants';

export function Hero() {
  return (
    <section
      className="relative page-hero overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Content */}
      <div className="container-pg flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center w-full max-w-3xl mx-auto"
        >
          <h1
            id="hero-heading"
            className="display-serif text-display text-[#1a1c1c] text-center mb-6"
            style={{ maxWidth: '780px', width: '100%' }}
          >
            rent collection,<br />
            without the chaos.
          </h1>

          <p
            className="text-[#42493e] text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto text-center"
            style={{ textWrap: 'balance' } as React.CSSProperties}
          >
            Manage tenants, generate itemized bills, send them through WhatsApp and track payments without spreadsheets, notebooks or endless follow-ups.
          </p>

          <div className="hero-actions flex items-center justify-center gap-4 flex-wrap mb-4 w-full">
            <Link
              href={BRAND.registerUrl}
              id="hero-cta-primary"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#154212] text-white text-sm font-semibold rounded-full hover:bg-[#2d5a27] transition-all duration-200 whitespace-nowrap select-none focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d5a27] focus-visible:ring-offset-2 shadow-sm"
            >
              Start for free
            </Link>
            <Link
              href="/how-it-works"
              id="hero-cta-secondary"
              className="inline-flex items-center justify-center px-8 py-3.5 text-[#1a1c1c] text-sm font-medium rounded-full border border-[rgba(24,24,27,0.14)] hover:bg-[#f4f3f2] transition-all duration-200 whitespace-nowrap select-none focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d5a27]"
            >
              See how it works
            </Link>
          </div>

          <p className="text-xs text-[#72796e] text-center mt-1">
            &#8377;0 forever &middot; No credit card required
          </p>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 sm:mt-18 w-full max-w-[900px] mx-auto"
        >
          <div className="browser-frame">
            {/* Browser toolbar */}
            <div className="browser-toolbar">
              <div className="browser-dot" />
              <div className="browser-dot" />
              <div className="browser-dot" />
            </div>

            {/* Dashboard content */}
            <div className="bg-[#f4f3f2] p-6 sm:p-8 flex flex-col gap-4 sm:gap-5">
              {/* Metric cards row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full">
                {[
                  { label: "Total Beds", value: "84", color: "#1a1c1c" },
                  { label: "Occupied",   value: "71", color: "#154212" },
                  { label: "Vacant",     value: "13", color: "#1a1c1c" },
                  { label: "Pending",    value: "₹36,500", color: "#dc2626" },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="bg-white rounded-xl p-4 sm:p-5 border border-[rgba(24,24,27,0.06)] flex flex-col justify-between text-left min-w-0"
                  >
                    <p className="text-[11px] font-medium text-[#72796e] uppercase tracking-wider mb-2 leading-none">
                      {m.label}
                    </p>
                    <p className="text-xl sm:text-2xl font-bold tracking-tight leading-none" style={{ color: m.color }}>
                      {m.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Revenue trend card */}
              <div className="bg-white rounded-xl p-5 sm:p-6 border border-[rgba(24,24,27,0.06)] w-full">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <p className="text-xs font-semibold text-[#42493e] uppercase tracking-wider leading-none">
                    Revenue Trend
                  </p>
                  <p className="text-xs font-medium text-[#72796e] leading-none">
                    &#8377;2,18,450 Collected
                  </p>
                </div>
                {/* Bar chart */}
                <div className="px-2 sm:px-4">
                  <div className="grid grid-cols-6 gap-3 sm:gap-6 items-end h-32">
                    {[
                      { month: "Jan", h: 48 },
                      { month: "Feb", h: 56 },
                      { month: "Mar", h: 64 },
                      { month: "Apr", h: 72 },
                      { month: "May", h: 80 },
                      { month: "Jun", h: 96 },
                    ].map((bar) => (
                      <div key={bar.month} className="flex flex-col items-center gap-2 h-full justify-end">
                        <div
                          className="w-full max-w-[48px] rounded-t-md transition-all duration-700"
                          style={{
                            height: `${bar.h}%`,
                            background: '#154212',
                          }}
                        />
                        <span className="text-[10px] sm:text-xs font-medium text-[#72796e] shrink-0 text-center leading-none">
                          {bar.month}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
