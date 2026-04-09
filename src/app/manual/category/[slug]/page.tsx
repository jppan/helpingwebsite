import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

import { CategoryCard } from "@/components/category-card";
import { GuideCard } from "@/components/guide-card";
import { PageShell, PageSection } from "@/components/layout/page-shell";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { getCategories, getCategoryBySlug, getGuidesByCategory } from "@/lib/content/collections";

export const dynamicParams = false;

export function generateStaticParams() {
  return getCategories().map((category) => ({ slug: category.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    return { title: "Category not found | Rico Survival Manual" };
  }

  return {
    title: `${category.label} | Rico Survival Manual`,
    description: category.shortDescription,
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    notFound();
  }

  const guides = getGuidesByCategory(category.id);
  const siblingCategories = getCategories().filter((entry) => entry.slug !== category.slug).slice(0, 3);

  return (
    <PageShell>
      <MotionReveal>
        <PageSection>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Manual / Category / {category.label}
          </p>
          <SectionHeading
            eyebrow={category.label}
            title={category.shortDescription}
            description="This category page keeps the same calm language as the rest of the manual, but narrows the field so the next step feels obvious."
          />
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="secondary">
              <Link href="/manual">
                Back to docs hub
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/fixes">Common fixes</Link>
            </Button>
          </div>
        </PageSection>
      </MotionReveal>

      <MotionReveal>
        <PageSection>
          <SectionHeading
            eyebrow="Guides"
            title={`Guides in ${category.label}`}
            description="Problem-first titles keep this page practical and easy to scan."
          />
          <div className="grid gap-4 lg:grid-cols-2">
            {guides.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>
        </PageSection>
      </MotionReveal>

      <MotionReveal>
        <PageSection>
          <SectionHeading
            eyebrow="Keep Going"
            title="Nearby categories"
            description="When the symptom is close but not exact, the next category is often enough."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {siblingCategories.map((entry) => (
              <CategoryCard
                key={entry.id}
                category={entry}
                guideCount={getGuidesByCategory(entry.id).length}
                href={`/manual/category/${entry.slug}`}
              />
            ))}
          </div>
        </PageSection>
      </MotionReveal>
    </PageShell>
  );
}
