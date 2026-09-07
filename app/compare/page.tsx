import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { COMPARISON_ROWS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Compare | PGKhata',
  description: 'Compare PGKhata against RentOk, PG Master, My PG Manager, BTRoomer and others across pricing and practical PG workflows.',
};

const COMPETITORS = ['PGKhata', 'RentOk', 'PG Master', 'My PG Mgr', 'BTRoomer', 'PG Manager', 'Niketan'] as const;
const COMPETITOR_KEYS: (keyof (typeof COMPARISON_ROWS)[0])[] = [
  'pgkhata', 'rentok', 'pgmaster', 'mypgmanager', 'btroomer', 'pgmanager', 'niketan'
];

function Check({ yes, isPgkhata }: { yes: boolean; isPgkhata?: boolean }) {
  if (yes) {
    return (
      <span aria-label="Yes">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          stroke={isPgkhata ? '#154212' : '#9ca3af'}
        >
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </span>
    );
  }
  return (
    <span aria-label="No">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        stroke={isPgkhata ? '#dc2626' : '#e5e7eb'}
      >
        <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </span>
  );
}

export default function ComparePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="page-hero text-center" aria-labelledby="compare-heading">
          <div className="container-pg max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#72796e] mb-6">
              Competitive Analysis
            </p>
            <h1 id="compare-heading" className="display-serif text-display text-[#1a1c1c] mb-6">
              Why pay for software<br />that does less?
            </h1>
            <p className="text-[#42493e] text-lg leading-relaxed max-w-xl mx-auto text-center">
              Evaluate PGKhata against legacy alternatives across billing, tenant operations, reporting and zero recurring fees.
            </p>
          </div>
        </section>

        {/* Table */}
        <section className="pb-24 md:pb-32" aria-label="Feature comparison table">
          <div className="container-pg">
            <div className="comparison-scroll overflow-x-auto rounded-2xl border border-[rgba(24,24,27,0.08)]" tabIndex={0} aria-label="Scrollable feature comparison table">
              <table className="compare-table min-w-[840px]" role="table">
                <thead>
                  <tr>
                    <th className="text-left py-4 px-4 text-[#1a1c1c]">Feature</th>
                    {COMPETITORS.map((c, idx) => (
                      <th key={c} className={idx === 0 ? 'col-pgkhata font-bold text-[#154212]' : ''}>
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row, idx) => (
                    <tr key={row.feature} className={idx % 2 === 0 ? 'bg-[rgba(0,0,0,0.01)]' : ''}>
                      <td className="font-medium text-[#1a1c1c]">{row.feature}</td>
                      {COMPETITOR_KEYS.map((key, kidx) => {
                        const val = row[key];
                        return (
                          <td key={key} className={kidx === 0 ? 'col-pgkhata' : ''}>
                            <div className="flex justify-center">
                              {typeof val === 'boolean' ? (
                                <Check yes={val} isPgkhata={kidx === 0} />
                              ) : (
                                <span className="text-xs">{val}</span>
                              )}
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#72796e] mt-4 text-center">
              Comparison based on publicly available information. Accurate to the best of our knowledge.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
