import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InfoPageView } from "../components/InfoPageView";
import { infoPages, siteName } from "../site-content";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return Object.keys(infoPages).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = infoPages[slug];

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

export default async function InfoRoute({ params }: PageProps) {
  const { slug } = await params;
  const page = infoPages[slug];

  if (!page) {
    notFound();
  }

  return <InfoPageView page={page} />;
}
