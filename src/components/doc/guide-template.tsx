import Link from "next/link";
import { ArrowRight, Clock3, ShieldAlert, Wrench } from "lucide-react";
import type { ReactNode } from "react";

import { ImagePlaceholderBlock } from "@/components/image-placeholder-block";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Callout } from "@/components/ui/callout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatMinutes } from "@/lib/utils";
import type { Guide } from "@/types/content";

export function GuideTemplate({
  guide,
  categoryLabel,
  relatedGuideCards,
}: {
  guide: Guide;
  categoryLabel: string;
  relatedGuideCards: ReactNode;
}) {
  return (
    <article className="space-y-10">
      <header className="space-y-6">
        <div className="flex flex-wrap gap-3">
          <Badge>{categoryLabel}</Badge>
          <Badge>{guide.difficulty}</Badge>
          <Badge>{formatMinutes(guide.estimatedTimeMinutes)}</Badge>
          <Badge>{guide.urgency}</Badge>
        </div>

        <div className="space-y-4">
          <h1 className="max-w-4xl text-balance text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
            {guide.title}
          </h1>
          <p className="max-w-3xl text-pretty text-lg leading-8 text-secondary">{guide.summary}</p>
        </div>

        {guide.media?.heroImage ? <ImagePlaceholderBlock media={guide.media.heroImage} /> : null}
      </header>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
        <div className="space-y-10">
          <section className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  What this fixes
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm leading-7 text-secondary">
                  {guide.whatThisFixes.map((item) => (
                    <li key={item} className="list-inside list-disc">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Symptoms</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm leading-7 text-secondary">
                  {guide.symptoms.map((item) => (
                    <li key={item} className="list-inside list-disc">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <ShieldAlert className="h-5 w-5 text-accent" />
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">Before you start</h2>
            </div>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-3 text-sm leading-7 text-secondary">
                  {guide.beforeYouStart.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <Wrench className="h-5 w-5 text-accent" />
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">Steps</h2>
            </div>
            <div className="space-y-6">
              {guide.steps.map((step, index) => (
                <Card key={step.title}>
                  <CardHeader className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/40 bg-accent/10 font-mono text-sm text-accent">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground">{step.title}</h3>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <div className="space-y-4 text-sm leading-7 text-secondary">
                      {step.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    {step.image ? <ImagePlaceholderBlock media={step.image} className="max-w-3xl" /> : null}
                    {step.callouts?.length ? (
                      <div className="space-y-4">
                        {step.callouts.map((callout) => (
                          <Callout key={`${callout.title}-${callout.body}`} tone={callout.tone} title={callout.title}>
                            {callout.body}
                          </Callout>
                        ))}
                      </div>
                    ) : null}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {(guide.tips.length || guide.warnings.length) && (
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">Tips and warnings</h2>
              <div className="grid gap-4">
                {guide.tips.map((tip) => (
                  <Callout key={tip} tone="tip" title="Tip">
                    {tip}
                  </Callout>
                ))}
                {guide.warnings.map((warning) => (
                  <Callout key={warning} tone="warning" title="Warning">
                    {warning}
                  </Callout>
                ))}
              </div>
            </section>
          )}

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">If this didn’t work</h2>
            <Callout tone="next" title={guide.fallback.title}>
              <p>{guide.fallback.body}</p>
            </Callout>
            <Card>
              <CardContent className="pt-6">
                <ol className="space-y-3 text-sm leading-7 text-secondary">
                  {guide.fallback.actions.map((action, index) => (
                    <li key={action} className="flex gap-3">
                      <span className="font-mono text-accent">{index + 1}.</span>
                      <span>{action}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">Related guides</h2>
              <Button asChild variant="ghost" size="sm">
                <Link href="/manual">
                  Browse the manual
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-2">{relatedGuideCards}</div>
          </section>
        </div>

        <aside className="space-y-4 lg:sticky lg:top-24">
          <Card>
            <CardHeader>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Quick facts</p>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-7 text-secondary">
              <div className="flex items-center justify-between gap-4">
                <span>Difficulty</span>
                <span className="font-mono text-foreground">{guide.difficulty}</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between gap-4">
                <span>Estimated time</span>
                <span className="font-mono text-foreground">{formatMinutes(guide.estimatedTimeMinutes)}</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between gap-4">
                <span>Urgency</span>
                <span className="font-mono text-foreground">{guide.urgency}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Need help fast?</p>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-7 text-secondary">
              <p>If the problem feels urgent, use the emergency route before trying random fixes.</p>
              <div className="flex flex-col gap-3">
                <Button asChild variant="emergency">
                  <Link href="/emergency">
                    <ShieldAlert className="h-4 w-4" />
                    Emergency page
                  </Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link href="/help">
                    <Clock3 className="h-4 w-4" />
                    Request help
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
