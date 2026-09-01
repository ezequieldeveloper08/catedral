import React from "react"
import { cn } from "@/lib/utils"

interface SectionTitleProps {
  badge?: string
  title: string
  titleHighlight?: string
  subtitle?: string
  align?: "left" | "center" | "right"
  className?: string
}

export function SectionTitle({
  badge,
  title,
  titleHighlight,
  subtitle,
  align = "left",
  className,
}: SectionTitleProps) {
  const isCenter = align === "center"
  const isRight = align === "right"

  return (
    <div
      className={cn(
        "flex flex-col gap-2.5 max-w-3xl",
        isCenter && "items-center text-center mx-auto",
        isRight && "items-end text-right ml-auto",
        !isCenter && !isRight && "items-start text-left",
        className
      )}
    >
      {badge && (
        <span className="eyebrow-accent block mb-1">
          {badge}
        </span>
      )}

      <h2 className="text-[clamp(28px,3.4vw,46px)] font-light leading-[1.12] tracking-[-0.01em] text-[#EAE5DC]">
        {title}{" "}
        {titleHighlight && (
          <span className="font-semibold text-[#E8651A] block sm:inline">{titleHighlight}</span>
        )}
      </h2>

      {subtitle && (
        <p className="text-[clamp(14px,1.2vw,16px)] font-light text-[rgba(234,229,220,0.72)] leading-[1.7] max-w-[56ch] mt-1">
          {subtitle}
        </p>
      )}
    </div>
  )
}
