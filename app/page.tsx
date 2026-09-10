import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { HomeHero } from '@/components/home/home-hero';
import {
  CapabilityLedger,
  CoreLoop,
  FreeForever,
  OwnerReality,
  TrustLedger,
} from '@/components/home/home-sections';
import { Faq } from '@/components/faq';
import { Footer } from '@/components/footer';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'PGKhata',
  url: 'https://pgkhata.com',
  description:
    'Free PG management software for Indian PG owners to manage tenants, billing, payments, expenses and properties.',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'INR',
  },
};

export const metadata: Metadata = {
  title: 'PGKhata | Rent Collection Without the Chaos',
  description:
    'PGKhata is free PG management software for Indian PG owners. Manage tenants, generate itemized bills, send via WhatsApp and track payments.',
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main-content">
        <HomeHero />
        <OwnerReality />
        <CoreLoop />
        <CapabilityLedger />
        <FreeForever />
        <TrustLedger />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
