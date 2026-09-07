---
name: PGKhata
description: A calm operating ledger for Indian PG owners.
colors:
  ledger-green: "#154212"
  ledger-green-hover: "#2d5a27"
  fresh-leaf: "#bcf0ae"
  paper: "#faf9f8"
  paper-low: "#f4f3f2"
  white: "#ffffff"
  ink: "#1a1c1c"
  ink-secondary: "#42493e"
  ink-muted: "#72796e"
  ink-faint: "#c2c9bb"
  charcoal: "#2f3130"
  inverse-text: "#d9dfd5"
  success: "#16a34a"
  success-ink: "#154212"
  success-bg: "#e5f5df"
  warning: "#d97706"
  warning-ink: "#9a4f04"
  warning-bg: "#fef3c7"
  error: "#dc2626"
  error-ink: "#b91c1c"
  error-bg: "#fee2e2"
  code-text: "#e5e5e5"
  code-keyword: "#79c0ff"
  code-string: "#a5d6ff"
  code-value: "#ffa657"
  code-comment: "#8b949e"
typography:
  display:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "clamp(2.75rem, 6vw, 5rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Geist, Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  body-large:
    fontFamily: "Geist, Inter, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1.2vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.65
  ui:
    fontFamily: "Geist, Inter, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Geist, Inter, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "0.08em"
  micro-label:
    fontFamily: "Geist, Inter, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "0.08em"
  code:
    fontFamily: "Geist Mono, JetBrains Mono, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.75
  subhead:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "clamp(1.375rem, 2.5vw, 2rem)"
    fontWeight: 400
    lineHeight: 1.1
  headline-strong:
    fontFamily: "Geist, Inter, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 4vw, 3.75rem)"
    fontWeight: 600
    lineHeight: 1.08
rounded:
  focus: "4px"
  compact: "8px"
  internal: "12px"
  control: "999px"
  surface: "16px"
  frame: "24px"
spacing:
  gutter-mobile: "20px"
  gutter-desktop: "32px"
  section-mobile: "40px"
  section-desktop: "clamp(3rem, 4vw, 4.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.ledger-green}"
    textColor: "{colors.white}"
    rounded: "{rounded.control}"
    padding: "14px 32px"
  button-primary-hover:
    backgroundColor: "{colors.ledger-green-hover}"
    textColor: "{colors.white}"
    rounded: "{rounded.control}"
    padding: "14px 32px"
  panel:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.surface}"
    padding: "24px"
---

# Design System: PGKhata

## Overview

**Creative North Star: "The First-of-Month Ledger"**

PGKhata should feel like the calm, legible operating record that replaces a phone full of reminders and a notebook full of crossed-out totals. The visual system is warm and human, but its composition is operational: ruled rows, clear status, itemized amounts, and a visible path from tenant to payment.

The system uses generous paper-like space, dark green as the decisive action color, and compact product detail as proof. Expression comes from scale contrast and live workflow movement, not decorative effects.

**Key Characteristics:**
- Warm paper surfaces with decisive ledger-green actions
- Large editorial headlines paired with compact operational data
- Ruled rows and status changes instead of repetitive feature-card grids
- One clear action and one authored workflow moment per surface

## Colors

The palette combines familiar paper neutrals with a dark, trustworthy green; semantic colors appear only where status needs them.

**The Ledger Green Rule.** Use green for the primary action, active state, and positive financial status—not as scattered decoration.

## Typography

**Display Font:** Instrument Serif with Georgia fallback  
**Body Font:** Geist with Inter and system fallbacks  
**Label/Mono Font:** Geist Mono for code and tabular technical material only

Display typography supplies humanity and emphasis. Geist carries navigation, controls, tables, and longer explanations with high legibility.

**The Two-Voice Rule.** Serif names the promise; sans-serif explains and operates it.

## Layout

Use a centered 1280px maximum container with 32px desktop and 20px mobile gutters. Pages alternate broad narrative fields with denser operational demonstrations. Sections use responsive vertical spacing from 40px on small screens to roughly 72px on wide screens. Mobile layouts preserve reading order and turn horizontal workflows into a single vertical sequence.

## Elevation & Depth

Depth is restrained and structural. Most separation comes from tonal surface changes and hairline borders. Large product frames may use one soft, downward ambient shadow; ordinary content remains flat.

**The Proof Gets Depth Rule.** Reserve elevation for the live product demonstration and navigation, never every content block.

## Shapes

Product frames use softly rounded 24px shells, internal surfaces use 8–16px corners, focus outlines may resolve to 4px, and primary actions use pill geometry. Status pills are compact and content-sized. Avoid nested rounded cards.

## Components

### Buttons
- Primary actions use ledger green, white text, a pill shape, and a darker hover state.
- Secondary actions remain paper-toned with a quiet border.
- All actions retain a visible two-pixel focus ring and at least a 44px touch target.

### Cards / Containers
- Use white or low-paper surfaces with a subtle border.
- Prefer rows, columns, and ledgers over isolated icon cards.
- Apply the ambient product-frame shadow only to substantial demonstrations.

### Inputs / Fields
- Use a calm white or paper field, explicit labels, strong focus treatment, and visible error text.

### Navigation
- Keep navigation compact, centered, and legible over every page field.
- The primary app action stays visually dominant on desktop and mobile.

### Collection Board
- Show tenant, bill amount, delivery state, and payment state in one readable operational sequence.
- Status changes may animate once; the underlying content remains semantic and visible without motion.

## Do's and Don'ts

### Do:
- **Do** prove the billing loop with itemized, believable product UI.
- **Do** use Indian currency, familiar names, rooms, and WhatsApp delivery language.
- **Do** keep factual claims tied to `PRODUCT.md`.

### Don't:
- **Don't** imply automated payment reconciliation is complete.
- **Don't** replace product proof with generic feature-card grids.
- **Don't** use decorative gradients, glow, or glass effects as the visual concept.
