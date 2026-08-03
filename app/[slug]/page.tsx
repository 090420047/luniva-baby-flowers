import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InfoPageView } from "../components/InfoPageView";
import { ProductCategoryView } from "../components/ProductCategoryView";
import {
  infoPages,
  productCategories,
  productCategoryMap,
  siteName,
  type InfoPageSlug,
  type ProductCategorySlug,
} from "../site-content";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  const infoSlugs = Object.keys(infoPages).map((slug) => ({ slug }));
  const categorySlugs = productCategories.map((category) => ({
    slug: category.slug,
  }));

  return [...infoSlugs, ...categorySlugs];
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  if (slug in productCategoryMap) {
    const category = productCategoryMap[slug as ProductCategorySlug];

    return {
      title: `${category.title} | ${siteName}`,
      description: category.description,
    };
  }

  const page = infoPages[slug as InfoPageSlug];

  if (!page) {
    return {
      title: siteName,
    };
  }

  return {
    title: `${page.title} | ${siteName}`,
    description: page.intro,
  };
}

export default async function DynamicRoute({ params }: PageProps) {
  const { slug } = await params;

  if (slug in productCategoryMap) {
    return <ProductCategoryView slug={slug as ProductCategorySlug} />;
  }

  const page = infoPages[slug as InfoPageSlug];

  if (!page) {
    notFound();
  }

  return <InfoPageView page={page} />;
}
