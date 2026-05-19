import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "В каком городе находится магазин?",
    answer:
      "Мағозаи сохтмони Валижон расположен в Конибодоме, Таджикистан. Мы обслуживаем как жителей города, так и клиентов из близлежащих районов. Точный адрес и режим работы уточняйте по телефону.",
  },
  {
    question: "Есть ли у вас оптовые цены?",
    answer:
      "Да, мы предоставляем специальные условия для строительных компаний, прорабов и постоянных клиентов. Размер скидки зависит от объёма и вида материала. Позвоните нам — обсудим индивидуально.",
  },
  {
    question: "Как взять инструмент в аренду?",
    answer:
      "Позвоните или напишите нам — уточните, какой инструмент нужен и на какой срок. Мы проверим наличие, согласуем залог и выдадим инструмент. Аренда возможна на сутки, несколько дней или неделю.",
  },
  {
    question: "Есть ли доставка?",
    answer:
      "Да, осуществляем доставку по Конибодому и некоторым районам области. Стоимость зависит от объёма и расстояния. Для крупных заказов от определённой суммы доставка может быть бесплатной.",
  },
  {
    question: "Какие материалы есть в наличии?",
    answer:
      "У нас всегда в наличии: цемент, песок, щебень, кирпич (красный и силикатный), газоблок, арматура, трубы, плитка, краски, штукатурка, гипсокартон и многое другое. Для уточнения наличия — звоните.",
  },
  {
    question: "Как сделать заказ?",
    answer:
      "Позвоните по номеру телефона или напишите нам — расскажите, что вам нужно и в каком количестве. Мы рассчитаем стоимость, оформим заказ и организуем самовывоз или доставку.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
