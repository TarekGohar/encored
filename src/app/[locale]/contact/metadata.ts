import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Fluent | Let's Start the Conversation",
  description: "Whether you're a founder exploring the next chapter for your company or a professional interested in opportunities with Fluent, we'd love to hear from you.",
  keywords: ["contact Fluent", "software acquisitions", "M&A opportunities", "careers", "acquisitions", "business inquiries"],
  openGraph: {
    title: "Contact Fluent - Let's Start the Conversation",
    description:
      "Whether you're a founder exploring the next chapter for your company or a professional interested in opportunities with Fluent, we'd love to hear from you.",
    url: "https://fluentsoftwaregroup.com/contact",
    siteName: "Fluent",
    images: [
      {
        url: "/contact-og-image.webp",
        width: 1200,
        height: 630,
        alt: "Contact Fluent",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Fluent - Let's Start the Conversation",
    description:
      "Whether you're a founder exploring the next chapter for your company or a professional interested in opportunities with Fluent, we'd love to hear from you.",
    images: ["/contact-twitter-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://fluentsoftwaregroup.com/contact",
  },
}; 