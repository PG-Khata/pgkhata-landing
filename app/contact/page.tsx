import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact | PGKhata',
  description: 'Get in touch with the PGKhata team by email at hello@pgkhata.com.',
};

export default function ContactPage() {
  return <ContactClient />;
}
