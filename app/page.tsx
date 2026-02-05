import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { CampaignOnboardingCarousel } from "@/components/sections/campaign-onboarding-carousel"
import { ConceptSection } from "@/components/sections/concept"
import { DailyHustleInterface } from "@/components/sections/daily-hustle-interface"
import { Hero } from "@/components/sections/hero"
import { ManagedPlans } from "@/components/sections/managed-plans"
import { PocketToday } from "@/components/sections/pocket-today"
import { Review } from "@/components/sections/reviews"
import { RoadmapSection } from "@/components/sections/roadmap"

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="overflow-visible">
        <Hero />
        <ConceptSection />
        <PocketToday />
        <DailyHustleInterface />
        <RoadmapSection />
        <CampaignOnboardingCarousel />
        <ManagedPlans />
        <Review />
      </main>
      <Footer />
    </>
  )
}
