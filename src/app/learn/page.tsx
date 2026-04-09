import Link from "next/link";
import { ArrowRight, BookOpen, Compass, ExternalLink, Layers3, Route } from "lucide-react";

import { ArticleCard } from "@/components/tech/article-card";
import { StageCard } from "@/components/tech/stage-card";
import { PageSection, PageShell } from "@/components/layout/page-shell";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getLearningStages, getTechArticles, getTechArticlesByStage } from "@/lib/content/learning";

export default function LearnPage() {
  const stages = getLearningStages();
  const articles = getTechArticles();
  const firstStage = stages[0];

  return (
    <PageShell className="gap-20">
      <MotionReveal>
        <section
          id="top"
          className="learn-hero-surface relative overflow-hidden rounded-[2.5rem] border border-accent/15 p-6 sm:p-8 lg:p-12"
        >
          <div className="learn-grid-overlay pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(circle_at_top_left,black,transparent_72%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <Badge>Pathway</Badge>
                <Badge>{stages.length} phases</Badge>
                <Badge>{articles.length} articles</Badge>
              </div>
              <div className="space-y-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent/90">
                  A map for Rico to get technically dangerous in the useful way
                </p>
                <h1 className="max-w-4xl text-balance text-5xl font-semibold tracking-[-0.06em] text-foreground sm:text-6xl">
                  Follow the path from basic fluency to real technical judgment.
                </h1>
                <p className="max-w-3xl text-pretty text-lg leading-8 text-secondary">
                  This section is not a random article pile. It sequences the fundamentals, points to high-value
                  documentation, and gives Rico a practical route through APIs, IDEs, web design, cybersecurity, and
                  the rest of the stack.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild variant="primary" size="lg">
                  <Link href={`#${firstStage?.id ?? "baseline-systems"}`}>
                    Start phase 1
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/manual">
                    Keep Rico’s manual nearby
                    <BookOpen className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {[
                {
                  title: "Sequence over chaos",
                  copy: "Each phase builds a clearer model of how software, tooling, and systems fit together.",
                },
                {
                  title: "Docs attached",
                  copy: "Every major topic links outward to documentation, references, and course material worth keeping.",
                },
                {
                  title: "Practice included",
                  copy: "The articles push Rico to verify understanding through drills, not just reading.",
                },
              ].map((item) => (
                <Card key={item.title} className="learn-soft-panel">
                  <CardContent className="pt-6">
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      {item.title}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-secondary">{item.copy}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </MotionReveal>

      <MotionReveal>
        <PageSection>
          <SectionHeading
            eyebrow="How To Use It"
            title="Read in sequence, but treat each phase like a working checkpoint."
            description="Rico should not sprint through all twenty articles in one pass. A better rhythm is one phase, one small project, then another phase."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                icon: Compass,
                title: "Learn the model",
                copy: "Start with the phase summary and the first article so the next topics have context instead of trivia.",
              },
              {
                icon: Layers3,
                title: "Do one drill",
                copy: "Each article includes practical work. One real drill teaches more than five passive tabs.",
              },
              {
                icon: ExternalLink,
                title: "Keep the docs open",
                copy: "Use the linked documentation as the reference shelf Rico returns to after the overview clicks.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <Card key={item.title} className="border-accent/10 bg-panel/85">
                  <CardHeader className="space-y-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-accent/25 bg-accent/10">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground">{item.title}</h3>
                      <p className="text-sm leading-7 text-secondary">{item.copy}</p>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </PageSection>
      </MotionReveal>

      <section className="relative space-y-6">
        <div className="learn-rail hidden lg:absolute lg:bottom-0 lg:left-10 lg:top-0 lg:block lg:w-px" />
        {stages.map((stage, index) => (
          <MotionReveal key={stage.id} delay={index * 0.04}>
            <div className="relative lg:pl-20">
              <StageCard stage={stage} articleCount={getTechArticlesByStage(stage.id).length} />
            </div>
          </MotionReveal>
        ))}
      </section>

      <section className="space-y-12">
        {stages.map((stage, index) => {
          const stageArticles = getTechArticlesByStage(stage.id);

          return (
            <MotionReveal key={stage.id} delay={index * 0.04}>
              <section id={stage.id} className="space-y-6 scroll-mt-24">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <SectionHeading
                    eyebrow={stage.title}
                    title={stage.strapline}
                    description={stage.summary}
                  />
                  <Button asChild variant="ghost">
                    <Link href="#top">
                      Back to top
                      <Route className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                  {stageArticles.map((article) => (
                    <ArticleCard key={article.slug} article={article} />
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
