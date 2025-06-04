import { cn } from "../../lib/utils"
import { Container } from "../ui/container"

interface ApproachStep {
  title: string
  description: string
  icon: string
}

interface ApproachSectionProps {
  title: string
  subtitle?: string
  steps: ApproachStep[]
  className?: string
}

export function ApproachSection({ title, subtitle, steps, className }: ApproachSectionProps) {
  return (
    <section className={cn("py-12 md:py-16 lg:py-24 xl:py-32 bg-gray-50", className)}>
      <Container>
        <div className="text-center mb-12">
          {subtitle && <p className="text-sm font-semibold text-primary mb-2 uppercase tracking-wide">{subtitle}</p>}
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-serif mb-4">{title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-black">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
