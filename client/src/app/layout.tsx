
import type { Metadata } from 'next'
import {
  Inter,
  Montserrat
} from 'next/font/google'

import { Providers } from '@/store/provider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kembang Flower Mantap',
  description: 'My first site in Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>
          {children}
        </Providers>
        <div id="myModal"></div>
      </body>
    </html>
  )
}
