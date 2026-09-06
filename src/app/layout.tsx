import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";

export const metadata: Metadata = {
  title: "SavoirLabs | Partner For Your Digital Future",
  description:
    "Enterprise software company specializing in ERPNext automation, AI systems engineering, high-scale cloud infrastructure, and custom digital solutions.",
  keywords: ["SavoirLabs", "Software House", "ERP Automation", "AI Systems", "Cloud Infrastructure", "Enterprise Web Engineering"],
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
