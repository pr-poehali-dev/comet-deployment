import { useState, useEffect, useRef } from "react"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Цемент и смеси",
    category: "Основные материалы",
    location: "В наличии · опт и розница",
    year: "ТОП",
    image: "https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/files/0f60bdb7-2639-4efa-b1f4-d446e36c86ff.jpg",
  },
  {
    id: 2,
    title: "Аренда инструментов",
    category: "Инструменты",
    location: "Перфораторы · дрели · шлифмашины",
    year: "NEW",
    image: "https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/files/e84fcacf-e380-4b46-8735-4c7dc9e1f675.jpg",
  },
  {
    id: 3,
    title: "Кирпич и блоки",
    category: "Стеновые материалы",
    location: "Красный · силикатный · газоблок",
    year: "ТОП",
    image: "https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/files/90208de6-3acc-4f92-9d32-83c8dffdde93.jpg",
  },
  {
    id: 4,
    title: "Плитка и отделка",
    category: "Отделочные материалы",
    location: "Напольная · настенная · фасадная",
    year: "NEW",
    image: "https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/files/3ca6224c-0308-4870-8476-b4d209dab309.jpg",
  },
]

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [revealedImages, setRevealedImages] = useState<Set<number>>(new Set())
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = imageRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setRevealedImages((prev) => new Set(prev).add(projects[index].id))
            }
          }
        })
      },
      { threshold: 0.2 },
    )

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-32 md:py-29 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Что у нас есть</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">Наш каталог</h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            Запросить прайс-лист
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div ref={(el) => (imageRefs.current[index] = el)} className="relative overflow-hidden aspect-[4/3] mb-6">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredId === project.id ? "scale-105" : "scale-100"
                  }`}
                />
                <div
                  className="absolute inset-0 bg-primary origin-top"
                  style={{
                    transform: revealedImages.has(project.id) ? "scaleY(0)" : "scaleY(1)",
                    transition: "transform 1.5s cubic-bezier(0.76, 0, 0.24, 1)",
                  }}
                />
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-medium mb-2 group-hover:underline underline-offset-4">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {project.category} · {project.location}
                  </p>
                </div>
                <span className="text-orange-500 text-sm font-semibold">{project.year}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
