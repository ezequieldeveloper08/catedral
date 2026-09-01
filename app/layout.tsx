import type { Metadata, Viewport } from "next"
import { Poppins } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { cn } from "@/lib/utils"
import { siteContent } from "@/config/site-content"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const viewport: Viewport = {
  themeColor: "#17150F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: `${siteContent.church.projectName} | ${siteContent.church.shortName} Ministério Madureira`,
  description: `${siteContent.church.headline}. Projeto com 4.000 lugares e 3 pavimentos em Catalão - GO. Conheça, seja voluntário e contribua com esta grande obra de fé.`,
  keywords: [
    "Catedral AD Catalão",
    "Assembleia de Deus Catalão",
    "AD Catalão Madureira",
    "Igreja em Catalão",
    "Construção da Nova Catedral",
    "Cultos AD Catalão",
    "Pedra Fundamental AD Catalão",
    "catedraladcatalao.com.br",
  ],
  authors: [{ name: siteContent.church.name, url: `https://${siteContent.church.contact.domain}` }],
  creator: siteContent.church.name,
  metadataBase: new URL(`https://${siteContent.church.contact.domain}`),
  alternates: {
    canonical: `https://${siteContent.church.contact.domain}`,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: `https://${siteContent.church.contact.domain}`,
    title: `${siteContent.church.projectName} — Um Altar para 4.000 Vidas`,
    description: `${siteContent.church.subheadline} A igreja permanece em pleno funcionamento durante as obras.`,
    siteName: siteContent.church.projectName,
    images: [
      {
        url: "/images/faixada-01.jpeg",
        width: 1200,
        height: 675,
        alt: "Perspectiva da Fachada da Nova Catedral AD Catalão",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteContent.church.projectName} | AD Catalão`,
    description: siteContent.church.subheadline,
    images: ["/images/faixada-01.jpeg"],
  },
  icons: {
    icon: "/logos/MARCA-AD-CATALÃO-HORIZONTAL-COLORIDA.png",
    shortcut: "/logos/MARCA-AD-CATALÃO-HORIZONTAL-COLORIDA.png",
    apple: "/logos/MARCA-AD-CATALÃO-HORIZONTAL-COLORIDA.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={cn("dark antialiased scroll-smooth selection:bg-[#E8651A]/30 selection:text-[#EAE5DC]", poppins.variable)}
    >
      <body className="min-h-screen bg-[#17150F] text-[#EAE5DC] font-sans antialiased overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
          <Toaster position="bottom-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}
