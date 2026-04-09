"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { BookOpen, CircleHelp, Menu, ShieldAlert, X } from "lucide-react";
import { useEffect, useState } from "react";

import { primaryNavigation, supportNavigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

type MobileNavPanelProps = {
  className?: string;
};

export function MobileNavPanel({ className }: MobileNavPanelProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className={cn("lg:hidden", className)}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-titlebar-menu"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-panel text-foreground transition-colors hover:border-accent/40 hover:bg-panel-strong"
      >
        {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </button>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation overlay"
              className="fixed inset-0 z-40 bg-black/25 backdrop-blur-[2px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              id="mobile-titlebar-menu"
              className="absolute inset-x-0 top-full z-50 border-b border-border/80 bg-background/96 px-4 pb-4 pt-3 shadow-[var(--shadow-strong)] backdrop-blur-xl sm:px-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <div className="mx-auto w-full max-w-7xl space-y-4">
                <div className="rounded-[1.5rem] border border-border bg-panel/90 p-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    Rico Survival Manual
                  </p>
                  <p className="mt-2 text-sm leading-6 text-secondary">
                    Quick routes for the manual, common fixes, and emergency help.
                  </p>
                </div>

                <nav className="grid gap-2" aria-label="Mobile site navigation">
                  {primaryNavigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-[1.25rem] border border-border bg-panel px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:bg-panel-strong"
                    >
                      <span>{item.label}</span>
                      {item.href === "/emergency" ? (
                        <ShieldAlert className="h-4 w-4 text-accent" />
                      ) : (
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                      )}
                    </Link>
                  ))}
                </nav>

                <div className="rounded-[1.5rem] border border-border bg-panel/90 p-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Support</p>
                  <div className="mt-3 grid gap-2">
                    {supportNavigation.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between rounded-[1rem] border border-border bg-background/60 px-4 py-3 text-sm text-secondary transition-colors hover:border-accent/40 hover:bg-panel-strong hover:text-foreground"
                      >
                        <span>{item.label}</span>
                        <CircleHelp className="h-4 w-4 text-muted-foreground" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
