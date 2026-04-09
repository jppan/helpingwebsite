import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { GuideTemplate } from "@/components/doc/guide-template";
import { GuideCard } from "@/components/guide-card";
import {
  getCategories,
  getCategoryById,
  getGuideBySlug,
  getGuides,
  getRelatedGuides,
} from "@/lib/content/collections";

export const dynamicParams = false;

export function generateStaticParams() {
  return getGuides().map((guide) => ({ slug: guide.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const guide = getGuideBySlug(params.slug);

  if (!guide) {
    return {
      title: "Guide not found | Rico Survival Manual",
    };
  }

  return {
    title: `${guide.title} | Rico Survival Manual`,
    description: guide.summary,
  };
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const guide = getGuideBySlug(params.slug);

  if (!guide) {
    notFound();
  }

  const category = getCategoryById(guide.category);
  const relatedGuides = getRelatedGuides(guide);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mb-8">
        <Link href="/manual" className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          Manual / {category?.label ?? "Guide"}
        </Link>
      </div>

      <GuideTemplate
        guide={guide}
        categoryLabel={category?.label ?? guide.category}
        relatedGuideCards={relatedGuides.map((relatedGuide) => (
          <GuideCard key={relatedGuide.slug} guide={relatedGuide} compact />
        ))}
      />
    </div>
  );
}
