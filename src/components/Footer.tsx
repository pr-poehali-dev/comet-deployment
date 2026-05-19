import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="bg-[hsl(220,25%,8%)] border-t border-white/5 py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-orange-500 flex items-center justify-center rounded">
                <Icon name="Hammer" size={18} className="text-white" />
              </div>
              <span className="text-white font-bold text-lg uppercase" style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.05em' }}>
                Валижон
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-sm text-sm">
              Мағозаи сохтмони Валижон — строительные материалы и аренда инструментов в Конибодоме. Работаем для частных клиентов и строительных компаний.
            </p>
          </div>

          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wide mb-4">Навигация</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {[
                { label: "Каталог", href: "#projects" },
                { label: "О нас", href: "#about" },
                { label: "Услуги", href: "#services" },
                { label: "Контакты", href: "#contact" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-orange-400 transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wide mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="tel:+992000000000" className="hover:text-orange-400 transition-colors flex items-center gap-2">
                  <Icon name="Phone" size={14} />
                  +992 000 000 000
                </a>
              </li>
              <li>
                <a href="https://t.me/valijon_stroy" className="hover:text-orange-400 transition-colors flex items-center gap-2">
                  <Icon name="Send" size={14} />
                  Telegram
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={14} />
                г. Конибодом, Таджикистан
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Clock" size={14} />
                Ежедневно 8:00 — 19:00
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-gray-500">
          <p>© 2026 Мағозаи сохтмони Валижон. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
