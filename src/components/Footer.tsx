export function Footer() {
  return (
    <footer className="py-16 md:py-24 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="/" className="inline-block mb-6">
              <span className="text-foreground font-bold text-xl tracking-wide">Мағозаи сохтмони Валижон</span>
            </a>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Строительные материалы и аренда инструментов в Конибодоме. Работаем для частных клиентов и строительных компаний.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4">Навигация</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#projects" className="hover:text-foreground transition-colors">
                  Каталог
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-foreground transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4">Связь</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="tel:+992000000000" className="hover:text-foreground transition-colors">
                  +992 000 000 000
                </a>
              </li>
              <li>
                <a href="https://t.me/valijon_stroy" className="hover:text-foreground transition-colors">
                  Telegram
                </a>
              </li>
              <li>
                <span>г. Конибодом, Таджикистан</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 Мағозаи сохтмони Валижон. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
