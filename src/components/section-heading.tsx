import { Badge } from "@/components/ui/badge";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="space-y-4">
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <div className="space-y-3">
        <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-pretty text-base leading-7 text-secondary sm:text-lg">{description}</p>
        ) : null}
      </div>
    </div>
  );
}
