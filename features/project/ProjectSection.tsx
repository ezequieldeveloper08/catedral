"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"
import { siteContent } from "@/config/site-content"
import { SectionTitle } from "@/components/shared/SectionTitle"
import { DonationModal } from "@/features/donation-modal/DonationModal"
import {
  Play, CheckCircle2, Layers, Volume2, Building2, Hammer,
  X, Maximize2, ChevronLeft, ChevronRight,
} from "lucide-react"

import "swiper/css"
import "swiper/css/pagination"

export function ProjectSection() {
  const { renders, pillars } = siteContent
  const [swiper, setSwiper] = useState<SwiperType | null>(null)
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
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            loop
            speed={500}
            grabCursor
            onSwiper={setSwiper}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  {/* Counter — top right — Instagram style */}
                  <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-full tracking-wide">
                    {activeIndex + 1}/{renders.length}
                  </div>

                  {/* Expand — top left */}
                  <button
                    type="button"
                    onClick={() => openLightbox(idx)}
                    className="absolute top-3 left-3 p-2 bg-black/50 backdrop-blur-sm hover:bg-[#E8651A] border border-white/20 text-white rounded-[2px] transition-all duration-200 cursor-pointer"
                    aria-label="Expandir"
                  >
                    <Maximize2 className="size-3.5" />
                  </button>

                  {/* Bottom info */}
                  <div className="absolute bottom-0 inset-x-0 p-3 sm:p-8">
                    <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#E8651A] block mb-0.5">
                      {render.badge}
                    </span>
                    <h3 className="text-sm sm:text-2xl font-light text-white">
                      {render.title}
                    </h3>
                    {/* Description only on desktop */}
                    <p className="hidden sm:block text-sm text-white/70 mt-1 max-w-xl">
                      {render.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* DOTS — Instagram style, centered below image */}
          <div className="insta-dots flex justify-center items-center gap-1.5 mt-3" />

          {/* Desktop arrow nav */}
          <button
            onClick={() => swiper?.slidePrev()}
            className="hidden sm:flex absolute left-3 top-[45%] -translate-y-1/2 z-10 p-2.5 bg-black/60 hover:bg-[#E8651A] border border-white/20 text-white rounded-[2px] transition-all cursor-pointer items-center"
            aria-label="Anterior"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            onClick={() => swiper?.slideNext()}
            className="hidden sm:flex absolute right-3 top-[45%] -translate-y-1/2 z-10 p-2.5 bg-black/60 hover:bg-[#E8651A] border border-white/20 text-white rounded-[2px] transition-all cursor-pointer items-center"
            aria-label="Próximo"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>

        {/* Mobile CTA */}
        <div className="sm:hidden px-6 mt-4">
          <DonationModal>
            <button type="button" className="btn-evor-accent w-full cursor-pointer text-center">
              Fazer Parte Desta Obra
            </button>
          </DonationModal>
        </div>
      </div>

      {/* Specs + desktop CTA */}
      <div className="max-w-[1240px] mx-auto px-6 sm:px-12 lg:px-20 mt-12 sm:mt-20 space-y-8">
        {/* Desktop CTA */}
        <div className="hidden sm:flex justify-center">
          <DonationModal>
            <button type="button" className="btn-evor-accent cursor-pointer">
              Fazer Parte Desta Obra
            </button>
          </DonationModal>
        </div>

        {/* SPECIFICATIONS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pillars.map((pillar, index) => {
            const Icon = specIcons[pillar.iconName] || CheckCircle2
            return (
              <div
                key={index}
                className="bg-[#1c1913] border border-white/10 p-5 sm:p-8 space-y-3 transition-colors hover:border-[#E8651A]/50"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <Icon className="size-4 sm:size-5 text-[#E8651A] shrink-0" />
                  <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.12em] sm:tracking-[0.16em] text-[#E8651A] leading-tight">
                    {pillar.badge}
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-[0.1em] sm:tracking-[0.12em] text-[#EAE5DC] leading-snug">
                  {pillar.title}
                </h4>
                <p className="text-[11px] sm:text-xs font-light text-[rgba(234,229,220,0.65)] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      {/* ── LIGHTBOX ── */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center" onClick={closeLightbox}>
          <div className="w-full flex items-center justify-between px-4 py-3 shrink-0" onClick={(e) => e.stopPropagation()}>
            <span className="text-[11px] tracking-[0.2em] uppercase text-[#E8651A] font-semibold">
              {activeIndex + 1} / {renders.length}
            </span>
            <button type="button" onClick={closeLightbox} className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-[2px] transition cursor-pointer" aria-label="Fechar">
              <X className="size-5" />
            </button>
          </div>

          <div className="relative w-full max-w-5xl px-12 sm:px-16" onClick={(e) => e.stopPropagation()}>
            <Swiper
              modules={[Pagination]}
              initialSlide={lightboxIndex}
              pagination={{ el: ".lb-dots", clickable: true }}
              loop
              grabCursor
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

            <button type="button" onClick={() => swiper?.slidePrev()} className="lb-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/70 hover:bg-[#E8651A] border border-white/20 text-white rounded-[2px] transition cursor-pointer flex items-center" aria-label="Anterior">
              <ChevronLeft className="size-5 sm:size-6" />
            </button>
            <button type="button" onClick={() => swiper?.slideNext()} className="lb-next absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/70 hover:bg-[#E8651A] border border-white/20 text-white rounded-[2px] transition cursor-pointer flex items-center" aria-label="Próximo">
              <ChevronRight className="size-5 sm:size-6" />
            </button>
          </div>

          <div className="w-full max-w-5xl px-4 pt-4 pb-2 text-center" onClick={(e) => e.stopPropagation()}>
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#E8651A] block">
              {renders[lightboxIndex]?.badge}
            </span>
            <h3 className="text-base sm:text-xl font-light text-[#EAE5DC] mt-0.5">
              {renders[lightboxIndex]?.title}
            </h3>
            <div className="lb-dots flex justify-center items-center gap-1.5 mt-3" />
          </div>
        </div>
      )}

      <style>{`
        /* Instagram-style dots */
        .insta-dots .swiper-pagination-bullet,
        .lb-dots .swiper-pagination-bullet {
          opacity: 1 !important;
          background: rgba(255,255,255,0.3) !important;
          width: 6px !important; height: 6px !important;
          border-radius: 50% !important;
          margin: 0 3px !important;
          cursor: pointer !important;
          transition: all 0.25s !important;
        }
        .insta-dots .swiper-pagination-bullet-active,
        .lb-dots .swiper-pagination-bullet-active {
          background: #E8651A !important;
          width: 18px !important;
          border-radius: 3px !important;
        }
        .swiper-button-prev, .swiper-button-next { display: none !important; }
        /* Mobile: remove side padding so image goes edge-to-edge */
        @media (max-width: 639px) {
          .insta-swiper { border-radius: 0; }
        }
      `}</style>
    </section>
  )
}
