// Next.js Imports
import Link from 'next/link'

// Ui Imports
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from '@/components/ui/sheet'

// Info Imports
import { navlinks } from '@/content'

// Assets Imports
import { Menu } from 'lucide-react'

const MobileNavlinks = [
  ...navlinks,
  {
    label: 'USER',
    link: '/'
  }
]

function NavSheet() {
  return (
    <Sheet>
      <SheetTrigger className='md:hidden'><Menu className='h-6 w-6' /></SheetTrigger>
      <SheetContent side='left' className='bg-white px-0 pt-16 shadow-xl'>
        <ul className='space-y-5'>
          {/* Modified Navlinks */}
          {MobileNavlinks.map(({ label, link }: { label: string, link: string }) => {
            const userPopup = (label: string) => {
              if (label === 'USER') {
                return (
                  <details>
                    <summary className='font-bold text-xl border-b-2 w-full pb-1 [open]:bg-black'>{label}</summary>
                    <div className='flex flex-col uppercase gap-3 px-5 py-3 [&>a]:font-bold [&>a]:border-b-2'>
                      <Link href='/' >Login</Link>
                      <Link href='/' >Signin</Link>
                      <Link href='/' >Tough Team</Link>
                    </div>
                  </details>
                )
              } else {
                return (
                  <li key={`Link-${label}`} className='font-bold text-xl border-b-2 w-full py-1'>
                    <Link href={link} className='px-3'>{label}</Link>
                  </li>
                )
              }
            }
            return userPopup(label)
          })}
        </ul>
      </SheetContent>
    </Sheet>

  )
}

export default NavSheet
