import Link from 'next/link';
import {
  ArrowRight,
  Check,
  Database,
  Download,
  FileCheck2,
  LockKeyhole,
} from 'lucide-react';
import { BRAND } from '@/lib/constants';

const CAPABILITY_GROUPS = [
  {
    title: 'Properties & tenants',
    items: ['Multiple properties', 'Floor → room → bed hierarchy', 'Tenant approvals and KYC', 'Bookings, transfers and checkout'],
  },
  {
    title: 'Billing & payments',
    items: ['Itemized recurring bills', 'Custom charges and rent plans', 'Late fees and promised dates', 'Deposits, advances and allocation'],
  },
  {
    title: 'Control & reporting',
    items: ['Expenses and approvals', 'Outstanding aging', 'Income and expense reporting', 'CSV and Excel workflows'],
  },
] as const;

export function OwnerReality() {
  return (
    <section className="section-gap" aria-labelledby="owner-reality-heading">
      <div className="container-pg grid gap-14 lg:grid-cols-[1.05fr_.95fr] lg:items-start lg:gap-24">
        <div className="max-w-2xl">
          <h2 id="owner-reality-heading" className="heading-serif text-headline text-[#1a1c1c]">
            The work was never just collecting rent.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#42493e] sm:text-lg">
            It was remembering who moved rooms, checking electricity, rewriting
            the same reminder, finding a payment screenshot and updating a
            notebook after midnight.
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#42493e]">
            PGKhata turns that scattered monthly ritual into one record you can
            actually follow.
          </p>
        </div>

        <div className="border-y border-[rgba(24,24,27,0.12)]">
          {[
            ['Before', 'Names in one register. Documents in a gallery. Payments in chat.'],
            ['With PGKhata', 'The tenant, bill, delivery and payment stay connected.'],
            ['What changes', 'You see the next action instead of reconstructing the past.'],
          ].map(([label, text], index) => (
            <div key={label} className={`grid gap-2 py-6 sm:grid-cols-[120px_1fr] sm:gap-8 ${index < 2 ? 'border-b border-[rgba(24,24,27,0.08)]' : ''}`}>
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#154212]">{label}</p>
              <p className="text-sm leading-relaxed text-[#42493e]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CoreLoop() {
  const steps = [
    ['Add the tenant', 'Record the person, assign the bed and keep the history in one place.'],
    ['Build one clear bill', 'Rent, electricity and custom charges stay itemized and easy to verify.'],
    ['Send it on WhatsApp', 'The bill reaches the app tenants already check every day.'],
    ['Track what happened', 'Paid, pending and overdue remain visible without reconstructing chat threads.'],
  ] as const;

  return (
    <section id="how-it-works" className="section-gap border-y border-[rgba(24,24,27,0.08)] bg-white" aria-labelledby="core-loop-heading">
      <div className="container-pg">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <h2 id="core-loop-heading" className="heading-serif max-w-2xl text-headline text-[#1a1c1c]">
            One loop, finished before the follow-ups begin.
          </h2>
          <Link href="/how-it-works" className="inline-flex items-center gap-2 text-sm font-semibold text-[#154212] hover:underline hover:underline-offset-4">
            See the workflow in detail
            <ArrowRight aria-hidden="true" size={15} />
          </Link>
        </div>

        <ol className="mt-14 grid border-y border-[rgba(24,24,27,0.12)] md:grid-cols-4 md:divide-x md:divide-[rgba(24,24,27,0.08)]">
          {steps.map(([title, text], index) => (
            <li key={title} className="border-b border-[rgba(24,24,27,0.08)] py-7 last:border-b-0 md:border-b-0 md:px-7 md:first:pl-0 md:last:pr-0">
              <div className="flex items-center justify-between">
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#154212] text-xs font-bold text-white">{index + 1}</span>
                {index < steps.length - 1 && <ArrowRight aria-hidden="true" className="hidden text-[#c2c9bb] md:block" size={16} />}
              </div>
              <h3 className="mt-8 text-base font-semibold text-[#1a1c1c]">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#72796e]">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function CapabilityLedger() {
  return (
    <section className="section-gap" aria-labelledby="capabilities-heading">
      <div className="container-pg">
        <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
          <div>
            <h2 id="capabilities-heading" className="heading-serif text-headline text-[#1a1c1c]">
              The bill is the beginning. The record keeps going.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-[#42493e]">
              PGKhata covers the operating details around the monthly loop—without forcing a small PG into enterprise software.
            </p>
            <Link href="/features" className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full border border-[rgba(24,24,27,0.16)] px-5 py-2.5 text-sm font-semibold text-[#154212] transition-colors hover:bg-white">
              Explore every feature
              <ArrowRight aria-hidden="true" size={15} />
            </Link>
          </div>

          <div className="grid border-t border-[rgba(24,24,27,0.12)] md:grid-cols-3 md:divide-x md:divide-[rgba(24,24,27,0.08)]">
            {CAPABILITY_GROUPS.map((group) => (
              <div key={group.title} className="border-b border-[rgba(24,24,27,0.12)] py-7 md:px-7 md:first:pl-0 md:last:pr-0">
                <h3 className="text-sm font-semibold text-[#1a1c1c]">{group.title}</h3>
                <ul className="mt-6 space-y-4">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-[#42493e]">
                      <Check aria-hidden="true" className="mt-0.5 shrink-0 text-[#154212]" size={14} strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FreeForever() {
  return (
    <section id="pricing" className="bg-[#2f3130] text-white" aria-labelledby="free-heading">
      <div className="container-pg grid min-h-[520px] items-stretch lg:grid-cols-[.9fr_1.1fr]">
        <div className="flex flex-col justify-center border-b border-white/10 py-16 lg:border-r lg:border-b-0 lg:py-24 lg:pr-16">
          <p className="heading-serif text-[clamp(4.75rem,10vw,9rem)] leading-none text-white">₹0</p>
          <h2 id="free-heading" className="heading-serif mt-2 text-[clamp(2rem,4vw,3.5rem)] text-white/90">Free for PG owners. Forever.</h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-[#d9dfd5]">
            No trial countdown, per-bed charge, property limit or paid tier. The useful product is the free product.
          </p>
          <a href={BRAND.registerUrl} className="mt-8 inline-flex min-h-12 w-fit items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#154212] transition-colors hover:bg-[#eef8ea] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2f3130]">
            Start managing your PG
            <ArrowRight aria-hidden="true" size={16} />
          </a>
        </div>

        <div className="flex flex-col justify-center py-16 lg:py-24 lg:pl-16">
          <dl className="divide-y divide-white/10 border-y border-white/10">
            {[
              ['Software subscription', '₹0'],
              ['Per-bed fee', '₹0'],
              ['Per-property fee', '₹0'],
              ['Data export', 'Included'],
              ['Setup fee', '₹0'],
            ].map(([label, value]) => (
              <div key={label} className="flex items-center justify-between gap-6 py-5">
                <dt className="text-sm text-[#d9dfd5]">{label}</dt>
                <dd className="text-sm font-semibold text-white">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export function TrustLedger() {
  const proofs = [
    { icon: LockKeyhole, title: 'Owner-scoped access', text: 'Workspace isolation and role-based permissions keep each property’s records in the right hands.' },
    { icon: Database, title: 'Structured records', text: 'Tenant, billing, occupancy and expense data stay connected instead of scattered.' },
    { icon: Download, title: 'Your records leave with you', text: 'Export tenant, occupancy, expense and deposit data when you need it.' },
  ] as const;

  return (
    <section className="section-gap border-b border-[rgba(24,24,27,0.08)] bg-white" aria-labelledby="trust-heading">
      <div className="container-pg">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <div>
            <h2 id="trust-heading" className="heading-serif text-headline text-[#1a1c1c]">A financial record should be easy to trust—and easy to take with you.</h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#42493e]">
              Security, ownership and auditability are part of the product, not a premium add-on.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/security" className="inline-flex min-h-11 items-center rounded-full bg-[#154212] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#2d5a27]">Read about security</Link>
            </div>
          </div>

          <div className="border-t border-[rgba(24,24,27,0.12)]">
            {proofs.map(({ icon: Icon, title, text }) => (
              <div key={title} className="grid grid-cols-[auto_1fr] gap-5 border-b border-[rgba(24,24,27,0.1)] py-7 sm:grid-cols-[48px_180px_1fr] sm:items-start">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef8ea] text-[#154212]">
                  <Icon aria-hidden="true" size={18} strokeWidth={1.8} />
                </span>
                <h3 className="pt-2 text-sm font-semibold text-[#1a1c1c]">{title}</h3>
                <p className="col-start-2 text-sm leading-relaxed text-[#72796e] sm:col-start-auto sm:pt-2">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 border-t border-[#154212] pt-12 text-center">
          <FileCheck2 aria-hidden="true" className="mx-auto text-[#154212]" size={28} strokeWidth={1.6} />
          <h2 className="heading-serif mx-auto mt-6 max-w-3xl text-headline text-[#1a1c1c]">Stop rebuilding the month from memory.</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#42493e]">Put the tenant, bill, message and payment in one place. The software costs nothing.</p>
          <a href={BRAND.registerUrl} className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#154212] px-8 py-3 text-sm font-semibold text-white hover:bg-[#2d5a27]">
            Start for free
            <ArrowRight aria-hidden="true" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
