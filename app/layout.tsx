import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const host =
    headerList.get("x-forwarded-host") ??
    headerList.get("host") ??
    "localhost:3000";
  const protocol = headerList.get("x-forwarded-proto") ?? "https";
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: "Luniva Baby & Flowers | WhatsApp Sipariş",
    description:
      "Luniva Baby & Flowers için bebek hediyelikleri, çiçekli aranjmanlar, WhatsApp sipariş ve Instagram vitrini.",
    icons: {
      icon: "/luniva/logo-board.png",
      shortcut: "/luniva/logo-board.png",
      apple: "/luniva/logo-board.png",
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
