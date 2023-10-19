import { navlinks } from '@/content'
import Link from 'next/link'
import { ShoppingCart, User } from 'lucide-react'
import PromotionDialog from './promotion-dialog'

export default function Navbar() {
  return (
    <header className='py-5 space-y-4'>
      <nav className='flex justify-between items-center px-8'>
        <h2 className='uppercase font-kashua text-2xl'>Tough</h2>
        <ul className='flex gap-5'>
          {navlinks.map((item, idx) => (
            <li key={`link-${item.label}-${idx}`} className='font-bold'>
              <Link href={item.link}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <div className='flex gap-5'>
          {/* Supabase Login */}
          <Link href='/'>
            <User />
          </Link>
          {/* Sheet Shopping Cart */}
          <Link href='/user'>
            <ShoppingCart />
          </Link>
        </div>
      </nav>
      <div className='bg-black text-white w-full py-3 text-center font-bold tracking-wider'>
        {/* Dialog */}
        <PromotionDialog>
          <p>SIGN UP FOR EVERLAST NEWS & OFFERS AND GET 15% OFF</p>
        </PromotionDialog>
      </div>
    </header>
  )
}
