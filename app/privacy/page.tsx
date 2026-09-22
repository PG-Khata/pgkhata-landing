import type { Metadata } from 'next';
import Link from 'next/link';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';

export const metadata: Metadata = {
  title: 'Privacy Policy | PGKhata',
  description: 'How PGKhata collects, uses, protects, and deletes information.',
};

const updatedOn = '22 September 2026';

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="page-hero">
          <div className="container-pg mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#154212]">PGKhata legal</p>
            <h1 className="heading-serif mt-4 text-4xl text-[#1a1c1c] sm:text-5xl">Privacy Policy</h1>
            <p className="mt-5 text-sm text-[#72796e]">Last updated: {updatedOn}</p>
          </div>
        </section>

        <section className="pb-20 md:pb-28">
          <article className="container-pg mx-auto max-w-3xl space-y-9 text-[15px] leading-7 text-[#42493e]">
            <PolicySection title="1. Who we are">
              PGKhata is a property and paying-guest management service for property owners. This policy explains how we handle information when you use the PGKhata Android app, web app, and related services.
            </PolicySection>

            <PolicySection title="2. Information we collect">
              <p>We collect information needed to provide PGKhata, including:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Account details, such as your name, email address, phone number, and sign-in credentials.</li>
                <li>If you choose &quot;Continue with Google&quot;, we receive only your name, email address, and profile photo from Google to create and sign in to your account. We do not receive your Google password.</li>
                <li>Property, room, tenant, booking, complaint, billing, payment, deposit, and expense records you enter.</li>
                <li>Documents and images you choose to upload for property or tenant management.</li>
                <li>Device and app identifiers used to deliver push notifications, including Firebase Cloud Messaging tokens.</li>
                <li>Limited diagnostics and usage information provided by Firebase services to help us operate and improve the app.</li>
              </ul>
            </PolicySection>

            <PolicySection title="3. How we use information">
              <ul className="list-disc space-y-2 pl-5">
                <li>Provide, secure, and maintain your PGKhata account and property-management features.</li>
                <li>Generate bills, reports, records, and exports requested by you.</li>
                <li>Deliver service notifications, including complaint, tenant, and billing alerts.</li>
                <li>Respond to support requests, investigate errors, and prevent fraud or misuse.</li>
                <li>Comply with applicable legal, accounting, tax, and record-retention obligations.</li>
              </ul>
            </PolicySection>

            <PolicySection title="4. Sharing and service providers">
              We do not sell personal information. We use trusted infrastructure providers to operate the service, such as hosting, database, file-storage, analytics, and push-notification providers. They process information only to provide their services to PGKhata and under their applicable terms and safeguards. We may disclose information where required by law or to protect users, our services, or the public.
            </PolicySection>

            <PolicySection title="5. Security and retention">
              We use reasonable administrative, technical, and organisational safeguards, including encrypted transport for production services. No method of transmission or storage is completely secure. We retain information while your account is active and for a limited period afterwards when needed for legitimate business, legal, accounting, fraud-prevention, or dispute-resolution purposes.
            </PolicySection>

            <PolicySection title="6. Your choices and account deletion">
              <p>You can update certain account details in PGKhata. You may request deletion of your PGKhata account and associated personal information through our public account-deletion process. Property and financial records may be retained only where legally required or needed to resolve an active dispute.</p>
              <Link className="mt-4 inline-flex font-semibold text-[#154212] underline underline-offset-4" href="/account-deletion">
                Request account deletion
              </Link>
            </PolicySection>

            <PolicySection title="7. Children">
              PGKhata is intended for adult property owners and is not directed to children. Do not provide a child&apos;s personal information unless you are authorised to manage it and it is necessary for a legitimate tenancy record.
            </PolicySection>

            <PolicySection title="8. Changes and contact">
              We may update this policy as our service or legal requirements change. For privacy questions, contact <a className="font-medium text-[#154212] underline underline-offset-4" href="mailto:hello@pgkhata.com">hello@pgkhata.com</a>.
            </PolicySection>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}

function PolicySection({ title, children }: Readonly<{ title: string; children: React.ReactNode }>) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-[#1a1c1c]">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}
