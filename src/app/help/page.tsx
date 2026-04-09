import { LifeBuoy, ShieldAlert } from "lucide-react";
import Link from "next/link";

import { ActionTile } from "@/components/content-blocks/action-tile";
import { PageIntro } from "@/components/layout/page-intro";
import { PageShell } from "@/components/layout/page-shell";
import { MotionReveal } from "@/components/motion-reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function HelpPage() {
  return (
    <PageShell className="max-w-6xl gap-12">
      <MotionReveal>
        <PageIntro
          eyebrow="Request Help"
          title="Escalate cleanly when self-service stops being useful."
          description="This page is for the moment when the guide got you part of the way, but the problem still needs another person."
        />
      </MotionReveal>

      <MotionReveal>
        <section className="grid gap-4 md:grid-cols-3">
          {[
            "What happened, in plain language",
            "What you already tried",
            "Any account, device, or deadline details that matter",
          ].map((item) => (
            <Card key={item}>
              <CardHeader>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Bring this
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-7 text-secondary">{item}</p>
              </CardContent>
            </Card>
          ))}
        </section>
      </MotionReveal>

      <MotionReveal>
        <section className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <LifeBuoy className="h-5 w-5 text-accent" />
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">Normal help request</h2>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-7 text-secondary">
              <p>Use this path if the issue is confusing, annoying, or blocking progress but not dangerous.</p>
              <Button asChild variant="secondary">
                <Link href="/manual">Return to the manual</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <ShieldAlert className="h-5 w-5 text-accent" />
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">Urgent help</h2>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-7 text-secondary">
              <p>Use the emergency route first if passwords, payment details, scams, or suspicious pop-ups are involved.</p>
              <Button asChild variant="emergency">
                <Link href="/emergency">Open emergency page</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </MotionReveal>

      <MotionReveal>
        <section className="grid gap-4 md:grid-cols-2">
          <ActionTile
            title="Read the FAQ"
            description="Use short answers when the issue is more about understanding the situation than fixing a specific step."
            href="/faq"
            icon={LifeBuoy}
          />
          <ActionTile
            title="Check the glossary"
            description="Use the glossary when a word like browser, storage, or password reset is getting in the way."
            href="/glossary"
            icon={ShieldAlert}
          />
        </section>
      </MotionReveal>
    </PageShell>
  );
}
