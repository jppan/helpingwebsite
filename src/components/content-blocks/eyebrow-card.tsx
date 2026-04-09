import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function EyebrowCard({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title?: string;
  copy: string;
}) {
  return (
    <Card>
      <CardHeader>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{eyebrow}</p>
        {title ? <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground">{title}</h3> : null}
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-7 text-secondary">{copy}</p>
      </CardContent>
    </Card>
  );
}
