import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Softnex | Partner For Your Digital Future",
  description:
    "Enterprise software company specializing in ERPNext automation, AI systems engineering, high-scale cloud infrastructure, and custom digital solutions.",
  keywords: ["Softnex", "Software House", "ERP Automation", "AI Systems", "Cloud Infrastructure", "Enterprise Web Engineering"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <body className="min-h-full flex flex-col bg-[#050505] text-white selection:bg-[#ff0033] selection:text-white font-sans">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
