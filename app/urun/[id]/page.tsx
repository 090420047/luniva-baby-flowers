import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailView } from "../../components/ProductDetailView";
import { productItems, siteName } from "../../site-content";

type PageProps = { params: Promise<{ id: string }> };

export function generateStaticParams() { return productItems.map((_, id) => ({ id: String(id) })); }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = productItems[Number(id)];
  return product
    ? {
        title: `${product.title} | ${siteName}`,
        description: product.summary,
        openGraph: {
          title: `${product.title} | ${siteName}`,
          description: product.summary,
          images: [{ url: product.image, alt: product.title }],
        },
      }
    : { title: siteName };
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  const productIndex = Number(id);
  const product = productItems[productIndex];
  if (!product) notFound();
  return <ProductDetailView product={product} />;
}
