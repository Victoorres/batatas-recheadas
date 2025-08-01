'use client';

import Image from 'next/image';

export default function BenefitsSection() {
  const benefits = [
    {
      image: '/batata_recheada_13.jpeg',
      title: 'Receitas Testadas e Aprovadas',
      description: 'Mais de 50 receitas criadas por profissionais e validadas por centenas de alunos em todo o Brasil.',
      highlight: '50+ Receitas Infalíveis',
    },
    {
      image: '/batata_recheada_14.jpeg',
      title: 'Grupo de Apoio Exclusivo',
      description:
        'Acesso a uma comunidade ativa no WhatsApp com dicas, feedbacks e trocas entre alunos e instrutores.',
      highlight: 'Networking Real',
    },
    {
      image: '/batata_recheada_15.jpeg',
      title: 'Aulas Passo a Passo em Vídeo',
      description: 'Aprenda visualmente com vídeos em alta qualidade mostrando cada etapa da receita, sem enrolação.',
      highlight: '100% Prático',
    },
    {
      image: '/garantia.jpeg',
      title: 'Acesso Vitalício Garantido',
      description: 'Volte às aulas sempre que quiser, sem limite de tempo. Atualizações futuras inclusas.',
      highlight: 'Atualizações Grátis',
    },
    {
      image: '/batata_recheada_16.jpeg',
      title: 'Receitas que Vendem!',
      description:
        'Aprenda receitas com alto potencial de lucro, testadas em vendas reais em feiras, deliveries e eventos.',
      highlight: 'Lucro na Cozinha',
    },
    {
      image: '/batata_recheada_17.jpeg',
      title: 'Suporte com Especialistas',
      description: 'Tire dúvidas diretamente com quem vive de comida e sabe o que realmente funciona.',
      highlight: 'Acompanhamento Profissional',
    },
  ];

  return (
    <section
      className="py-12 sm:py-16 lg:py-20  bg-gradient-to-b from-[#1a1611]/20 via-[#1a1611]/40 to-[#1a1611]/20"
      aria-labelledby="benefits-heading"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            id="benefits-heading"
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-6 incandescent-title"
          >
            Por que escolher o BatataCheff?
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 text-center mb-12 sm:mb-16 max-w-4xl mx-auto px-4">
            Mais de 10.000 alunos já transformaram suas vidas com nossas receitas exclusivas
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <article
              key={index}
              className="group relative bg-gradient-to-br from-[#1a1611]/90 to-[#0f0d0a]/90 border-2 border-[#daa821]/30 hover:border-[#daa821]/80 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#daa821]/30 rounded-2xl overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Background */}
              <div className="relative h-48 sm:h-[40vh] overflow-hidden">
                <Image
                  src={benefit.image || '/placeholder.svg'}
                  alt={benefit.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Highlight Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-[#daa821] text-black px-3 py-2 rounded-full text-sm sm:text-base font-bold shadow-lg">
                    {benefit.highlight}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-white group-hover:text-[#daa821] transition-colors duration-300 incandescent-glow">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#daa821]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
