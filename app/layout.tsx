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
  metadataBase: new URL("https://www.catedraladcatalao.com.br"),
  title: {
    default: "Nova Catedral AD Catalão — Um Templo que Conta a História de um Povo",
    template: "%s | AD Catalão Ministério Madureira",
  },
  description: "O novo templo sede da Igreja Evangélica Assembleia de Deus Ministério Madureira em Catalão (GO). Três pavimentos, arquitetura contemporânea e capacidade para 4.000 pessoas. Acompanhe a obra e contribua.",
  keywords: [
    "Nova Catedral AD Catalão",
    "Catedral AD Catalão",
    "Assembleia de Deus Catalão",
    "AD Catalão Madureira",
    "Igreja em Catalão GO",
    "Construção Nova Catedral Catalão",
    "Cultos AD Catalão",
    "Doação Nova Catedral Catalão",
    "Pix AD Catalão",
    "catedraladcatalao.com.br",
  ],
  authors: [{ name: "AD Catalão — Ministério Madureira", url: "https://www.catedraladcatalao.com.br" }],
  creator: "AD Catalão — Ministério Madureira",
  publisher: "AD Catalão — Ministério Madureira",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: {
    canonical: "https://www.catedraladcatalao.com.br",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.catedraladcatalao.com.br",
    title: "Nova Catedral AD Catalão — Um Altar para 4.000 Vidas",
    description: "O novo templo sede da AD Catalão está em construção. Três pavimentos, arquitetura contemporânea e a igreja em pleno funcionamento durante toda a obra.",
    siteName: "Nova Catedral AD Catalão",
    images: [
      {
        url: "https://www.catedraladcatalao.com.br/images/faixada-01.jpeg",
        width: 1200,
        height: 675,
        alt: "Perspectiva da Fachada Monumental da Nova Catedral AD Catalão",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova Catedral AD Catalão — Construído pela Fé",
    description: "O novo templo sede da AD Catalão em construção. Acompanhe o projeto e faça parte desta conquista.",
    images: ["https://www.catedraladcatalao.com.br/images/faixada-01.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Church",
    "name": "Igreja Evangélica Assembleia de Deus — Ministério Madureira",
    "alternateName": "Nova Catedral AD Catalão",
    "url": "https://www.catedraladcatalao.com.br",
    "logo": "https://www.catedraladcatalao.com.br/logos/MARCA-AD-CATALÃO-HORIZONTAL-BRANCA.png",
    "image": "https://www.catedraladcatalao.com.br/images/faixada-01.jpeg",
    "description": "O novo templo sede da AD Catalão está em construção. Três pavimentos, arquitetura contemporânea e capacidade para 4.000 pessoas.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua do Cristiano Aires, 649",
      "addressLocality": "Catalão",
      "addressRegion": "GO",
      "postalCode": "75709-280",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -18.1643445,
      "longitude": -47.9463567
    },
    "telephone": "+55-64-3441-4477",
    "sameAs": [
      "https://www.instagram.com/adcatalaooficial",
      "https://www.youtube.com/@adcatalaooficial",
      "https://www.facebook.com/adcatalaooficial"
    ]
  }

  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={cn("dark antialiased scroll-smooth selection:bg-[#E8651A]/30 selection:text-[#EAE5DC]", poppins.variable)}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#17150F] text-[#EAE5DC] font-sans antialiased overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
          <Toaster position="bottom-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}
