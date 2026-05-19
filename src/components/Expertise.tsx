import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "Building2",
    title: "Стройматериалы",
    description: "Цемент, песок, щебень, кирпич, газоблок — всё для фундамента, стен и перекрытий.",
    color: "bg-orange-500",
  },
  {
    icon: "Layers",
    title: "Отделочные материалы",
    description: "Плитка, краски, штукатурка, гипсокартон, ламинат — для чистовой отделки любого помещения.",
    color: "bg-blue-500",
  },
  {
    icon: "Wrench",
    title: "Аренда инструментов",
    description: "Перфораторы, шлифмашины, бетономешалки — берите в аренду на день или неделю.",
    color: "bg-green-500",
  },
  {
    icon: "Truck",
    title: "Доставка по городу",
    description: "Организуем доставку стройматериалов по Конибодому и районам. Крупные объёмы — спецусловия.",
    color: "bg-purple-500",
  },
]

export function Expertise() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <div className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4">
            Наши услуги
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(220,20%,13%)] uppercase">
            Всё для вашего строительства
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
            От фундамента до финишной отделки — материалы и инструменты для любого этапа.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
              <div className={`w-14 h-14 ${s.color} rounded-xl flex items-center justify-center mb-5`}>
                <Icon name={s.icon} size={26} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-[hsl(220,20%,13%)] uppercase mb-3">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-orange-500 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white text-2xl md:text-3xl font-bold uppercase mb-2">Нужен расчёт материалов?</h3>
            <p className="text-orange-100 text-base">Позвоните нам — поможем рассчитать количество и стоимость для вашего объекта.</p>
          </div>
          <a
            href="tel:+992000000000"
            className="flex-shrink-0 inline-flex items-center gap-3 bg-white text-orange-500 px-8 py-4 rounded-xl font-bold text-base hover:bg-orange-50 transition-colors uppercase tracking-wide whitespace-nowrap"
          >
            <Icon name="Phone" size={18} />
            Позвонить
          </a>
        </div>
      </div>
    </section>
  )
}
