import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { BRAND } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About | PGKhata',
  description: 'PGKhata is built to make running a PG simpler. Free and designed for Indian PG owners.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="page-hero" aria-labelledby="about-heading">
          <div className="container-pg max-w-3xl mx-auto">
            <h1 id="about-heading" className="display-serif text-display text-[#1a1c1c] mb-8">
              Built to make<br />running a PG simpler.
            </h1>
            <p className="text-[#42493e] text-lg leading-relaxed max-w-xl mx-auto">
              PGKhata started from a simple observation: most PG owners in India manage their entire business through WhatsApp messages, handwritten notebooks, Excel sheets and memory. That is not a system. It is a source of constant stress.
            </p>
          </div>
        </section>

        {/* Problem */}
        <section className="section-gap border-t border-[rgba(24,24,27,0.06)]" aria-labelledby="problem-about-heading">
          <div className="container-pg max-w-3xl mx-auto">
            <h2 id="problem-about-heading" className="heading-serif text-headline text-[#1a1c1c] mb-8">
              The problem.
            </h2>
            <div className="flex flex-col gap-6 text-[#42493e] text-base leading-relaxed">
              <p>
                A PG owner managing 20 to 50 beds deals with monthly billing for every tenant, electricity meter readings, maintenance charges, security deposit tracking, tenant turnover, document collection and overdue follow-ups. All of this, every month, often alone.
              </p>
              <p>
                The available software was either too expensive, too complex, or designed for large property companies rather than independent PG operators. There was nothing built specifically for how Indian PG owners actually work.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="section-gap bg-white border-y border-[rgba(24,24,27,0.06)]" aria-labelledby="philosophy-heading">
          <div className="container-pg max-w-3xl mx-auto">
            <h2 id="philosophy-heading" className="heading-serif text-headline text-[#1a1c1c] mb-10">
              Our philosophy.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Simple",
                  description: "PGKhata should be usable without training. If a feature requires an explanation, it needs to be simpler.",
                },
                {
                  title: "Free",
                  description: "PGKhata is free for PG owners. No per-bed charges, no monthly subscription and no hidden fees.",
                },
                {
                  title: "Practical",
                  description: "Every workflow starts with the real monthly work PG owners already do, then removes the repetition.",
                },
                {
                  title: "Owner-first",
                  description: "Every feature is designed from the perspective of the PG owner. Not the tenant, not the investor and not the enterprise.",
                },
              ].map((p) => (
                <div key={p.title} className="p-6 rounded-2xl border border-[rgba(24,24,27,0.08)] bg-[#faf9f8]">
                  <h3 className="font-semibold text-[#1a1c1c] text-sm mb-2">{p.title}</h3>
                  <p className="text-[#72796e] text-xs leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What PGKhata is */}
        <section className="section-gap" aria-labelledby="what-heading">
          <div className="container-pg max-w-3xl mx-auto">
            <h2 id="what-heading" className="heading-serif text-headline text-[#1a1c1c] mb-8">
              What PGKhata is.
            </h2>
            <div className="flex flex-col gap-5 text-[#42493e] text-base leading-relaxed">
              <p>
                PGKhata is a web-based PG management platform built specifically for Indian PG owners and hostel operators. It covers property management, tenant management, billing, payments, expenses, staff access and reports.
              </p>
              <p>
                It runs in a web browser, so owners can work from a phone, tablet or laptop without installing another app.
              </p>
              <p>
                PGKhata is free for PG owners.
              </p>
            </div>

            <div className="mt-10 flex gap-4 flex-wrap">
              <Link
                href={BRAND.registerUrl}
                className="px-6 py-3 bg-[#154212] text-white text-sm font-semibold rounded-full hover:bg-[#2d5a27] transition-all duration-200"
              >
                Get started for free
              </Link>
              <Link
                href="/features"
                className="px-6 py-3 text-[#1a1c1c] text-sm font-medium rounded-full border border-[rgba(24,24,27,0.14)] hover:bg-[#f4f3f2] transition-all duration-200"
              >
                See all features
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
