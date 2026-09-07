import { BRAND } from '@/lib/constants';

export function Pricing() {
  return (
    <section
      id="pricing"
      className="section-gap section-dark"
      aria-labelledby="pricing-heading"
    >
      <div className="container-pg text-center">
        <div className="text-[8rem] sm:text-[12rem] leading-none font-serif font-normal tracking-tight text-white mb-2">
          &#8377;0
        </div>
        <p className="font-serif text-4xl sm:text-6xl text-white/80 mb-10 tracking-tight">
          Forever.
        </p>

        <p className="text-[#c2c9bb] text-base mb-2">No trial. No credit card. No per-bed pricing. No per-property pricing.</p>
        <p className="text-[#a1d494] text-base font-medium mb-10">
          Everything PGKhata provides to PG owners is free.
        </p>

        <a
          href={BRAND.registerUrl}
          id="pricing-cta"
          className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-[#154212] text-sm font-semibold rounded-full hover:bg-[#f4f3f2] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2f3130] shadow-sm"
        >
          Start for free
        </a>
      </div>
    </section>
  );
}
