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
import { checkout } from '@/lib/stripe'
import useStoreCart from '@/store/useStore'

const CartSheet = ({ children }: { children: React.ReactNode }) => {
  const cart = useStoreCart(useStore, (state) => state.cart)
  const stripePrice = cart?.map((item) => {
    return {
      price: item.stripe_id,
      quantity: 1
    }
  })

  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent className='bg-white shadow-xl md:pt-16 pt-12 flex flex-col items-center justify-between'>
        <SheetHeader className='bg-gray-200 md:p-5 p-2'>
          <SheetTitle>{cart?.length === 0 ? 'YOU HAVE NO ITEMS IN YOUR SHOPPING CART.' : `Your Cart has ${cart?.length} Items`}</SheetTitle>
          <SheetDescription>
            {cart?.length === 0 ? 'Add items to the cart in order to checkout' : 'You can edit the products in your cart from here and go directly to the checkout'}
          </SheetDescription>
        </SheetHeader>
        <div className='py-5 space-y-10 overflow-auto'>
          {cart?.map((item) => (
            <div key={item.id} className='flex gap-2 w-full'>
              <Image src={item.image} alt={item.name} width={100} height={100} placeholder='blur' blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8+R8AApcByuTu2nIAAAAASUVORK5CYII' />
              <div className='flex flex-col justify-between w-full space-y-1'>
                <strong className='inline-block uppercase md:text-base text-sm'>{item.name}</strong>
                {item.sale !== null ? <div className='md:text-xl text-base'><span className='line-through text-gray-400'>{item.price} </span> ${item.sale}</div> : <div className='md:text-xl text-base'>{item.price}</div>}
                <RemoveFromCart product={item} />
              </div>
            </div>
          ))}
        </div>
        {cart?.length !== 0
          ? (
            <SheetFooter className='bg-gray-200 md:p-5 p-2 flex w-full justify-between items-center text-center gap-2 md:gap-0'>
              <div className='text-sm md:text-base'>CART SUBTOTAL: <span className='font-bold'>${cart?.map((item) => item.price).reduce((acc, curr) => acc + curr, 0).toFixed(2)}</span></div>
              <button onClick={async () => { await checkout({ items: stripePrice! }) }} className='bg-black text-white uppercase px-3 py-1 hover:bg-white hover:text-black transition-colors duration-200 font-bold text-sm'>Checkout</button>
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
