import { cn } from "@/lib/utils"

interface StatProps {
  value: string
  label: string
}

function Stat({ value, label }: StatProps) {
  return (
    <div className="flex items-center mb-8 last:mb-0">
      <span className="text-7xl font-black text-black mr-4">{value}</span>
      <span className="text-xl text-black">{label}</span>
    </div>
  )
}

interface StatsSectionProps {
  stats: StatProps[]
  className?: string
}

export function StatsSection({ stats, className }: StatsSectionProps) {
  return (
    <section className={cn("py-16", className)}>
      <div className="w-[90vw] bg-primary ml-0">
        <div className="py-12 sm:pl-6 lg:pl-8">
          <div className="flex flex-col px-8 sm:px-16 lg:px-32 ">
            {stats.map((stat, index) => (
              <Stat key={index} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
