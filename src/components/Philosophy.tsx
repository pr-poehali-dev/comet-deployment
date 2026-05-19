import Icon from "@/components/ui/icon"

const items = [
  {
    icon: "PackageCheck",
    title: "Широкий ассортимент",
    description: "Цемент, кирпич, металл, плитка, утеплители — всё для строительства под одной крышей. Оптом и в розницу.",
  },
  {
    icon: "ShieldCheck",
    title: "Проверенное качество",
    description: "Сотрудничаем только с надёжными производителями. Каждая партия проходит входной контроль.",
  },
  {
    icon: "Wrench",
    title: "Аренда инструментов",
    description: "Перфораторы, шлифмашины, бетономешалки — берите в аренду без переплаты за покупку.",
  },
  {
    icon: "BadgePercent",
    title: "Оптовые условия",
    description: "Специальные цены для строительных компаний и постоянных клиентов. Доставка по Конибодому.",
  },
]

export function Philosophy() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4">
              О магазине
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[hsl(220,20%,13%)] uppercase mb-4">
              Семейный магазин<br />с характером
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Мағозаи сохтмони Валижон — более 10 лет помогаем строить дома, делать ремонт и реализовывать крупные проекты в Конибодоме и окрестностях.
            </p>
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <img
              src="https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/bucket/f1e04437-b8b8-4d56-b50c-b1bd7b2d94a1.jpeg"
              alt="Склад стройматериалов Валижон"
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div key={i} className="bg-gray-50 border border-gray-100 rounded-xl p-6 hover:border-orange-300 hover:shadow-md transition-all duration-200">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <Icon name={item.icon} size={22} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-[hsl(220,20%,13%)] mb-2 uppercase">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}