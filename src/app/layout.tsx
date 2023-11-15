// Next.js Imports
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

// Components Imports
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'

// Style Import
import './globals.css'

// UI Imports for the Toasts
import { Toaster } from '@/components/ui/toaster'

// Font
const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] })

// Metadata
export const metadata: Metadata = {
  title: 'Tough Fighting Gear',
  description: 'Fighting gear store',
  authors: [{ name: 'Adrian "Nano" Alvarez' }],
  generator: 'Next.js',
  icons: { icon: '/favicon.ico' }
}

export const dynamic = 'force-dynamic'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${poppins.className}`}>
        <Navbar />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  )
}
