import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { BRAND } from '@/lib/constants';
import { CollectionFlow } from './collection-flow';

export function HomeHero() {
  return (
    <section className="overflow-hidden border-b border-[rgba(24,24,27,0.08)] bg-[#faf9f8] pt-16 sm:pt-20">
      <div className="container-pg">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <h1 className="display-serif text-display max-w-6xl text-[#1a1c1c]">
            Rent collection, without the chaos.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#42493e] sm:text-lg">
            Add a tenant, create one clear bill, send it on WhatsApp and know
            what is paid—all without asking tenants to install another app.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href={BRAND.registerUrl}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#154212] px-8 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#2d5a27] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d5a27] focus-visible:ring-offset-2"
            >
              Start for free
              <ArrowRight aria-hidden="true" size={16} />
            </a>
            <Link
              href="/how-it-works"
              className="inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-[#42493e] underline decoration-[#c2c9bb] underline-offset-4 transition-colors hover:text-[#154212]"
            >
              See the four-step flow
            </Link>
          </div>

          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#42493e]" aria-label="Signup details">
            {['Free forever', 'No credit card', 'No tenant app'].map((item) => (
              <li key={item} className="flex items-center gap-1.5">
                <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[rgba(21,66,18,0.28)] text-[#154212]">
                  <Check aria-hidden="true" size={10} strokeWidth={2.5} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 w-full max-w-[1440px] px-3 sm:px-6 lg:mt-16">
        <CollectionFlow />
      </div>

      <div className="mt-14 border-t border-[#154212] bg-white sm:mt-20">
        <div className="container-pg grid divide-y divide-[rgba(24,24,27,0.08)] md:grid-cols-[1.2fr_1fr_1fr_1fr] md:divide-x md:divide-y-0">
          <div className="py-8 md:pr-10">
            <p className="heading-serif text-[clamp(2.25rem,4vw,3.5rem)] text-[#154212]">₹0 forever.</p>
            <p className="mt-2 text-sm text-[#42493e]">No paid tier hiding the useful parts.</p>
          </div>
          {[
            ['No tenant app', 'Bills reach the tool tenants already use.'],
            ['Built for the web', 'Run it from a phone, tablet or laptop.'],
            ['Your data, yours', 'Export your records whenever you need them.'],
          ].map(([title, text]) => (
            <div key={title} className="py-8 md:px-8">
              <p className="font-semibold text-[#1a1c1c]">{title}</p>
              <p className="mt-2 text-sm leading-relaxed text-[#72796e]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
