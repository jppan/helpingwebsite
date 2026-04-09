import Link from "next/link";

import { PageIntro } from "@/components/layout/page-intro";
import { PageShell, PageSection } from "@/components/layout/page-shell";
import { MotionReveal } from "@/components/motion-reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getGlossaryTerms, getGuideBySlug } from "@/lib/content/collections";

export default function GlossaryPage() {
  const terms = getGlossaryTerms();

  return (
    <PageShell className="max-w-6xl">
      <MotionReveal>
        <PageIntro
          eyebrow="Glossary"
          title="Simple definitions for words that tend to cause more trouble than they should."
          description="This glossary explains the terms in the same voice as the manual: plain language first, extra detail only when it helps."
        />
      </MotionReveal>

      <MotionReveal>
        <PageSection className="grid gap-4">
          {terms.map((term) => (
            <Card key={term.slug} id={term.slug} className="scroll-mt-24">
              <CardHeader className="space-y-3">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Term</p>
                <h2 className="text-3xl font-semibold tracking-[-0.04em] text-foreground">{term.term}</h2>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-7 text-secondary">{term.plainDefinition}</p>
                {term.relatedGuideSlugs.length ? (
                  <div className="flex flex-wrap gap-3">
                    {term.relatedGuideSlugs
                      .map((slug) => getGuideBySlug(slug))
                      .filter(Boolean)
                      .map((guide) => (
                        <Button key={guide?.slug} asChild variant="ghost" size="sm">
                          <Link href={`/manual/${guide?.slug}`}>{guide?.title}</Link>
                        </Button>
                      ))}
                  </div>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </PageSection>
      </MotionReveal>
    </PageShell>
  );
}
