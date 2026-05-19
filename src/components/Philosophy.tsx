import { useEffect, useRef, useState } from "react"
import { HighlightedText } from "./HighlightedText"

const philosophyItems = [
  {
    title: "Широкий ассортимент",
    description:
      "Цемент, кирпич, металл, плитка, утеплители — всё для строительства под одной крышей. Работаем как с частными клиентами, так и с крупными подрядчиками.",
  },
  {
    title: "Проверенное качество",
    description:
      "Сотрудничаем только с надёжными производителями. Каждая партия товара проходит входной контроль — вы получаете материалы, соответствующие стандартам.",
  },
  {
    title: "Аренда инструментов",
    description:
      "Не нужно покупать дорогой инструмент для разового использования. Берите в аренду перфораторы, шлифмашины, бетономешалки и многое другое.",
  },
  {
    title: "Оптовые условия",
    description: "Специальные цены для строительных компаний и постоянных клиентов. Доставка по Конибодому и районам — обсуждаем индивидуально.",
  },
]

export function Philosophy() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.3 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">О магазине</p>
            <h2 className="text-6xl md:text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
              Магазин с
              <br />
              <HighlightedText>характером</HighlightedText>
            </h2>

            <div className="relative hidden lg:block">
              <img
                src="https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/files/3ca6224c-0308-4870-8476-b4d209dab309.jpg"
                alt="Склад стройматериалов Валижон"
                className="opacity-90 relative z-10 w-full rounded-xl"
              />
            </div>
          </div>

          <div className="space-y-6 lg:pt-48">
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md mb-12">
              Мағозаи сохтмони Валижон — это семейный строительный магазин в Конибодоме. Более 10 лет помогаем строить дома, делать ремонт и реализовывать крупные проекты.
            </p>

            {philosophyItems.map((item, index) => (
              <div
                key={item.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-6">
                  <span className="text-muted-foreground/50 text-sm font-medium">0{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
