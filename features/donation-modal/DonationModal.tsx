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
  const { donations } = siteContent

  const handleCopyPix = () => {
    navigator.clipboard.writeText(donations.pix.key)
    setCopiedKey(true)
    toast.success("Chave Pix copiada com sucesso!", {
      description: "Cole no app do seu banco para transferir sua contribuição.",
    })
    setTimeout(() => setCopiedKey(false), 2500)
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
            <DialogTitle className="text-2xl font-light text-[#EAE5DC]">
              Edifique a <span className="font-semibold text-[#E8651A]">Nova Catedral</span>
            </DialogTitle>
            <DialogDescription className="text-sm font-light text-[rgba(234,229,220,0.7)] leading-relaxed">
              Cada oferta é um tijolo espiritual e físico nessa grande colheita em Catalão e região.
            </DialogDescription>
          </DialogHeader>

          <Tabs defaultValue="pix" className="mt-4">
            <TabsList className="grid grid-cols-3 bg-[#1c1913] border border-white/10 p-1">
              <TabsTrigger
                value="pix"
                className="text-xs uppercase tracking-wider data-[state=active]:bg-[#E8651A] data-[state=active]:text-[#EAE5DC]"
              >
                Pix
              </TabsTrigger>
              <TabsTrigger
                value="cartao"
                className="text-xs uppercase tracking-wider data-[state=active]:bg-[#E8651A] data-[state=active]:text-[#EAE5DC]"
              >
                Cartão
              </TabsTrigger>
              <TabsTrigger
                value="banco"
                className="text-xs uppercase tracking-wider data-[state=active]:bg-[#E8651A] data-[state=active]:text-[#EAE5DC]"
              >
                Transferência
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
              <div className="bg-[#1c1913] border border-white/10 p-5 rounded-[2px] space-y-3">
                <div className="flex items-center gap-2 text-sm text-[#EAE5DC] mb-2">
                  <Landmark className="size-4 text-[#E8651A]" />
                  <span className="font-medium">Dados Bancários para TED / DOC</span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-[rgba(234,229,220,0.5)] block">Banco:</span>
                    <span className="font-medium text-[#EAE5DC]">{donations.bankTransfer.bankName}</span>
                  </div>
                  <div>
                    <span className="text-[rgba(234,229,220,0.5)] block">Agência:</span>
                    <span className="font-medium text-[#EAE5DC]">{donations.bankTransfer.agency}</span>
                  </div>
                  <div>
                    <span className="text-[rgba(234,229,220,0.5)] block">Conta Corrente:</span>
                    <span className="font-medium text-[#EAE5DC]">{donations.bankTransfer.account}</span>
                  </div>
                  <div>
                    <span className="text-[rgba(234,229,220,0.5)] block">CNPJ:</span>
                    <span className="font-medium text-[#EAE5DC]">{donations.bankTransfer.cnpj}</span>
                  </div>
                </div>
                <div className="pt-2 text-xs text-[rgba(234,229,220,0.7)] border-t border-white/10">
                  <span className="text-[rgba(234,229,220,0.5)]">Favorecido:</span> {donations.bankTransfer.favored}
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
