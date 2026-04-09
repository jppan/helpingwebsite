"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { useDeferredValue, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { rankSearchItems } from "@/lib/search";
import type { SearchItem } from "@/types/content";

export function GlobalSearchPanel({
  items,
  title = "Search the manual",
  helper = "Try what you see, like “cannot sign in” or “nothing prints.”",
  compact = false,
}: {
  items: SearchItem[];
  title?: string;
  helper?: string;
  compact?: boolean;
}) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const normalized = deferredQuery.trim().toLowerCase();
  const results = normalized ? rankSearchItems(items, normalized).slice(0, compact ? 4 : 6) : [];

  return (
    <Card className="border-border/90 bg-panel">
      <CardHeader className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-panel-strong">
            <Search className="h-5 w-5 text-accent" />
          </div>
          <div>
            <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground">{title}</h3>
            <p className="text-sm leading-7 text-secondary">{helper}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by problem, not jargon"
          aria-label="Search the manual"
        />
        {normalized ? (
          results.length ? (
            <div className="space-y-3">
              {results.map((item) => (
                <Link
                  key={`${item.kind}-${item.slug}`}
                  href={item.href}
                  className="block rounded-2xl border border-border bg-panel-strong p-4 transition-colors hover:border-accent/35"
                >
                  <div className="mb-2 flex flex-wrap gap-2">
                    <Badge>{item.kind}</Badge>
                    <Badge>{item.category}</Badge>
                  </div>
                  <h4 className="text-base font-semibold text-foreground">{item.title}</h4>
                  <p className="mt-2 text-sm leading-7 text-secondary">{item.summary}</p>
                </Link>
              ))}
            </div>
          ) : (
            <p className="rounded-2xl border border-border bg-panel-strong p-4 text-sm leading-7 text-secondary">
              No strong match yet. Try describing the symptom, outcome, or what feels wrong.
            </p>
          )
        ) : null}
      </CardContent>
    </Card>
  );
}
