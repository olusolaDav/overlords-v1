import type { Metadata } from "next"
import { VideoHeroSection } from "@/components/sections/video-hero-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { StatsSection } from "@/components/sections/stats-section"
import { ActionButton } from "@/components/action-button"
import { allProjects, projectStats } from "@/data/projects"
import { Container } from "@/components/ui/container"

export const metadata: Metadata = {
  title: "AI Projects Portfolio",
  description:
    "Explore our portfolio of 75+ successful AI projects including intelligent workforce automation, speech-to-text engines, AI-powered beauty solutions, and recruitment analytics dashboards.",
  keywords: [
    "AI projects",
    "AI portfolio",
    "machine learning projects",
    "AI case studies",
    "artificial intelligence solutions",
    "AI development examples",
    "successful AI implementations",
  ],
  openGraph: {
    title: "AI Projects Portfolio | AI Overlords",
    description:
      "Explore our portfolio of 75+ successful AI projects including intelligent workforce automation, speech-to-text engines, and AI-powered solutions.",
    url: "https://aioverlords.com/projects",
  },
  twitter: {
    title: "AI Projects Portfolio | AI Overlords",
    description:
      "Explore our portfolio of 75+ successful AI projects including intelligent workforce automation, speech-to-text engines, and AI-powered solutions.",
  },
}

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <VideoHeroSection
        title="The architects of intelligence."
        description="We are a team of exceptional AI connoisseurs and impactful product engineers—partnering with visionary companies to architect scalable, self-evolving systems that don’t just function, but accelerate growth, compound intelligence, and deliver ROI at unprecedented speed."
        videoSrc="/videos/gen-ai.mp4"
        posterImage="/images/network-circuit-bg.jpeg"
        variant="centered"
    
      />

      <section id="projects" className="py-12 md:py-16">
        <Container>
          <h2 className="mb-8 text-3xl font-bold text-center">Explore Our Portfolio of Featured Projects</h2>
          <p className="mb-12 text-center text-gray-700 max-w-3xl mx-auto">
            We've built a range of AI applications and engineered solutions to help businesses solve real-world
            problems. Our work spans multiple industries and technologies, delivering measurable results and
            transformative experiences.
          </p>
        </Container>
      </section>

      <ProjectsSection title="Our Featured AI Solutions" projects={allProjects} />

      {/* Action Button Section */}
      <Container className="flex py-6">
        <ActionButton text="Get Started with AI" href="/contact" />
      </Container>

      <StatsSection stats={projectStats} />
    </div>
  )
}
