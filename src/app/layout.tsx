import Script from 'next/script';
import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";

export const metadata: Metadata = {
  title: "SavoirLabs | Enterprise Software, ERPNext & AI Engineering",
  description:
    "SavoirLabs is a premier enterprise software house specializing in ERPNext automation, AI systems engineering, cloud infrastructure & custom digital solutions.",
  metadataBase: new URL('https://savoirlabs.com'),
  alternates: {
    canonical: '/',
  },
  keywords: [
    "SavoirLabs",
    "Enterprise Software House",
    "ERPNext Automation",
    "AI Systems Engineering",
    "Cloud Infrastructure",
    "Custom Software Development",
    "Web App Development",
    "Digital Transformation"
  ],
  authors: [{ name: "SavoirLabs" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "SavoirLabs | Enterprise Software, ERPNext & AI Engineering",
    description:
      "SavoirLabs is a premier enterprise software house specializing in ERPNext automation, AI systems engineering, cloud infrastructure & custom digital solutions.",
    url: 'https://savoirlabs.com',
    type: "website",
    locale: "en_US",
    siteName: "SavoirLabs",
  },
  twitter: {
    card: "summary_large_image",
    title: "SavoirLabs | Enterprise Software, ERPNext & AI Engineering",
    description:
      "SavoirLabs is a premier enterprise software house specializing in ERPNext automation, AI systems engineering, cloud infrastructure & custom digital solutions.",
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <head>
        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XJ4DV9Z4Y2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XJ4DV9Z4Y2');
          `}
        </Script>

        {/* Advanced SEO: Organization Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SavoirLabs",
              "url": "https://savoirlabs.com",
              "logo": "https://savoirlabs.com/favicon.png",
              "sameAs": [
                "https://www.linkedin.com/company/savoirlabs",
                "https://www.instagram.com/savoirlabs"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "English"
              }
            })
          }}
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        
        {/* Preloader guard: hide body before React mounts to prevent flash of page content */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (!sessionStorage.getItem('svl_preloader_done')) {
                  document.documentElement.style.visibility = 'hidden';
                }
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#050505] text-white selection:bg-[#ff0033] selection:text-white font-sans">
        <Preloader />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
