// Next.js Imports
import Link from 'next/link'
import { cookies } from 'next/headers'

// Ui Imports
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from '@/components/ui/sheet'

// Info Imports
import { navlinks } from '@/content'

// Assets Imports
import { Menu } from 'lucide-react'
import { type Session } from '@supabase/supabase-js'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { LogoutBtn } from '../login/login-buttons'
import LoginSignTabs from './login-singup-tabs'

const MobileNavlinks = [
  ...navlinks,
  {
    label: 'USER',
    link: '/'
  }
]

const NavSheet = async () => {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()
  return (
    <Sheet>
      <SheetTrigger className='md:hidden'><Menu className='h-6 w-6' /></SheetTrigger>
      <SheetContent side='left' className='bg-white px-0 pt-16 shadow-xl'>
        <ul className='space-y-5'>
          {/* Modified Navlinks */}
          {MobileNavlinks.map(({ label, link }: { label: string, link: string }) => {
            const userPopup = (label: string, session: Session | null) => {
              if (label === 'USER') {
                return session !== null
                  ? (
                    <details>
                      <summary className='font-bold text-xl border-b-2 w-full pb-1 [open]:bg-black'>USER</summary>
                      <div className='flex flex-col uppercase gap-3 px-5 py-3 [&>a]:font-bold [&>a]:border-b-2'>
                        <SheetClose asChild>
                          <Link href='/account/costumer' className='uppercase text-left'>Account</Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link href='/account/wish-list' className='uppercase text-left'>Whishlist</Link>
                        </SheetClose>
                        <LogoutBtn className='uppercase text-left font-bold border-b-2' />
                      </div>
                    </details>
                  )
                  : (
                    <details>
                      <summary className='font-bold text-xl border-b-2 w-full pb-1 [open]:bg-black'>USER</summary>
                      <div className='flex flex-col gap-3 px-5 py-3'>
                        <LoginSignTabs tab='login'>
                          <p className='font-bold border-b-2 w-full py-1 uppercase text-left'>Login</p></LoginSignTabs>
                        <LoginSignTabs tab='signup'><p className='font-bold border-b-2 w-full py-1 uppercase text-left'>SignUp</p></LoginSignTabs>
                        <SheetClose asChild>
                          <Link href='/team-tough' className='uppercase font-bold border-b-2 w-full py-1 text-left'>Tough Team</Link>
                        </SheetClose>
                      </div>
                    </details>
                  )
              } else {
                return (
                  <li key={`Link-${label}`} className='font-bold text-xl border-b-2 w-full py-1'>
                    <SheetClose asChild>
                      <Link href={link} className='px-3'>{label}</Link>
                    </SheetClose>
                  </li>
                )
              }
            }
            return userPopup(label, session)
          })}
        </ul>
      </SheetContent>
    </Sheet>

  )
}

export default NavSheet
