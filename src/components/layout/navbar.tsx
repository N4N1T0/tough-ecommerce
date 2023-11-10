// Next.js Imports
import Link from 'next/link'

// Info Imports
import { navlinks } from '@/content'

// Assets Imports
import { ShoppingCart, User } from 'lucide-react'

// Components Imports
import { PromotionDialog, CodeDialog } from './promotions-dialogs'
import CartSheet from './cart-sheet'
import NavSheet from './navbar-sheet'
import UserPopup from './user-popup'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import SpanCartNumber from './span-cart-number'

const Navbar = async () => {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: { session } } = await supabase.auth.getSession()
  return (
    <header className='pt-5 space-y-4 w-full fixed bg-white z-10'>
      <nav className='flex justify-between items-center px-8'>
        {/* Mobile Navbar */}
        <NavSheet />
        <Link href='/' className='uppercase text-2xl'>
          Tough
        </Link>
        <ul className='gap-5 hidden md:flex'>
          {navlinks.map((item, idx) => (
            <li key={`link-${item.label}-${idx}`} className='font-bold hover:text-gray-600 transition-colors duration-200'>
              <Link href={item.link}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <div className='flex gap-5'>
          {/* User */}
          <UserPopup>
            <User className='hover:text-gray-600 transition-colors duration-200' />
          </UserPopup>
          {/* Cart */}
          <CartSheet>
            <div className='relative'>
              <ShoppingCart className='hover:text-gray-600 transition-colors duration-200' />
              <SpanCartNumber />
            </div>
          </CartSheet>
        </div>
      </nav>
      <div className='bg-black text-white w-full py-3 text-center font-bold tracking-wider'>
        {/* Dialog */}
        {(session != null)
          ? (
            <CodeDialog>
              <p className='md:px-0 px-5 hover:text-gray-300 transition-colors duration-200'>UNLOCK UP TO 10% OFF YOUR ENTIRE ORDER</p>
            </CodeDialog>
          )
          : (
            <PromotionDialog>
              <p className='md:px-0 px-5 hover:text-gray-300 transition-colors duration-200'>SIGN UP FOR EVERLAST NEWS & OFFERS AND GET 15% OFF</p>
            </PromotionDialog>
          )
        }
      </div >
    </header >
  )
}

export default Navbar
