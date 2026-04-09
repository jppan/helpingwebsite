import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { ChecklistCard } from "@/components/content-blocks/checklist-card";
import { PromptCloud } from "@/components/content-blocks/prompt-cloud";
import { PageIntro } from "@/components/layout/page-intro";
import { PageSection, PageShell } from "@/components/layout/page-shell";
import { GlobalSearchPanel } from "@/components/global-search-panel";
import { MotionReveal } from "@/components/motion-reveal";
import { ProblemChipStrip } from "@/components/problem-chip-strip";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getCommonFixes, getSearchItems, getSymptomGroups } from "@/lib/content/collections";
import { formatMinutes } from "@/lib/utils";

export default function CommonFixesPage() {
  const fixes = getCommonFixes();
  const symptomGroups = getSymptomGroups();

  return (
    <PageShell>
      <MotionReveal>
        <PageIntro
          eyebrow="Common Fixes"
          title="Start with the problems people hit most often."
          description="This page is tuned for speed. It uses real-world problem language instead of technical taxonomy, and it keeps the best entry points close together."
        />
      </MotionReveal>

      <MotionReveal>
        <GlobalSearchPanel
          items={getSearchItems()}
          title="Search common fixes"
          helper="Search using the problem in your own words."
        />
      </MotionReveal>

      <MotionReveal>
        <PageSection>
          <SectionHeading
            eyebrow="Fast Entry"
            title="Most common problems"
            description="These are the fastest front doors for real recurring problems."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {fixes.map((fix) => (
              <Card key={fix.slug} className="h-full">
                <CardHeader className="space-y-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    {formatMinutes(fix.estimatedTimeMinutes)}
                  </p>
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground">{fix.title}</h3>
                  <p className="text-sm leading-7 text-secondary">{fix.summary}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {fix.symptomPhrases.slice(0, 2).map((phrase) => (
                      <span
                        key={phrase}
                        className="rounded-full border border-border bg-panel-strong px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground"
                      >
                        {phrase}
                      </span>
                    ))}
                  </div>
                  <Button asChild variant="secondary">
                    <Link href={`/manual/${fix.linkedGuideSlug}`}>
                      Open fix
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </PageSection>
      </MotionReveal>

      <MotionReveal>
        <PageSection>
          <SectionHeading
            eyebrow="Symptom Language"
            title="Browse by what it feels like"
            description="These prompts are intentionally plain. They are here for the person who knows the problem, not the vocabulary."
          />
          <PromptCloud items={symptomGroups} />
        </PageSection>
      </MotionReveal>

      <MotionReveal>
        <PageSection>
          <SectionHeading
            eyebrow="Quick Strip"
            title="Problem-first shortcuts"
            description="Use these when you want the shortest path into a guide."
          />
          <ProblemChipStrip items={fixes} />
        </PageSection>
      </MotionReveal>

      <MotionReveal>
        <section className="grid gap-4 md:grid-cols-3">
          {[
            ["Restart the app or browser once before escalating."],
            ["Check whether the problem is only happening on one device."],
            ["Use Emergency if passwords, scams, payments, or suspicious pop-ups are involved."],
          ].map((item, index) => (
            <ChecklistCard key={`${index}-${item[0]}`} eyebrow="Try this first" items={item} />
          ))}
        </section>
      </MotionReveal>
    </PageShell>
  );
}
