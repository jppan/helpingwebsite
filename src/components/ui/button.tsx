import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl border text-sm font-medium transition-colors transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary:
          "border-accent bg-accent text-[var(--button-accent-foreground,var(--background))] shadow-[0_0_0_1px_rgba(110,231,242,0.08)] hover:-translate-y-0.5 hover:bg-[var(--accent-strong)]",
        secondary:
          "border-border bg-panel text-foreground hover:-translate-y-0.5 hover:border-accent/50 hover:bg-panel-strong",
        ghost:
          "border-transparent bg-transparent text-muted-foreground hover:text-foreground",
        emergency:
          "border-border-strong bg-panel-elevated text-foreground hover:-translate-y-0.5 hover:border-accent/40 hover:bg-panel-strong",
      },
      size: {
        sm: "h-9 px-3",
        md: "h-11 px-4",
        lg: "h-12 px-5 text-base",
      },
    },
    defaultVariants: {
      variant: "secondary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { buttonVariants };
