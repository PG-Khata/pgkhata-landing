export function ValueStats() {
  const stats = [
    { value: "30+", label: "Documented features" },
    { value: "₹0",  label: "Forever, no credit card" },
    { value: "324", label: "Passing tests" },
    { value: "60+", label: "API endpoints" },
  ];

  return (
    <section
      className="border-y border-[rgba(24,24,27,0.08)] bg-white"
      aria-label="Platform statistics"
    >
      <div className="container-pg py-14 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-center justify-items-center">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center justify-center text-center gap-1.5 w-full">
              <span className="heading-serif text-subhead text-[#1a1c1c] text-center leading-none">{s.value}</span>
              <span className="text-sm text-[#72796e] text-center leading-normal">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
