"use client"

import React, { useState } from "react"
import { siteContent } from "@/config/site-content"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Play } from "lucide-react"

interface VideoModalProps {
  children?: React.ReactNode
}

export function VideoModal({ children }: VideoModalProps) {
  const [open, setOpen] = useState(false)
  const { videoInstitutional } = siteContent

  return (
    <>
      <span onClick={() => setOpen(true)} className="inline-block">
        {children || (
          <button type="button" className="btn-evor-outline flex items-center gap-2 cursor-pointer">
            <Play className="size-4 fill-current" />
            <span>Tour Virtual 3D</span>
          </button>
        )}
      </span>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-4xl bg-[#17150F] border border-white/10 text-[#EAE5DC] p-4 sm:p-6 overflow-hidden">
          <DialogHeader className="space-y-1 mb-4 text-left">
            <span className="eyebrow-accent">
              Apresentação Virtual
            </span>
            <DialogTitle className="text-xl sm:text-2xl font-light text-[#EAE5DC]">
              {videoInstitutional.title}
            </DialogTitle>
            <DialogDescription className="text-xs sm:text-sm font-light text-[rgba(234,229,220,0.65)]">
              {videoInstitutional.description}
            </DialogDescription>
          </DialogHeader>

          {/* 16:9 VIDEO EMBED */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-black border border-white/10 rounded-[2px]">
            {open ? (
              <iframe
                src={`${videoInstitutional.videoUrl}?autoplay=1&rel=0`}
                title={videoInstitutional.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            ) : null}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
