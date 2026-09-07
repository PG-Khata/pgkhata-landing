import { BRAND } from '@/lib/constants';

export function FinalCta() {
  return (
    <section
      className="section-gap bg-white border-t border-[rgba(24,24,27,0.06)]"
      aria-labelledby="final-cta-heading"
    >
      <div className="container-pg text-center max-w-3xl mx-auto">
        <h2
          id="final-cta-heading"
          className="display-serif text-display text-[#1a1c1c] mb-6"
        >
          Stop chasing rent.<br />Start using PGKhata.
        </h2>

        <p className="text-[#42493e] text-lg leading-relaxed mb-10 max-w-xl mx-auto text-center">
          Manage your tenants, bills and payments from one simple place.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap mb-6">
          <a
            href={BRAND.registerUrl}
            id="final-cta-primary"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#154212] text-white text-sm font-semibold rounded-full hover:bg-[#2d5a27] transition-all duration-200 whitespace-nowrap select-none focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d5a27] focus-visible:ring-offset-2 shadow-sm"
          >
            Start for free
          </a>
        </div>

        <p className="text-xs text-[#72796e]">&#8377;0 forever.</p>
      </div>
    </section>
  );
}
