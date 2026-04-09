import Link from "next/link";
import { ArrowRight, BookOpen, Clock3 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { LearningStage } from "@/types/learning";

export function StageCard({
  stage,
  articleCount,
}: {
  stage: LearningStage;
  articleCount: number;
}) {
  return (
    <Card className="learn-stage-surface relative overflow-hidden border-accent/15">
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <CardHeader className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 font-mono text-sm text-accent">
            {stage.order}
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge>{stage.duration}</Badge>
            <Badge>{articleCount} articles</Badge>
          </div>
        </div>
        <div className="space-y-2">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent/90">{stage.strapline}</p>
          <h3 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">{stage.title}</h3>
          <p className="max-w-3xl text-sm leading-7 text-secondary">{stage.summary}</p>
        </div>
      </CardHeader>

      <CardContent className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">By the end</p>
          <ul className="space-y-3 text-sm leading-7 text-secondary">
            {stage.outcomes.map((outcome) => (
              <li key={outcome} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="learn-soft-panel space-y-4 rounded-[1.5rem] border p-5">
          <div className="space-y-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Support stack</p>
            <div className="space-y-3">
              {stage.resourceLinks.map((resource) => (
                <a
                  key={resource.href}
                  href={resource.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-2xl border border-border/80 bg-panel/70 p-4 transition-colors hover:border-accent/40"
                >
                  <p className="text-sm font-semibold text-foreground">{resource.title}</p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    {resource.source} / {resource.kind}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-secondary">{resource.description}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild variant="primary" size="sm">
              <Link href={`#${stage.id}`}>
                <BookOpen className="h-4 w-4" />
                Open phase articles
              </Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link href={`#${stage.id}`}>
                <Clock3 className="h-4 w-4" />
                Stay in sequence
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
