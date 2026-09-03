import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "SavoirLabs | Partner For Your Digital Future",
  description:
    "Enterprise software company specializing in ERPNext automation, AI systems engineering, high-scale cloud infrastructure, and custom digital solutions.",
  keywords: ["SavoirLabs", "Software House", "ERP Automation", "AI Systems", "Cloud Infrastructure", "Enterprise Web Engineering"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`h-full antialiased dark ${outfit.variable}`}>
      <body className={`min-h-full flex flex-col bg-[#050505] text-white selection:bg-[#ff0033] selection:text-white ${outfit.className}`}>
        <Preloader />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
