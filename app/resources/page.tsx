import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Resources | PGKhata',
  description: 'PGKhata product guides, billing workflow, FAQ and support resources.',
};

const resources = [
  {
    category: 'Learn',
    items: [
      {
        title: 'Product guide',
        description: 'See how PGKhata brings properties, tenants, billing, payments and reports together.',
        href: '/product',
        label: 'Explore the product',
      },
      {
        title: 'Billing workflow',
        description: 'Follow the monthly flow from adding a tenant to sending a clear bill and tracking payment.',
        href: '/how-it-works',
        label: 'See how it works',
      },
    ],
  },
  {
    category: 'Help',
    items: [
      {
        title: 'Frequently asked questions',
        description: 'Find answers about pricing, setup, tenant access, billing and data exports.',
        href: '/faq',
        label: 'Read the FAQ',
      },
      {
        title: 'Contact PGKhata',
        description: 'Have a specific question? Email the PGKhata team directly.',
        href: '/contact',
        label: 'Get in touch',
      },
    ],
  },
] as const;

export default function ResourcesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="page-hero text-center" aria-labelledby="resources-heading">
          <div className="container-pg mx-auto max-w-3xl">
            <h1 id="resources-heading" className="display-serif text-display mb-6 text-[#1a1c1c]">
              Resources.
            </h1>
            <p className="mx-auto max-w-lg text-center text-lg leading-relaxed text-[#42493e]">
              Understand the product, follow the billing workflow and get help when you need it.
            </p>
          </div>
        </section>

        <section className="pb-24 md:pb-32" aria-label="Resource directory">
          <div className="container-pg mx-auto max-w-4xl">
            <div className="flex flex-col gap-14">
              {resources.map((group) => (
                <section key={group.category} aria-labelledby={`resource-${group.category.toLowerCase()}`}>
                  <h2 id={`resource-${group.category.toLowerCase()}`} className="heading-serif mb-6 text-2xl text-[#1a1c1c]">
                    {group.category}
                  </h2>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {group.items.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="group flex flex-col gap-3 rounded-2xl border border-[rgba(24,24,27,0.08)] bg-white p-6 transition-colors duration-200 hover:border-[rgba(21,66,18,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d5a27]"
                      >
                        <h3 className="text-sm font-semibold text-[#1a1c1c] transition-colors duration-200 group-hover:text-[#154212]">
                          {item.title}
                        </h3>
                        <p className="flex-1 text-sm leading-relaxed text-[#72796e]">{item.description}</p>
                        <span className="text-sm font-semibold text-[#154212] group-hover:underline group-hover:underline-offset-4">
                          {item.label} &rarr;
                        </span>
                      </Link>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
