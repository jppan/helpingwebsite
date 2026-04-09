import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-4xl flex-col items-start justify-center gap-6 px-4 py-16 sm:px-6 lg:px-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Not found</p>
      <h1 className="max-w-2xl text-balance text-4xl font-semibold tracking-[-0.05em] text-foreground">
        That page is missing, but the manual is still here.
      </h1>
      <p className="max-w-2xl text-base leading-8 text-secondary">
        The link may be outdated, or the guide may have moved. Start from the docs hub or common fixes.
      </p>
      <div className="flex flex-wrap gap-3">
        <Button asChild variant="secondary">
          <Link href="/manual">Docs hub</Link>
        </Button>
        <Button asChild variant="primary">
          <Link href="/fixes">Common fixes</Link>
        </Button>
      </div>
    </div>
  );
}
