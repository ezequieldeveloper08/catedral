"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { siteContent } from "@/config/site-content"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { DonationModal } from "@/features/donation-modal/DonationModal"
import { cn } from "@/lib/utils"
import { Menu, Heart } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "O Projeto", href: "#projeto" },
    { label: "Status da Obra", href: "#obra" },
    { label: "Cultos", href: "#cultos" },
    { label: "História", href: "#historia" },
    { label: "Seja Voluntário", href: "#voluntarios" },
    { label: "Localização", href: "#localizacao" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-400",
        isScrolled
          ? "bg-[#17150F]/95 backdrop-blur-md border-b border-white/10 py-4 shadow-lg"
          : "bg-gradient-to-b from-[#17150F]/90 via-[#17150F]/40 to-transparent py-6"
      )}
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 sm:h-12 w-44 sm:w-56">
            <Image
              src="/logos/MARCA-AD-CATALÃO-HORIZONTAL-BRANCA.png"
              alt="Logo AD Catalão"
              fill
              priority
              sizes="(max-width: 640px) 176px, 224px"
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium tracking-wide text-[#EAE5DC]/90 hover:text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA BUTTON */}
        <div className="flex items-center gap-3">
          <DonationModal>
            <button
              type="button"
              className="hidden sm:inline-block cursor-pointer bg-[#E8651A] hover:bg-[#D05A10] text-[#EAE5DC] font-semibold text-[11px] tracking-[0.18em] uppercase px-5 py-2.5 rounded-[2px] transition-all duration-300 shadow-[0_10px_25px_-8px_rgba(156,104,65,0.6)] hover:-translate-y-0.5"
            >
              Contribuir
            </button>
          </DonationModal>

          {/* MOBILE MENU */}
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger
                render={
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-[#EAE5DC] hover:bg-white/10"
                    aria-label="Abrir Menu"
                  />
                }
              >
                <Menu className="size-6" />
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[85vw] max-w-sm bg-[#17150F] border-white/10 p-6 text-[#EAE5DC] flex flex-col justify-between"
              >
                <div className="space-y-8">
                  <SheetHeader className="text-left pb-4 border-b border-white/10">
                    <div className="relative h-10 w-44">
                      <Image
                        src="/logos/MARCA-AD-CATALÃO-HORIZONTAL-BRANCA.png"
                        alt="Logo AD Catalão"
                        fill
                        sizes="176px"
                        className="object-contain object-left"
                      />
                    </div>
                  </SheetHeader>

                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-base font-light text-[#EAE5DC]/80 hover:text-[#EAE5DC] transition py-1"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>

                <div className="pt-6 border-t border-white/10 space-y-3">
                  <DonationModal>
                    <button
                      type="button"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full bg-[#E8651A] text-[#EAE5DC] font-semibold text-xs tracking-[0.16em] uppercase py-3.5 rounded-[2px] transition"
                    >
                      Contribuir com a Obra
                    </button>
                  </DonationModal>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
