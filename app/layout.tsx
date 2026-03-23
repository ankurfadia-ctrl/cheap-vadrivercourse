import type { Metadata } from "next";
import "./globals.css";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: SITE.siteTitle,
  description: SITE.metaDescription,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
  <head>
    <meta name="google-site-verification" content="7zbnhS7OsJE6waxkAIGb9zrZQxU9xIdN4sgZyusoIec" />" />
  </head>
      <body>{children}</body>
    </html>
  );
}