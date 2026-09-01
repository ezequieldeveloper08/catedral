import React from "react"
import { siteContent } from "@/config/site-content"
import { SectionTitle } from "@/components/shared/SectionTitle"
import { MapPin, Navigation, ExternalLink, Phone, Mail } from "lucide-react"

export function LocationSection() {
  const { church } = siteContent

  return (
    <section id="localizacao" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[#17150F]">
      <div className="max-w-[1240px] mx-auto space-y-16">
        <SectionTitle
          badge="Onde Estamos"
          title="Fácil acesso no coração"
          titleHighlight="de Catalão."
          subtitle="Venha nos visitar no endereço da sede atual, onde também se edifica o novo templo da Catedral."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* LEFT: ADDRESS CARD */}
          <div className="lg:col-span-5 bg-[#1c1913] border border-white/10 p-8 sm:p-10 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div>
                <span className="eyebrow-accent block mb-2">
                  Templo Sede
                </span>
                <h3 className="text-2xl font-light text-[#EAE5DC]">
                  {church.shortName}
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#E8651A] mt-0.5">
                  {church.name}
                </p>
              </div>

              <div className="space-y-4 text-sm font-light text-[rgba(234,229,220,0.8)] border-t border-white/10 pt-4">
                <div className="flex items-start gap-3">
                  <MapPin className="size-5 text-[#E8651A] shrink-0 mt-0.5" />
                  <div>
                    <p>{church.address.full}</p>
                    <p className="text-[rgba(234,229,220,0.5)] text-xs mt-0.5">
                      CEP {church.address.cep} — {church.address.city}, {church.address.state}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="size-5 text-[#E8651A] shrink-0" />
                  <span>{church.contact.phone}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="size-5 text-[#E8651A] shrink-0" />
                  <span>{church.contact.email}</span>
                </div>
              </div>
            </div>

            {/* ROUTE BUTTONS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-white/10">
              <a
                href={church.address.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-evor-accent text-xs py-3 px-4 flex items-center justify-center gap-2 text-center"
              >
                <Navigation className="size-3.5" />
                <span>Google Maps</span>
              </a>

              <a
                href={church.address.wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-evor-outline text-xs py-3 px-4 flex items-center justify-center gap-2 text-center"
              >
                <ExternalLink className="size-3.5" />
                <span>Waze</span>
              </a>
            </div>
          </div>

          {/* RIGHT: MAP EMBED */}
          <div className="lg:col-span-7 relative min-h-[260px] sm:min-h-[380px] lg:min-h-full overflow-hidden bg-[#1c1913] border border-white/10">
            <iframe
              src={church.address.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "inherit", filter: "invert(90%) hue-rotate(180deg) brightness(85%) contrast(90%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Localização AD Catalão"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
