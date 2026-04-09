import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import type { CommonFix } from "@/types/content";

export function ProblemChipStrip({ items }: { items: CommonFix[] }) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2">
      {items.map((item) => (
        <Link
          key={item.slug}
          href={`/manual/${item.linkedGuideSlug}`}
          className="shrink-0 rounded-full border border-border bg-panel-strong px-4 py-3 text-sm text-foreground transition-colors hover:border-accent/40 hover:text-accent"
        >
          {item.title}
        </Link>
      ))}
      <Badge className="hidden">Problem shortcuts</Badge>
    </div>
  );
}
