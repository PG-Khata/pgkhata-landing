import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PGKhata | Rent Collection Without the Chaos",
  description:
    "PGKhata is free PG management software for Indian PG owners to manage tenants, billing, payments, expenses and properties.",
  keywords: [
    "PG management software",
    "PG rent management",
    "hostel management software",
    "PG rent collection",
    "tenant management software India",
    "PG billing software",
    "PG owner software",
    "free PG software",
  ],
  authors: [{ name: "PGKhata" }],
  creator: "PGKhata",
  publisher: "PGKhata",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://pgkhata.com",
    siteName: "PGKhata",
    title: "PGKhata | Rent Collection Without the Chaos",
    description:
      "Free PG management software for Indian PG owners. Manage tenants, billing, payments and properties.",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "PGKhata - Rent Collection Without the Chaos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PGKhata | Rent Collection Without the Chaos",
    description:
      "Free PG management software for Indian PG owners. Manage tenants, billing, payments and properties.",
    images: ["/og"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  metadataBase: new URL("https://pgkhata.com"),
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const directionContract = `<!--
THESIS: PGKhata is the first-of-month ledger; it refuses a generic feature-card landing page.
OWN-WORLD: Warm paper, ledger green, serif promises, sans-serif operations, ruled rows and status marks.
STORY: See tenant to bill to WhatsApp to payment; believe the free, honest promise; start.
FIRST VIEWPORT: Centered promise and action above one wide continuous four-stage workflow.
FORM: Continuous billing flow, candidate position 5, seed key 9f70f81c.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`;

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html
      lang="en-IN"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#faf9f8] text-[#1a1c1c] antialiased">
        <div hidden aria-hidden="true" dangerouslySetInnerHTML={{ __html: directionContract }} />
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-md bg-[#154212] px-4 py-3 text-sm font-semibold text-white transition-transform focus:translate-y-0"
        >
          Skip to main content
        </a>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FT9H4822P8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FT9H4822P8');
          `}
        </Script>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "yg9fw8vxas");
          `}
        </Script>
      </body>
    </html>
  );
}
