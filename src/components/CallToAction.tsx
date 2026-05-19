import Icon from "@/components/ui/icon"

export function CallToAction() {
  return (
    <section id="contact" className="py-20 bg-[hsl(220,20%,13%)]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-6">
            Свяжитесь с нами
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white uppercase mb-6">
            Нужны материалы или
            <br />
            <span className="text-orange-500">аренда инструментов?</span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Позвоните нам — расскажите, что нужно, и мы быстро подберём материалы и рассчитаем стоимость.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="tel:+992000000000"
              className="inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-xl font-bold text-lg transition-colors uppercase tracking-wide"
            >
              <Icon name="Phone" size={22} />
              +992 000 000 000
            </a>
            <a
              href="https://t.me/valijon_stroy"
              className="inline-flex items-center justify-center gap-3 border-2 border-white/20 hover:border-orange-500 text-white hover:text-orange-400 px-10 py-5 rounded-xl font-bold text-lg transition-all uppercase tracking-wide"
            >
              <Icon name="Send" size={22} />
              Telegram
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: "Clock", title: "Режим работы", value: "Ежедневно 8:00 — 19:00" },
              { icon: "MapPin", title: "Адрес", value: "г. Конибодом, Таджикистан" },
              { icon: "Truck", title: "Доставка", value: "По городу и районам" },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name={item.icon} size={20} className="text-orange-400" />
                </div>
                <div className="text-gray-400 text-xs uppercase tracking-wide mb-1">{item.title}</div>
                <div className="text-white font-semibold text-sm">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
