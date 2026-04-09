import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function ChecklistCard({
  eyebrow,
  items,
}: {
  eyebrow: string;
  items: string[];
}) {
  return (
    <Card>
      <CardHeader>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{eyebrow}</p>
      </CardHeader>
      <CardContent className="space-y-3 text-sm leading-7 text-secondary">
        {items.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </CardContent>
    </Card>
  );
}
