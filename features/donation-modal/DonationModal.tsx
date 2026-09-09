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

  const handleCopyAllBankData = () => {
    const allData = `Banco: ${donations.bankTransfer.bankName}
Agência: ${donations.bankTransfer.agency}
Conta Corrente: ${donations.bankTransfer.account}
CNPJ: ${donations.bankTransfer.cnpj}
Favorecido: ${donations.bankTransfer.favored}`
    
    navigator.clipboard.writeText(allData)
    setCopiedField("todos")
    toast.success("Todos os dados bancários foram copiados!", {
      description: "Cole no app do seu banco para realizar a transferência.",
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
        <DialogContent className="w-[calc(100%-1.5rem)] sm:max-w-[560px] max-w-[560px] max-h-[90dvh] overflow-y-auto bg-[#17150F] border border-white/10 text-[#EAE5DC] p-5 sm:p-7 rounded-[8px]">
          <DialogHeader className="space-y-1.5 text-left">
            <span className="eyebrow-accent">
              Contribuição e Semeadura
            </span>
            <DialogTitle className="text-xl sm:text-2xl font-normal text-[#F3EFE6]">
              Edifique a <span className="font-bold text-[#E8651A]">Nova Catedral</span>
            </DialogTitle>
            <DialogDescription className="text-xs sm:text-sm font-normal text-[#EAE5DC]/80 leading-relaxed">
              Cada oferta é um tijolo espiritual e físico nessa grande colheita em Catalão e região.
            </DialogDescription>
          </DialogHeader>

          <Tabs defaultValue="pix" className="mt-4 w-full">
            <TabsList className="grid grid-cols-2 bg-[#13110C] border border-white/10 p-1 w-full rounded-[6px] gap-1">
              <TabsTrigger
                value="pix"
                className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium py-2.5 rounded-[4px] transition-all data-[active]:bg-[#E8651A] data-[active]:text-white data-[state=active]:bg-[#E8651A] data-[state=active]:text-white data-[active]:font-semibold data-[state=active]:font-semibold shadow-sm cursor-pointer whitespace-nowrap"
              >
                <QrCode className="size-4 shrink-0 text-current" />
                <span>Pix</span>
              </TabsTrigger>
              <TabsTrigger
                value="banco"
                className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium py-2.5 rounded-[4px] transition-all data-[active]:bg-[#E8651A] data-[active]:text-white data-[state=active]:bg-[#E8651A] data-[state=active]:text-white data-[active]:font-semibold data-[state=active]:font-semibold shadow-sm cursor-pointer whitespace-nowrap"
              >
                <Landmark className="size-4 shrink-0 text-current" />
                <span>TED / Transferência</span>
              </TabsTrigger>
            </TabsList>

            {/* TAB PIX */}
            <TabsContent value="pix" className="space-y-4 pt-4">
              <div className="bg-[#1c1913] border border-white/10 p-4 rounded-[6px] space-y-3.5">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-[#EAE5DC]">
                    <QrCode className="size-4 text-[#E8651A] shrink-0" />
                    <span className="font-medium">Chave Pix ({donations.pix.keyType})</span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-[#E8651A] font-mono uppercase shrink-0">
                    {donations.pix.bank}
                  </span>
                </div>

                <div className="bg-[#13110C] border border-white/10 p-3 flex items-center justify-between gap-2.5 rounded-[4px]">
                  <span className="font-mono text-xs sm:text-sm text-[#EAE5DC] break-all select-all">
                    {donations.pix.key}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyPix}
                    className="p-1.5 hover:bg-white/10 text-[#EAE5DC] rounded cursor-pointer transition shrink-0"
                    title="Copiar chave Pix"
                  >
                    {copiedKey ? (
                      <Check className="size-4 text-emerald-400" />
                    ) : (
                      <Copy className="size-4 text-[#E8651A]" />
                    )}
                  </button>
                </div>

                <div className="text-xs space-y-1 text-[#EAE5DC]/70">
                  <p><strong className="text-[#EAE5DC]">Beneficiário:</strong> {donations.pix.beneficiary}</p>
                  <p><strong className="text-[#EAE5DC]">Cidade:</strong> {donations.pix.city}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyPix}
                className="w-full btn-evor-accent flex items-center justify-center gap-2 cursor-pointer py-3 text-xs sm:text-sm rounded-[4px]"
              >
                {copiedKey ? <Check className="size-4" /> : <Copy className="size-4" />}
                {copiedKey ? "Chave Pix Copiada!" : "Copiar Chave Pix"}
              </button>
            </TabsContent>

            {/* TAB TRANSFERÊNCIA */}
            <TabsContent value="banco" className="space-y-4 pt-4">
              <div className="bg-[#1c1913] border border-white/10 p-4 sm:p-5 rounded-[6px] space-y-3.5">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#F3EFE6] pb-2.5 border-b border-white/10">
                  <Landmark className="size-4 text-[#E8651A] shrink-0" />
                  <span className="font-medium">Dados Bancários para Transferência</span>
                </div>

                <div className="space-y-2.5">
                  {[
                    { label: "Banco", value: donations.bankTransfer.bankName, isMono: true },
                    { label: "Agência", value: donations.bankTransfer.agency, isMono: true },
                    { label: "Conta Corrente", value: donations.bankTransfer.account, isMono: true },
                    { label: "CNPJ", value: donations.bankTransfer.cnpj, isMono: true },
                    { label: "Favorecido", value: donations.bankTransfer.favored, isMono: false },
                  ].map((field) => (
                    <div
                      key={field.label}
                      className="bg-[#13110C] border border-white/10 p-3 flex items-center justify-between gap-3 rounded-[4px]"
                    >
                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#E8651A] block mb-0.5">
                          {field.label}
                        </span>
                        <span className={`text-xs sm:text-sm text-[#F3EFE6] select-all font-medium block ${field.isMono ? 'font-mono' : 'font-sans break-words'}`}>
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

              <button
                type="button"
                onClick={handleCopyAllBankData}
                className="w-full btn-evor-accent flex items-center justify-center gap-2 cursor-pointer py-3 text-xs sm:text-sm rounded-[4px]"
              >
                {copiedField === "todos" ? <Check className="size-4" /> : <Copy className="size-4" />}
                {copiedField === "todos" ? "Dados Bancários Copiados!" : "Copiar Todos os Dados Bancários"}
              </button>
            </TabsContent>
          </Tabs>

          <p className="text-[11px] sm:text-xs text-center text-[#EAE5DC]/60 mt-3 leading-relaxed max-w-md mx-auto">
            “Cada um dê conforme determinou em seu coração, não com pesar ou por obrigação, pois Deus ama quem dá com alegria.” — 2 Coríntios 9:7
          </p>
        </DialogContent>
      </Dialog>
    </>
  )
}
