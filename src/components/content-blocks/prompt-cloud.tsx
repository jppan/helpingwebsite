import { Card, CardContent } from "@/components/ui/card";

export function PromptCloud({
  items,
}: {
  items: string[];
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item) => (
        <Card key={item} className="bg-panel/70">
          <CardContent className="pt-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{item}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
