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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "sonner"
import { Copy, Check, QrCode, CreditCard, Landmark, ExternalLink } from "lucide-react"

interface DonationModalProps {
  children?: React.ReactNode
}

export function DonationModal({ children }: DonationModalProps) {
  const [open, setOpen] = useState(false)
  const [copiedKey, setCopiedKey] = useState(false)
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const { donations } = siteContent

  const handleCopyPix = () => {
    navigator.clipboard.writeText(donations.pix.key)
    setCopiedKey(true)
    toast.success("Chave Pix copiada com sucesso!", {
      description: "Cole no app do seu banco para transferir sua contribuição.",
    })
    setTimeout(() => setCopiedKey(false), 2500)
  }

  const handleCopyField = (label: string, value: string) => {
    navigator.clipboard.writeText(value)
    setCopiedField(label)
    toast.success(`${label} copiado!`, {
      description: value,
    })
    setTimeout(() => setCopiedField(null), 2500)
  }

  return (
    <>
      <span onClick={() => setOpen(true)} className="inline-block">
        {children || (
          <button type="button" className="btn-evor-accent cursor-pointer">
            Contribuir com a Obra
          </button>
        )}
      </span>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-[calc(100%-2rem)] sm:max-w-[540px] max-h-[90dvh] overflow-y-auto bg-[#17150F] border border-white/10 text-[#EAE5DC] p-5 sm:p-8">
          <DialogHeader className="space-y-2 text-left">
            <span className="eyebrow-accent">
              Contribuição e Semeadura
            </span>
            <DialogTitle className="text-2xl font-normal text-[#F3EFE6]">
              Edifique a <span className="font-bold text-[#E8651A]">Nova Catedral</span>
            </DialogTitle>
            <DialogDescription className="text-xs sm:text-sm font-normal text-[#EAE5DC]/80 leading-relaxed">
              Cada oferta é um tijolo espiritual e físico nessa grande colheita em Catalão e região.
            </DialogDescription>
          </DialogHeader>

          <Tabs defaultValue="pix" className="mt-4 w-full">
            <TabsList className="grid grid-cols-3 bg-[#13110C] border border-white/10 p-1 w-full rounded-[4px] gap-1">
              <TabsTrigger
                value="pix"
                className="flex items-center justify-center gap-1.5 text-xs sm:text-sm font-medium py-2.5 sm:py-3 rounded-[2px] transition-all data-[active]:bg-[#E8651A] data-[active]:text-white data-[state=active]:bg-[#E8651A] data-[state=active]:text-white data-[active]:font-semibold data-[state=active]:font-semibold shadow-sm cursor-pointer"
              >
                <QrCode className="size-3.5 sm:size-4 shrink-0" />
                <span>Pix</span>
              </TabsTrigger>
              <TabsTrigger
                value="cartao"
                className="flex items-center justify-center gap-1.5 text-xs sm:text-sm font-medium py-2.5 sm:py-3 rounded-[2px] transition-all data-[active]:bg-[#E8651A] data-[active]:text-white data-[state=active]:bg-[#E8651A] data-[state=active]:text-white data-[active]:font-semibold data-[state=active]:font-semibold shadow-sm cursor-pointer"
              >
                <CreditCard className="size-3.5 sm:size-4 shrink-0" />
                <span>Cartão</span>
              </TabsTrigger>
              <TabsTrigger
                value="banco"
                className="flex items-center justify-center gap-1.5 text-xs sm:text-sm font-medium py-2.5 sm:py-3 rounded-[2px] transition-all data-[active]:bg-[#E8651A] data-[active]:text-white data-[state=active]:bg-[#E8651A] data-[state=active]:text-white data-[active]:font-semibold data-[state=active]:font-semibold shadow-sm cursor-pointer"
              >
                <Landmark className="size-3.5 sm:size-4 shrink-0" />
                <span className="hidden xs:inline">Transferência</span>
                <span className="xs:hidden">TED/DOC</span>
              </TabsTrigger>
            </TabsList>

            {/* TAB PIX */}
            <TabsContent value="pix" className="space-y-5 pt-4">
              <div className="bg-[#1c1913] border border-white/10 p-5 rounded-[2px] space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-[#EAE5DC]">
                    <QrCode className="size-4 text-[#E8651A]" />
                    <span className="font-medium">Chave Pix ({donations.pix.keyType})</span>
                  </div>
                  <span className="text-[11px] text-[#E8651A] font-mono uppercase">
                    {donations.pix.bank}
                  </span>
                </div>

                <div className="bg-[#13110C] border border-white/10 p-3.5 flex items-center justify-between gap-3">
                  <span className="font-mono text-xs text-[#EAE5DC] break-all select-all">
                    {donations.pix.key}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyPix}
                    className="p-2 hover:bg-white/10 text-[#EAE5DC] rounded cursor-pointer transition shrink-0"
                    title="Copiar chave Pix"
                  >
                    {copiedKey ? (
                      <Check className="size-4 text-emerald-400" />
                    ) : (
                      <Copy className="size-4 text-[#E8651A]" />
                    )}
                  </button>
                </div>

                <div className="text-xs space-y-1 text-[rgba(234,229,220,0.6)]">
                  <p><strong className="text-[#EAE5DC]">Beneficiário:</strong> {donations.pix.beneficiary}</p>
                  <p><strong className="text-[#EAE5DC]">Cidade:</strong> {donations.pix.city}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyPix}
                className="w-full btn-evor-accent flex items-center justify-center gap-2 cursor-pointer"
              >
                {copiedKey ? <Check className="size-4" /> : <Copy className="size-4" />}
                {copiedKey ? "Chave Pix Copiada!" : "Copiar Chave Pix"}
              </button>
            </TabsContent>

            {/* TAB CARTÃO */}
            <TabsContent value="cartao" className="space-y-5 pt-4">
              <div className="bg-[#1c1913] border border-white/10 p-5 rounded-[2px] space-y-4 text-center">
                <CreditCard className="size-8 text-[#E8651A] mx-auto stroke-[1.5]" />
                <div className="space-y-1">
                  <h4 className="text-sm font-medium text-[#EAE5DC]">
                    {donations.creditCard.title}
                  </h4>
                  <p className="text-xs font-light text-[rgba(234,229,220,0.6)] max-w-sm mx-auto">
                    {donations.creditCard.description}
                  </p>
                </div>
              </div>

              <a
                href={donations.creditCard.paymentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-evor-accent flex items-center justify-center gap-2 text-center"
              >
                <span>{donations.creditCard.buttonText}</span>
                <ExternalLink className="size-4" />
              </a>
            </TabsContent>

            {/* TAB TRANSFERÊNCIA */}
            <TabsContent value="banco" className="space-y-4 pt-4">
              <div className="bg-[#1c1913] border border-white/10 p-4 sm:p-5 rounded-[2px] space-y-3.5">
                <div className="flex items-center gap-2 text-sm text-[#F3EFE6] pb-2 border-b border-white/10">
                  <Landmark className="size-4 text-[#E8651A]" />
                  <span className="font-medium">Dados Bancários para Transferência (TED / DOC)</span>
                </div>

                <div className="space-y-2.5">
                  {[
                    { label: "Banco", value: donations.bankTransfer.bankName },
                    { label: "Agência", value: donations.bankTransfer.agency },
                    { label: "Conta Corrente", value: donations.bankTransfer.account },
                    { label: "CNPJ", value: donations.bankTransfer.cnpj },
                    { label: "Favorecido", value: donations.bankTransfer.favored },
                  ].map((field) => (
                    <div
                      key={field.label}
                      className="bg-[#13110C] border border-white/10 p-2.5 sm:p-3 flex items-center justify-between gap-3 rounded-[2px]"
                    >
                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#E8651A] block">
                          {field.label}
                        </span>
                        <span className="font-mono text-xs sm:text-sm text-[#F3EFE6] truncate block select-all font-medium">
                          {field.value}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopyField(field.label, field.value)}
                        className="p-2 hover:bg-white/10 text-[#EAE5DC] rounded cursor-pointer transition shrink-0 flex items-center gap-1"
                        title={`Copiar ${field.label}`}
                      >
                        {copiedField === field.label ? (
                          <Check className="size-4 text-emerald-400" />
                        ) : (
                          <Copy className="size-4 text-[#E8651A]" />
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <p className="text-[11px] text-center text-[rgba(234,229,220,0.5)] mt-2">
            “Cada um dê conforme determinou em seu coração, não com pesar ou por obrigação, pois Deus ama quem dá com alegria.” — 2 Coríntios 9:7
          </p>
        </DialogContent>
      </Dialog>
    </>
  )
}
