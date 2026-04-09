"use client";

import { motion } from "motion/react";
import { MoonStar, SunMedium } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type Theme = "dark" | "light";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  localStorage.setItem("rico-theme", theme);
}

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const current = document.documentElement.dataset.theme;
    if (current === "light" || current === "dark") {
      setTheme(current);
    }
    setMounted(true);
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "relative inline-flex h-10 w-[4.5rem] items-center rounded-full border border-border bg-panel px-1 text-foreground transition-colors hover:border-accent/40",
        className
      )}
      aria-label={mounted ? `Switch to ${theme === "dark" ? "light" : "dark"} mode` : "Toggle theme"}
    >
      <motion.span
        className="absolute h-8 w-8 rounded-full border border-border bg-panel-elevated shadow-[0_10px_25px_rgba(0,0,0,0.18)]"
        animate={{ x: theme === "dark" ? 0 : 34 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
      />
      <span className="relative z-10 flex w-full items-center justify-between px-1 text-muted-foreground">
        <MoonStar className={cn("h-4 w-4 transition-colors", theme === "dark" && "text-foreground")} />
        <SunMedium className={cn("h-4 w-4 transition-colors", theme === "light" && "text-foreground")} />
      </span>
    </button>
  );
}
