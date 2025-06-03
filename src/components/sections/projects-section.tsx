import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/custom-button"
import { ProjectCard, type ProjectCardProps } from "@/components/project-card"
import { Container } from "@/components/ui/container"

interface ProjectsSectionProps {
  title: string
  projects: ProjectCardProps[]
  className?: string
}

export function ProjectsSection({ title, projects, className }: ProjectsSectionProps) {
  return (
    <section className={cn("py-12 md:py-16 lg:py-24 xl:py-32 bg-gray-50", className)}>
      <Container>
        <div className="mb-8 flex flex-col items-center justify-between gap-4 sm:flex-row sm:items-center">
          <h2 className="text-3xl font-bold text-center sm:text-left">{title}</h2>
          <Button href="/projects" variant="primary">
            Explore more Projects
          </Button>
        </div>
        <div className="flex flex-col space-y-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              imagePosition={index % 2 === 0 ? "left" : "right"}
              highlighted={index === 2}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
