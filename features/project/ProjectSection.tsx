"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"
import { siteContent } from "@/config/site-content"
import { SectionTitle } from "@/components/shared/SectionTitle"
import { DonationModal } from "@/features/donation-modal/DonationModal"
import {
  Play, CheckCircle2, Layers, Volume2, Building2, Hammer,
  X, Maximize2, ChevronLeft, ChevronRight,
} from "lucide-react"

import "swiper/css"

export function ProjectSection() {
  const { renders, pillars } = siteContent
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null)
  const [lightboxSwiper, setLightboxSwiper] = useState<SwiperType | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const specIcons: Record<string, React.ElementType> = {
    Users: Layers, Layers: Layers, Volume2: Volume2, Building2: Building2, Hammer: Hammer,
  }

  const openLightbox = (i: number) => {
    setLightboxIndex(i)
    setLightboxOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = ""
  }

  return (
    <section id="projeto" className="py-24 sm:py-32 bg-[#17150F]">
      <div className="max-w-[1240px] mx-auto space-y-12 sm:space-y-20 px-6 sm:px-12 lg:px-20">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionTitle
            badge="O Projeto Arquitetônico"
            title="Design contemporâneo projetado para"
            titleHighlight="séculos de adoração."
            subtitle="Um complexo de 3 pavimentos integrados com tecnologia acústica de ponta, visibilidade irrestrita e acessibilidade total para até 4.000 pessoas."
          />
          <button
            type="button"
            disabled
            className="btn-evor-outline flex items-center justify-center gap-3 opacity-50 cursor-not-allowed select-none w-full md:w-auto shrink-0"
          >
            <Play className="size-4 fill-current" />
            Tour Virtual 3D
            <span className="inline-flex items-center rounded-[2px] bg-[#E8651A]/20 border border-[#E8651A]/40 px-1.5 py-0.5 text-[9px] tracking-[0.14em] font-semibold uppercase text-[#E8651A] leading-none">
              Em Breve
            </span>
          </button>
        </div>
      </div>

      {/* ── CARROSSEL INSTAGRAM ── */}
      {/* No mobile: tela cheia sem padding; no desktop: com padding e max-width */}
      <div className="mt-8 sm:mt-14 lg:mt-16 sm:px-12 lg:px-20">
        <div className="sm:max-w-[1240px] sm:mx-auto relative">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            loop
            speed={500}
            grabCursor
            onSwiper={setMainSwiper}
            onSlideChange={(s) => setActiveIndex(s.realIndex)}
            className="insta-swiper w-full"
          >
            {renders.map((render, idx) => (
              <SwiperSlide key={render.id}>
                {/* Mobile: 1:1 square / Desktop: 16:9 */}
                <div className="relative w-full aspect-square sm:aspect-[16/9] bg-[#1f1c15]">
                  <Image
                    src={render.imageUrl}
                    alt={render.title}
                    fill
                    className="object-cover"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Counter — top right */}
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full tracking-wide border border-white/10">
                    {activeIndex + 1}/{renders.length}
                  </div>

                  {/* Expand — top left */}
                  <button
                    type="button"
                    onClick={() => openLightbox(idx)}
                    className="absolute top-3 left-3 p-2 bg-black/60 backdrop-blur-md hover:bg-[#E8651A] border border-white/20 text-white rounded-[2px] transition-all duration-200 cursor-pointer z-10"
                    aria-label="Expandir"
                  >
                    <Maximize2 className="size-3.5" />
                  </button>

                  {/* Bottom info */}
                  <div className="absolute bottom-0 inset-x-0 p-4 sm:p-8 space-y-1">
                    <span className="eyebrow-accent text-[10px] sm:text-[11px] block">
                      {render.badge}
                    </span>
                    <h3 className="text-base sm:text-2xl font-normal text-[#F3EFE6] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                      {render.title}
                    </h3>
                    {/* Description only on desktop */}
                    <p className="hidden sm:block text-xs sm:text-sm text-[#EAE5DC]/80 max-w-2xl leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                      {render.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* CLEAN REACT PAGINATION INDICATORS */}
          <div className="flex justify-center items-center gap-2 mt-4">
            {renders.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => mainSwiper?.slideToLoop(idx)}
                className={`transition-all duration-300 cursor-pointer rounded-full border-none outline-none ${
                  idx === activeIndex
                    ? "w-7 h-[3px] bg-[#E8651A]"
                    : "w-2.5 h-[3px] bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Desktop arrow nav */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              mainSwiper?.slidePrev()
            }}
            className="hidden sm:flex absolute left-3 top-[45%] -translate-y-1/2 z-20 p-2.5 bg-black/60 hover:bg-[#E8651A] border border-white/20 text-white rounded-[2px] transition-all cursor-pointer items-center"
            aria-label="Anterior"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              mainSwiper?.slideNext()
            }}
            className="hidden sm:flex absolute right-3 top-[45%] -translate-y-1/2 z-20 p-2.5 bg-black/60 hover:bg-[#E8651A] border border-white/20 text-white rounded-[2px] transition-all cursor-pointer items-center"
            aria-label="Próximo"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>

        {/* CTA BUTTON (UNIFIED MOBILE & DESKTOP) */}
        <div className="mt-6 sm:mt-8 flex justify-center px-6">
          <DonationModal>
            <button type="button" className="btn-evor-accent w-full sm:w-auto cursor-pointer text-center">
              Fazer Parte Desta Obra
            </button>
          </DonationModal>
        </div>
      </div>

      {/* ── LIGHTBOX ── */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center" onClick={closeLightbox}>
          <div className="w-full flex items-center justify-between px-4 py-3 shrink-0" onClick={(e) => e.stopPropagation()}>
            <span className="text-[11px] tracking-[0.2em] uppercase text-[#E8651A] font-semibold">
              {lightboxIndex + 1} / {renders.length}
            </span>
            <button type="button" onClick={closeLightbox} className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-[2px] transition cursor-pointer" aria-label="Fechar">
              <X className="size-5" />
            </button>
          </div>

          <div className="relative w-full max-w-5xl px-12 sm:px-16" onClick={(e) => e.stopPropagation()}>
            <Swiper
              modules={[]}
              initialSlide={lightboxIndex}
              loop
              grabCursor
              onSwiper={setLightboxSwiper}
              onSlideChange={(s) => setLightboxIndex(s.realIndex)}
              className="w-full"
            >
              {renders.map((render) => (
                <SwiperSlide key={render.id}>
                  <div className="relative w-full aspect-square sm:aspect-[16/9] bg-black">
                    <Image src={render.imageUrl} alt={render.title} fill className="object-contain" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                lightboxSwiper?.slidePrev()
              }}
              className="lb-prev absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/70 hover:bg-[#E8651A] border border-white/20 text-white rounded-[2px] transition cursor-pointer flex items-center"
              aria-label="Anterior"
            >
              <ChevronLeft className="size-5 sm:size-6" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                lightboxSwiper?.slideNext()
              }}
              className="lb-next absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/70 hover:bg-[#E8651A] border border-white/20 text-white rounded-[2px] transition cursor-pointer flex items-center"
              aria-label="Próximo"
            >
              <ChevronRight className="size-5 sm:size-6" />
            </button>
          </div>

          <div className="w-full max-w-5xl px-4 pt-4 pb-2 text-center" onClick={(e) => e.stopPropagation()}>
            <span className="eyebrow-accent text-[11px] block justify-center">
              {renders[lightboxIndex]?.badge}
            </span>
            <h3 className="text-base sm:text-xl font-normal text-[#F3EFE6] mt-1">
              {renders[lightboxIndex]?.title}
            </h3>

            {/* LIGHTBOX REACT PAGINATION INDICATORS */}
            <div className="flex justify-center items-center gap-2 mt-3">
              {renders.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => lightboxSwiper?.slideToLoop(idx)}
                  className={`transition-all duration-300 cursor-pointer rounded-full border-none outline-none ${
                    idx === lightboxIndex
                      ? "w-7 h-[3px] bg-[#E8651A]"
                      : "w-2.5 h-[3px] bg-white/30 hover:bg-white/60"
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
