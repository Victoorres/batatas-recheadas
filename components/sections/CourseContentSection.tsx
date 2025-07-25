'use client';

export default function CourseContentSection() {
  const courseItems = [
    {
      image: '/atrair-clientes.jpg',
      title: 'Como Atrair Mais Clientes',
      description: 'Estratégias simples e eficazes para vender todos os dias',
      alt: 'Batata recheada servida em embalagem elegante com fundo desfocado e lettering chamativo',
    },
    {
      image: '/batata_recheada_3.jpeg',
      title: 'As Receitas Que Mais Vendem',
      description: 'Descubra os sabores que conquistam os clientes e multiplicam os pedidos',
      alt: 'Batata recheada gourmet com efeito dramático de fogo e ingredientes frescos',
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
  ];

  return (
    <section
      className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-b from-[#1a1611]/20 via-[#1a1611]/40 to-[#1a1611]/20"
      aria-labelledby="course-content-heading"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            id="course-content-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 text-[#daa821] drop-shadow-[0_0_20px_rgba(218,168,33,0.8)] animate-pulse"
          >
            O que você vai aprender
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 text-center mb-12 sm:mb-16 max-w-3xl mx-auto px-4">
            Conteúdo completo e estruturado para você se tornar um expert
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {courseItems.map((item, index) => (
            <article
              key={index}
              className="bg-gradient-to-br from-[#1a1611]/90 to-[#0f0d0a]/90 border-2 border-[#daa821]/30 hover:border-[#daa821]/80 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#daa821]/30 group overflow-hidden rounded-lg p-4 sm:p-6 text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-4 mx-auto w-20 h-20 sm:w-24 sm:h-24 lg:w-40 lg:h-40">
                <div className="absolute inset-0 bg-gradient-to-r from-[#daa821]/20 to-green-500/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <img
                  src={item.image || '/placeholder.svg'}
                  alt={item.alt}
                  className="relative w-full h-full object-cover rounded-full border-2 border-[#daa821]/50 group-hover:border-[#daa821] transition-all duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-2 text-white group-hover:text-[#daa821] transition-colors duration-300 leading-tight">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
