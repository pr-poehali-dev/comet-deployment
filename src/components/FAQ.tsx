import { useState } from "react"
import Icon from "@/components/ui/icon"

const faqs = [
  {
    question: "В каком городе находится магазин?",
    answer: "Мағозаи сохтмони Валижон расположен в Конибодоме, Таджикистан. Обслуживаем жителей города и близлежащих районов. Точный адрес и режим работы уточняйте по телефону.",
  },
  {
    question: "Есть ли оптовые цены?",
    answer: "Да, предоставляем специальные условия для строительных компаний, прорабов и постоянных клиентов. Размер скидки зависит от объёма и вида материала — позвоните, обсудим.",
  },
  {
    question: "Как взять инструмент в аренду?",
    answer: "Позвоните или напишите нам — уточните, какой инструмент нужен и на какой срок. Проверим наличие, согласуем залог и выдадим. Аренда на сутки, несколько дней или неделю.",
  },
  {
    question: "Есть ли доставка?",
    answer: "Да, доставляем по Конибодому и некоторым районам области. Стоимость зависит от объёма и расстояния. Для крупных заказов от определённой суммы — доставка может быть бесплатной.",
  },
  {
    question: "Какие материалы всегда в наличии?",
    answer: "Цемент, песок, щебень, кирпич (красный и силикатный), газоблок, арматура, трубы, плитка, краски, штукатурка, гипсокартон и многое другое. Для уточнения — звоните.",
  },
  {
    question: "Как сделать заказ?",
    answer: "Позвоните или напишите нам — расскажите, что нужно и в каком количестве. Рассчитаем стоимость, оформим заказ и организуем самовывоз или доставку.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4">
              Вопросы
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[hsl(220,20%,13%)] uppercase mb-4">
              Частые вопросы
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Не нашли ответ? Позвоните нам — ответим на любой вопрос.
            </p>
            <a
              href="tel:+992000000000"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded font-bold uppercase text-sm transition-colors"
            >
              <Icon name="Phone" size={16} />
              Позвонить
            </a>
          </div>

          <div className="lg:col-span-2">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-100">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-5 flex items-center justify-between gap-4 text-left group"
                >
                  <span className="text-base font-semibold text-[hsl(220,20%,13%)] group-hover:text-orange-500 transition-colors uppercase">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openIndex === index ? "bg-orange-500 rotate-45" : "bg-gray-100"}`}>
                    <Icon name="Plus" size={16} className={openIndex === index ? "text-white" : "text-gray-500"} />
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-400 ease-in-out ${openIndex === index ? "max-h-60 opacity-100 pb-5" : "max-h-0 opacity-0"}`}>
                  <p className="text-gray-500 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
