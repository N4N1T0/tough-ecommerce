'use client'

// Ui Imports
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter
} from '@/components/ui/sheet'
import useStore from '@/store/store'
import Image from 'next/image'
import RemoveFromCart from '../products/remove-from-cart'

const CartSheet = ({ children }: { children: React.ReactNode }) => {
  const { cart } = useStore()

  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent className='bg-white shadow-xl pt-16 flex flex-col items-center justify-between'>
        <SheetHeader className='bg-gray-200 p-5'>
          <SheetTitle>{cart.length === 0 ? 'YOU HAVE NO ITEMS IN YOUR SHOPPING CART.' : `Your Cart has ${cart.length} Items`}</SheetTitle>
          <SheetDescription>
            {cart.length === 0 ? 'Add items to the cart in order to checkout' : 'You can edit the products in your cart from here and go directly to the checkout'}
          </SheetDescription>
        </SheetHeader>
        <div className='py-5 space-y-10 overflow-auto'>
          {cart.map((item) => (
            <div key={item.id} className='flex gap-2 w-full'>
              <Image src={item.image} alt={item.name} width={100} height={100} />
              <div className='flex flex-col justify-between w-full'>
                <strong className='inline-block uppercase'>{item.name}</strong>
                {item.sale !== null ? <div className='text-xl'><span className='line-through text-gray-400'>{item.price} </span> ${item.sale}</div> : <div className='text-xl'>{item.price}</div>}
                <RemoveFromCart product={item} />
              </div>
            </div>
          ))}
        </div>
        {cart.length !== 0
          ? (
            <SheetFooter className='bg-gray-200 p-5 flex w-full justify-between items-center'>
              <div>CART SUBTOTAL: &{cart.map((item) => item.price).reduce((acc, curr) => acc + curr, 0)}</div>
              <button className='bg-black text-white uppercase px-3 py-1 hover:bg-white hover:text-black transition-colors duration-200 font-bold text-sm'>Checkout</button>
            </SheetFooter>
          )
          : (
            <></>
          )}
      </SheetContent>
    </Sheet>

  )
}

export default CartSheet
