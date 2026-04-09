import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { ImagePlaceholderBlock } from "@/components/image-placeholder-block";
import { PromptCloud } from "@/components/content-blocks/prompt-cloud";
import { PageShell } from "@/components/layout/page-shell";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { getRicoProfile } from "@/lib/content/collections";

export default function AboutPage() {
  const profile = getRicoProfile();

  return (
    <PageShell className="max-w-6xl gap-16">
      <MotionReveal>
        <section className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="About Rico"
              title={profile.role}
              description={profile.shortBio}
            />
            <div className="space-y-4 text-base leading-8 text-secondary">
              {profile.longBio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <Button asChild variant="secondary">
              <Link href="/manual">
                Start with the manual
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <ImagePlaceholderBlock media={profile.portrait} />
        </section>
      </MotionReveal>

      <MotionReveal>
        <PromptCloud items={profile.values} />
      </MotionReveal>
    </PageShell>
  );
}
