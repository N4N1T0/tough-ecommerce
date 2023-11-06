'use client'

// Ui Imports
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import useStore from '@/store/store'

const CartSheet = ({ children }: { children: React.ReactNode }) => {
  const { cart } = useStore()

  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent className='bg-white shadow-xl pt-16'>
        <SheetHeader>
          <SheetTitle>{cart.length === 0 ? 'YOU HAVE NO ITEMS IN YOUR SHOPPING CART.' : ''}</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>

  )
}

export default CartSheet
