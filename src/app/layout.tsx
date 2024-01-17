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
  description: 'Explore top-notch combat sports gear at our online store. Elevate your performance with premium equipment. Shop now!',
  authors: [{ name: 'Adrian "Nano" Alvarez' }],
  generator: 'Next.js',
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: 'Tough Fighting Gear - Gear Up For a Fight',
    description: 'Explore top-notch combat sports gear at our online store. Elevate your performance with premium equipment. Shop now!',
    siteName: 'Tough Fighting Gear',
    images: [
      {
        url: 'https://tough-ecommerce.vercel.app/fresh.jpg',
        width: 1200,
        height: 631,
        alt: 'Open Graph Picture for Tough Fighting Gear'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  formatDetection: {
    email: true,
    address: false,
    telephone: true
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tough Fighting Gear - Gear Up For a Fight',
    description: 'Explore top-notch combat sports gear at our online store. Elevate your performance with premium equipment. Shop now!',
    images: ['https://tough-ecommerce.vercel.app/fresh.jpg']
  }
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
