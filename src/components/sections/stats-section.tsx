import { cn } from "../../lib/utils"
import { Container } from "../ui/container"

interface Stat {
  value: string
  label: string
}

interface StatsSectionProps {
  stats: Stat[]
  className?: string
}

export function StatsSection({ stats, className }: StatsSectionProps) {
  return (
    <section className={cn("py-12 md:py-16 lg:py-24 xl:py-32 bg-gray-50", className)}>
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
