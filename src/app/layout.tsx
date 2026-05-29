import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-nunito',
})

export const metadata: Metadata = {
  title: 'Assertivo! – O Jogo da Comunicação',
  description: 'Jogo educativo sobre comunicação assertiva no contexto eclesiástico',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${nunito.variable} font-nunito bg-[#0F2318] text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
