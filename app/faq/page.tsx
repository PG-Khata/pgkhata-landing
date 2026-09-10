import type { Metadata } from 'next';
import { FAQ_ITEMS } from '@/lib/constants';
import FAQClient from './FAQClient';

export const metadata: Metadata = {
  title: 'FAQ | PGKhata',
  description: 'Answers to common questions about PGKhata pricing, features, setup, billing and data exports.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FAQClient />
    </>
  );
}
