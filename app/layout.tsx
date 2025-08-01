import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Curso de Batatas Recheadas - BatataCheff | Aprenda a Faturar R$ 5.000/mês",
  description:
    "Domine a arte das batatas recheadas com o curso mais completo do Brasil. Mais de 50 receitas exclusivas, método comprovado para faturar de R$ 3k a R$ 5k por mês. Acesso vitalício por apenas R$ 49,60.",
  keywords:
    "curso batatas recheadas, receitas batatas, negócio batatas, empreendedorismo culinário, batata recheada gourmet, curso culinário online, receitas lucrativas, negócio alimentício",
  authors: [{ name: "BatataCheff" }],
  creator: "BatataCheff",
  publisher: "BatataCheff",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://batatacheff.com.br",
    siteName: "BatataCheff - Curso de Batatas Recheadas",
    title: "Curso de Batatas Recheadas - Fature até R$ 5.000/mês | BatataCheff",
    description:
      "Transforme batatas simples em pratos gourmet irresistíveis e fature alto com receitas exclusivas. Mais de 10.000 alunos já transformaram suas vidas!",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "BatataCheff - Curso de Batatas Recheadas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Curso de Batatas Recheadas - Fature até R$ 5.000/mês",
    description:
      "Domine a arte das batatas recheadas com receitas exclusivas e método comprovado. Acesso vitalício por R$ 49,60.",
    images: ["/logo.png"],
    creator: "@batatacheff",
  },
  alternates: {
    canonical: "https://batatacheff.com.br",
  },
  category: "education",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="theme-color" content="#daa821" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              name: "Curso de Batatas Recheadas - BatataCheff",
              description:
                "Curso completo para aprender a fazer batatas recheadas gourmet e montar um negócio lucrativo. Mais de 50 receitas exclusivas e método comprovado.",
              provider: {
                "@type": "Organization",
                name: "BatataCheff",
                url: "https://batatacheff.com.br",
                logo: "https://batatacheff.com.br/logo.png",
              },
              offers: {
                "@type": "Offer",
                price: "49.60",
                priceCurrency: "BRL",
                availability: "https://schema.org/InStock",
                validFrom: "2024-01-01",
                priceValidUntil: "2024-12-31",
              },
              courseMode: "online",
              educationalLevel: "beginner",
              teaches: [
                "Receitas de batatas recheadas",
                "Técnicas de preparo profissional",
                "Estratégias de marketing",
                "Gestão de negócio alimentício",
                "Precificação de produtos",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "2847",
                bestRating: "5",
                worstRating: "1",
              },
            }),
          }}
        />

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Como funciona o acesso ao curso?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Após a confirmação do pagamento, você recebe imediatamente por email os dados de acesso à nossa plataforma exclusiva. O acesso é vitalício e você pode estudar no seu próprio ritmo.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Preciso ter experiência na cozinha?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Não! O curso foi desenvolvido para iniciantes. Começamos do básico e vamos evoluindo gradualmente. Mesmo quem nunca cozinhou consegue acompanhar perfeitamente.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quanto posso ganhar vendendo batatas recheadas?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Nossos alunos relatam faturamentos que variam de R$ 2.000 a R$ 8.000 por mês. O valor depende da sua dedicação, região e estratégias aplicadas.",
                  },
                },
              ],
            }),
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "BatataCheff",
              url: "https://batatacheff.com.br",
              logo: "https://batatacheff.com.br/logo.png",
              description:
                "Escola online especializada em ensinar receitas de batatas recheadas e técnicas para montar um negócio lucrativo no ramo alimentício.",
              foundingDate: "2024",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: "Portuguese",
              },
              sameAs: [
                "https://instagram.com/batatacheff",
                "https://facebook.com/batatacheff",
                "https://youtube.com/batatacheff",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
