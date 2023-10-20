// Ui Imports
import Link from 'next/link'

// Ui Imports
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'

function UserPopup({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <Popover>
      <PopoverTrigger className='hidden md:block'>{children}</PopoverTrigger>
      <PopoverContent className='bg-white flex flex-col gap-3 uppercase'>
        {/* Supabase login and Signin */}
        <Link href='/' className='hover:text-gray-700 transition-colors duration-150'>Login</Link>
        <Link href='/' className='hover:text-gray-700 transition-colors duration-150'>Signin</Link>
        <Link href='/' className='hover:text-gray-700 transition-colors duration-150'>Tough Team</Link>
      </PopoverContent>
    </Popover>

  )
}

export default UserPopup
