"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  const faqs = [
    {
      question: "Como funciona o acesso ao curso?",
      answer:
        "Após a confirmação do pagamento, você recebe imediatamente por email os dados de acesso à nossa plataforma exclusiva. O acesso é vitalício e você pode estudar no seu próprio ritmo.",
    },
    {
      question: "Preciso ter experiência na cozinha?",
      answer:
        "Não! O curso foi desenvolvido para iniciantes. Começamos do básico e vamos evoluindo gradualmente. Mesmo quem nunca cozinhou consegue acompanhar perfeitamente.",
    },
    {
      question: "Quanto posso ganhar vendendo batatas recheadas?",
      answer:
        "Nossos alunos relatam faturamentos que variam de R$ 2.000 a R$ 8.000 por mês. O valor depende da sua dedicação, região e estratégias aplicadas. Temos casos de sucesso em todo o Brasil.",
    },
    {
      question: "O curso tem garantia?",
      answer:
        "Sim! Oferecemos 7 dias de garantia incondicional. Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu dinheiro, sem perguntas.",
    },
    {
      question: "Vou receber suporte durante o curso?",
      answer:
        "Claro! Você terá acesso ao nosso grupo VIP no WhatsApp com outros alunos e nossa equipe de suporte. Além disso, respondemos dúvidas por email em até 24 horas.",
    },
    {
      question: "O curso ensina sobre parte legal do negócio?",
      answer:
        "Sim! Abordamos questões como formalização, impostos, licenças necessárias e como precificar corretamente seus produtos para ter uma margem de lucro saudável.",
    },
    {
      question: "Posso parcelar o pagamento?",
      answer:
        "Sim! Você pode parcelar em até 12x no cartão de crédito. Também aceitamos PIX com desconto especial para pagamento à vista.",
    },
    {
      question: "O curso funciona em qualquer cidade?",
      answer:
        "Absolutamente! As técnicas e receitas funcionam em qualquer lugar do Brasil. Temos alunos de norte a sul do país obtendo excelentes resultados.",
    },
  ]

  return (
    <section
      className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-b from-[#1a1611]/20 via-[#1a1611]/40 to-[#1a1611]/20"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 text-[#daa821] drop-shadow-[0_0_20px_rgba(218,168,33,0.8)] animate-pulse"
          >
            Perguntas frequentes
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 text-center mb-12 sm:mb-16 max-w-3xl mx-auto px-4">
            Tire todas as suas dúvidas sobre o curso
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gradient-to-r from-[#1a1611]/80 to-[#0f0d0a]/80 border border-[#daa821]/30 rounded-lg px-6 hover:border-[#daa821]/60 transition-all duration-300"
                itemScope
                itemType="https://schema.org/Question"
              >
                <AccordionTrigger
                  className="text-left text-white hover:text-[#daa821] transition-colors duration-300 text-base sm:text-lg font-semibold"
                  itemProp="name"
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent
                  className="text-gray-300 text-sm sm:text-base leading-relaxed pt-4"
                  itemProp="acceptedAnswer"
                  itemScope
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text">{faq.answer}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
