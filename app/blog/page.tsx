import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { BRAND } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Blog | PGKhata',
  description: 'Practical notes about PG operations, tenant management, billing and rent collection.',
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="page-hero" aria-labelledby="blog-heading">
          <div className="container-pg mx-auto max-w-5xl">
            <div className="grid gap-12 border-b border-[rgba(24,24,27,0.12)] pb-14 lg:grid-cols-[1.15fr_.85fr] lg:items-end lg:gap-24">
              <div>
                <h1 id="blog-heading" className="display-serif text-display max-w-3xl text-[#1a1c1c]">
                  Practical notes for running a better PG.
                </h1>
              </div>
              <p className="max-w-lg text-base leading-relaxed text-[#42493e] sm:text-lg">
                Field-tested ideas about tenant operations, clearer billing, payment follow-ups and the small systems that save owners time.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-24 md:pb-32" aria-labelledby="blog-empty-heading">
          <div className="container-pg mx-auto max-w-5xl">
            <div className="grid gap-8 border-y border-[rgba(24,24,27,0.1)] py-10 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h2 id="blog-empty-heading" className="heading-serif text-3xl text-[#1a1c1c]">
                  The first article is on its way.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#42493e]">
                  There are no published posts yet. When articles are ready, they will appear here with clear topics and publication dates.
                </p>
              </div>
              <div className="flex flex-col items-start gap-3 sm:flex-row md:justify-end">
                <Link
                  href="/product"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#154212] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#2d5a27]"
                >
                  Explore PGKhata
                  <ArrowRight aria-hidden="true" size={15} />
                </Link>
                <a
                  href={`mailto:${BRAND.email}?subject=PGKhata%20blog%20topic`}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[rgba(24,24,27,0.14)] px-5 text-sm font-semibold text-[#154212] transition-colors hover:bg-white"
                >
                  <Mail aria-hidden="true" size={15} />
                  Suggest a topic
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
