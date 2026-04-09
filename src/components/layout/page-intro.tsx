import { SectionHeading } from "@/components/section-heading";

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return <SectionHeading eyebrow={eyebrow} title={title} description={description} />;
}
