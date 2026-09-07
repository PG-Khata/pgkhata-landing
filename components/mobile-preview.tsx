// WhatsApp section (homepage)
export function MobilePreview() {
  return (
    <section
      className="section-gap bg-white border-y border-[rgba(24,24,27,0.06)]"
      aria-labelledby="whatsapp-heading"
    >
      <div className="container-pg">
        <div className="grid sm:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#72796e] mb-4">
              Communication
            </p>
            <h2 id="whatsapp-heading" className="heading-serif text-headline text-[#1a1c1c] mb-5">
              Bills reach tenants via WhatsApp.
            </h2>
            <p className="text-[#42493e] text-base leading-relaxed mb-8">
              When a bill is ready, PGKhata sends it to the tenant via WhatsApp. No app required for the tenant. No manual message needed from you.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "Itemized bill with each charge clearly listed",
                "Bill notification goes via WhatsApp",
                "Bulk reminders to all pending tenants at once",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#42493e]">
                  <span className="mt-0.5 w-4 h-4 rounded-full bg-[#154212] flex items-center justify-center shrink-0">
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                      <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* WhatsApp mock */}
          <div className="bg-[#e5ddd5] rounded-3xl p-6 max-w-xs mx-auto sm:mx-0 sm:ml-auto">
            <div className="bg-[#dcf8c6] rounded-2xl rounded-tr-sm p-4 mb-3">
              <p className="text-xs font-medium text-[#1a1c1c] mb-1">PGKhata Bill</p>
              <p className="text-xs text-[#42493e] leading-relaxed">
                Hi Rahul, your September bill for Sunrise PG, Room 204 is ready.
              </p>
              <div className="mt-3 pt-3 border-t border-[rgba(0,0,0,0.08)]">
                <div className="flex justify-between text-xs text-[#42493e] mb-1">
                  <span>Rent</span><span>₹7,500</span>
                </div>
                <div className="flex justify-between text-xs text-[#42493e] mb-1">
                  <span>Electricity</span><span>₹640</span>
                </div>
                <div className="flex justify-between text-xs text-[#42493e] mb-2">
                  <span>Maintenance</span><span>₹300</span>
                </div>
                <div className="flex justify-between text-xs font-bold text-[#1a1c1c]">
                  <span>Total</span><span>₹8,440</span>
                </div>
              </div>
              <p className="text-[10px] text-[#72796e] mt-2 text-right">9:14 AM</p>
            </div>
            <div className="bg-white rounded-2xl rounded-tl-sm p-3 max-w-[60%]">
              <p className="text-xs text-[#42493e]">Paid via UPI</p>
              <p className="text-[10px] text-[#72796e] mt-1">9:18 AM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
