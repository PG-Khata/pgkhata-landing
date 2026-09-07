import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { BRAND } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Product | PGKhata',
  description: 'One place to run your PG. Properties, tenants, billing, payments, expenses, staff, communication and reports.',
};

function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="browser-frame">
      <div className="browser-toolbar">
        <div className="browser-dot" />
        <div className="browser-dot" />
        <div className="browser-dot" />
      </div>
      {children}
    </div>
  );
}

export default function ProductPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="page-hero text-center" aria-labelledby="product-hero-heading">
          <div className="container-pg max-w-3xl mx-auto">
            <h1 id="product-hero-heading" className="display-serif text-display text-[#1a1c1c] mb-6">
              One place to run your PG.
            </h1>
            <p className="text-[#42493e] text-lg leading-relaxed mb-10 max-w-xl mx-auto text-center">
              Stop switching between spreadsheets, WhatsApp and notebooks. Bring every property, tenant and transaction into a single, beautifully organized space.
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Link href={BRAND.registerUrl} className="px-6 py-3 bg-[#154212] text-white text-sm font-semibold rounded-full hover:bg-[#2d5a27] transition-all duration-200">
                Start for free
              </Link>
              <Link href="/features" className="px-6 py-3 text-[#1a1c1c] text-sm font-medium rounded-full border border-[rgba(24,24,27,0.14)] hover:bg-[#f4f3f2] transition-all duration-200">
                See all features
              </Link>
            </div>
          </div>
        </section>

        {/* Dashboard overview */}
        <section className="pb-24" aria-label="Dashboard overview">
          <div className="container-pg">
            <BrowserFrame>
              <div className="bg-[#f4f3f2] p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                  {[
                    { label: "Total Properties", value: "24" },
                    { label: "Occupied Units", value: "188 / 200", sub: "94%" },
                    { label: "Monthly Rent Collected", value: "₹12,50,000" },
                    { label: "Pending Dues", value: "₹45,000" },
                  ].map((m) => (
                    <div key={m.label} className="bg-white rounded-xl p-4 border border-[rgba(24,24,27,0.06)]">
                      <p className="text-[10px] text-[#72796e] uppercase tracking-wider mb-1">{m.label}</p>
                      <p className="text-lg font-bold text-[#1a1c1c]">{m.value}</p>
                      {m.sub && <p className="text-xs text-[#154212]">{m.sub}</p>}
                    </div>
                  ))}
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Revenue chart */}
                  <div className="bg-white rounded-xl p-5 border border-[rgba(24,24,27,0.06)]">
                    <p className="text-xs font-semibold text-[#42493e] uppercase tracking-wider mb-4">Revenue &amp; Expenses (Last 6 Months)</p>
                    <div className="flex items-end gap-1.5 h-28">
                      {["Jul","Aug","Sep","Oct","Nov","Dec"].map((m, i) => (
                        <div key={m} className="flex-1 flex flex-col items-center gap-1">
                          <div className="w-full flex gap-0.5 items-end" style={{ height: '90%' }}>
                            <div className="flex-1 rounded-sm bg-[#154212]" style={{ height: `${50 + i * 8}%` }} />
                            <div className="flex-1 rounded-sm bg-[#e9e8e7]" style={{ height: `${30 + i * 3}%` }} />
                          </div>
                          <span className="text-[8px] text-[#72796e]">{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Recent tenancy */}
                  <div className="bg-white rounded-xl p-5 border border-[rgba(24,24,27,0.06)]">
                    <p className="text-xs font-semibold text-[#42493e] uppercase tracking-wider mb-4">Recent Tenancy Activity</p>
                    <div className="flex flex-col gap-2">
                      {[
                        { name: "Anjali Sharma", unit: "G-101", status: "Paid", date: "Sep 15" },
                        { name: "Rohit Verma",   unit: "F-202", status: "Paid", date: "Oct 01" },
                        { name: "Sneha Patel",   unit: "B-303", status: "Overdue", date: "Nov 05" },
                        { name: "Vikram Singh",  unit: "A-102", status: "Paid", date: "Nov 10" },
                      ].map((t) => (
                        <div key={t.name} className="flex items-center justify-between text-xs">
                          <span className="text-[#1a1c1c] font-medium">{t.name}</span>
                          <span className="text-[#72796e]">{t.unit}</span>
                          <span className={t.status === 'Overdue' ? 'badge-overdue' : 'badge-paid'}>{t.status}</span>
                          <span className="text-[#72796e]">{t.date}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </BrowserFrame>
          </div>
        </section>

        {/* Properties */}
        <section className="section-gap border-t border-[rgba(24,24,27,0.06)]" aria-labelledby="properties-heading">
          <div className="container-pg">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#72796e] mb-4">Properties</p>
                <h2 id="properties-heading" className="heading-serif text-subhead text-[#1a1c1c] mb-4">
                  See every floor, room and bed at a glance.
                </h2>
                <p className="text-[#42493e] text-base leading-relaxed">
                  A structural hierarchy that actually makes sense. Map your physical buildings digitally, from the ground floor up to individual bed assignments.
                </p>
              </div>
              <div className="bg-[#f4f3f2] rounded-2xl p-6 border border-[rgba(24,24,27,0.08)]">
                <p className="text-xs font-semibold text-[#42493e] mb-4">Sunrise PG - Floor View</p>
                <div className="flex flex-col gap-2">
                  {["Floor 4 (4 rooms)", "Floor 3 (5 rooms)", "Floor 2 (5 rooms)", "Floor 1 (4 rooms)"].map((f, i) => (
                    <div key={f} className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-white border border-[rgba(24,24,27,0.07)] text-xs">
                      <span className="font-medium text-[#1a1c1c]">{f}</span>
                      <span className="text-[#154212] font-semibold">{[3,4,5,4][i]} occupied</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tenants */}
        <section className="section-gap bg-white border-y border-[rgba(24,24,27,0.06)]" aria-labelledby="tenants-heading">
          <div className="container-pg">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Tenant card mock */}
              <div className="bg-[#f4f3f2] rounded-2xl p-6 border border-[rgba(24,24,27,0.08)]">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full bg-[#e9e8e7] flex items-center justify-center text-sm font-semibold text-[#42493e]">AS</div>
                  <div>
                    <p className="font-semibold text-[#1a1c1c] text-sm">Aisha Sharma</p>
                    <p className="text-xs text-[#72796e]">Room 304, Bed B &middot; Since Jan 2024</p>
                  </div>
                  <span className="ml-auto badge-paid">Active</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Monthly Rent", value: "₹9,200" },
                    { label: "Security Deposit", value: "₹18,400" },
                    { label: "KYC Status", value: "Verified" },
                    { label: "Outstanding", value: "₹0" },
                  ].map((d) => (
                    <div key={d.label} className="bg-white rounded-lg p-3 border border-[rgba(24,24,27,0.06)]">
                      <p className="text-[9px] text-[#72796e] uppercase tracking-wider mb-1">{d.label}</p>
                      <p className="text-xs font-semibold text-[#1a1c1c]">{d.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#72796e] mb-4">Tenants</p>
                <h2 id="tenants-heading" className="heading-serif text-subhead text-[#1a1c1c] mb-4">
                  Keep every tenant record where it belongs.
                </h2>
                <p className="text-[#42493e] text-base leading-relaxed">
                  Centralize KYC documents, rental agreements, emergency contacts and complete financial histories attached directly to the tenant profile.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Billing */}
        <section className="section-gap" aria-labelledby="billing-heading">
          <div className="container-pg">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#72796e] mb-4">Billing</p>
                <h2 id="billing-heading" className="heading-serif text-subhead text-[#1a1c1c] mb-4">
                  Know exactly what every tenant owes.
                </h2>
                <p className="text-[#42493e] text-base leading-relaxed">
                  Auto-generated itemized bills covering rent, electricity, maintenance and any custom charges you define.
                </p>
              </div>
              {/* Invoice mock */}
              <div className="bg-white rounded-2xl p-6 border border-[rgba(24,24,27,0.10)] shadow-sm">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="font-semibold text-[#1a1c1c] text-sm">September Bill</p>
                    <p className="text-xs text-[#72796e]">Rahul Sharma &middot; Room 204</p>
                  </div>
                  <span className="badge-pending">Pending</span>
                </div>
                <div className="flex flex-col gap-2 pb-4 border-b border-[rgba(24,24,27,0.07)]">
                  {[
                    { label: "Rent", amount: "₹7,500" },
                    { label: "Electricity (128 units)", amount: "₹640" },
                    { label: "Maintenance", amount: "₹300" },
                  ].map((line) => (
                    <div key={line.label} className="flex justify-between text-xs">
                      <span className="text-[#42493e]">{line.label}</span>
                      <span className="font-medium text-[#1a1c1c]">{line.amount}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between pt-4 text-sm font-bold text-[#1a1c1c]">
                  <span>Total</span>
                  <span>₹8,440</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Module grid */}
        <section className="section-gap bg-white border-t border-[rgba(24,24,27,0.06)]" aria-labelledby="modules-heading">
          <div className="container-pg">
            <div className="text-center mb-12">
              <h2 id="modules-heading" className="heading-serif text-headline text-[#1a1c1c]">
                Everything included.
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { title: "Properties", desc: "Multi-property, floor-room-bed hierarchy" },
                { title: "Tenants", desc: "KYC, approvals, checkout preview" },
                { title: "Billing", desc: "Auto billing, line items, invoice voiding" },
                { title: "Payments", desc: "Ledger, allocation, aging" },
                { title: "Expenses", desc: "Categories, approval, summaries" },
                { title: "Staff", desc: "Roles, module permissions" },
                { title: "Reports", desc: "Trends, CSV export, P&L" },
                { title: "Data", desc: "Import, export, document management" },
              ].map((m) => (
                <div key={m.title} className="p-5 rounded-2xl border border-[rgba(24,24,27,0.08)] bg-[#faf9f8]">
                  <h3 className="font-semibold text-[#1a1c1c] text-sm mb-1.5">{m.title}</h3>
                  <p className="text-[#72796e] text-xs leading-relaxed">{m.desc}</p>
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
