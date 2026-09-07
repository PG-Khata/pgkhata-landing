import type {
  NavLink,
  FooterColumn,
  FeatureCategory,
  FAQItem,
  ComparisonRow,
  SecurityFeature,
} from "./types";

// ── Brand ─────────────────────────────────────────────────────────
export const BRAND = {
  name: "PGKhata",
  tagline: "Rent collection, without the chaos.",
  description: "Made for PG owners in India.",
  url: "https://pgkhata.com",
  appUrl: "https://app.pgkhata.com",
  loginUrl: "https://app.pgkhata.com/login",
  registerUrl: "https://app.pgkhata.com/register",
  email: "hello@pgkhata.com",
  location: "India",
} as const;

// ── Nav links ──────────────────────────────────────────────────────
export const NAV_LINKS: NavLink[] = [
  { label: "Features", href: "/features" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
];

// ── Footer columns ─────────────────────────────────────────────────
export const FOOTER_LINKS: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Pricing", href: "/pricing" },
      { label: "Compare", href: "/compare" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/resources" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
      { label: "Security", href: "/security" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

// ── Dashboard sample data ──────────────────────────────────────────
export const DASHBOARD_METRICS = {
  totalBeds: 84,
  occupied: 71,
  vacant: 13,
  collected: "2,18,450",
  pending: "36,500",
} as const;

export const REVENUE_TREND = [
  { month: "Jan", amount: 148000 },
  { month: "Feb", amount: 162000 },
  { month: "Mar", amount: 175000 },
  { month: "Apr", amount: 189000 },
  { month: "May", amount: 204000 },
  { month: "Jun", amount: 218450 },
] as const;

// ── Feature categories ─────────────────────────────────────────────
export const FEATURE_CATEGORIES: FeatureCategory[] = [
  {
    id: "property",
    label: "Property & Beds",
    features: [
      {
        id: "multi-property",
        title: "Multi-Property Support",
        description: "Manage multiple PG branches from a single unified dashboard.",
        category: "property",
      },
      {
        id: "bed-tracking",
        title: "Bed-Level Tracking",
        description: "Manage occupancy down to the individual bed level. Know exactly who is where.",
        category: "property",
      },
      {
        id: "room-inventory",
        title: "Room Inventory",
        description: "Categorize rooms by type (single, double, sharing) and track total capacity.",
        category: "property",
      },
      {
        id: "floor-hierarchy",
        title: "Floor to Bed Hierarchy",
        description: "Property to Floor to Room to Bed. A structural hierarchy that maps your physical building.",
        category: "property",
      },
      {
        id: "vacancy-dashboard",
        title: "Vacancy Dashboard",
        description: "See all vacant beds at a glance. Know which rooms are available at any time.",
        category: "property",
      },
      {
        id: "bed-transfer",
        title: "Bed Transfer",
        description: "Move a tenant between rooms or beds without losing their history.",
        category: "property",
      },
      {
        id: "bed-bookings",
        title: "Bed Bookings",
        description: "Reserve a bed for an incoming tenant before they move in.",
        category: "property",
      },
      {
        id: "structure-import",
        title: "Structure Import/Export",
        description: "Import your existing property structure from Excel and export it any time.",
        category: "property",
      },
    ],
  },
  {
    id: "tenants",
    label: "Tenant Management",
    features: [
      {
        id: "tenant-crud",
        title: "Tenant Management",
        description: "Store names, phones, rooms, deposits, documents and rent plans in one place.",
        category: "tenants",
      },
      {
        id: "approval-workflow",
        title: "Approval Workflow",
        description: "Review and approve new tenant applications before they are confirmed.",
        category: "tenants",
      },
      {
        id: "kyc-documents",
        title: "Digital KYC Storage",
        description: "Securely store Aadhaar, PAN, and photos for every tenant in one place.",
        category: "tenants",
      },
      {
        id: "emergency-contacts",
        title: "Emergency Contacts",
        description: "Keep emergency contact details for every tenant, accessible anytime.",
        category: "tenants",
      },
      {
        id: "checkout-preview",
        title: "Checkout Preview",
        description: "Know exactly what is owed before a tenant leaves. No surprise settlements.",
        category: "tenants",
      },
      {
        id: "onboarding-links",
        title: "Onboarding Links",
        description: "Send tenants a link to fill their own profile before moving in.",
        category: "tenants",
      },
      {
        id: "qr-signup",
        title: "QR Code Signup",
        description: "Let tenants scan a QR code to register and submit their details.",
        category: "tenants",
      },
      {
        id: "financial-reports",
        title: "Tenant Financial Reports",
        description: "See the complete payment history for any tenant in one place.",
        category: "tenants",
      },
    ],
  },
  {
    id: "billing",
    label: "Billing & Finance",
    features: [
      {
        id: "auto-billing",
        title: "Auto Bill Generation",
        description: "Set recurring billing cycles and generate invoices automatically each month.",
        category: "billing",
      },
      {
        id: "line-item",
        title: "Line-Item Billing",
        description: "Break down every bill into rent, electricity, maintenance and custom charges.",
        category: "billing",
      },
      {
        id: "custom-charges",
        title: "Configurable Charges",
        description: "Add custom charge types like Wi-Fi, food, laundry or anything else.",
        category: "billing",
      },
      {
        id: "rent-plans",
        title: "Rent Plans",
        description: "Create and assign flexible rent plans to different rooms or tenants.",
        category: "billing",
      },
      {
        id: "late-fees",
        title: "Late Fees",
        description: "Automatically apply late fees based on configurable grace periods.",
        category: "billing",
      },
      {
        id: "promised-dates",
        title: "Promised Payment Dates",
        description: "Record tenant payment commitments while keeping account history intact.",
        category: "billing",
      },
      {
        id: "invoice-voiding",
        title: "Invoice Voiding",
        description: "Fix billing mistakes without deleting financial history.",
        category: "billing",
      },
      {
        id: "advance-payments",
        title: "Advance Payments",
        description: "Accept and track advance rent payments correctly.",
        category: "billing",
      },
      {
        id: "payment-allocation",
        title: "Payment Allocation",
        description: "Allocate payments across outstanding invoices cleanly and transparently.",
        category: "billing",
      },
      {
        id: "security-deposits",
        title: "Security Deposits",
        description: "Track what you are holding, refunding and settling per tenant.",
        category: "billing",
      },
      {
        id: "outstanding-drill",
        title: "Outstanding Drill-Down",
        description: "See aging buckets and drill into exactly who owes what and for how long.",
        category: "billing",
      },
    ],
  },
  {
    id: "payments",
    label: "Payment Collection",
    features: [
      {
        id: "payment-tracking",
        title: "Payment Tracking",
        description: "See who has paid, who is pending and who is overdue at any time.",
        category: "payments",
      },
      {
        id: "payment-ledger",
        title: "Payment Ledger",
        description: "A complete, audit-friendly ledger of all transactions per tenant.",
        category: "payments",
      },
      {
        id: "outstanding-aging",
        title: "Outstanding Aging",
        description: "Group overdue amounts by how long they have been outstanding.",
        category: "payments",
      },
    ],
  },
  {
    id: "expenses",
    label: "Expenses",
    features: [
      {
        id: "expense-tracking",
        title: "Expense Tracking",
        description: "Log all property-related expenses in one place.",
        category: "expenses",
      },
      {
        id: "expense-categories",
        title: "Custom Categories",
        description: "Create your own expense categories to match how you actually run your PG.",
        category: "expenses",
      },
      {
        id: "expense-approval",
        title: "Expense Approval",
        description: "Review and approve expenses before they are finalized.",
        category: "expenses",
      },
      {
        id: "expense-summary",
        title: "Expense Summaries",
        description: "See a monthly summary of all expenses across your properties.",
        category: "expenses",
      },
    ],
  },
  {
    id: "staff",
    label: "Staff & Access",
    features: [
      {
        id: "staff-accounts",
        title: "Staff Accounts",
        description: "Create individual accounts for staff members with controlled access.",
        category: "staff",
      },
      {
        id: "roles",
        title: "Roles",
        description: "Assign roles like manager or accountant to each staff member.",
        category: "staff",
      },
      {
        id: "module-permissions",
        title: "Module-Level Permissions",
        description: "Control exactly which modules each staff member can access or modify.",
        category: "staff",
      },
    ],
  },
  {
    id: "communication",
    label: "Analytics & Reports",
    features: [
      {
        id: "dashboard-analytics",
        title: "Dashboard Analytics",
        description: "A live overview of occupancy, collection and outstanding amounts.",
        category: "communication",
      },
      {
        id: "collection-trends",
        title: "Monthly Collection Trends",
        description: "See how rent collection has changed month over month.",
        category: "communication",
      },
      {
        id: "due-rent",
        title: "Due Rent Report",
        description: "A clean list of all outstanding rent across all tenants and properties.",
        category: "communication",
      },
      {
        id: "csv-export",
        title: "CSV Export",
        description: "Export any report to CSV for your own records or accountant.",
        category: "communication",
      },
      {
        id: "profit-loss",
        title: "Profit and Loss",
        description: "See total income vs. expenses to understand how each property performs.",
        category: "communication",
      },
      {
        id: "whatsapp-bills",
        title: "WhatsApp Bill Notifications",
        description: "Send itemized bills to tenants directly via WhatsApp.",
        category: "communication",
      },
      {
        id: "bulk-reminders",
        title: "Bulk Reminders",
        description: "Send payment reminders to all pending tenants with one action.",
        category: "communication",
      },
      {
        id: "email-notifications",
        title: "Email Notifications",
        description: "Send bills and reminders via email in addition to WhatsApp.",
        category: "communication",
      },
    ],
  },
  {
    id: "data",
    label: "Data Management",
    features: [
      {
        id: "csv-import",
        title: "CSV Import",
        description: "Import tenant and property data from existing spreadsheets.",
        category: "data",
      },
      {
        id: "document-management",
        title: "Document Management",
        description: "Store and retrieve tenant documents from one centralized location.",
        category: "data",
      },
      {
        id: "billing-policies",
        title: "Billing Policies",
        description: "Define organization-wide billing policies that apply across all properties.",
        category: "data",
      },
    ],
  },
];

// ── FAQ ────────────────────────────────────────────────────────────
export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Is PGKhata really free?",
    answer:
      "Yes. PGKhata is free for PG owners. There is no trial period, no per-bed pricing and no subscription fee. The product is free.",
  },
  {
    question: "Can I manage multiple PG properties?",
    answer:
      "Yes. PGKhata supports multiple properties under one account. Each property has its own rooms, tenants, billing and reports.",
  },
  {
    question: "Can I manage rooms and individual beds?",
    answer:
      "Yes. PGKhata supports a Property to Floor to Room to Bed hierarchy. You can track occupancy at the individual bed level.",
  },
  {
    question: "Can I generate electricity bills?",
    answer:
      "Yes. Bills can include rent, electricity and any other configurable charge types you define. Each line item is shown clearly on the bill.",
  },
  {
    question: "Can I add custom charges?",
    answer:
      "Yes. You can create custom charge types such as Wi-Fi, food, maintenance or laundry and add them to any tenant's bill.",
  },
  {
    question: "Can I track security deposits?",
    answer:
      "Yes. PGKhata tracks security deposits per tenant and shows exactly what is held, what has been refunded and what remains.",
  },
  {
    question: "Can staff members use PGKhata?",
    answer:
      "Yes. PGKhata includes staff accounts with roles and module-level permissions. You can control exactly what each staff member can access.",
  },
  {
    question: "Do tenants need to install an app?",
    answer:
      "No. The core product is designed so tenants can receive bills and information without installing another app.",
  },
  {
    question: "Can I export my data?",
    answer:
      "Yes. Data can be exported through CSV and Excel workflows. Your data is always accessible.",
  },
];

// ── Comparison table ───────────────────────────────────────────────
export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    feature: "Property management",
    pgkhata: true, rentok: true, pgmaster: true, mypgmanager: true, btroomer: true, pgmanager: true, niketan: true,
  },
  {
    feature: "Tenant management",
    pgkhata: true, rentok: true, pgmaster: true, mypgmanager: true, btroomer: true, pgmanager: true, niketan: true,
  },
  {
    feature: "Web app",
    pgkhata: true, rentok: false, pgmaster: false, mypgmanager: false, btroomer: false, pgmanager: false, niketan: false,
  },
  {
    feature: "Free forever",
    pgkhata: true, rentok: false, pgmaster: false, mypgmanager: false, btroomer: false, pgmanager: false, niketan: false,
  },
  {
    feature: "Line-item billing",
    pgkhata: true, rentok: false, pgmaster: false, mypgmanager: false, btroomer: false, pgmanager: false, niketan: false,
  },
  {
    feature: "Invoice voiding",
    pgkhata: true, rentok: false, pgmaster: false, mypgmanager: false, btroomer: false, pgmanager: false, niketan: false,
  },
  {
    feature: "Payment allocation",
    pgkhata: true, rentok: false, pgmaster: false, mypgmanager: false, btroomer: false, pgmanager: false, niketan: false,
  },
  {
    feature: "Security deposits",
    pgkhata: true, rentok: false, pgmaster: true, mypgmanager: false, btroomer: false, pgmanager: false, niketan: false,
  },
  {
    feature: "Approval workflow",
    pgkhata: true, rentok: false, pgmaster: false, mypgmanager: false, btroomer: false, pgmanager: false, niketan: false,
  },
  {
    feature: "CSV export",
    pgkhata: true, rentok: true, pgmaster: true, mypgmanager: false, btroomer: false, pgmanager: false, niketan: false,
  },
  {
    feature: "Reports",
    pgkhata: true, rentok: true, pgmaster: true, mypgmanager: true, btroomer: false, pgmanager: false, niketan: false,
  },
];

