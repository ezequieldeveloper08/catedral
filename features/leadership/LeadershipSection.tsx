import React from "react"
import Image from "next/image"
import { siteContent } from "@/config/site-content"
import { SectionTitle } from "@/components/shared/SectionTitle"

export function LeadershipSection() {
  const { leadership } = siteContent

  return (
    <section id="historia" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[#13110C] border-y border-white/10">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: TEXT CONTENT */}
          <div className="lg:col-span-7 space-y-6">
            <SectionTitle
              badge="Liderança & História"
              title="Um legado de fé que"
              titleHighlight="transforma gerações."
              subtitle="Há décadas a Assembleia de Deus Ministério Madureira planta sementes de esperança, amor e salvação em Catalão e em todo o estado de Goiás."
            />

            <div className="text-[clamp(14px,1.2vw,16px)] font-light leading-[1.75] text-[rgba(234,229,220,0.75)] space-y-4">
              {leadership.historyText.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* QUOTE BLOCK */}
            <div className="bg-[#1c1913] border-l-2 border-[#E8651A] p-6 space-y-2 mt-6">
              <p className="text-sm italic font-light text-[#EAE5DC] leading-relaxed">
                “{leadership.quote}”
              </p>
              <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-[#E8651A] pt-1">
                — {leadership.pastorNames}
              </span>
            </div>
          </div>

          {/* RIGHT: PASTORAL IMAGE */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#1f1c15] border border-white/10">
              <Image
                src={leadership.photoUrl}
                alt={leadership.pastorNames}
                fill
                className="object-cover object-top filter grayscale-[15%] hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#E8651A] block">
                  Presidência do Campo
                </span>
                <h4 className="text-lg font-light text-[#EAE5DC] mt-0.5">
                  {leadership.pastorNames}
                </h4>
                <p className="text-xs font-light text-[rgba(234,229,220,0.6)]">
                  {leadership.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
