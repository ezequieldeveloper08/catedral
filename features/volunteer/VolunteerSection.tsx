"use client"

import React, { useState } from "react"
import { siteContent } from "@/config/site-content"
import { SectionTitle } from "@/components/shared/SectionTitle"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Send, CheckCircle2 } from "lucide-react"

export function VolunteerSection() {
  const { volunteer, church } = siteContent
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [area, setArea] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!name.trim() || !phone.trim() || !area) {
      toast.error("Por favor, preencha nome, telefone e selecione a área de interesse.")
      return
    }

    const text = `*Inscrição de Voluntário - Nova Catedral*%0A%0A*Nome:* ${encodeURIComponent(
      name
    )}%0A*Telefone:* ${encodeURIComponent(phone)}%0A*Área de Interesse:* ${encodeURIComponent(
      area
    )}%0A*Mensagem:* ${encodeURIComponent(message || "Gostaria de servir na construção e ministérios da Nova Catedral!")}`

    const whatsappUrl = `https://wa.me/${church.contact.whatsapp}?text=${text}`
    window.open(whatsappUrl, "_blank")
    toast.success("Formulário gerado!", {
      description: "Você foi redirecionado para o WhatsApp da equipe pastoral.",
    })
  }

  return (
    <section id="voluntarios" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[#13110C] border-y border-white/10">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: TEXT & INFO */}
          <div className="lg:col-span-6 space-y-6">
            <SectionTitle
              badge="Serviço & Ministério"
              title="Coloque seus dons a serviço da"
              titleHighlight="Casa do Senhor."
              subtitle={volunteer.subtitle}
            />

            <div className="text-[clamp(14px,1.2vw,16px)] font-light leading-[1.75] text-[rgba(234,229,220,0.75)] space-y-4">
              <p>
                A construção da Nova Catedral envolve muitos braços, oração e dedicação. Convidamos você a fazer parte de nossas frentes de voluntariado e departamentos da igreja.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-[#EAE5DC]">
                <CheckCircle2 className="size-4 text-[#E8651A] shrink-0" />
                <span>Oportunidades em diversas áreas práticas e de suporte</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#EAE5DC]">
                <CheckCircle2 className="size-4 text-[#E8651A] shrink-0" />
                <span>Treinamento e integração com a liderança pastoral</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#EAE5DC]">
                <CheckCircle2 className="size-4 text-[#E8651A] shrink-0" />
                <span>Atuação direta nos cultos e nos eventos da construção</span>
              </div>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="lg:col-span-6">
            <form
              onSubmit={handleSubmit}
              className="bg-[#1c1913] border border-white/10 p-6 sm:p-10 space-y-5"
            >
              <div className="space-y-1">
                <span className="eyebrow-accent block">
                  Formulário de Cadastro
                </span>
                <h3 className="text-xl font-light text-[#EAE5DC]">
                  Quero ser um voluntário
                </h3>
              </div>

              <div className="space-y-4 pt-2">
                <div className="space-y-1.5">
                  <label htmlFor="vol-name" className="text-xs uppercase tracking-wider text-[rgba(234,229,220,0.7)] font-medium">
                    Nome Completo *
                  </label>
                  <Input
                    id="vol-name"
                    required
                    placeholder="Seu nome completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-[#13110C] border-white/10 text-[#EAE5DC] placeholder:text-white/20 h-11 focus-visible:ring-[#E8651A] rounded-[2px]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="vol-phone" className="text-xs uppercase tracking-wider text-[rgba(234,229,220,0.7)] font-medium">
                    WhatsApp / Telefone *
                  </label>
                  <Input
                    id="vol-phone"
                    required
                    placeholder="(64) 99999-9999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-[#13110C] border-white/10 text-[#EAE5DC] placeholder:text-white/20 h-11 focus-visible:ring-[#E8651A] rounded-[2px]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="vol-area" className="text-xs uppercase tracking-wider text-[rgba(234,229,220,0.7)] font-medium">
                    Área de Interesse *
                  </label>
                  <select
                    id="vol-area"
                    required
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    style={{ fontSize: "16px" }}
                    className="w-full bg-[#13110C] border border-white/10 text-[#EAE5DC] h-11 px-3 focus:outline-none focus:ring-1 focus:ring-[#E8651A] rounded-[2px]"
                  >
                    <option value="" disabled>Selecione uma área</option>
                    {volunteer.areas.map((ar) => (
                      <option key={ar.id} value={ar.label} className="bg-[#17150F] text-[#EAE5DC]">
                        {ar.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="vol-msg" className="text-xs uppercase tracking-wider text-[rgba(234,229,220,0.7)] font-medium">
                    Mensagem ou Experiência (Opcional)
                  </label>
                  <Textarea
                    id="vol-msg"
                    placeholder="Conte um pouco sobre suas habilidades ou como deseja contribuir..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="bg-[#13110C] border-white/10 text-[#EAE5DC] placeholder:text-white/20 min-h-[90px] focus-visible:ring-[#E8651A] rounded-[2px]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full btn-evor-accent flex items-center justify-center gap-2 cursor-pointer mt-4"
              >
                <span>Enviar Inscrição via WhatsApp</span>
                <Send className="size-4" />
              </button>

              <p className="text-[11px] text-center text-[rgba(234,229,220,0.4)]">
                Ao enviar, você será direcionado para o WhatsApp da Secretaria da Igreja.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
