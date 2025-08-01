'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';
import CountdownTimer from '../shared/CountdownTimer';

export default function UpsellSection() {
  return (
    <section
      className="py-12 sm:py-16 bg-gradient-to-b from-[#1a1611]/20 via-[#1a1611]/40 to-[#1a1611]/20"
      aria-labelledby="upsell-heading"
    >
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <Badge className="bg-gradient-to-r from-[#daa821] to-yellow-400 text-white mb-4 px-4 py-2 text-sm font-semibold shadow-lg shadow-[#daa821]/30 animate-bounce">
            ⚠️ OFERTA ESPECIAL COMBO ⚠️
          </Badge>

          {/* Combo Countdown Timer */}
          <div className="bg-gradient-to-r from-[#1a1611]/80 to-[#0f0d0a]/80 rounded-xl p-4 mb-6 border border-[#daa821]/30 max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <p className="text-[#daa821] font-semibold text-sm">⏰ Oferta combo expira em:</p>
            </div>
            <CountdownTimer variant="combo" />
            <p className="text-center text-gray-400 text-xs mt-2">
              Após esse tempo, você pagará o valor integral de R$ 59,97
            </p>
          </div>
        </div>

        <div className="text-center mb-8 sm:mb-12">
          <h2
            id="upsell-heading"
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-6 incandescent-title"
          >
            Cursos essenciais para turbinar seu faturamento!
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 text-center max-w-4xl mx-auto px-4">
            Escolha o que mais combina com você ou aproveite todos separadamente.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 sm:gap-12 items-start">
          {/* Curso 1: Macarronada de Sucesso */}
          <CourseCard
            image="/macarronada_sucesso.jpeg"
            emoji="🍝"
            title="Macarronada de Sucesso"
            subtitle="Curso Completo"
            price="R$ 12,99"
            oldPrice="R$ 19,99"
            features={['Receita passo a passo', 'Molhos especiais e segredos do chef', 'Acesso vitalício']}
            link="https://pay.kiwify.com.br/5jEhB9d"
          />

          {/* Curso 2: Tudo que você precisa em um só link */}
          <CourseCard
            image="/tudo_que_voce_precisa.jpeg"
            emoji="📦"
            title="Tudo que você precisa num só link"
            subtitle="Material Essencial"
            price="R$ 12,99"
            oldPrice="R$ 19,99"
            features={['Organização para vendas', 'Link personalizado para seus cursos', 'Acesso imediato']}
            link="https://pay.kiwify.com.br/5jEhB9d"
          />

          {/* Curso 3: Fornecedor de Batata Florão */}
          <CourseCard
            image="/fornecedor_batata.jpeg"
            emoji="🥔"
            title="Fornecedor de Batata Florão"
            subtitle="Guia Exclusivo"
            price="R$ 14,99"
            oldPrice="R$ 19,99"
            features={['Contato de fornecedor confiável', 'Preços especiais', 'Atualizações incluídas']}
            link="https://pay.kiwify.com.br/IjRacAK"
          />
        </div>
      </div>
    </section>
  );
}

const CourseCard = ({ image, emoji, title, subtitle, price, oldPrice, features, link }) => (
  <div className="bg-gradient-to-br from-[#1a1611] to-[#0f0d0a] rounded-2xl p-6 sm:p-8 border-2 border-[#daa821]/30 hover:border-[#daa821]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#daa821]/20">
    <div className="text-center mb-6">
      <div className="relative mb-4">
        <div className="absolute inset-0 bg-gradient-to-r from-[#daa821]/20 to-yellow-400/20 rounded-2xl blur-3xl animate-pulse"></div>
        <img
          src={image}
          alt={`Imagem do curso ${title}`}
          className="relative w-60 h-60 mx-auto rounded-2xl border-4 border-[#daa821]/50 shadow-2xl"
        />
      </div>
      <div className="flex items-center justify-center mb-2">
        <span className="text-2xl">{emoji}</span>
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-[#daa821] font-semibold text-sm">{subtitle}</p>
    </div>

    <ul className="space-y-2 mb-6">
      {features.map((f, idx) => (
        <li key={idx} className="flex items-start space-x-2 text-gray-300 text-sm">
          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
          <span>{f}</span>
        </li>
      ))}
    </ul>

    <div className="text-center mb-4">
      <p className="text-gray-400 text-sm">
        De <span className="line-through">{oldPrice}</span> por apenas:
      </p>
      <p className="text-2xl font-bold text-[#daa821]">{price}</p>
    </div>

    <Button
      className="w-full bg-gradient-to-r from-[#daa821] via-yellow-400 to-[#daa821] hover:from-[#daa821]/80 hover:via-yellow-400/80 hover:to-[#daa821]/80 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg shadow-[#daa821]/30 animate-pulse-scale hover:shadow-[#daa821]/50 mb-4 relative overflow-hidden"
      onClick={() => window.open(link, '_blank')}
    >
      <span className="relative z-10 md:text-2xl">GARANTIR AGORA</span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse"></div>
    </Button>
  </div>
);
