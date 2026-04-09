import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { CategoryCard } from "@/components/category-card";
import { PromptCloud } from "@/components/content-blocks/prompt-cloud";
import { PageIntro } from "@/components/layout/page-intro";
import { PageSection, PageShell } from "@/components/layout/page-shell";
import { GlobalSearchPanel } from "@/components/global-search-panel";
import { GuideCard } from "@/components/guide-card";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import {
  getCategories,
  getDocsHubPriorityGuides,
  getGuidesByCategory,
  getHighPriorityGuides,
  getSearchItems,
  getSymptomGroups,
} from "@/lib/content/collections";

export default function DocsHubPage() {
  const categories = getCategories();
  const featuredGuides = getDocsHubPriorityGuides();
  const priorityGuides = getHighPriorityGuides().slice(0, 4);
  const searchItems = getSearchItems();
  const symptomGroups = getSymptomGroups();

  return (
    <PageShell>
      <MotionReveal>
        <PageIntro
          eyebrow="Docs Hub"
          title="The manual starts with search, then gives structure if you need it."
          description="Use symptom language first. Browse categories when you know the shape of the problem. Every guide is written to stay readable under stress."
        />
      </MotionReveal>

      <MotionReveal>
        <GlobalSearchPanel
          items={searchItems}
          title="Search the manual"
          helper="Try what you see, like “wifi says connected” or “printer offline.”"
        />
      </MotionReveal>

      <MotionReveal>
        <PageSection>
          <SectionHeading
            eyebrow="Browse"
            title="Browse by category"
            description="Stable categories keep the site curated instead of turning it into a blog archive."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                guideCount={getGuidesByCategory(category.id).length}
                href={`/manual/category/${category.slug}`}
              />
            ))}
          </div>
        </PageSection>
      </MotionReveal>

      <MotionReveal>
        <PageSection>
          <SectionHeading
            eyebrow="Featured"
            title="High-value guides"
            description="These guides solve frequent problems and are written for quick wins."
          />
          <div className="grid gap-4 lg:grid-cols-2">
            {featuredGuides.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>
        </PageSection>
      </MotionReveal>

      <MotionReveal>
        <PageSection>
          <SectionHeading
            eyebrow="Priority"
            title="Useful when the user is tired, rushed, or not sure what to call the problem."
            description="These cards keep the language practical and scan-friendly."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {priorityGuides.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} compact />
            ))}
          </div>
        </PageSection>
      </MotionReveal>

      <MotionReveal>
        <PageSection>
          <SectionHeading
            eyebrow="Not Sure?"
            title="Start with the symptom"
            description="These are not strict filters. They are plain-language prompts for people who only know what feels broken."
          />
          <PromptCloud items={symptomGroups} />
        </PageSection>
      </MotionReveal>

      <section className="space-y-12">
        {categories.map((category) => {
          const guides = getGuidesByCategory(category.id);
          if (!guides.length) return null;

          return (
            <MotionReveal key={category.id}>
              <section className="space-y-6">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <SectionHeading
                    eyebrow={category.label}
                    title={category.shortDescription}
                    description={`Browse the ${category.label.toLowerCase()} guides collected for Rico’s manual.`}
                  />
                  <Button asChild variant="ghost">
                    <Link href={`/manual/category/${category.slug}`}>
                      Open category page
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                  {guides.map((guide) => (
                    <GuideCard key={guide.slug} guide={guide} />
                  ))}
                </div>
              </section>
            </MotionReveal>
          );
        })}
      </section>
    </PageShell>
  );
}
