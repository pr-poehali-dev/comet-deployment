import Icon from "@/components/ui/icon"

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[hsl(220,20%,13%)] pt-16">
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/bucket/841620a4-6390-4225-880c-807b174946df.jpeg"
          alt="Мағозаи сохтмони Валижон"
          className="w-full h-full object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,20%,13%)] via-[hsl(220,20%,13%)]/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 text-orange-400 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-8">
            <Icon name="MapPin" size={14} />
            Конибодом, Таджикистан
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6 uppercase">
            Всё для
            <br />
            <span className="text-orange-500">строительства</span>
            <br />
            и ремонта
          </h1>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            Стройматериалы оптом и в розницу. Аренда инструментов. Доставка по городу. Работаем с частными клиентами и строительными компаниями.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+992000000000"
              className="inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded font-bold text-base transition-colors duration-200 uppercase tracking-wide"
            >
              <Icon name="Phone" size={18} />
              Позвонить нам
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-3 border-2 border-white/30 hover:border-orange-500 text-white hover:text-orange-400 px-8 py-4 rounded font-bold text-base transition-all duration-200 uppercase tracking-wide"
            >
              Смотреть каталог
              <Icon name="ArrowRight" size={18} />
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-white/10">
            {[
              { value: "10+", label: "лет на рынке" },
              { value: "500+", label: "позиций товаров" },
              { value: "1000+", label: "клиентов" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}