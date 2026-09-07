import type { Metadata } from 'next';
import FeaturesClient from './FeaturesClient';

export const metadata: Metadata = {
  title: 'Features | PGKhata',
  description: 'Explore all PGKhata features: multi-property management, bed tracking, tenant management, billing, payments, expenses, staff and more.',
};

export default function FeaturesPage() {
  return <FeaturesClient />;
}
