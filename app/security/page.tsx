import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { SECURITY_FEATURES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Security | PGKhata',
  description: 'PGKhata is built with security in mind. Secure auth, owner-scoped data, role-based permissions, encrypted storage and audit logging.',
};

const ICONS: Record<string, React.ReactNode> = {
  "Secure auth": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#154212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  ),
  "Owner-scoped data": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#154212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  "Role-based permissions": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#154212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  "Encrypted storage": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#154212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><circle cx="12" cy="16" r="1"/>
    </svg>
  ),
  "Rate limiting": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#154212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  "Audit logging": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#154212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0"/><path d="M12 8v4l3 3"/>
    </svg>
  ),
};

export default function SecurityPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero - matches Stitch */}
        <section className="page-hero text-center" aria-labelledby="security-page-heading">
          <div className="container-pg max-w-3xl mx-auto">
            <p id="security-page-heading" className="text-sm font-medium text-[#1a1c1c] mb-6">
              Built with security in mind.
            </p>
            <p className="text-[#42493e] text-base md:text-lg leading-relaxed max-w-xl mx-auto text-center">
              We treat your data with the highest level of care. From encrypted storage to owner-scoped access, every layer of PGKhata is designed to keep your business operations safe and private.
            </p>
          </div>
        </section>

        {/* Security grid - matches Stitch layout */}
        <section className="pb-24 md:pb-32" aria-label="Security features">
          <div className="container-pg max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SECURITY_FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="p-6 rounded-2xl border border-[rgba(24,24,27,0.08)] bg-[#faf9f8]"
                >
                  <div className="w-9 h-9 rounded-xl bg-white border border-[rgba(24,24,27,0.08)] flex items-center justify-center mb-4">
                    {ICONS[f.title]}
                  </div>
                  <h2 className="font-semibold text-[#1a1c1c] text-sm mb-2">{f.title}</h2>
                  <p className="text-[#72796e] text-xs leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>

            {/* Additional security items */}
            <div className="mt-4 grid grid-cols-1 gap-4">
              {[
                {
                  title: "Input validation",
                  description: "All user inputs are rigorously validated on both client and server sides to prevent injection attacks and data corruption.",
                },
                {
                  title: "Signed URLs",
                  description: "Document and file access is controlled through time-limited signed URLs, preventing unauthorized direct access to stored files.",
                },
                {
                  title: "Webhook verification",
                  description: "All incoming webhooks are verified using cryptographic signatures to ensure they originate from trusted sources.",
                },
              ].map((f) => (
                <div key={f.title} className="p-6 rounded-2xl border border-[rgba(24,24,27,0.08)] bg-white">
                  <h2 className="font-semibold text-[#1a1c1c] text-sm mb-2">{f.title}</h2>
                  <p className="text-[#72796e] text-xs leading-relaxed">{f.description}</p>
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
