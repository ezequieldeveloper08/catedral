import React from "react"
import Image from "next/image"
import Link from "next/link"
import { siteContent } from "@/config/site-content"
import { MapPin, Globe } from "lucide-react"

function InstagramIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function YoutubeIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
    </svg>
  )
}

function WhatsappIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.82c2.16 0 4.19.84 5.72 2.37a8.06 8.06 0 0 1 2.37 5.72c0 4.46-3.63 8.09-8.1 8.09a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.07.81.82-3-.19-.31a8.05 8.05 0 0 1-1.23-4.28c0-4.46 3.63-8.09 8.1-8.09Zm4.68 10.29c-.26-.13-1.51-.75-1.75-.83-.24-.09-.4-.13-.58.13-.17.26-.66.83-.81 1-.15.17-.3.2-.56.07-.26-.13-1.08-.4-2.06-1.27-.76-.68-1.28-1.52-1.43-1.78-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.46.13-.15.17-.26.26-.43.09-.17.04-.33-.02-.46-.07-.13-.58-1.4-.8-1.92-.21-.5-.42-.43-.58-.44l-.5-.01c-.17 0-.46.06-.7.33-.24.26-.92.9-.92 2.2 0 1.3.94 2.55 1.07 2.72.13.17 1.85 2.82 4.48 3.96.63.27 1.11.43 1.49.55.63.2 1.2.17 1.65.1.5-.07 1.51-.62 1.73-1.21.21-.6.21-1.1.15-1.21-.06-.11-.24-.17-.5-.3Z" />
    </svg>
  )
}

export function Footer() {
  const { church } = siteContent

  return (
    <footer className="bg-[#17150F] text-[#EAE5DC] pt-16 sm:pt-20 pb-12 px-6 sm:px-12 lg:px-20 border-t border-white/10">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex flex-wrap gap-12 lg:gap-16 items-start justify-between pb-14 border-b border-white/10">
          {/* LEFT: LOGO & ENTITY ADDRESS */}
          <div className="max-w-sm space-y-4">
            <div className="relative h-10 w-44">
              <Image
                src="/logos/LOGO-AD-CATALÃO-BRANCO.png"
                alt="AD Catalão Ministério Madureira"
                fill
                className="object-contain object-left"
              />
            </div>
            <address className="not-italic font-light text-xs sm:text-sm text-[rgba(234,229,220,0.6)] leading-relaxed">
              IGREJA EVANGÉLICA ASSEMBLEIA DE DEUS<br />
              MINISTÉRIO MADUREIRA — CAMPO DE CATALÃO<br />
              {church.address.full}<br />
            </address>
          </div>

          {/* RIGHT: NAVIGATION & CONTACT COLUMNS */}
          <div className="flex flex-wrap gap-10 sm:gap-16 text-sm text-[rgba(234,229,220,0.75)]">
            {/* CONTATO */}
            <div className="flex flex-col gap-3.5">
              <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[rgba(234,229,220,0.45)]">
                Contato
              </span>
              <a
                href={`https://wa.me/${church.contact.whatsapp}?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20Nova%20Catedral%20AD%20Catal%C3%A3o.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-[#EAE5DC] transition"
              >
                <WhatsappIcon className="size-4 text-[#E8651A] shrink-0" />
                <span>WhatsApp {church.contact.phone}</span>
              </a>
              <a
                href={church.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-[#EAE5DC] transition"
              >
                <InstagramIcon className="size-4 text-[#E8651A] shrink-0" />
                <span>@adcatalaooficial</span>
              </a>
              <a
                href={church.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-[#EAE5DC] transition"
              >
                <YoutubeIcon className="size-4 text-[#E8651A] shrink-0" />
                <span>YouTube AD Catalão</span>
              </a>
            </div>

            {/* ONDE */}
            <div className="flex flex-col gap-3.5">
              <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[rgba(234,229,220,0.45)]">
                Onde
              </span>
              <a
                href={church.address.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-[#EAE5DC] transition"
              >
                <MapPin className="size-4 text-[#E8651A] shrink-0" />
                <span>Catalão · Goiás</span>
              </a>
              <a
                href={`https://${church.contact.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-[#EAE5DC] transition"
              >
                <Globe className="size-4 text-[#E8651A] shrink-0" />
                <span>{church.contact.domain}</span>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-[rgba(234,229,220,0.4)]">
          <p>
            © {new Date().getFullYear()} AD Catalão — Ministério Madureira · Todos os direitos reservados.
          </p>
          <p className="text-[11px]">
            Projeto Nova Catedral · 4.000 Lugares
          </p>
        </div>
      </div>
    </footer>
  )
}
