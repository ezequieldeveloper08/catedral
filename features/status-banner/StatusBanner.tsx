import React from "react"
import { siteContent } from "@/config/site-content"
import { ShieldCheck, CalendarClock, Users, Building } from "lucide-react"

export function StatusBanner() {
  const stats = [
    {
      value: "4.000",
      label: "Lugares Sentados",
      detail: "Capacidade na nave principal",
      icon: Users,
    },
    {
      value: "3",
      label: "Pavimentos",
      detail: "Nave, mezanino e subsolo",
      icon: Building,
    },
    {
      value: "100%",
      label: "Ativa e Operante",
      detail: "Cultos sem interrupções",
      icon: ShieldCheck,
    },
    {
      value: "Em Andamento",
      label: "Obras Iniciadas",
      detail: "Fase de fachada e estrutura",
      icon: CalendarClock,
    },
  ]

  return (
    <section id="obra" className="py-20 sm:py-28 px-6 sm:px-12 lg:px-20 bg-[#13110C] border-y border-white/10">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: TEXT NOTICE */}
          <div className="lg:col-span-6 space-y-6">
            <span className="eyebrow-accent">
              Status da Construção
            </span>

            <h2 className="text-[clamp(28px,3.2vw,44px)] font-light leading-[1.12] tracking-[-0.01em] text-[#EAE5DC]">
              A igreja permanece em <span className="font-semibold text-[#E8651A]">pleno funcionamento</span> durante as obras.
            </h2>

            <div className="text-[clamp(14px,1.2vw,16px)] font-light leading-[1.75] text-[rgba(234,229,220,0.75)] space-y-4">
              <p>
                As obras foram minuciosamente planejadas para que nossa comunidade continue congregando e adorando sem nenhuma interrupção.
              </p>
              <p>
                Os trabalhos avançam primeiramente pela nova fachada e infraestrutura externa. O antigo templo só passará por intervenções diretas nas etapas finais, garantindo total conforto e segurança a todos os membros e visitantes.
              </p>
            </div>
          </div>

          {/* RIGHT: METRIC GRID */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  className="bg-[#1c1913] border border-white/10 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#E8651A]/50"
                >
                  <Icon className="size-6 text-[#E8651A] mb-4 stroke-[1.5]" />
                  <div>
                  <span className="block text-2xl sm:text-4xl font-light text-[#EAE5DC] tracking-tight break-words">
                    {stat.value}
                  </span>
                    <span className="block text-xs font-medium uppercase tracking-[0.14em] text-[#EAE5DC]/90 mt-1">
                      {stat.label}
                    </span>
                    <p className="text-[11px] font-light text-[rgba(234,229,220,0.5)] mt-1">
                      {stat.detail}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
