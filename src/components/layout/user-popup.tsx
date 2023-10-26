// Next.js Imports
import Link from 'next/link'
import { cookies } from 'next/headers'

// Ui Imports
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose
} from '@/components/ui/popover'

// Components Imports
import LoginSignTabs from './login-singup-tabs'
import { LogoutBtn } from '../login/login-buttons'

// Supabase Imports
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

const UserPopup = async ({ children }: { children: React.ReactNode }) => {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  // eslint-disable-next-line multiline-ternary
  return session != null ? (
    <Popover>
      <PopoverTrigger className='hidden md:block'>{children}</PopoverTrigger >
      <PopoverContent className='bg-white flex flex-col gap-3'>
        <PopoverClose asChild>
          <Link href='/account/costumer' className='hover:text-gray-700 transition-colors duration-150 uppercase text-left'>Account</Link>
        </PopoverClose>
        <PopoverClose asChild>
          <Link href='/account/wish-list' className='hover:text-gray-700 transition-colors duration-150 uppercase text-left'>Whishlist</Link>
        </PopoverClose>
        <LogoutBtn className='hover:text-gray-700 transition-colors duration-150 uppercase text-left' />
      </PopoverContent>
    </Popover>
  ) : (
    <Popover>
      <PopoverTrigger className='hidden md:block'>{children}</PopoverTrigger >
      <PopoverContent className='bg-white flex flex-col gap-3'>
        {/* Supabase login and Signin */}
        <LoginSignTabs tab='login'>
          <p className='hover:text-gray-700 transition-colors duration-150 uppercase text-left'>Login</p>
        </LoginSignTabs>
        <LoginSignTabs tab='signup'>
          <p className='hover:text-gray-700 transition-colors duration-150 uppercase text-left'>Sign Up</p>
        </LoginSignTabs>
        <PopoverClose asChild>
          <Link href='/team-tough' className='hover:text-gray-700 transition-colors duration-150 uppercase'>Tough Team</Link>
        </PopoverClose>
      </PopoverContent>
    </Popover >
  )
}

export default UserPopup
