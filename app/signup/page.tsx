import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { BRAND } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Register | PGKhata',
  robots: { index: false, follow: false },
};

export default function SignupPage() {
  redirect(BRAND.registerUrl);
}
