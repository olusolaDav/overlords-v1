import { cn } from "../../lib/utils"
import { Container } from "../ui/container"
import Image from "next/image"

interface Company {
  name: string
  logo: string
}

interface TestimonialSectionProps {
  rating: string
  customers: string
  companies: Company[]
  className?: string
}

export function TestimonialSection({ rating, customers, companies, className }: TestimonialSectionProps) {
  return (
    <section className={cn("py-12 md:py-16 lg:py-24 xl:py-32 bg-gray-50", className)}>
      <Container>
        <div className="text-center">
          <div className="mb-8">
            <div className="text-4xl font-bold mb-2">{rating}</div>
            <div className="text-lg text-gray-600">{customers}</div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {companies.map((company, index) => (
              <div key={index} className="flex items-center justify-center">
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name}
                  width={120}
                  height={60}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
