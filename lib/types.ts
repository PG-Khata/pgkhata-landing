// ── Types ──────────────────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  category: string;
}

export interface FeatureCategory {
  id: string;
  label: string;
  features: Feature[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ComparisonRow {
  feature: string;
  pgkhata: boolean | string;
  rentok: boolean | string;
  pgmaster: boolean | string;
  mypgmanager: boolean | string;
  btroomer: boolean | string;
  pgmanager: boolean | string;
  niketan: boolean | string;
}

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
  detail: string;
}

export interface SecurityFeature {
  title: string;
  description: string;
  size: "large" | "small";
}
