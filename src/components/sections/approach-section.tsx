import { cn } from "@/lib/utils"
import { Container } from "@/components/ui/container"

interface ApproachStepProps {
  number: string
  title: string
  description: string
  className?: string
}

function ApproachStep({ number, title, description, className }: ApproachStepProps) {
  // Different background colors based on step number for 8 steps
  const getBgColor = (num: string) => {
    const stepNum = Number.parseInt(num)
    switch (stepNum) {
      case 1:
        return "bg-gradient-to-r from-green-50 to-green-100"
      case 2:
        return "bg-gradient-to-r from-green-100 to-green-200"
      case 3:
        return "bg-gradient-to-r from-green-200 to-green-300"
      case 4:
        return "bg-gradient-to-r from-green-300 to-green-400"
      case 5:
        return "bg-gradient-to-r from-green-400 to-green-500"
      case 6:
        return "bg-gradient-to-r from-green-500 to-green-600"
      case 7:
        return "bg-gradient-to-r from-green-600 to-green-700"
      case 8:
        return "bg-gradient-to-r from-green-700 to-green-800"
      default:
        return "bg-green-100"
    }
  }

  return (
    <div className="flex flex-col space-y-4">
      <div className="relative h-14 flex items-center">
        {/* Larger white circle for number that matches the height of the pill */}
        <div className="absolute left-0 top-0 bottom-0 flex h-full w-14 items-center justify-center rounded-full bg-white shadow-sm z-10">
          <span className="text-sm font-medium text-gray-700">{number}</span>
        </div>

        {/* Colored pill with title */}
        <div className={cn("rounded-full w-full pl-12 pr-6 py-3 ml-7", getBgColor(number), className)}>
          <span className="font-medium text-gray-900">{title}</span>
        </div>
      </div>
      <p className="text-sm text-gray-600 px-2">{description}</p>
    </div>
  )
}

interface ApproachSectionProps {
  title: string
  subtitle: string
  steps: ApproachStepProps[]
  className?: string
}

export function ApproachSection({ title, subtitle, steps, className }: ApproachSectionProps) {
  return (
    <section className={cn("py-16 md:py-20 lg:py-24", className)}>
      <Container>
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
          <p className="mt-2 text-sm uppercase tracking-wider text-gray-500">{subtitle}</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <ApproachStep key={index} {...step} />
          ))}
        </div>
      </Container>
    </section>
  )
}
