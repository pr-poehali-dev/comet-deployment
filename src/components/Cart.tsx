import { useCartStore } from "@/store/cartStore"
import Icon from "@/components/ui/icon"

const WHATSAPP_NUMBER = "992991221118"

export function CartButton() {
  const { openCart, totalItems } = useCartStore()
  const count = totalItems()

  return (
    <button
      onClick={openCart}
      className="fixed bottom-6 right-6 z-40 bg-orange-500 hover:bg-orange-600 text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-colors duration-200"
    >
      <Icon name="ShoppingCart" size={24} />
      {count > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
          {count}
        </span>
      )}
    </button>
  )
}

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, clearCart } = useCartStore()

  const sendToWhatsApp = () => {
    if (items.length === 0) return
    const lines = items.map(
      (i) => `• ${i.name} — ${i.quantity} шт. (${i.price})`
    )
    const text = `Здравствуйте! Хочу заказать:\n\n${lines.join("\n")}\n\nПрошу связаться со мной.`
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
    window.open(url, "_blank")
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black/50" onClick={closeCart} />
      <div className="relative bg-white w-full max-w-md h-full flex flex-col shadow-2xl">
        <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-[hsl(220,20%,13%)]">
          <h2 className="text-white font-bold text-lg uppercase" style={{ fontFamily: 'Oswald, sans-serif' }}>
            Корзина
          </h2>
          <button onClick={closeCart} className="text-gray-400 hover:text-white transition-colors">
            <Icon name="X" size={24} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-gray-400">
            <Icon name="ShoppingCart" size={48} className="opacity-30" />
            <p className="text-lg font-medium">Корзина пуста</p>
            <p className="text-sm text-center px-8">Добавьте товары из каталога</p>
            <button
              onClick={closeCart}
              className="mt-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-semibold transition-colors"
            >
              Перейти в каталог
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3 bg-gray-50 rounded-xl p-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-[hsl(220,20%,13%)] leading-tight mb-1">{item.name}</p>
                    <p className="text-xs text-gray-400 mb-2">{item.category}</p>
                    <p className="text-orange-500 font-bold text-sm">{item.price}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-300 hover:text-red-500 transition-colors"
                    >
                      <Icon name="Trash2" size={16} />
                    </button>
                    <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-2 py-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="text-gray-500 hover:text-orange-500 transition-colors"
                      >
                        <Icon name="Minus" size={14} />
                      </button>
                      <span className="text-sm font-bold w-5 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="text-gray-500 hover:text-orange-500 transition-colors"
                      >
                        <Icon name="Plus" size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 border-t border-gray-100 space-y-3">
              <button
                onClick={sendToWhatsApp}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold text-base flex items-center justify-center gap-3 transition-colors uppercase"
              >
                <Icon name="MessageCircle" size={20} />
                Отправить заказ в WhatsApp
              </button>
              <button
                onClick={clearCart}
                className="w-full text-gray-400 hover:text-red-500 text-sm transition-colors py-1"
              >
                Очистить корзину
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
