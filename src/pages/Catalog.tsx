import { useState } from "react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { CartButton, CartDrawer } from "@/components/Cart"
import { useCartStore } from "@/store/cartStore"
import Icon from "@/components/ui/icon"

const categories = [
  { id: "cement", label: "Цемент и смеси", icon: "Package" },
  { id: "brick", label: "Кирпич и блоки", icon: "Layers" },
  { id: "tile", label: "Плитка", icon: "Grid3X3" },
  { id: "paint", label: "Краски и лаки", icon: "Paintbrush" },
  { id: "tools", label: "Аренда инструментов", icon: "Wrench" },
  { id: "pipes", label: "Трубы и фитинги", icon: "Pipette" },
  { id: "insulation", label: "Утеплители", icon: "Wind" },
  { id: "drywall", label: "Гипсокартон", icon: "Square" },
  { id: "wood", label: "Пиломатериалы", icon: "TreePine" },
  { id: "roofing", label: "Кровля", icon: "Home" },
  { id: "electrical", label: "Электрика", icon: "Zap" },
  { id: "sand", label: "Сыпучие материалы", icon: "Mountain" },
]

const products = [
  // Цемент и смеси
  { id: "c1", category: "cement", name: "Цемент ПЦ 400, 50 кг", price: "Уточнить цену", image: "https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/bucket/78ba3cfc-bc1b-4625-8b5c-090fb0d546b3.jpeg" },
  { id: "c2", category: "cement", name: "Цемент ПЦ 500, 50 кг", price: "Уточнить цену", image: "https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/bucket/78ba3cfc-bc1b-4625-8b5c-090fb0d546b3.jpeg" },
  { id: "c3", category: "cement", name: "Клей для плитки, 25 кг", price: "Уточнить цену", image: "https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/bucket/78ba3cfc-bc1b-4625-8b5c-090fb0d546b3.jpeg" },
  { id: "c4", category: "cement", name: "Штукатурка гипсовая, 30 кг", price: "Уточнить цену", image: "https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/bucket/78ba3cfc-bc1b-4625-8b5c-090fb0d546b3.jpeg" },
  // Кирпич и блоки
  { id: "b1", category: "brick", name: "Кирпич красный одинарный", price: "Уточнить цену", image: "https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/bucket/af27395d-b027-4be6-a051-0e8de453e2a5.jpeg" },
  { id: "b2", category: "brick", name: "Кирпич силикатный", price: "Уточнить цену", image: "https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/bucket/af27395d-b027-4be6-a051-0e8de453e2a5.jpeg" },
  { id: "b3", category: "brick", name: "Газоблок 600×200×300", price: "Уточнить цену", image: "https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/bucket/af27395d-b027-4be6-a051-0e8de453e2a5.jpeg" },
  { id: "b4", category: "brick", name: "Шлакоблок стеновой", price: "Уточнить цену", image: "https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/bucket/af27395d-b027-4be6-a051-0e8de453e2a5.jpeg" },
  { id: "b5", category: "brick", name: "Кирпич огнеупорный", price: "Уточнить цену", image: "https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/bucket/af27395d-b027-4be6-a051-0e8de453e2a5.jpeg" },
  // Плитка
  { id: "t1", category: "tile", name: "Керамогранит 120×60 см", price: "Уточнить цену", image: "https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/bucket/81cf5626-2caf-4363-bfcc-fb58dbcf578a.jpeg" },
  { id: "t2", category: "tile", name: "Плитка настенная 30×60 см", price: "Уточнить цену", image: "https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/bucket/81cf5626-2caf-4363-bfcc-fb58dbcf578a.jpeg" },
  { id: "t3", category: "tile", name: "Плитка напольная 60×60 см", price: "Уточнить цену", image: "https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/bucket/81cf5626-2caf-4363-bfcc-fb58dbcf578a.jpeg" },
  { id: "t4", category: "tile", name: "Мозаика стеклянная", price: "Уточнить цену", image: "https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/bucket/81cf5626-2caf-4363-bfcc-fb58dbcf578a.jpeg" },
  // Краски
  { id: "p1", category: "paint", name: "Краска фасадная белая, 15 кг", price: "Уточнить цену", image: "https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/bucket/f1e04437-b8b8-4d56-b50c-b1bd7b2d94a1.jpeg" },
  { id: "p2", category: "paint", name: "Краска интерьерная, 10 кг", price: "Уточнить цену", image: "https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/bucket/f1e04437-b8b8-4d56-b50c-b1bd7b2d94a1.jpeg" },
  { id: "p3", category: "paint", name: "Грунтовка глубокого проникновения", price: "Уточнить цену", image: "https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/bucket/f1e04437-b8b8-4d56-b50c-b1bd7b2d94a1.jpeg" },
  // Аренда инструментов
  { id: "i1", category: "tools", name: "Аренда перфоратора (сутки)", price: "Уточнить цену", image: "https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/bucket/8b05a2d7-c4ce-44e3-ad47-e282b2538ab9.jpeg" },
  { id: "i2", category: "tools", name: "Аренда бетономешалки (сутки)", price: "Уточнить цену", image: "https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/bucket/8b05a2d7-c4ce-44e3-ad47-e282b2538ab9.jpeg" },
  { id: "i3", category: "tools", name: "Аренда шлифмашины (сутки)", price: "Уточнить цену", image: "https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/bucket/8b05a2d7-c4ce-44e3-ad47-e282b2538ab9.jpeg" },
  { id: "i4", category: "tools", name: "Аренда трамбовки (сутки)", price: "Уточнить цену", image: "https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/bucket/8b05a2d7-c4ce-44e3-ad47-e282b2538ab9.jpeg" },
  { id: "i5", category: "tools", name: "Аренда лазерного уровня (сутки)", price: "Уточнить цену", image: "https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/bucket/8b05a2d7-c4ce-44e3-ad47-e282b2538ab9.jpeg" },
  // Трубы
  { id: "pi1", category: "pipes", name: "Труба ПП 20 мм, 1 м", price: "Уточнить цену", image: "https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/bucket/f1e04437-b8b8-4d56-b50c-b1bd7b2d94a1.jpeg" },
  { id: "pi2", category: "pipes", name: "Труба ПВХ канализационная, 1 м", price: "Уточнить цену", image: "https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/bucket/f1e04437-b8b8-4d56-b50c-b1bd7b2d94a1.jpeg" },
  { id: "pi3", category: "pipes", name: "Фитинги ПП (уголок, тройник)", price: "Уточнить цену", image: "https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/bucket/f1e04437-b8b8-4d56-b50c-b1bd7b2d94a1.jpeg" },
  // Утеплители
  { id: "in1", category: "insulation", name: "Пенопласт 50 мм, лист", price: "Уточнить цену", image: "https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/bucket/f1e04437-b8b8-4d56-b50c-b1bd7b2d94a1.jpeg" },
  { id: "in2", category: "insulation", name: "Минвата 50 мм, рулон", price: "Уточнить цену", image: "https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/bucket/f1e04437-b8b8-4d56-b50c-b1bd7b2d94a1.jpeg" },
  // Гипсокартон
  { id: "d1", category: "drywall", name: "ГКЛ стеновой 12,5 мм, лист", price: "Уточнить цену", image: "https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/bucket/f1e04437-b8b8-4d56-b50c-b1bd7b2d94a1.jpeg" },
  { id: "d2", category: "drywall", name: "ГКЛ влагостойкий, лист", price: "Уточнить цену", image: "https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/bucket/f1e04437-b8b8-4d56-b50c-b1bd7b2d94a1.jpeg" },
  { id: "d3", category: "drywall", name: "Профиль CD 60, 3 м", price: "Уточнить цену", image: "https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/bucket/f1e04437-b8b8-4d56-b50c-b1bd7b2d94a1.jpeg" },
  // Пиломатериалы
  { id: "w1", category: "wood", name: "Доска обрезная 25×150, 6 м", price: "Уточнить цену", image: "https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/bucket/f1e04437-b8b8-4d56-b50c-b1bd7b2d94a1.jpeg" },
  { id: "w2", category: "wood", name: "Брус 100×100, 6 м", price: "Уточнить цену", image: "https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/bucket/f1e04437-b8b8-4d56-b50c-b1bd7b2d94a1.jpeg" },
  { id: "w3", category: "wood", name: "Фанера 18 мм, лист", price: "Уточнить цену", image: "https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/bucket/f1e04437-b8b8-4d56-b50c-b1bd7b2d94a1.jpeg" },
  // Кровля
  { id: "r1", category: "roofing", name: "Профнастил С8, лист", price: "Уточнить цену", image: "https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/bucket/f1e04437-b8b8-4d56-b50c-b1bd7b2d94a1.jpeg" },
  { id: "r2", category: "roofing", name: "Металлочерепица, 1 м²", price: "Уточнить цену", image: "https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/bucket/f1e04437-b8b8-4d56-b50c-b1bd7b2d94a1.jpeg" },
  { id: "r3", category: "roofing", name: "Мягкая кровля (рубероид)", price: "Уточнить цену", image: "https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/bucket/f1e04437-b8b8-4d56-b50c-b1bd7b2d94a1.jpeg" },
  // Электрика
  { id: "e1", category: "electrical", name: "Кабель ВВГ 2×2.5, 1 м", price: "Уточнить цену", image: "https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/bucket/f1e04437-b8b8-4d56-b50c-b1bd7b2d94a1.jpeg" },
  { id: "e2", category: "electrical", name: "Кабель NYM 3×2.5, 1 м", price: "Уточнить цену", image: "https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/bucket/f1e04437-b8b8-4d56-b50c-b1bd7b2d94a1.jpeg" },
  { id: "e3", category: "electrical", name: "Розетка двойная", price: "Уточнить цену", image: "https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/bucket/f1e04437-b8b8-4d56-b50c-b1bd7b2d94a1.jpeg" },
  // Сыпучие
  { id: "s1", category: "sand", name: "Песок строительный, 1 т", price: "Уточнить цену", image: "https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/bucket/0f60bdb7-2639-4efa-b1f4-d446e36c86ff.jpg" },
  { id: "s2", category: "sand", name: "Щебень фракция 20-40, 1 т", price: "Уточнить цену", image: "https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/bucket/0f60bdb7-2639-4efa-b1f4-d446e36c86ff.jpg" },
  { id: "s3", category: "sand", name: "Керамзит, 1 м³", price: "Уточнить цену", image: "https://cdn.poehali.dev/projects/be4779ac-49a8-403b-a2ff-4d3302f87552/bucket/0f60bdb7-2639-4efa-b1f4-d446e36c86ff.jpg" },
]

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [search, setSearch] = useState("")
  const { addItem, openCart, totalItems } = useCartStore()

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === "all" || p.category === activeCategory
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  const getCategoryLabel = (id: string) =>
    categories.find((c) => c.id === id)?.label ?? id

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <CartDrawer />
      <CartButton />

      <div className="pt-16">
        {/* Hero */}
        <div className="bg-[hsl(220,20%,13%)] py-12 px-4">
          <div className="container mx-auto">
            <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-2">Мағозаи сохтмони Валижон</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white uppercase mb-4">Каталог товаров</h1>
            <p className="text-gray-400">Более 500 позиций — стройматериалы и аренда инструментов</p>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-8 py-8">
          {/* Поиск */}
          <div className="relative mb-6">
            <Icon name="Search" size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Поиск товара..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl bg-white text-sm focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
            />
          </div>

          {/* Категории */}
          <div className="flex gap-2 flex-wrap mb-8">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeCategory === "all"
                  ? "bg-orange-500 text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-orange-300"
              }`}
            >
              Все товары
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  activeCategory === cat.id
                    ? "bg-orange-500 text-white"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-orange-300"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Товары */}
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <Icon name="SearchX" size={48} className="mx-auto mb-4 opacity-30" />
              <p className="text-lg">Ничего не найдено</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {filtered.map((product) => (
                <div key={product.id} className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow group">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-xs text-gray-400 mb-1">{getCategoryLabel(product.category)}</p>
                    <p className="text-sm font-semibold text-[hsl(220,20%,13%)] leading-tight mb-2 line-clamp-2">{product.name}</p>
                    <p className="text-orange-500 font-bold text-sm mb-3">{product.price}</p>
                    <button
                      onClick={() => {
                        addItem({
                          id: product.id,
                          name: product.name,
                          category: getCategoryLabel(product.category),
                          price: product.price,
                          image: product.image,
                        })
                        openCart()
                      }}
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg text-xs font-bold uppercase transition-colors flex items-center justify-center gap-1"
                    >
                      <Icon name="ShoppingCart" size={13} />
                      В корзину
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}
