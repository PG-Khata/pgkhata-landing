'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { BRAND, NAV_LINKS } from '@/lib/constants';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(24,24,27,0.08)] bg-[#faf9f8]/95 backdrop-blur-md" role="banner">
      <nav className="container-pg flex min-h-[76px] items-center justify-between gap-5" aria-label="Main navigation">
        <Link
          href="/"
          className="heading-serif shrink-0 rounded-md text-3xl text-[#154212] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d5a27]"
          aria-label="PGKhata home"
          onClick={() => setMobileOpen(false)}
        >
          PGKhata
        </Link>

        <ul className="hidden items-center gap-1 xl:flex" role="list">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`inline-flex min-h-11 items-center rounded-full px-4 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d5a27] ${
                    isActive
                      ? 'bg-[#eef8ea] text-[#154212]'
                      : 'text-[#42493e] hover:bg-white hover:text-[#1a1c1c]'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          <a
            href={BRAND.loginUrl}
            className="inline-flex min-h-11 items-center rounded-full px-4 text-sm font-medium text-[#42493e] transition-colors hover:bg-white hover:text-[#1a1c1c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d5a27]"
          >
            Log in
          </a>
          <a
            href={BRAND.registerUrl}
            className="inline-flex min-h-11 items-center rounded-full bg-[#154212] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#2d5a27] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d5a27] focus-visible:ring-offset-2"
          >
            Start for free
          </a>
        </div>

        <button
          type="button"
          className="flex min-h-11 min-w-11 items-center justify-center rounded-full text-[#42493e] transition-colors hover:bg-white hover:text-[#1a1c1c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d5a27] xl:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>
      </nav>

      {mobileOpen && (
        <div id="mobile-menu" className="border-t border-[rgba(24,24,27,0.08)] bg-[#faf9f8] xl:hidden">
          <div className="container-pg py-4">
            <ul className="divide-y divide-[rgba(24,24,27,0.07)]" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    aria-current={pathname === link.href ? 'page' : undefined}
                    className="flex min-h-12 items-center justify-between py-3 text-sm font-medium text-[#42493e] hover:text-[#154212]"
                  >
                    {link.label}
                    <span aria-hidden="true" className="text-[#c2c9bb]">→</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 grid grid-cols-2 gap-3 border-t border-[rgba(24,24,27,0.08)] pt-4">
              <a href={BRAND.loginUrl} className="inline-flex min-h-12 items-center justify-center rounded-full border border-[rgba(24,24,27,0.14)] text-sm font-semibold text-[#154212]">
                Log in
              </a>
              <a href={BRAND.registerUrl} className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#154212] text-sm font-semibold text-white">
                Start for free
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
