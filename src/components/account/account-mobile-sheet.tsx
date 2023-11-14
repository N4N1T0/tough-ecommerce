// Next.js Imports
import Link from 'next/link'

// UI Imports
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'

// Assets Imports
import { accountLinks } from '@/content'

const AccountMobileSheet = () => {
  return (
    <nav className='md:hidden block'>
      <Sheet>
        <SheetTrigger asChild>
          <div className='px-3 py-1 bg-black text-white flex w-fit'>
            Account
          </div>
        </SheetTrigger>
        <SheetContent className='py-14'>
          <SheetHeader>
            <SheetTitle>Accounts Links</SheetTitle>
            <ul className='px-5'>
              {/* Account Links for the mobile */}
              {accountLinks.map((item, idx) => (
                <li key={`Account-link-${item.label}-${idx}`} className='uppercase text-md font-semibold w-full pt-5'>
                  <Link className='hover:underline mt-4' href={item.link}>{item.label}</Link>
                  <hr className='h-[1px] bg-border border-none mt-4' />
                  {(item.internalLinks != null)
                    ? (
                      <ul className='pl-4'>
                        {item.internalLinks.map((item, idx) => (
                          <li className='uppercase text-md font-normal w-full pt-5' key={`Account-Internal-Link-${item.label}-${idx}`}>
                            <Link className='hover:underline mt-4' href={item.link}>{item.label}</Link>
                            <hr className='h-[1px] bg-border border-none mt-4' />
                          </li>
                        ))}
                      </ul>
                    )
                    : (
                      <>
                      </>
                    )}
                </li>
              ))}
            </ul>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>

  )
}

export default AccountMobileSheet
