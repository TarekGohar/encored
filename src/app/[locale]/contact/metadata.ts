import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Encotec | Construction & Renovation Services",
  description:
    "Get in touch with Encotec for your commercial, institutional, or residential construction project. Serving Montreal since 1994 with turn-key and design-build solutions.",
  keywords: [
    "contact Encotec",
    "construction Montreal",
    "renovation services",
    "commercial construction",
    "institutional construction",
    "residential construction",
    "construction quote",
  ],
  openGraph: {
    title: "Contact Encotec - Construction & Renovation Services",
    description:
      "Get in touch with Encotec for your commercial, institutional, or residential construction project. Serving Montreal since 1994.",
    url: "https://encotec.ca/contact",
    siteName: "Encotec",
    images: [
      {
        url: "/images/rooftop/roof.webp",
        width: 1200,
        height: 630,
        alt: "Contact Encotec",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Encotec - Construction & Renovation Services",
    description:
      "Get in touch with Encotec for your commercial, institutional, or residential construction project. Serving Montreal since 1994.",
    images: ["/images/rooftop/roof.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://encotec.ca/contact",
  },
};
