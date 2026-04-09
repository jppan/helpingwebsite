import Link from "next/link";
import { LifeBuoy, Menu, Search, ShieldAlert } from "lucide-react";

import { primaryNavigation } from "@/data/navigation";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border bg-panel-strong">
            <LifeBuoy className="h-5 w-5 text-accent" />
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Rico</p>
            <p className="text-sm font-semibold tracking-[-0.02em] text-foreground sm:text-base">
              Survival Manual
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {primaryNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-2 text-sm text-secondary transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
            <Link href="/manual">
              <Search className="h-4 w-4" />
              Search
            </Link>
          </Button>
          <Button asChild variant="emergency" size="sm">
            <Link href="/emergency">
              <ShieldAlert className="h-4 w-4" />
              Emergency
            </Link>
          </Button>
          <Button asChild variant="ghost" size="sm" className="lg:hidden">
            <Link href="/manual" aria-label="Open manual navigation">
              <Menu className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
