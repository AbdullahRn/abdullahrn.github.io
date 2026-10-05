import type { Metadata } from "next";
import { profile } from "@/data/profile";
import "./globals.css";

const siteUrl = "https://abdullahrn.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Abdullah Rahman — Machine Learning Researcher & Software Engineer", template: "%s — Abdullah Rahman" },
  description: "Portfolio of Abdullah Rahman, a machine learning researcher and CSE undergraduate in Dhaka working across AI research and software engineering.",
  keywords: ["Abdullah Rahman", "Machine Learning", "Artificial Intelligence", "Computer Science", "Research", "Software Engineering"],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Abdullah Rahman — Machine Learning Researcher & Software Engineer",
    description: "Research in machine learning and AI, backed by thoughtful software engineering.",
    siteName: "Abdullah Rahman",
    images: [{ url: "/social-card.svg", width: 1200, height: 630, alt: "Abdullah Rahman portfolio" }],
  },
  twitter: { card: "summary_large_image", title: "Abdullah Rahman", description: "Machine Learning Researcher & Software Engineer", images: ["/social-card.svg"] },
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg" },
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');var p=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.dataset.theme=t||p}catch(e){}})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: siteUrl,
    email: `mailto:${profile.email}`,
    address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "Bangladesh" },
    sameAs: profile.profiles.flatMap((item) => item.url ? [item.url] : []),
    alumniOf: { "@type": "CollegeOrUniversity", name: "Southeast University" },
    knowsAbout: ["Machine Learning", "Artificial Intelligence", "Computer Vision", "Software Engineering"],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
