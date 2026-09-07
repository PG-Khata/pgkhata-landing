import { ArrowRight, Mail } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { BRAND } from '@/lib/constants';

const SUPPORT_TOPICS = [
  'Setting up properties, rooms and beds',
  'Tenant onboarding and KYC records',
  'Bills, payments and WhatsApp delivery',
  'Feedback or product questions',
] as const;

export default function ContactClient() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="page-hero" aria-labelledby="contact-heading">
          <div className="container-pg mx-auto grid max-w-5xl gap-14 lg:grid-cols-[1fr_.85fr] lg:items-start lg:gap-24">
            <div>
              <h1 id="contact-heading" className="display-serif text-display text-[#1a1c1c]">
                Let&apos;s talk.
              </h1>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-[#42493e] sm:text-lg">
                Have a question about PGKhata or need help with a workflow? Send us an email and include enough detail for us to help.
              </p>
              <a
                href={`mailto:${BRAND.email}`}
                className="mt-9 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#154212] px-7 text-sm font-semibold text-white transition-colors hover:bg-[#2d5a27] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d5a27] focus-visible:ring-offset-2"
              >
                <Mail aria-hidden="true" size={17} />
                Email {BRAND.email}
                <ArrowRight aria-hidden="true" size={16} />
              </a>
              <p className="mt-4 text-sm text-[#72796e]">
                This opens your email app. There is no web form or automatic submission.
              </p>
            </div>

            <aside className="border-y border-[rgba(24,24,27,0.12)] py-7" aria-labelledby="support-topics-heading">
              <h2 id="support-topics-heading" className="heading-serif text-2xl text-[#1a1c1c]">
                What we can help with
              </h2>
              <ul className="mt-6 divide-y divide-[rgba(24,24,27,0.08)]" role="list">
                {SUPPORT_TOPICS.map((topic) => (
                  <li key={topic} className="flex items-start gap-3 py-4 text-sm leading-relaxed text-[#42493e]">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#154212]" />
                    {topic}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
