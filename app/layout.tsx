import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const host =
    headerList.get("x-forwarded-host") ??
    headerList.get("host") ??
    "localhost:3000";
  const isLocalHost =
    host.startsWith("localhost") ||
    host.startsWith("127.0.0.1") ||
    host.startsWith("[::1]");
  const protocol =
    headerList.get("x-forwarded-proto") ?? (isLocalHost ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: "Luniva Baby & Flowers | WhatsApp Sipariş",
    description:
      "Luniva Baby & Flowers için bebek hediyelikleri, çiçekli aranjmanlar, WhatsApp sipariş ve Instagram vitrini.",
    icons: {
      icon: [
        {
          url: "/favicon.ico?v=2",
          sizes: "any",
        },
        {
          url: "/favicon.png?v=2",
          sizes: "512x512",
          type: "image/png",
        },
      ],
      shortcut: "/favicon.ico?v=2",
      apple: "/favicon.png?v=2",
    },
    openGraph: {
      title: "Luniva Baby & Flowers",
      description:
        "Hoşgeldin Bebek aranjmanları ve çiçekli hediye tasarımları WhatsApp üzerinden sipariş edilir.",
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
      title: "Luniva Baby & Flowers",
      description:
        "Bebek hediyelikleri ve çiçekli aranjmanlar için WhatsApp sipariş vitrini.",
      images: ["/og.png"],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
