import "@/app/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="apple-mobile-web-app-title" content="Encotec" />

      <body className="!font-gontserrat">{children}</body>
    </html>
  );
}
