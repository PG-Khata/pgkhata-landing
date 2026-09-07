import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { WorkflowAnimation } from './WorkflowAnimation';

export const metadata: Metadata = {
  title: 'How It Works | PGKhata',
  description: 'From adding a tenant to tracking payment. One simple flow: Add Tenant, Generate Bill, Send via WhatsApp, Track Payment.',
};

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="page-hero text-center" aria-labelledby="hiw-page-heading">
          <div className="container-pg max-w-3xl mx-auto">
            <h1 id="hiw-page-heading" className="display-serif text-display text-[#1a1c1c] mb-6">
              From tenant to payment.<br />
              One simple flow.
            </h1>
            <p className="text-[#42493e] text-lg leading-relaxed max-w-lg mx-auto text-center">
              A seamless, automated sequence that replaces spreadsheets and notebooks with clarity and control.
            </p>
          </div>
        </section>

        {/* Main animation */}
        <section className="pb-16 md:pb-24" aria-label="Workflow demonstration">
          <div className="container-pg">
            <WorkflowAnimation />
          </div>
        </section>

        {/* Tagline */}
        <section className="section-gap border-t border-[rgba(24,24,27,0.06)] text-center" aria-label="Workflow summary">
          <div className="container-pg max-w-2xl mx-auto">
            <p className="display-serif text-subhead text-[#1a1c1c] mb-16">
              Add. Bill. WhatsApp. Done.
            </p>

            {/* Detailed steps */}
            <div className="flex flex-col gap-0 text-left">
              {[
                {
                  number: "01",
                  title: "Add your tenants",
                  description: "Add tenant name, phone, room assignment, rent plan and KYC documents. The tenant is in the system in under two minutes.",
                },
                {
                  number: "02",
                  title: "Bills are generated automatically",
                  description: "PGKhata prepares monthly bills with rent, electricity and all configured charges. Every line item is correct, every month.",
                },
                {
                  number: "03",
                  title: "Bills go out via WhatsApp",
                  description: "The itemized bill is sent directly to the tenant via WhatsApp. No manual message required from you.",
                },
                {
                  number: "04",
                  title: "Track every payment",
                  description: "See who has paid, who is pending and who is overdue. Your dashboard is always up to date.",
                },
              ].map((s, idx) => (
                <div
                  key={s.number}
                  className={`flex gap-8 py-10 ${idx < 3 ? 'border-b border-[rgba(24,24,27,0.06)]' : ''}`}
                >
                  <span className="text-xs font-semibold text-[#72796e] shrink-0 mt-1 w-6">{s.number}</span>
                  <div>
                    <h2 className="font-semibold text-[#1a1c1c] text-base mb-2">{s.title}</h2>
                    <p className="text-[#42493e] text-sm leading-relaxed">{s.description}</p>
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
