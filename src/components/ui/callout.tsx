import { AlertTriangle, Info, Lightbulb, MoveRight, ShieldAlert } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import type { CalloutTone } from "@/types/content";

const toneClasses: Record<CalloutTone, string> = {
  tip: "border-accent/45 bg-accent/8",
  warning: "border-[#71613d] bg-[#211c12]",
  "good-to-know": "border-border bg-panel-strong",
  stop: "border-[#a88989] bg-[#241515]",
  next: "border-accent/45 bg-[#0f181b]",
};

const toneIcons = {
  tip: Lightbulb,
  warning: AlertTriangle,
  "good-to-know": Info,
  stop: ShieldAlert,
  next: MoveRight,
};

export function Callout({
  tone,
  title,
  children,
}: {
  tone: CalloutTone;
  title: string;
  children: ReactNode;
}) {
  const Icon = toneIcons[tone];

  return (
    <div className={cn("rounded-2xl border p-4", toneClasses[tone])}>
      <div className="mb-2 flex items-center gap-2">
        <Icon className="h-4 w-4 text-foreground" />
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{title}</p>
      </div>
      <div className="text-sm leading-7 text-secondary">{children}</div>
    </div>
  );
}
