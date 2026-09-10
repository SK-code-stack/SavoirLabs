import type { Metadata } from "next";
import FAQClient from "@/components/FAQClient";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | SavoirLabs",
  description: "Clear answers to your technical, architectural, and operational questions about SavoirLabs enterprise software engineering services.",
  metadataBase: new URL('https://savoirlabs.com'),
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: "Frequently Asked Questions | SavoirLabs",
    description: "Clear answers to your technical, architectural, and operational questions about SavoirLabs enterprise software engineering services.",
    url: 'https://savoirlabs.com/faq',
    type: "website",
  },
};

export default function FAQPage() {
  return (
    <>
      {/* FAQ Schema Markup for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is Intelligent Process Automation (IPA) and how does it differ from standard RPA?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Traditional Robotic Process Automation (RPA) strictly follows rigid, rule-based scripts, whereas Intelligent Process Automation (IPA) integrates Machine Learning and AI to parse unstructured documents and self-correct."
                }
              },
              {
                "@type": "Question",
                "name": "Why does SavoirLabs specialize in ERPNext for enterprise automation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ERPNext provides an open-source, highly modular framework built on Python and MariaDB, allowing total ownership, custom DocType engineering, and direct API integrations at a fraction of the cost."
                }
              },
              {
                "@type": "Question",
                "name": "Can SavoirLabs deploy custom LLMs and AI models on private enterprise servers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We build and deploy fine-tuned Large Language Models (LLMs), RAG knowledge engines, and predictive ML models on your private cloud infrastructure."
                }
              }
            ]
          })
        }}
      />

      {/* Render the interactive FAQ client component */}
      <FAQClient />
    </>
  );
}
