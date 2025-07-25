'use client';

import Image from 'next/image';

export default function BenefitsSection() {
  const benefits = [
    {
      image: '/exclusivo.jpg',
      title: 'Receitas Exclusivas',
      description: 'Mais de 50 receitas únicas que você não encontra em lugar nenhum',
      highlight: '50+ Receitas',
    },
    {
      image: '/vip-pass.png',
      title: 'Comunidade VIP',
      description: 'Acesso ao grupo exclusivo com outros empreendedores do ramo',
      highlight: 'Grupo VIP',
    },
    {
      image: '/full-hd-icon.png',
      title: 'Aulas em Vídeo HD',
      description: 'Conteúdo gravado em alta qualidade com todos os detalhes',
      highlight: 'Vídeos HD',
    },
    {
      image: '/acesso-vitalicio.png',
      title: 'Acesso Vitalício',
      description: 'Estude no seu ritmo, quando e onde quiser, para sempre',
      highlight: 'Para Sempre',
    },
    {
      image: "/batata_recheada_7.jpeg",
      title: 'Vídeo Aula Completa',
      description: 'Aula prática com passo a passo das receitas, direto da cozinha!',
      highlight: 'Didática Completa',
    },
    {
      image: '/suporte-24-horas.webp',
      title: 'Suporte Especializado',
      description: 'Tire suas dúvidas diretamente com profissionais experientes',
      highlight: 'Suporte 24h',
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-b from-[#1a1611]/20 via-[#1a1611]/40 to-[#1a1611]/20">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            id="benefits-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 text-[#daa821] drop-shadow-[0_0_20px_rgba(218,168,33,0.8)] animate-pulse"
          >
            Por que escolher o BatataCheff?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 text-center mb-12 sm:mb-16 max-w-3xl mx-auto px-4">
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
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={benefit.image || '/placeholder.svg'}
                  alt={benefit.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Highlight Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-[#daa821] text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {benefit.highlight}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#daa821] transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
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
