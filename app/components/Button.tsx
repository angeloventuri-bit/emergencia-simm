"use client";

import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center text-center rounded-lg font-['Outfit'] font-semibold transition-all duration-300 active:translate-y-0",
          variant === "primary" &&
            "bg-[linear-gradient(135deg,#1DCEDE_0%,#087378_100%)] text-[#0A0E14] uppercase tracking-[0.08em] px-8 py-4 text-base shadow-[0_0_20px_rgba(32,202,216,0.4)] hover:bg-[#20CAD8] hover:shadow-[0_0_30px_rgba(32,202,216,0.6),0_0_60px_rgba(32,202,216,0.3)] hover:-translate-y-0.5 active:bg-[#0E8A96] active:shadow-[0_0_10px_rgba(32,202,216,0.3)]",
          variant === "secondary" &&
            "bg-transparent border border-[#20CAD860] text-[#20CAD8] px-8 py-4 text-base hover:bg-[#20CAD810] hover:border-[#20CAD8] hover:shadow-[0_0_15px_rgba(32,202,216,0.2)]",
          variant === "ghost" &&
            "bg-transparent text-[#B9B7BA] font-medium text-sm hover:text-[#20CAD8] hover:underline underline-offset-4 decoration-2 decoration-[#20CAD8]",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, cn };
