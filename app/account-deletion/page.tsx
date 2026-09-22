import type { Metadata } from 'next';
import Link from 'next/link';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';

export const metadata: Metadata = {
  title: 'Delete your PGKhata account',
  description: 'Request deletion of your PGKhata account and associated information.',
};

const deletionEmail = 'hello@pgkhata.com';
const subject = 'PGKhata account deletion request';

export default function AccountDeletionPage() {
  const mailto = `mailto:${deletionEmail}?subject=${encodeURIComponent(subject)}`;

  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="page-hero">
          <div className="container-pg mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#154212]">PGKhata legal</p>
            <h1 className="heading-serif mt-4 text-4xl text-[#1a1c1c] sm:text-5xl">Request account deletion</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#42493e]">You can request deletion of your PGKhata account and its associated personal information at any time. We verify requests before deleting data to protect account owners and tenants.</p>
          </div>
        </section>

        <section className="pb-20 md:pb-28">
          <div className="container-pg mx-auto max-w-3xl space-y-8 text-[15px] leading-7 text-[#42493e]">
            <section className="rounded-2xl border border-[rgba(24,24,27,0.1)] bg-white p-6 shadow-[0_12px_32px_rgba(24,24,27,0.05)] sm:p-8">
              <h2 className="text-xl font-semibold text-[#1a1c1c]">How to request deletion</h2>
              <ol className="mt-4 list-decimal space-y-2 pl-5">
                <li>Send the request from the email address registered with your PGKhata account.</li>
                <li>Use the subject line “{subject}”.</li>
                <li>Include your registered email address and the name of the property or PG you manage.</li>
                <li>We may ask for additional verification before processing the request.</li>
              </ol>
              <a className="mt-6 inline-flex min-h-11 items-center rounded-full bg-[#154212] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#2d5a27]" href={mailto}>
                Email deletion request
              </a>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1a1c1c]">What happens after verification</h2>
              <div className="mt-3 space-y-4">
                <p>We will disable your account and begin deletion of account-profile information, authentication sessions, push-notification registrations, and data that is no longer required to provide the service.</p>
                <p>Some property, tenant, billing, payment, and audit records may be retained for a limited period where required by applicable law, accounting obligations, fraud prevention, backups, or dispute resolution. Retained information is restricted and is not used for marketing.</p>
                <p>We aim to acknowledge requests within 7 days and complete verified deletion requests within 30 days, unless a longer retention period is legally required.</p>
              </div>
            </section>

            <p className="border-t border-[rgba(24,24,27,0.1)] pt-6 text-sm text-[#72796e]">
              For general privacy information, read the <Link className="font-medium text-[#154212] underline underline-offset-4" href="/privacy">PGKhata Privacy Policy</Link>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
