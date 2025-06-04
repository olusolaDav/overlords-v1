import { cn } from "../../lib/utils"
import { Container } from "../ui/container"
import { ServiceCard } from "../service-card"

interface Solution {
  title: string
  description: string
  icon: string
  href: string
}

interface SolutionsSectionProps {
  title: string
  className?: string
  id?: string
}

const solutions: Solution[] = [
  {
    title: "AI Agents",
    description: "Intelligent autonomous systems that can perform complex tasks and make decisions.",
    icon: "/images/ai-agents.png",
    href: "/ai-agents",
  },
  {
    title: "Generative AI",
    description: "Create content, images, and solutions using advanced generative models.",
    icon: "/images/gen-ai.png",
    href: "/gen-ai",
  },
  {
    title: "Machine Learning",
    description: "Build predictive models and intelligent systems that learn from data.",
    icon: "/images/machine-learning.png",
    href: "/machine-learning",
  },
  {
    title: "Data Science",
    description: "Extract insights and value from your data with advanced analytics.",
    icon: "/images/data-science.png",
    href: "/data-science",
  },
  {
    title: "Natural Language Processing",
    description: "Process and understand human language with advanced NLP techniques.",
    icon: "/images/nlp.png",
    href: "/nlp",
  },
  {
    title: "Voice AI",
    description: "Build voice-enabled applications with speech recognition and synthesis.",
    icon: "/images/voice-ai.png",
    href: "/voice-ai",
  },
]

export function SolutionsSection({ title, className, id }: SolutionsSectionProps) {
  return (
    <section className={cn("py-12 md:py-16 lg:py-24 xl:py-32", className)} id={id}>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-serif mb-4">{title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <ServiceCard
              key={index}
              title={solution.title}
              description={solution.description}
              icon={solution.icon}
              href={solution.href}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
