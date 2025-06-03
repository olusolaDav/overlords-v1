import { cn } from "@/lib/utils"
import Image from "next/image"

export interface ProjectCardProps {
  title?: string
  description: string
  image: string
  imageAlt?: string
  imagePosition?: "left" | "right"
  highlighted?: boolean
  className?: string
}

export function ProjectCard({
  title,
  description,
  image,
  imageAlt = "Project screenshot",
  imagePosition = "left",
  highlighted = false,
  className,
}: ProjectCardProps) {
  // Format the description to highlight "AI" text
  const formattedDescription = description.includes("AI") ? (
    <p className="text-sm text-gray-600">
      {description.split("AI").map((part, i, arr) => {
        // If this is the last part and there's no "AI" at the end
        if (i === arr.length - 1 && !description.endsWith("AI")) {
          return <span key={i}>{part}</span>
        }
        // For parts that should be followed by "AI" (except the last part if description ends with "AI")
        return (
          <span key={i}>
            {part}
            {i < arr.length - 1 || description.endsWith("AI") ? <span className="text-gray-600">AI</span> : null}
          </span>
        )
      })}
    </p>
  ) : (
    <p className="text-sm text-gray-600">{description}</p>
  )

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl bg-white shadow-[0_5px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]",
        highlighted && "ring-2 ring-blue-500",
        className,
      )}
    >
      {imagePosition === "left" ? (
        <div className="flex h-[500px] sm:h-[400px] md:h-[350px] lg:h-[300px] flex-col md:flex-row">
          <div className="flex-1 bg-white">
            <div className="relative h-full w-full">
              <Image
                src={image || "/placeholder.svg"}
                alt={imageAlt}
                fill
                className="object-contain md:object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="flex-1 p-6 md:p-8 flex items-center bg-gray-200">
            <div>
              {title && <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>}
              {formattedDescription}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex h-[500px] sm:h-[400px] md:h-[350px] lg:h-[300px] flex-col md:flex-row-reverse">
          <div className="flex-1 bg-white">
            <div className="relative h-full w-full">
              <Image
                src={image || "/placeholder.svg"}
                alt={imageAlt}
                fill
                className="object-contain md:object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="flex-1 p-6 md:p-8 flex items-center bg-gray-200">
            <div>
              {title && <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>}
              {formattedDescription}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
