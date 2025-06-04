import { cn } from "../../lib/utils"
import { Container } from "../ui/container"

interface IndustriesSectionProps {
  title: string
  className?: string
}

const industries = [
  "Healthcare",
  "Finance",
  "E-commerce",
  "Manufacturing",
  "Education",
  "Transportation",
  "Real Estate",
  "Entertainment",
]

export function IndustriesSection({ title, className }: IndustriesSectionProps) {
  return (
    <section className={cn("py-12 md:py-16 lg:py-24 xl:py-32", className)}>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-serif mb-4">{title}</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-lg">{industry}</h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
