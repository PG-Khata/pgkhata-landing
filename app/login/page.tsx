import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { BRAND } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Log in | PGKhata',
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  redirect(BRAND.loginUrl);
}
