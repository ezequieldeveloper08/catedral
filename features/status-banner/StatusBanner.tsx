import React from "react"
import { siteContent } from "@/config/site-content"
import { ShieldCheck, CalendarClock, Users, Building } from "lucide-react"
import { cn } from "@/lib/utils"

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
    <section id="obra" className="py-16 sm:py-28 px-6 sm:px-12 lg:px-20 bg-[#13110C] border-y border-white/10">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* LEFT: TEXT NOTICE */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <span className="eyebrow-accent block mb-2">
              Status da Construção
            </span>

            <h2 className="text-[clamp(24px,3.2vw,44px)] font-normal leading-[1.15] tracking-[-0.01em] text-[#F3EFE6]">
              A igreja permanece em <span className="font-semibold text-[#E8651A]">pleno funcionamento</span> durante as obras.
            </h2>

            <div className="text-[clamp(14px,1.2vw,16px)] font-normal leading-[1.7] text-[#EAE5DC]/80 space-y-4">
              <p>
                As obras foram minuciosamente planejadas para que nossa comunidade continue congregando e adorando sem nenhuma interrupção.
              </p>
              <p>
                Os trabalhos avançam primeiramente pela nova fachada e infraestrutura externa. O antigo templo só passará por intervenções diretas nas etapas finais, garantindo total conforto e segurança a todos os membros e visitantes.
              </p>
            </div>
          </div>

          {/* RIGHT: METRIC GRID */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-3.5 sm:gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              const isLongText = stat.value.length > 6

              return (
                <div
                  key={index}
                  className="bg-[#1c1913] border border-white/10 p-4.5 sm:p-7 flex flex-col justify-between min-h-[150px] sm:min-h-[170px] transition-all duration-300 hover:border-[#E8651A]/50 rounded-[2px]"
                >
                  <Icon className="size-5 sm:size-6 text-[#E8651A] mb-3 stroke-[1.75]" />
                  <div>
                    <span
                      className={cn(
                        "block text-[#F3EFE6] tracking-tight leading-tight hyphens-none break-normal",
                        isLongText
                          ? "text-base sm:text-2xl lg:text-3xl font-medium"
                          : "text-2xl sm:text-3xl lg:text-4xl font-normal"
                      )}
                    >
                      {stat.value}
                    </span>
                    <span className="block text-[10px] sm:text-xs font-semibold uppercase tracking-[0.12em] text-[#E8651A] mt-2">
                      {stat.label}
                    </span>
                    <p className="text-[11px] font-normal text-[#EAE5DC]/60 mt-1 leading-snug">
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
