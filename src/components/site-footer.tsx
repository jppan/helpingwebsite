import Link from "next/link";

import { primaryNavigation } from "@/data/navigation";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/80 bg-[#0b0d10]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div className="space-y-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Rico Survival Manual
          </p>
          <h2 className="max-w-md text-2xl font-semibold tracking-[-0.04em] text-foreground">
            Practical help for ordinary tech trouble.
          </h2>
          <p className="max-w-lg text-sm leading-7 text-secondary">
            Written to stay usable when the reader is tired, stressed, confused, or trying to fix something fast.
          </p>
        </div>

        <div className="space-y-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Navigate</p>
          <ul className="space-y-3">
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-secondary transition-colors hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Conventions</p>
          <ul className="space-y-3 text-sm leading-7 text-secondary">
            <li>Dark-first, high-contrast, low-jargon guidance.</li>
            <li>Bright red placeholders stay visible until real images are ready.</li>
            <li>Content lives separately from layout logic for safer collaboration.</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
