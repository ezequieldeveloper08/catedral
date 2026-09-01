import { Header } from "@/features/header/Header"
import { Hero } from "@/features/hero/Hero"
import { StatusBanner } from "@/features/status-banner/StatusBanner"
import { ProjectSection } from "@/features/project/ProjectSection"
import { LeadershipSection } from "@/features/leadership/LeadershipSection"
import { CultosSection } from "@/features/cultos/CultosSection"
import { VolunteerSection } from "@/features/volunteer/VolunteerSection"
import { LocationSection } from "@/features/location/LocationSection"
import { FaqSection } from "@/features/faq/FaqSection"
import { Footer } from "@/features/footer/Footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-[#17150F] text-[#EAE5DC] selection:bg-[#E8651A]/30 selection:text-[#EAE5DC]">
      <Header />
      <Hero />
      <StatusBanner />
      <ProjectSection />
      <LeadershipSection />
      <CultosSection />
      <VolunteerSection />
      <LocationSection />
      <FaqSection />
      <Footer />
    </main>
  )
}
