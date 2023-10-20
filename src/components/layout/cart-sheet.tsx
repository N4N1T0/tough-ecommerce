// Ui Imports
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'

const CartSheet = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent className='bg-white shadow-xl pt-16'>
        <SheetHeader>
          <SheetTitle>YOU HAVE NO ITEMS IN YOUR SHOPPING CART.</SheetTitle>
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
