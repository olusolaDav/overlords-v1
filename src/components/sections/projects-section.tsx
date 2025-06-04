import { cn } from "../../lib/utils"
import { Container } from "../ui/container"
import { ProjectCard } from "../project-card"

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  href: string
}

interface ProjectsSectionProps {
  title: string
  projects: Project[]
  className?: string
}

export function ProjectsSection({ title, projects, className }: ProjectsSectionProps) {
  return (
    <section className={cn("py-12 md:py-16 lg:py-24 xl:py-32", className)}>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-serif mb-4">{title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              href={project.href}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
