import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { BRAND, FOOTER_LINKS } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-[#faf9f8]" role="contentinfo" aria-label="Site footer">
      <div className="container-pg py-14 sm:py-20">
        <div className="grid gap-12 border-b border-[rgba(24,24,27,0.1)] pb-14 lg:grid-cols-[1.35fr_2fr] lg:gap-24">
          <div>
            <Link
              href="/"
              className="heading-serif inline-flex rounded-md text-3xl text-[#154212] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d5a27]"
              aria-label="PGKhata home"
            >
              PGKhata
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#42493e]">
              The free operating ledger for PG owners in India—tenants, bills,
              payments and properties in one place.
            </p>
            <a
              href={BRAND.appUrl}
              className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#154212] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#2d5a27]"
            >
              Open PGKhata
              <ArrowUpRight aria-hidden="true" size={15} />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
            {FOOTER_LINKS.map((column) => (
              <div key={column.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#1a1c1c]">{column.title}</p>
                <ul className="mt-5 space-y-3" role="list">
                  {column.links.map((link) => {
                    const external = link.href.startsWith('http');
                    return (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="inline-flex items-center gap-1 text-sm text-[#72796e] transition-colors hover:text-[#154212]"
                        >
                          {link.label}
                          {external && <ArrowUpRight aria-hidden="true" size={12} />}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-6 text-xs text-[#72796e] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          <p>Made for PG owners in India.</p>
        </div>
      </div>
    </footer>
  );
}
