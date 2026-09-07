export function OldVsNew() {
  const problems = [
    "WhatsApp for billing",
    "Notebooks for records",
    "Memory for due dates",
    "Spreadsheets for tracking",
    "Manual reminders every month",
    "No idea who has paid",
  ];

  return (
    <section className="section-gap" aria-labelledby="problem-heading">
      <div className="container-pg max-w-3xl mx-auto text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#72796e] mb-6 text-center">
          The Problem
        </p>
        <h2
          id="problem-heading"
          className="heading-serif text-headline text-[#1a1c1c] mb-6 max-w-2xl mx-auto text-center"
        >
          Your PG shouldn&apos;t run on WhatsApp and notebooks and memory.
        </h2>
        <p className="text-[#42493e] text-lg leading-relaxed mb-12 max-w-xl mx-auto text-center">
          Most PG owners manage rent through a combination of things that were never designed for rent collection.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {problems.map((p) => (
            <span
              key={p}
              className="px-4 py-2 rounded-full text-sm text-[#42493e] border border-[rgba(24,24,27,0.10)] bg-white"
            >
              {p}
            </span>
          ))}
        </div>

        <div className="mt-10 pt-10 border-t border-[rgba(24,24,27,0.06)]">
          <p className="heading-serif text-subhead text-[#1a1c1c] mb-2">
            PGKhata replaces all of it.
          </p>
          <p className="text-[#72796e] text-base">
            One place for properties, tenants, bills, payments, expenses, staff and reports.
          </p>
        </div>
      </div>
    </section>
  );
}
