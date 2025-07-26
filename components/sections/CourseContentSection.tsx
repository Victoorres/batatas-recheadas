"use client"

export default function CourseContentSection() {
  const courseItems = [
    {
      image: '/atrair-clientes.jpg',
      title: 'Como Atrair Mais Clientes',
      description: 'Estratégias simples e eficazes para vender todos os dias',
      alt: 'Batata recheada servida em embalagem elegante com fundo desfocado e lettering chamativo',
    },
    {
      image: '/batata_recheada_4.jpeg',
      title: 'Método Comprovado: de R$3k a R$5k',
      description: 'Um passo a passo testado por centenas de alunas que já faturam alto com batatas recheadas',
      alt: 'Batata recheada profissional com queijo derretido e apresentação impecável',
    },
    {
      image: '/embalagem-ideal.jpeg',
      title: 'Embalagem Que Encanta e Conserva',
      description: 'Aprenda a embalar como profissional para valorizar seu produto e conquistar no delivery',
      alt: 'Batata recheada em frigideira com pimentões e queijo gratinado',
    },
    {
      image: '/batata_recheada_7.jpeg',
      title: 'Segredos dos Recheios Irresistíveis',
      description: 'Combinações campeãs que fazem seus clientes voltarem sempre',
      alt: 'Batata recheada com molho especial, queijo derretido e cebolinha',
    },
    {
      image: '/agilizar-batata.jpg',
      title: 'Produção Ágil Sem Perder a Qualidade',
      description: 'Ganhe tempo na cozinha com técnicas inteligentes e organização',
      alt: 'Batata recheada com efeito de chamas e ingredientes gourmet',
    },
    {
      image: '/montando-batata.jpg',
      title: 'Montagem Perfeita e Profissional',
      description: 'Deixe suas batatas irresistíveis com montagem estratégica e apetitosa',
      alt: 'Batata recheada com apresentação profissional e ingredientes frescos',
    },
    {
      image: '/acompanhamentos.webp',
      title: 'Acompanhamentos de Sucesso',
      description: 'Ideias criativas que aumentam o ticket médio das suas vendas',
      alt: 'Batata recheada com vegetais coloridos e queijo gratinado',
    },
    {
      image: '/delivery.png',
      title: 'Delivery Que Dá Resultado',
      description: 'Otimize suas entregas e fidelize seus clientes com excelência',
      alt: 'Batata recheada pronta para delivery com apresentação impecável',
    },
  ]

  return (
    <section
      className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-b from-[#1a1611]/20 via-[#1a1611]/40 to-[#1a1611]/20"
      aria-labelledby="course-content-heading"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            id="course-content-heading"
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-6 incandescent-title"
          >
            O que você vai aprender
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 text-center mb-12 sm:mb-16 max-w-4xl mx-auto px-4">
            Conteúdo completo e estruturado para você se tornar um expert
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
          {courseItems.map((item, index) => (
            <article
              key={index}
              className="bg-gradient-to-br from-[#1a1611]/90 to-[#0f0d0a]/90 border-2 border-[#daa821]/30 hover:border-[#daa821]/80 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#daa821]/30 group overflow-hidden rounded-lg p-6 sm:p-8 text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6 mx-auto w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32">
                <div className="absolute inset-0 bg-gradient-to-r from-[#daa821]/20 to-green-500/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.alt}
                  className="relative w-full h-full object-cover rounded-full border-2 border-[#daa821]/50 group-hover:border-[#daa821] transition-all duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold mb-3 text-white group-hover:text-[#daa821] transition-colors duration-300 leading-tight incandescent-glow">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
