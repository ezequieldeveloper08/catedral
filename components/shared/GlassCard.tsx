import React from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: "default" | "gold" | "subtle"
  hoverEffect?: boolean
}

export function GlassCard({
  children,
  variant = "default",
  hoverEffect = true,
  className,
  ...props
}: GlassCardProps) {
  const variantStyles = {
    default: "bg-[#11131a]/80 border-zinc-800/80 text-zinc-100",
    gold: "bg-[#141620]/90 border-amber-500/30 text-zinc-100 shadow-[0_15px_40px_-15px_rgba(212,175,55,0.15)]",
    subtle: "bg-[#0d0e14]/60 border-zinc-800/40 text-zinc-200",
  }

  return (
    <div
      className={cn(
        "rounded-2xl border backdrop-blur-xl transition-all duration-300 p-6 sm:p-8",
        variantStyles[variant],
        hoverEffect && "hover:border-amber-500/40 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)] hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
