import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";
import type { MediaAsset } from "@/types/content";

const aspectMap = {
  wide: "aspect-[16/7]",
  landscape: "aspect-[16/10]",
  portrait: "aspect-[4/5]",
  square: "aspect-square",
};

export function ImagePlaceholderBlock({
  media,
  className,
}: {
  media: MediaAsset;
  className?: string;
}) {
  if (media.mode === "image") {
    return (
      <img
        src={media.src}
        alt={media.alt}
        className={cn(
          "h-auto w-full rounded-[1.35rem] border border-border object-cover",
          media.aspect ? aspectMap[media.aspect] : aspectMap.landscape,
          className
        )}
      />
    );
  }

  const style = {
    backgroundImage:
      "linear-gradient(135deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.18) 50%, transparent 50%, transparent 100%), repeating-linear-gradient(135deg, rgba(0,0,0,0.08) 0px, rgba(0,0,0,0.08) 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px)",
  } satisfies CSSProperties;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.35rem] border border-black/40 bg-[var(--placeholder-red)] text-black shadow-[0_24px_60px_rgba(0,0,0,0.3)]",
        media.aspect ? aspectMap[media.aspect] : aspectMap.landscape,
        className
      )}
      style={style}
      aria-label={media.alt}
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.08))]" />
      <div className="relative flex h-full flex-col justify-between p-4 sm:p-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-black/80">Intentional Placeholder</p>
        <p className="max-w-[18rem] text-sm font-semibold leading-6 text-black">{media.label}</p>
      </div>
    </div>
  );
}
