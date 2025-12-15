import { LandingHeader } from "@/components/landing/landing-header"
import { HeroSection } from "@/components/landing/hero-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { PricingSection } from "@/components/landing/pricing-section"
import { LandingFooter } from "@/components/landing/landing-footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <LandingHeader />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
      </main>
      <LandingFooter />
    </div>
  )
}
