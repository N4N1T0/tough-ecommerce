import type { Metadata } from 'next'
import { Poppins, Kaushan_Script } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/navbar'

const poppins = Poppins({ weight: ['400', '700'], subsets: ['latin'], variable: '--poppins' })
const kashua = Kaushan_Script({ weight: ['400'], subsets: ['latin'], variable: '--kashua' })

export const metadata: Metadata = {
  title: 'Tough Fighting Gear',
  description: 'Fighting gear store'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      <body className={`${poppins.variable} ${kashua.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
