import { HeroSection } from "../components/sections/hero-section"
import { ServicesSection } from "../components/sections/services-section"
import { StatsSection } from "../components/sections/stats-section"
import { TestimonialSection } from "../components/sections/testimonial-section"
import { ProjectsSection } from "../components/sections/projects-section"
import { CtaSection } from "../components/sections/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <TestimonialSection />
      <ProjectsSection />
      <CtaSection />
    </>
  )
}
