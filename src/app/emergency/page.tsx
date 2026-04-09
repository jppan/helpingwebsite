import { ShieldAlert } from "lucide-react";
import Link from "next/link";

import { ChecklistCard } from "@/components/content-blocks/checklist-card";
import { PageIntro } from "@/components/layout/page-intro";
import { PageShell } from "@/components/layout/page-shell";
import { EmergencyCard } from "@/components/emergency-card";
import { ImagePlaceholderBlock } from "@/components/image-placeholder-block";
import { MotionReveal } from "@/components/motion-reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getEmergencyItems, getGuideBySlug } from "@/lib/content/collections";

export default function EmergencyPage() {
  const emergencyItems = getEmergencyItems();

  return (
    <PageShell>
      <MotionReveal>
        <section className="space-y-8 rounded-[2rem] border border-white/10 bg-[#12151a] p-6 sm:p-8">
          <PageIntro
            eyebrow="Emergency"
            title="Start here if something feels urgent."
            description="This page strips out clutter. Use the oversized choices below when the problem involves scams, lockouts, suspicious pop-ups, or anything that feels wrong right now."
          />
          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="grid gap-4 md:grid-cols-2">
              {emergencyItems.map((item) => (
                <EmergencyCard key={item.slug} item={item} />
              ))}
            </div>
            <ImagePlaceholderBlock
              media={{
                mode: "placeholder",
                label: "BRIGHT RED EMERGENCY IMAGE PLACEHOLDER",
                alt: "Bright red placeholder for emergency hero image",
                aspect: "portrait",
              }}
            />
          </div>
        </section>
      </MotionReveal>

      <MotionReveal>
        <section className="grid gap-4 md:grid-cols-2">
          <ChecklistCard
            eyebrow="Do this first"
            items={[
              "Pause before clicking more things.",
              "Use official websites and apps only.",
              "If a message is asking for payment or passwords, slow down and verify first.",
            ]}
          />
          <ChecklistCard
            eyebrow="Do not do this"
            items={[
              "Do not call numbers from pop-ups.",
              "Do not install random cleanup tools.",
              "Do not keep guessing passwords until an account locks harder.",
            ]}
          />
        </section>
      </MotionReveal>

      <section className="space-y-8">
        {emergencyItems.map((item) => (
          <MotionReveal key={item.slug}>
            <section id={item.slug} className="scroll-mt-24 rounded-[2rem] border border-border bg-panel p-6 sm:p-8">
              <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      {item.severity} priority
                    </p>
                    <h2 className="text-3xl font-semibold tracking-[-0.04em] text-foreground">{item.title}</h2>
                    <p className="max-w-3xl text-base leading-8 text-secondary">{item.summary}</p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <Card className="bg-panel-strong">
                      <CardHeader>
                        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                          Immediate actions
                        </p>
                      </CardHeader>
                      <CardContent className="space-y-3 text-sm leading-7 text-secondary">
                        {item.immediateActions.map((action) => (
                          <p key={action}>{action}</p>
                        ))}
                      </CardContent>
                    </Card>
                    <Card className="bg-panel-strong">
                      <CardHeader>
                        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                          Do not do
                        </p>
                      </CardHeader>
                      <CardContent className="space-y-3 text-sm leading-7 text-secondary">
                        {item.doNotDo.map((rule) => (
                          <p key={rule}>{rule}</p>
                        ))}
                      </CardContent>
                    </Card>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    {item.nextGuideSlugs
                      .map((slug) => getGuideBySlug(slug))
                      .filter(Boolean)
                      .map((guide) => (
                        <Card key={guide?.slug}>
                          <CardHeader>
                            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                              Next guide
                            </p>
                            <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground">{guide?.title}</h3>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <p className="text-sm leading-7 text-secondary">{guide?.summary}</p>
                            {guide ? (
                              <Button asChild variant="secondary">
                                <Link href={`/manual/${guide.slug}`}>Open guide</Link>
                              </Button>
                            ) : null}
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <ImagePlaceholderBlock media={item.image} />
                  <Card className="bg-panel-strong">
                    <CardHeader>
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                        Escalate if needed
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-4 text-sm leading-7 text-secondary">
                      <p>
                        If this involves money, identity, or a shared work or school account, bring another person in sooner rather than later.
                      </p>
                      <Button asChild variant="emergency" className="w-full">
                        <Link href="/help">
                          <ShieldAlert className="h-4 w-4" />
                          Request help
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>
          </MotionReveal>
        ))}
      </section>
    </PageShell>
  );
}
