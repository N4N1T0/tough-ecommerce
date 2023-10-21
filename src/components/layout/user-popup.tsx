// Ui Imports
import Link from 'next/link'

// Ui Imports
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'

import LoginSignTabs from './login-singup-tabs'

function UserPopup({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <Popover>
      <PopoverTrigger className='hidden md:block'>{children}</PopoverTrigger>
      <PopoverContent className='bg-white flex flex-col gap-3'>
        {/* Supabase login and Signin */}
        <LoginSignTabs tab='login'>
          <p className='hover:text-gray-700 transition-colors duration-150 uppercase text-left'>Login</p>
        </LoginSignTabs>
        <LoginSignTabs tab='signup'>
          <p className='hover:text-gray-700 transition-colors duration-150 uppercase text-left'>Sign Up</p>
        </LoginSignTabs>
        <Link href='/team-tough' className='hover:text-gray-700 transition-colors duration-150 uppercase'>Tough Team</Link>
      </PopoverContent>
    </Popover>

  )
}

export default UserPopup
