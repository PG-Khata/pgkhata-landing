import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { BRAND } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Pricing | PGKhata',
  description: 'PGKhata is free forever. No trial, no credit card, no per-bed pricing. Everything is free for PG owners.',
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero - matches Stitch exactly */}
        <section className="page-hero text-center" aria-labelledby="pricing-page-heading">
          <div className="container-pg max-w-2xl mx-auto">
            <div
              id="pricing-page-heading"
              className="font-serif text-[9rem] md:text-[14rem] leading-none tracking-tight text-[#1a1c1c] mb-2"
              aria-label="Zero rupees"
            >
              &#8377;0
            </div>
            <p className="font-serif text-5xl md:text-7xl text-[#42493e] mb-12 tracking-tight">
              Forever.
            </p>
            <p className="text-[#42493e] text-base md:text-lg leading-relaxed mb-10 max-w-md mx-auto text-center">
              No trial. No credit card. No per-bed pricing. No per-property pricing. PGKhata is free for PG owners.
            </p>
            <a
              href={BRAND.registerUrl}
              id="pricing-cta"
              className="inline-flex items-center px-8 py-3.5 bg-[#154212] text-white text-sm font-semibold rounded-full hover:bg-[#2d5a27] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d5a27] focus-visible:ring-offset-2"
            >
              Start for free
            </a>
          </div>
        </section>

        {/* What's included */}
        <section className="section-gap border-t border-[rgba(24,24,27,0.06)]" aria-labelledby="included-heading">
          <div className="container-pg max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 id="included-heading" className="heading-serif text-headline text-[#1a1c1c] mb-4">
                What is included?
              </h2>
              <p className="text-[#42493e] text-base">Everything. All features. No limits.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Multi-property management",
                "Floor to Room to Bed hierarchy",
                "Tenant management and KYC",
                "Automatic bill generation",
                "Line-item billing",
                "WhatsApp bill notifications",
                "Payment tracking and ledger",
                "Expense management",
                "Staff accounts and permissions",
                "Reports and CSV export",
                "Security deposit tracking",
                "Invoice voiding",
                "Approval workflow",
                "Data export workflows",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 rounded-xl border border-[rgba(24,24,27,0.08)] bg-white">
                  <span className="w-4 h-4 rounded-full bg-[#154212] flex items-center justify-center shrink-0">
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                      <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-sm text-[#1a1c1c]">{item}</span>
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
