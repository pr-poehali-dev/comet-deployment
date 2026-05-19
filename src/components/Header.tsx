import { useState, useEffect, MouseEvent } from "react"
import { cn } from "../lib/utils"
import Icon from "@/components/ui/icon"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const navLinks = [
    { label: "Главная", href: "#hero" },
    { label: "О нас", href: "#about" },
    { label: "Каталог", href: "/catalog" },
    { label: "Услуги", href: "#services" },
    { label: "Вопросы", href: "#faq" },
  ]

  return (
    <header className={cn(
      "fixed z-50 w-full transition-all duration-300",
      scrolled ? "bg-[hsl(220,20%,13%)] shadow-xl" : "bg-[hsl(220,20%,13%)]"
    )}>
      <nav className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <a href="/" onClick={scrollToTop} className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-500 flex items-center justify-center rounded">
            <Icon name="Hammer" size={18} className="text-white" />
          </div>
          <span className="text-white font-bold text-lg uppercase" style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.05em' }}>
            Валижон
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-gray-300 hover:text-orange-400 transition-colors duration-200 font-medium uppercase tracking-wide text-xs"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="tel:+992991221118"
          className="hidden md:inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded font-semibold text-sm transition-colors duration-200"
        >
          <Icon name="Phone" size={15} />
          Позвонить
        </a>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Меню"
        >
          <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[hsl(220,20%,10%)] border-t border-white/10">
          <ul className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-gray-300 hover:text-orange-400 text-lg font-medium block py-1 uppercase"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="tel:+992991221118"
                className="inline-flex items-center gap-2 bg-orange-500 text-white px-5 py-3 rounded font-semibold mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Icon name="Phone" size={16} />
                Позвонить
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}