"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"
import { siteContent } from "@/config/site-content"
import { DonationModal } from "@/features/donation-modal/DonationModal"

import "swiper/css"
import "swiper/css/effect-fade"

export function Hero() {
  const { renders } = siteContent
  const [swiper, setSwiper] = useState<SwiperType | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="relative min-h-[100svh] w-full flex flex-col justify-end overflow-hidden pb-16 sm:pb-24 pt-32 px-6 sm:px-12 lg:px-20 bg-[#17150F]">
      {/* SWIPER BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 6500, disableOnInteraction: false }}
          loop
          speed={1400}
          onSwiper={setSwiper}
          onSlideChange={(s) => setActiveIndex(s.realIndex)}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        >
          {renders.map((render, index) => (
            <SwiperSlide key={render.id}>
              <div className="relative w-full h-full">
                <Image
                  src={render.imageUrl}
                  alt={render.title}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover object-center brightness-[0.55] contrast-[1.05]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* DUAL GRADIENT OVERLAY FOR HIGH CONTRAST & LEGIBILITY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#17150F] via-[#17150F]/85 to-[#17150F]/20 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17150F] via-[#17150F]/40 to-[#17150F]/70 z-10 pointer-events-none" />
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 max-w-[1240px] w-full mx-auto flex flex-col items-start text-left">
        {/* EYEBROW */}
        <span className="eyebrow-accent mb-5 animate-fadeIn">
          NOVA CATEDRAL EM CATALÃO · GO
        </span>

        {/* HEADLINE */}
        <h1 className="font-normal sm:font-medium text-[clamp(32px,4.5vw,62px)] leading-[1.12] tracking-[-0.01em] text-[#F3EFE6] max-w-[20ch] text-balance drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
          Um templo que conta a história de um povo.{" "}
          <span className="font-bold text-[#E8651A] block sm:inline drop-shadow-[0_2px_12px_rgba(232,101,26,0.3)]">
            Construído pela fé.
          </span>
        </h1>

        {/* SUBTITLE */}
        <p className="mt-5 max-w-[56ch] font-normal text-[clamp(14px,1.15vw,16px)] leading-[1.65] text-[#EAE5DC]/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          O novo templo sede da AD Catalão está em construção. Três pavimentos, arquitetura contemporânea e a igreja em pleno funcionamento durante toda a obra.
        </p>

        {/* CTAs */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-6 w-full sm:w-auto">
          <DonationModal>
            <button type="button" className="btn-evor-accent cursor-pointer w-full sm:w-auto text-center">
              Contribuir com a Obra
            </button>
          </DonationModal>

          {/* TOUR 3D — EM BREVE */}
          <button
            type="button"
            disabled
            className="btn-evor-outline flex items-center justify-center gap-2.5 opacity-50 cursor-not-allowed select-none w-full sm:w-auto"
          >
            Ver Tour 3D
            <span className="inline-flex items-center rounded-[2px] bg-[#E8651A]/20 border border-[#E8651A]/40 px-1.5 py-0.5 text-[9px] tracking-[0.14em] font-semibold uppercase text-[#E8651A] leading-none">
              Em Breve
            </span>
          </button>
        </div>

        {/* CUSTOM PAGINATION */}
        <div className="mt-12 sm:mt-16 flex items-center gap-4">
          <div className="flex items-center gap-2">
            {renders.map((render, idx) => (
              <button
                key={render.id}
                type="button"
                onClick={() => swiper?.slideToLoop(idx)}
                className={`transition-all duration-400 rounded-none cursor-pointer ${
                  idx === activeIndex
                    ? "w-8 h-[2px] bg-[#E8651A]"
                    : "w-4 h-[2px] bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
          <span className="text-[11px] tracking-[0.16em] uppercase font-medium text-[rgba(234,229,220,0.75)] drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
            0{activeIndex + 1} / 0{renders.length} — {renders[activeIndex].badge}
          </span>
        </div>
      </div>
    </section>
  )
}
