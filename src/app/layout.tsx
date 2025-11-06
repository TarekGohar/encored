import type { Metadata } from "next";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: {
    default: "Edbattah & Co.",
    template: "%s - Edbattah & Co.",
  },
};

export default async function RootLayout({
  params,
  children,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content="EBC" />
      </head>
      <body className="font-gontserrat">
        <NextIntlClientProvider messages={messages}>
          <Navbar light={false} />
          {children}
          <Footer />
          {/* Team Cleano Backlink */}
          <a
            href="https://teamcleano.com"
            style={{ display: "none" }}
            aria-hidden="true">
            Team Cleano
          </a>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
