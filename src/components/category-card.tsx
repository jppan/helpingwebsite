import Link from "next/link";

import { IconGlyph } from "@/components/icon-glyph";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { Category } from "@/types/content";

export function CategoryCard({
  category,
  guideCount,
  href,
}: {
  category: Category;
  guideCount: number;
  href: string;
}) {
  return (
    <div className="h-full transition-transform duration-200 ease-out hover:-translate-y-1">
      <Link href={href} className="block h-full">
        <Card className="h-full border-border/90 bg-panel/90 transition-colors hover:border-accent/40">
          <CardHeader className="space-y-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-panel-strong">
              <IconGlyph name={category.icon} className="h-5 w-5 text-accent" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold tracking-[-0.02em] text-foreground">{category.label}</h3>
              <p className="text-sm leading-7 text-secondary">{category.shortDescription}</p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              {guideCount} guides
            </p>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}
