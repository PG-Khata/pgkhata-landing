import Link from 'next/link';

const steps = [
  {
    number: "01",
    title: "Add Tenant",
    description: "Rahul Sharma. Sunrise PG, Room 204, Bed B. Rent plan assigned.",
    color: "#f4f3f2",
  },
  {
    number: "02",
    title: "Generate Bill",
    description: "Rent ₹7,500 + Electricity ₹640 + Maintenance ₹300. Total ₹8,440.",
    color: "#f4f3f2",
  },
  {
    number: "03",
    title: "Send via WhatsApp",
    description: "Bill sent to Rahul. 'Your September PG bill is ready. Total ₹8,440.'",
    color: "#f4f3f2",
  },
  {
    number: "04",
    title: "Track Payment",
    description: "Rahul Sharma. ₹8,440. Paid successfully.",
    color: "#154212",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section-gap"
      aria-labelledby="hiw-heading"
    >
      <div className="container-pg">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#72796e] mb-4">
            How It Works
          </p>
          <h2 id="hiw-heading" className="heading-serif text-headline text-[#1a1c1c] mb-4">
            From tenant to payment.<br />One simple flow.
          </h2>
          <p className="text-[#42493e] text-lg max-w-lg mx-auto text-center">
            A seamless, automated sequence that replaces spreadsheets and notebooks with clarity and control.
          </p>
        </div>

        {/* Flow cards */}
        <div className="browser-frame max-w-4xl mx-auto">
          <div className="browser-toolbar">
            <div className="browser-dot" />
            <div className="browser-dot" />
            <div className="browser-dot" />
          </div>
          <div className="bg-[#f4f3f2] p-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {steps.map((s) => (
                <div
                  key={s.number}
                  className="p-5 rounded-2xl border border-[rgba(24,24,27,0.08)] flex flex-col gap-3"
                  style={{ background: s.color === '#154212' ? '#154212' : '#fff' }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-semibold"
                    style={{
                      background: s.color === '#154212' ? 'rgba(255,255,255,0.15)' : '#f4f3f2',
                      color: s.color === '#154212' ? '#fff' : '#154212',
                    }}
                  >
                    {s.number}
                  </div>
                  <div>
                    <p
                      className="font-semibold text-sm mb-1.5"
                      style={{ color: s.color === '#154212' ? '#fff' : '#1a1c1c' }}
                    >
                      {s.title}
                    </p>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: s.color === '#154212' ? 'rgba(255,255,255,0.75)' : '#72796e' }}
                    >
                      {s.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="heading-serif text-subhead text-[#1a1c1c] mb-6">
            Add. Bill. WhatsApp. Done.
          </p>
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#154212] text-white text-sm font-semibold rounded-full hover:bg-[#2d5a27] transition-all duration-200"
          >
            See the full walkthrough
          </Link>
        </div>
      </div>
    </section>
  );
}
