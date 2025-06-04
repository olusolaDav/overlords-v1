import { cn } from "@/lib/utils"
import { Container } from "@/components/ui/container"

interface CapabilityPoint {
  text: string
}

interface CapabilityBlock {
  title: string
  points: CapabilityPoint[]
  position: "left" | "right"
}

interface CapabilitiesSectionProps {
  title: string
  capabilities: CapabilityBlock[]
  className?: string
}

export function CapabilitiesSection({ title, capabilities, className }: CapabilitiesSectionProps) {
  return (
    <section className={cn("py-16 bg-gray-50", className)}>
      <Container>
        <h2 className="mb-12 text-3xl font-bold text-center">{title}</h2>

        <div className="space-y-16">
          {capabilities.map((capability, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <>
                {/* Title card - always shows first on mobile */}
                <div
                  className={cn(
                    "bg-gray-100 p-6 rounded-2xl shadow-sm",
                    capability.position === "right" && "md:order-2",
                  )}
                >
                  <h3 className="text-2xl font-bold">{capability.title}</h3>
                </div>

                {/* Content - always shows second on mobile */}
                <div className={cn(capability.position === "right" && "md:order-1")}>
                  <ul className="space-y-4">
                    {capability.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start">
                        <span className="mr-2 mt-1 text-gray-400">•</span>
                        <span className="text-gray-500">{point.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
