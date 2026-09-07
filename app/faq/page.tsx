import type { Metadata } from 'next';
import FAQClient from './FAQClient';

export const metadata: Metadata = {
  title: 'FAQ | PGKhata',
  description: 'Answers to common questions about PGKhata pricing, features, setup, billing and data exports.',
};

export default function FAQPage() {
  return <FAQClient />;
}
