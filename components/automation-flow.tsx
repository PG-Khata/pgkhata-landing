// Financial safety section (replaces automation-flow)
export function AutomationFlow() {
  const items = [
    {
      title: "Invoice Voiding",
      description: "Fix mistakes without deleting financial history.",
    },
    {
      title: "Promised Payment Dates",
      description: "Record tenant commitments and keep account history intact.",
    },
    {
      title: "Checkout Preview",
      description: "Know the complete financial position before a tenant leaves.",
    },
    {
      title: "Security Deposits",
      description: "Track what is held, refunded and partially refunded per tenant.",
    },
  ];

  return (
    <section className="section-gap" aria-labelledby="financial-heading">
      <div className="container-pg">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#72796e] mb-4">
            Financial Control
          </p>
          <h2 id="financial-heading" className="heading-serif text-headline text-[#1a1c1c] mb-4">
            Financial records<br />you can trust.
          </h2>
          <p className="text-[#42493e] text-lg max-w-lg mx-auto text-center">
            Every rupee tracked. Every transaction accounted for. No room for doubt.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {items.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl border border-[rgba(24,24,27,0.08)] bg-white"
            >
              <h3 className="font-semibold text-[#1a1c1c] text-sm mb-2">{item.title}</h3>
              <p className="text-xs text-[#72796e] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Additional */}
        <div className="mt-4 flex flex-wrap gap-3 justify-center">
          {["Payment allocation", "Outstanding aging"].map((tag) => (
            <span key={tag} className="px-4 py-2 rounded-full text-xs text-[#42493e] border border-[rgba(24,24,27,0.10)] bg-white font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
