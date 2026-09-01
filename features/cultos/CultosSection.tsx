"use client"

import React, { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { siteContent } from "@/config/site-content"
import { SectionTitle } from "@/components/shared/SectionTitle"
import {
  Clock,
  MapPin,
  Heart,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

function InstagramIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function CultosSection() {
  const { cultos, church } = siteContent
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = useCallback(() => {
    setSelectedPhotoIndex(null)
    document.body.style.overflow = ""
  }, [])

  const nextPhoto = useCallback(() => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((prev) => ((prev ?? 0) + 1) % cultos.photos.length)
    }
  }, [selectedPhotoIndex, cultos.photos.length])

  const prevPhoto = useCallback(() => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((prev) =>
        (prev ?? 0) === 0 ? cultos.photos.length - 1 : (prev ?? 0) - 1
      )
    }
  }, [selectedPhotoIndex, cultos.photos.length])

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowRight") nextPhoto()
      if (e.key === "ArrowLeft") prevPhoto()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedPhotoIndex, closeLightbox, nextPhoto, prevPhoto])

  return (
    <section id="cultos" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[#17150F]">
      <div className="max-w-[1240px] mx-auto space-y-16">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionTitle
            badge="Programação Semanal"
            title="Venha cultuar conosco em"
            titleHighlight="nossa sede atual."
            subtitle="Nossas reuniões e celebrações continuam acontecendo normalmente enquanto a Nova Catedral é edificada."
          />

          <a
            href={church.address.wazeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-evor-outline flex items-center justify-center gap-2 cursor-pointer w-full md:w-auto shrink-0"
          >
            <MapPin className="size-4 text-[#E8651A]" />
            Como Chegar
          </a>
        </div>

        {/* CULTOS SCHEDULE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cultos.schedule.map((item, index) => (
            <div
              key={index}
              className="bg-[#1c1913] border border-white/10 p-6 sm:p-7 flex flex-col justify-between space-y-6 transition-all duration-300 hover:border-[#E8651A]/50"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E8651A]">
                    {item.day}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#EAE5DC] bg-white/5 px-2.5 py-1 border border-white/10">
                    <Clock className="size-3 text-[#E8651A]" />
                    <span>{item.time}</span>
                  </div>
                </div>

                <h3 className="text-lg font-light text-[#EAE5DC]">
                  {item.name}
                </h3>
                <p className="text-xs font-light text-[rgba(234,229,220,0.65)] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center text-[11px] text-[rgba(234,229,220,0.5)]">
                <span>Templo Sede • Catalão</span>
              </div>
            </div>
          ))}
        </div>

        {/* INSTAGRAM FEED GRID SECTION */}
        <div className="space-y-6 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E8651A] block mb-1">
                Nossa Comunidade em Ação
              </span>
              <p className="text-sm font-light text-[rgba(234,229,220,0.7)]">
                Momentos marcantes de fé, louvor e comunhão da nossa família da fé.
              </p>
            </div>

            <a
              href={church.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-medium text-[#EAE5DC]/80 hover:text-[#E8651A] transition-colors self-start sm:self-auto py-1 px-3 rounded-[2px] bg-white/5 hover:bg-white/10 border border-white/10"
            >
              <InstagramIcon className="size-4 text-[#E8651A]" />
              <span>@adcatalaooficial</span>
            </a>
          </div>

          {/* 3-COLUMN INSTAGRAM SQUARE GRID */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-3 md:gap-4">
            {cultos.photos.map((photo, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className="group relative aspect-square w-full overflow-hidden bg-[#1f1c15] border border-white/10 cursor-pointer"
              >
                <Image
                  src={photo.url}
                  alt={photo.caption}
                  fill
                  sizes="(max-width: 640px) 33vw, (max-width: 1024px) 33vw, 400px"
                  className="object-cover transition-transform duration-500 group-hover:scale-108"
                />

                {/* INSTAGRAM HOVER OVERLAY */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-center gap-2 select-none">
                  <div className="flex items-center gap-1.5 text-white">
                    <Heart className="size-4 sm:size-5 fill-white text-white animate-pulse" />
                    <Maximize2 className="size-3.5 sm:size-4 text-white/80" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-light text-[#EAE5DC] line-clamp-2 max-w-[90%] leading-tight drop-shadow hidden sm:block">
                    {photo.caption}
                  </span>
                </div>

                {/* Mobile subtle icon indicator */}
                <div className="absolute top-1.5 right-1.5 p-1 bg-black/40 backdrop-blur-xs rounded-[2px] sm:hidden opacity-70">
                  <Maximize2 className="size-2.5 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── INSTAGRAM LIGHTBOX EXPAND MODAL ── */}
      {selectedPhotoIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-6"
          onClick={closeLightbox}
        >
          {/* TOP BAR */}
          <div
            className="w-full max-w-4xl flex items-center justify-between py-2 text-[#EAE5DC] mb-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2">
              <InstagramIcon className="size-4 text-[#E8651A]" />
              <span className="text-xs font-medium tracking-wider uppercase text-[#E8651A]">
                AD Catalão no Instagram
              </span>
              <span className="text-xs text-white/40">
                • {selectedPhotoIndex + 1} de {cultos.photos.length}
              </span>
            </div>

            <button
              type="button"
              onClick={closeLightbox}
              className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-[2px] transition cursor-pointer"
              aria-label="Fechar galeria"
            >
              <X className="size-5" />
            </button>
          </div>

          {/* MAIN PHOTO CONTAINER */}
          <div
            className="relative w-full max-w-4xl max-h-[75vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* PREV BUTTON */}
            <button
              type="button"
              onClick={prevPhoto}
              className="absolute left-2 sm:-left-6 top-1/2 -translate-y-1/2 z-10 p-2.5 sm:p-3 bg-black/70 hover:bg-[#E8651A] border border-white/20 hover:border-[#E8651A] text-white rounded-[2px] transition-all cursor-pointer"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="size-5 sm:size-6" />
            </button>

            {/* EXPANDED IMAGE */}
            <div className="relative w-full aspect-square sm:aspect-[4/3] max-h-[70vh] overflow-hidden bg-[#1c1913] border border-white/10 rounded-[2px]">
              <Image
                src={cultos.photos[selectedPhotoIndex].url}
                alt={cultos.photos[selectedPhotoIndex].caption}
                fill
                priority
                sizes="100vw"
                className="object-contain sm:object-cover"
              />
            </div>

            {/* NEXT BUTTON */}
            <button
              type="button"
              onClick={nextPhoto}
              className="absolute right-2 sm:-right-6 top-1/2 -translate-y-1/2 z-10 p-2.5 sm:p-3 bg-black/70 hover:bg-[#E8651A] border border-white/20 hover:border-[#E8651A] text-white rounded-[2px] transition-all cursor-pointer"
              aria-label="Próxima foto"
            >
              <ChevronRight className="size-5 sm:size-6" />
            </button>
          </div>

          {/* BOTTOM CAPTION & INSTAGRAM LINK */}
          <div
            className="w-full max-w-4xl pt-3 text-center space-y-2"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-sm sm:text-base font-light text-[#EAE5DC]">
              {cultos.photos[selectedPhotoIndex].caption}
            </p>

            <div className="flex items-center justify-center gap-3 pt-1">
              <a
                href={church.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#E8651A] hover:underline"
              >
                <InstagramIcon className="size-3.5" />
                <span>Ver mais momentos no perfil @adcatalaooficial</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
