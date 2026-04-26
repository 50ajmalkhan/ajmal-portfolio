import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { CursorSpotlight } from "@/components/cursor-spotlight";
import { personal } from "@/content/personal";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteUrl = `https://${personal.domain}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${personal.name} — ${personal.title}`,
    template: `%s · ${personal.name}`,
  },
  description: personal.oneLiner,
  keywords: [
    "Muhammad Ajmal Khan",
    "Senior Full Stack Developer",
    "React",
    "TypeScript",
    "Python",
    "FastAPI",
    "AI Engineer",
    "LangChain",
    "RAG",
    "Multi-Agent Systems",
    "OpenAI",
    "Anthropic",
    "Portfolio",
  ],
  authors: [{ name: personal.name, url: siteUrl }],
  creator: personal.name,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${personal.name} — ${personal.title}`,
    description: personal.oneLiner,
    url: siteUrl,
    siteName: personal.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} — ${personal.title}`,
    description: personal.oneLiner,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF7" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
  ],
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personal.name,
  url: siteUrl,
  jobTitle: personal.title,
  email: `mailto:${personal.email}`,
  telephone: personal.phone,
  sameAs: [personal.linkedin, personal.github],
  description: personal.oneLiner,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${grotesk.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <ThemeProvider>
          <ScrollProgress />
          <CursorSpotlight />
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-white"
          >
            Skip to content
          </a>
          <Nav />
          <main id="main">{children}</main>
          <Footer />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
