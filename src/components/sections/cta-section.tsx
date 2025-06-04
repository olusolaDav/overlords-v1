import { cn } from "../../lib/utils"
import { Button } from "../ui/custom-button"
import { Container } from "../ui/container"

interface CTASectionProps {
  title: string
  className?: string
}

export function CTASection({ title, className }: CTASectionProps) {
  return (
    <section className={cn("py-12 md:py-16 lg:py-24 xl:py-32", className)}>
      <Container>
        <div className="flex justify-center">
          <Button href="/contact" size="lg" variant="primary">
            {title}
          </Button>
        </div>
      </Container>
    </section>
  )
}
