---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: ["components/navbar.tsx","components/footer.tsx"]
---

# Homepage Surface Brief

## Scope and mode

- Primary target: `app/page.tsx`
- Mode: Persuade
- Audience: Small-to-mid-size Indian PG owners managing 10–100 beds and already using WhatsApp daily.
- Job: Understand PGKhata’s core billing loop, believe it removes first-of-month busywork, and start using the real app.
- Primary action: Start for free at `https://app.pgkhata.com`.

## Proof and constraints

- Prove: add tenant → generate itemized bill → send through WhatsApp → track payment.
- Support with: ₹0 forever, no tenant app, web-first access, owner-controlled data, and verified product breadth from `PRODUCT.md`.
- Keep payment recording honest and manual; do not imply completed gateway reconciliation.
- Use believable illustrative Indian names, rooms, beds, and rupee amounts.
- No fake testimonials, customer counts, contact submission, or unverified repository link.

## Chosen direction

**The First-of-Month Ledger — continuous billing flow.** Approved comp: `.impeccable/mocks/home-ledger-flow.png`.

The first viewport centers the promise and primary action above one continuous operational strip. Tenant rows expand into an itemized bill, cross a WhatsApp delivery seam, and resolve into a payment ledger. The strip stacks in the same reading order on mobile. The memorable moment is the active bill moving across the four real workflow states without hiding the semantic content.

## Composition and implementation inventory

| Element | Commitment | Medium |
|---|---|---|
| Navigation | Quiet full-width bar; product links centered; app actions at right | Semantic HTML, Next links, Tailwind |
| Headline | Centered editorial promise, roughly 2× body scale | Semantic heading using Instrument Serif |
| Primary action | One ledger-green pill directly below the promise | Semantic external link |
| Tenant register | Dense rows with names, room/bed, rent, and one active row | HTML grid/table-like list |
| Itemized bill | Central elevated paper sheet with rent, electricity, charges, and total | Semantic HTML/CSS; one soft ambient shadow |
| WhatsApp seam | Narrow delivery column with message cue and sent state | HTML plus Lucide icon |
| Payment ledger | Summary plus Paid/Pending/Overdue tenant rows | Semantic HTML grid |
| Flow motion | One coordinated active-state progression across all four panels | Framer Motion; reduced-motion fallback |
| Proof band | Large ₹0 statement followed by no tenant app and data-control proofs | Semantic HTML with ruled columns |
| Remaining page | Alternating narrative and operational sections, not repetitive cards | Semantic HTML/Tailwind |

## Asset producer manifest

### Produce

None.

### Direct

None.

### Semantic

- `navigation`: header, links, mobile disclosure; Tailwind owns spacing, border, and states. QA: accepted.
- `workflow-strip`: four semantic regions connected by CSS rules; Tailwind owns responsive grid/stack, active row, receipt depth, and overflow. QA: accepted.
- `icons`: Lucide line icons at consistent 16–20px size; text labels remain visible. QA: accepted.
- `proof-band`: ruled responsive grid with large serif ₹0 and concise sans copy. QA: accepted.

Execution order: navigation and hero copy; workflow skeleton; itemized bill; state motion; proof band; lower sections; responsive adaptation.

Blockers: none.

Assumptions: every visible product demonstration is illustrative; no raster asset from the comp ships in the page.
