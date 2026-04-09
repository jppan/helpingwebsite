import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageIntro } from "@/components/layout/page-intro";
import { PageShell, PageSection } from "@/components/layout/page-shell";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getFaqItems, getGuideBySlug } from "@/lib/content/collections";

export default function FaqPage() {
  const faqItems = getFaqItems();

  return (
    <PageShell className="max-w-6xl">
      <MotionReveal>
        <PageIntro
          eyebrow="FAQ"
          title="Short answers for the questions people usually ask first."
          description="This page is here for confusion, not emergencies. It clears up the language and the logic of the site without making the user read a long explanation."
        />
      </MotionReveal>

      <MotionReveal>
        <PageSection>
          <SectionHeading
            eyebrow="Common Questions"
            title="Ask the practical thing first"
            description="These answers stay short, plain, and connected to the rest of the manual."
          />
          <div className="grid gap-4">
            {faqItems.map((item) => (
              <Card key={item.question}>
                <CardHeader className="space-y-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Question</p>
                  <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">{item.question}</h2>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm leading-7 text-secondary">{item.answer}</p>
                  {item.relatedGuideSlugs.length ? (
                    <div className="flex flex-wrap gap-3">
                      {item.relatedGuideSlugs
                        .map((slug) => getGuideBySlug(slug))
                        .filter(Boolean)
                        .map((guide) => (
                          <Button key={guide?.slug} asChild variant="ghost" size="sm">
                            <Link href={`/manual/${guide?.slug}`}>
                              {guide?.title}
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </Button>
                        ))}
                    </div>
                  ) : null}
                </CardContent>
              </Card>
            ))}
          </div>
        </PageSection>
      </MotionReveal>
    </PageShell>
  );
}
