'use client'

import { useSearchParams } from 'next/navigation'
import useStore from '@/store/store'
import useStoreCart from '@/store/useStore'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function SuccesPage() {
  const [cartList, setCartList] = useState<any | null>(null)
  const SearchParams = useSearchParams()
  const sessionId = SearchParams.get('session_id')
  const emptyCart = useStoreCart(useStore, (state) => state.emptyCart)
  const cart = useStoreCart(useStore, (state) => state.cart)

  useEffect(() => {
    setCartList(cart)
  }, [])

  useEffect(() => {
    if (emptyCart !== undefined) emptyCart()
  }, [cartList])

  console.log(cartList)

  return (
    <main className='max-w-[1000px] mx-auto px-5 flex flex-col justify-center items-center text-center md:gap-5 gap-2'>
      <header className='pt-48 py-10 space-y-2'>
        <h1 className='font-bold uppercase text-4xl xl:text-7xl'>Success Payment</h1>
        <h2 className='font-bold'>Your Order id is:  <span className='italic font-normal underline break-all'>{sessionId}</span></h2>
      </header>
      <section className='text-left w-full space-y-3'>
        <h3 className='uppercase font-bold text-xl'>Order Summary</h3>
        <hr className='border-border' />
        {/* {cartList?.map((item) => (
          <div key={item.id} className='flex gap-3 leading-5'>
            <Image src={item.image} alt={item.name} height={100} width={100} />
            <div className='space-y-1'>
              <h4>{item.name}</h4>
              {(item.sale != null) ? <div className='space-x-2'><span className='line-through text-gray-700'>{item.price}</span><strong>{item.sale}</strong></div> : <strong className='block'>{item.price}</strong>}
              <small className='block'>{item.description.split(' ').slice(0, 20).join(' ')}...</small>
              <hr />
            </div>
          </div>
        ))} */}
        <hr className='border-border' />
        <ul>
          <li className='flex justify-between items-center'>
            <p className='uppercase font-bold'>Order Total:</p>
            {/* <p className='text-xl underline'>${cartList?.map((item) => item.price).reduce((acc, curr) => acc + curr, 0)}</p> */}
          </li>
          <li className='flex justify-between items-center'>
            <p className='uppercase font-bold'>Payment Method:</p>
            <p className='text-xl underline'>Credit Card</p>
          </li>
          <li className='py-2'>
            <hr className='border-border' />
          </li>
          <li className='flex justify-between items-center pt-2'>
            <Link href='/products/boxing/all' className='bg-black text-white uppercase px-3 py-1 md:px-4 md:text-base hover:bg-white hover:text-black transition-colors duration-200 font-bold text-sm'>Continue Shopping</Link>
            <Link href='/account/orders' className='bg-black text-white uppercase px-3 py-1 md:px-4 md:text-base hover:bg-white hover:text-black transition-colors duration-200 font-bold text-sm'>See My Orders</Link>
          </li>
        </ul>
      </section>
    </main>
  )
}
