import Link from "next/link";
import { Siren } from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { EmergencyItem } from "@/types/content";

export function EmergencyCard({ item }: { item: EmergencyItem }) {
  return (
    <div className="h-full transition-transform duration-200 ease-out hover:-translate-y-1">
      <Link href={`/emergency#${item.slug}`} className="block h-full">
        <Card className="h-full border-[color:var(--emergency-border)] bg-[var(--emergency-card)] transition-colors hover:border-[color:var(--emergency-border-strong)]">
          <CardHeader className="space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[color:var(--emergency-border)] bg-[var(--emergency-icon-surface)]">
              <Siren className="h-5 w-5 text-accent" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold tracking-[-0.03em] text-[var(--emergency-text)]">{item.title}</h3>
              <p className="text-sm leading-7 text-[var(--emergency-secondary)]">{item.summary}</p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--emergency-muted)]">{item.severity}</p>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}
