import Script from 'next/script';
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SavoirLabs - Custom Software & Automation for Growing Businesses",
  description:
    "We build custom software, automate workflows, and implement AI solutions for growing companies. Expert ERPNext implementation, cloud infrastructure, and business automation.",
  metadataBase: new URL('https://savoirlabs.com'),
  alternates: {
    canonical: '/',
  },
  keywords: [
    "SavoirLabs",
    "Custom Software Development",
    "Business Automation",
    "ERPNext Implementation",
    "AI Solutions",
    "Cloud Infrastructure",
    "Workflow Automation",
    "Software Engineering"
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
    title: "SavoirLabs - Custom Software & Automation for Growing Businesses",
    description:
      "We build custom software, automate workflows, and implement AI solutions for growing companies. Expert ERPNext implementation, cloud infrastructure, and business automation.",
    url: 'https://savoirlabs.com',
    type: "website",
    locale: "en_US",
    siteName: "SavoirLabs",
  },
  twitter: {
    card: "summary_large_image",
    title: "SavoirLabs - Custom Software & Automation",
    description:
      "We build custom software, automate workflows, and implement AI solutions for growing companies.",
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
    <html lang="en" className="h-full antialiased">
      <head>
        {/* Google Analytics */}
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

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SavoirLabs",
              "url": "https://savoirlabs.com",
              "logo": "https://savoirlabs.com/favicon.png",
              "description": "Custom software development and business automation for growing companies.",
              "sameAs": [
                "https://www.linkedin.com/company/savoirlabs",
                "https://github.com/savoirlabs",
                "https://twitter.com/savoirlabs"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "info@savoirlabs.com",
                "contactType": "customer service",
                "availableLanguage": "English"
              }
            })
          }}
        />

        {/* Fonts - Modern combination: Space Grotesk + DM Sans */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-dark-navy font-sans">
        {children}
      </body>
    </html>
  );
}
