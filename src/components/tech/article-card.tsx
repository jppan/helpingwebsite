import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { formatMinutes } from "@/lib/utils";
import type { TechArticle } from "@/types/learning";

export function ArticleCard({
  article,
  compact = false,
}: {
  article: TechArticle;
  compact?: boolean;
}) {
  return (
    <div className="h-full transition-transform duration-200 ease-out hover:-translate-y-1">
      <Link href={`/learn/${article.slug}`} className="block h-full">
        <Card className="h-full border-border/90 bg-panel/90 transition-colors hover:border-accent/40">
          <CardHeader className={compact ? "space-y-3 p-5" : "space-y-4 p-6"}>
            <div className="flex flex-wrap gap-2">
              <Badge>{article.difficulty}</Badge>
              <Badge>{formatMinutes(article.readingTimeMinutes)}</Badge>
            </div>
            <div className="space-y-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {article.category}
              </p>
              <h3 className="text-pretty text-xl font-semibold tracking-[-0.03em] text-foreground">
                {article.title}
              </h3>
              <p className="text-sm leading-7 text-secondary">{article.summary}</p>
            </div>
          </CardHeader>
          {!compact ? (
            <CardContent>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Open article
              </p>
            </CardContent>
          ) : null}
        </Card>
      </Link>
    </div>
  );
}
