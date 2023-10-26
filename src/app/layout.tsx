import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/navbar'
import { Toaster } from '@/components/ui/toaster'

const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tough Fighting Gear',
  description: 'Fighting gear store'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es'>
      <body className={`${poppins.className}`}>
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  )
}
