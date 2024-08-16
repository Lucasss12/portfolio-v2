"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface PulsatingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pulseColor?: string;
  duration?: string;
}

export default function PulsatingButton({
  className,
  children,
  pulseColor = "#CCCCFF",
  duration = "2s",
  ...props
}: PulsatingButtonProps) {
  return (
    <button
      className={cn(
        "relative text-center cursor-pointer flex justify-center items-center rounded-xl font-medium text-white bg-mainPurple/60 px-4 py-2 transition-all duration-250",
        "hover:scale-105 hover:shadow-lg hover:bg-mainPurple/80", 
        "active:scale-95", 
        className
      )}
      style={
        {
          "--pulse-color": pulseColor,
          "--duration": duration,
        } as React.CSSProperties
      }
      {...props}
    >
      <div className="relative z-10">{children}</div>
      <div className="absolute top-1/2 left-1/2 size-full rounded-xl bg-inherit animate-pulse -translate-x-1/2 -translate-y-1/2" />
    </button>
  );
}
