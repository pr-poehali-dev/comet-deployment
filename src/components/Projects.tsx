import Icon from "@/components/ui/icon"

const categories = [
  {
    id: 1,
    title: "Цемент и смеси",
    description: "Цемент М400/М500, сухие смеси, клей для плитки, штукатурка",
    badge: "Хит продаж",
    badgeColor: "bg-orange-500",
    image: "https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/files/0f60bdb7-2639-4efa-b1f4-d446e36c86ff.jpg",
    icon: "Package",
  },
  {
    id: 2,
    title: "Аренда инструментов",
    description: "Перфораторы, дрели, шлифмашины, бетономешалки, лазерные уровни",
    badge: "Аренда",
    badgeColor: "bg-blue-500",
    image: "https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/files/e84fcacf-e380-4b46-8735-4c7dc9e1f675.jpg",
    icon: "Wrench",
  },
  {
    id: 3,
    title: "Кирпич и блоки",
    description: "Красный кирпич, силикатный, газоблок, шлакоблок — опт и розница",
    badge: "Оптом",
    badgeColor: "bg-green-500",
    image: "https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/files/90208de6-3acc-4f92-9d32-83c8dffdde93.jpg",
    icon: "Layers",
  },
  {
    id: 4,
    title: "Плитка и отделка",
    description: "Напольная, настенная и фасадная плитка. Большой выбор размеров и цветов",
    badge: "Новинки",
    badgeColor: "bg-purple-500",
    image: "https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/files/3ca6224c-0308-4870-8476-b4d209dab309.jpg",
    icon: "Grid3X3",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-[hsl(220,20%,13%)]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <div className="inline-block bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4">
              Что у нас есть
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white uppercase">
              Наш каталог
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold uppercase tracking-wide text-sm transition-colors"
          >
            Запросить прайс-лист
            <Icon name="ArrowRight" size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <div key={cat.id} className="group relative rounded-xl overflow-hidden cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className={`absolute top-4 left-4 ${cat.badgeColor} text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full`}>
                  {cat.badge}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name={cat.icon} size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl uppercase mb-1">{cat.title}</h3>
                    <p className="text-gray-300 text-sm leading-snug">{cat.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
