import Link from "next/link";
import { ArrowRight, BookOpen, Clock3, ExternalLink, Layers3, Route } from "lucide-react";
import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatMinutes } from "@/lib/utils";
import type { TechArticle } from "@/types/learning";

export function ArticleTemplate({
  article,
  stageTitle,
  relatedArticleCards,
}: {
  article: TechArticle;
  stageTitle: string;
  relatedArticleCards: ReactNode;
}) {
  return (
    <article className="space-y-10">
      <header className="space-y-6">
        <div className="flex flex-wrap gap-3">
          <Badge>{article.category}</Badge>
          <Badge>{article.difficulty}</Badge>
          <Badge>{formatMinutes(article.readingTimeMinutes)}</Badge>
          <Badge>{stageTitle}</Badge>
        </div>

        <div className="space-y-4">
          <h1 className="max-w-4xl text-balance text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
            {article.title}
          </h1>
          <p className="max-w-3xl text-pretty text-lg leading-8 text-secondary">{article.summary}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {article.overview.map((paragraph) => (
            <Card
              key={paragraph}
              className="border-accent/15 bg-[linear-gradient(180deg,rgba(110,231,242,0.08),rgba(17,19,21,0.9)_70%)]"
            >
              <CardContent className="pt-6 text-sm leading-7 text-secondary">{paragraph}</CardContent>
            </Card>
          ))}
        </div>
      </header>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
        <div className="space-y-8">
          <section className="space-y-5">
            <div className="flex items-center gap-3">
              <Layers3 className="h-5 w-5 text-accent" />
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">Core ideas</h2>
            </div>
            <div className="space-y-5">
              {article.sections.map((section) => (
                <Card key={section.title}>
                  <CardHeader className="space-y-2">
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground">{section.title}</h3>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm leading-7 text-secondary">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {section.bullets?.length ? (
                      <ul className="space-y-3">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <BookOpen className="h-5 w-5 text-accent" />
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">Practice drills</h2>
            </div>
            <Card>
              <CardContent className="pt-6">
                <ol className="space-y-3 text-sm leading-7 text-secondary">
                  {article.practice.map((item, index) => (
                    <li key={item} className="flex gap-3">
                      <span className="font-mono text-accent">{index + 1}.</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <ExternalLink className="h-5 w-5 text-accent" />
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">Docs and references</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {article.resourceLinks.map((resource) => (
                <a
                  key={resource.href}
                  href={resource.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-2xl border border-border bg-panel shadow-[var(--shadow-strong)] transition-colors hover:border-accent/40"
                >
                  <div className="space-y-2 p-6">
                    <div className="flex flex-wrap gap-2">
                      <Badge>{resource.source}</Badge>
                      <Badge>{resource.kind}</Badge>
                    </div>
                    <h3 className="text-lg font-semibold tracking-[-0.03em] text-foreground">{resource.title}</h3>
                    <p className="text-sm leading-7 text-secondary">{resource.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">Related articles</h2>
              <Button asChild variant="ghost" size="sm">
                <Link href="/learn">
                  Browse the pathway
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-2">{relatedArticleCards}</div>
          </section>
        </div>

        <aside className="space-y-4 lg:sticky lg:top-24">
          <Card>
            <CardHeader>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Quick facts</p>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-7 text-secondary">
              <div className="flex items-center justify-between gap-4">
                <span>Stage</span>
                <span className="font-mono text-right text-foreground">{stageTitle}</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between gap-4">
                <span>Category</span>
                <span className="font-mono text-right text-foreground">{article.category}</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between gap-4">
                <span>Reading time</span>
                <span className="font-mono text-foreground">{formatMinutes(article.readingTimeMinutes)}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Next move</p>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-7 text-secondary">
              <p>Stay in sequence. Read the article, do one drill, then move forward with proof instead of vibes.</p>
              <div className="flex flex-col gap-3">
                <Button asChild variant="primary">
                  <Link href="/learn">
                    <Route className="h-4 w-4" />
                    Back to pathway
                  </Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link href="/manual">
                    <Clock3 className="h-4 w-4" />
                    Return to manual
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </article>
  );
}
