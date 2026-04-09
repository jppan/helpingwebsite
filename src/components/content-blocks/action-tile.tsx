import Link from "next/link";
import type { LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function ActionTile({
  title,
  description,
  href,
  icon: Icon,
}: {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}) {
  return (
    <Card>
      <CardHeader className="space-y-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-panel-strong">
          <Icon className="h-5 w-5 text-accent" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground">{title}</h3>
          <p className="text-sm leading-7 text-secondary">{description}</p>
        </div>
      </CardHeader>
      <CardContent>
        <Button asChild variant="secondary">
          <Link href={href}>{title}</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
