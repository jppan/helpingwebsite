import Link from "next/link";
import { ArrowRight, BookText, LifeBuoy, ShieldAlert, Sparkles } from "lucide-react";

import { ActionTile } from "@/components/content-blocks/action-tile";
import { EyebrowCard } from "@/components/content-blocks/eyebrow-card";
import { PromptCloud } from "@/components/content-blocks/prompt-cloud";
import { PageSection, PageShell } from "@/components/layout/page-shell";
import { MotionReveal } from "@/components/motion-reveal";
import { GlobalSearchPanel } from "@/components/global-search-panel";
import { GuideCard } from "@/components/guide-card";
import { ImagePlaceholderBlock } from "@/components/image-placeholder-block";
import { CategoryCard } from "@/components/category-card";
import { EmergencyCard } from "@/components/emergency-card";
import { ProblemChipStrip } from "@/components/problem-chip-strip";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  getCategories,
  getEmergencyItems,
  getGuidesByCategory,
  getHomepageFeaturedGuides,
  getHomepageProblemShortcuts,
  getRicoProfile,
  getSearchItems,
} from "@/lib/content/collections";

export default function HomePage() {
  const categories = getCategories();
  const featuredGuides = getHomepageFeaturedGuides();
  const emergencyItems = getEmergencyItems();
  const searchItems = getSearchItems();
  const shortcuts = getHomepageProblemShortcuts();
  const rico = getRicoProfile();

  return (
    <PageShell className="gap-20">
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <MotionReveal>
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                Calm help for hostile tech weather
              </p>
              <h1 className="max-w-4xl text-balance text-5xl font-semibold tracking-[-0.06em] text-foreground sm:text-6xl lg:text-7xl">
                Rico’s survival manual for everyday tech trouble.
              </h1>
              <p className="max-w-2xl text-pretty text-lg leading-8 text-secondary">
                Clear, respectful help for the moments when your Wi-Fi, password, browser, phone, printer, or inbox
                stops cooperating.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild variant="primary" size="lg">
                <Link href="/fixes">
                  Start with common fixes
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/manual">
                  Browse the manual
                  <BookText className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link href="/help">
                  Request help
                  <LifeBuoy className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {["Practical guides", "Fast common fixes", "Emergency routing"].map((item) => (
                <Card key={item} className="bg-panel/70">
                  <CardContent className="pt-6">
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{item}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.08}>
          <ImagePlaceholderBlock
            media={{
              mode: "placeholder",
              label: "BRIGHT RED HERO IMAGE PLACEHOLDER",
              alt: "Bright red placeholder for homepage hero image",
              aspect: "portrait",
            }}
          />
        </MotionReveal>
      </section>

      <MotionReveal>
        <GlobalSearchPanel items={searchItems} />
      </MotionReveal>

      <MotionReveal>
        <PageSection>
          <SectionHeading
            eyebrow="Mission"
            title="Built for real problems, not tech theater."
            description="The site treats Rico as the guide and modern tech as the hostile environment. The tone stays calm, practical, and respectful, especially when the user is under pressure."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                eyebrow: "Plain language",
                title: "Plain language",
                copy: "Problem titles sound like what a stressed person would actually type into search.",
              },
              {
                eyebrow: "Useful under stress",
                title: "Useful under stress",
                copy: "Short sections, numbered steps, and clear fallback paths keep the page usable when patience is low.",
              },
              {
                eyebrow: "Calm and practical",
                title: "Calm and practical",
                copy: "The site avoids blame, jargon, and unnecessary noise so the next action stays obvious.",
              },
            ].map((item) => (
              <EyebrowCard key={item.title} eyebrow={item.eyebrow} copy={item.copy} />
            ))}
          </div>
        </PageSection>
      </MotionReveal>

      <MotionReveal>
        <PageSection>
          <SectionHeading
            eyebrow="Quick Problems"
            title="Start with what went wrong."
            description="Most people arrive here with a problem, not a taxonomy. These shortcuts use plain language on purpose."
          />
          <ProblemChipStrip items={shortcuts} />
        </PageSection>
      </MotionReveal>

      <MotionReveal>
        <section className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="About Rico"
              title="A practical guide, not a performance."
              description={rico.shortBio}
            />
            <div className="space-y-4 text-base leading-8 text-secondary">
              {rico.longBio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <PromptCloud items={rico.values} />
            <Button asChild variant="secondary">
              <Link href="/about">
                Read Rico’s story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <ImagePlaceholderBlock media={rico.portrait} />
        </section>
      </MotionReveal>

      <MotionReveal>
        <PageSection>
          <SectionHeading
            eyebrow="Dashboard"
            title="Browse the manual by category."
            description="The structure stays curated and practical. Categories are stable, problem titles are human, and the cards stay scan-friendly on mobile."
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                guideCount={getGuidesByCategory(category.id).length}
                href={`/manual#${category.slug}`}
              />
            ))}
          </div>
        </PageSection>
      </MotionReveal>

      <MotionReveal>
        <PageSection>
          <SectionHeading
            eyebrow="Featured Guides"
            title="Start here if you want the fastest useful wins."
            description="These are high-value guides chosen because they solve frequent, real-world problems without wasting the reader’s attention."
          />
          <div className="grid gap-4 lg:grid-cols-2">
            {featuredGuides.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>
        </PageSection>
      </MotionReveal>

      <MotionReveal>
        <section className="space-y-6 rounded-[2rem] border border-white/10 bg-[#12151a] p-6 sm:p-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Emergency"
              title="Need the fastest path?"
              description="If something feels urgent, start here. The emergency route strips out clutter and points straight at the situations that need care first."
            />
            <Button asChild variant="emergency">
              <Link href="/emergency">
                <ShieldAlert className="h-4 w-4" />
                Open emergency page
              </Link>
            </Button>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {emergencyItems.map((item) => (
              <EmergencyCard key={item.slug} item={item} />
            ))}
          </div>
        </section>
      </MotionReveal>

      <MotionReveal>
        <section className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Start with common fixes",
              copy: "Use the most frequent real-world problems as the front door.",
              href: "/fixes",
              icon: Sparkles,
            },
            {
              title: "Browse the manual",
              copy: "Read by category when you know roughly what kind of problem you have.",
              href: "/manual",
              icon: BookText,
            },
            {
              title: "Request help",
              copy: "Escalate cleanly when self-service stops being the right move.",
              href: "/help",
              icon: LifeBuoy,
            },
          ].map((cta) => (
            <ActionTile
              key={cta.title}
              title={cta.title}
              description={cta.copy}
              href={cta.href}
              icon={cta.icon}
            />
          ))}
        </section>
      </MotionReveal>
    </PageShell>
  );
}
