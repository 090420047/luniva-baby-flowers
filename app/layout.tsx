import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const host =
    headerList.get("x-forwarded-host") ??
    headerList.get("host") ??
    "localhost:3000";
  const local =
    host.startsWith("localhost") ||
    host.startsWith("127.0.0.1") ||
    host.startsWith("[::1]");
  const protocol = headerList.get("x-forwarded-proto") ?? (local ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: "Luniva Baby & Flowers | Bebek Hediyelikleri ve Hoş Geldin Bebek Modelleri",
    description:
      "Luniva Baby & Flowers için hoş geldin bebek hediyelikleri, isme özel strafor modeller, bebek buketleri, çiçekli aranjmanlar ve WhatsApp sipariş vitrini.",
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon.png", sizes: "512x512", type: "image/png" },
        { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      ],
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    openGraph: {
      title: "Luniva Baby & Flowers | Bebek Hediyelikleri",
      description:
        "Hoş geldin bebek hediyeleri, isme özel strafor modeller, bebek buketleri ve özel gün tasarımları WhatsApp üzerinden sipariş edilir.",
      url: origin,
      siteName: "Luniva Baby & Flowers",
      locale: "tr_TR",
      type: "website",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: "Luniva Baby & Flowers sosyal paylaşım görseli",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Luniva Baby & Flowers | Bebek Hediyelikleri",
      description:
        "Hoş geldin bebek hediyelikleri, bebek buketleri ve çiçekli aranjmanlar için WhatsApp sipariş vitrini.",
      images: ["/og.png"],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