// ── Security features ──────────────────────────────────────────────
export const SECURITY_FEATURES: SecurityFeature[] = [
  {
    title: "Secure auth",
    description:
      "Industry-standard authentication protocols ensure only authorized personnel can access your PG management system. Multi-factor authentication adds an extra layer of defense against unauthorized entry.",
    size: "large",
  },
  {
    title: "Owner-scoped data",
    description:
      "Strict data isolation ensures your tenant and financial data is only accessible to you. Cross-tenant data leakage is structurally impossible by design.",
    size: "large",
  },
  {
    title: "Role-based permissions",
    description:
      "Granular access controls allow you to assign specific roles to staff members, ensuring they only see what they need to perform their duties.",
    size: "small",
  },
  {
    title: "Encrypted storage",
    description:
      "All sensitive data, including tenant identities and financial records, is encrypted at rest using AES-256 and in transit using TLS 1.3, providing military-grade security.",
    size: "small",
  },
  {
    title: "Rate limiting",
    description:
      "Intelligent rate limiting protects your account from brute-force attacks and ensures consistent performance even during high-traffic periods.",
    size: "small",
  },
  {
    title: "Audit logging",
    description:
      "Comprehensive audit trails track every action taken within your account. Monitor who did what and when, providing complete transparency and accountability.",
    size: "large",
  },
];

// ── Sample tenant/billing data for mockups ─────────────────────────
export const SAMPLE_TENANTS = [
  { name: "Rahul Sharma", room: "Room 204", bed: "Bed B", amount: "₹8,440", status: "Paid" as const },
  { name: "Aman Kumar",   room: "Room 102", bed: "Bed A", amount: "₹7,500", status: "Pending" as const },
  { name: "Priya Singh",  room: "Room 305", bed: "Bed C", amount: "₹9,100", status: "Overdue" as const },
  { name: "Rohit Verma",  room: "Room 101", bed: "Bed A", amount: "₹7,800", status: "Paid" as const },
] as const;
