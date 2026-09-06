import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Demo 1 - Modern Digital Solutions & Strategy",
  description:
    "Unlocking market potential through targeted keyword growth, strategic positioning, and end-to-end operational intelligence. Demo 1 combines engineering rigor with high-velocity creative problem solving.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
