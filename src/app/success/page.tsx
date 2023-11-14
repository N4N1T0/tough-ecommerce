'use client'

// Next.js Imports
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

// Zustand Imports
import useStore from '@/store/store'
import useStoreCart from '@/store/useStore'

// React Imports
import { useEffect } from 'react'

// Supabse Imports
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

// Assets Imports
import Success from '@/assets/Success.jpg'

export default function SuccesPage() {
  // Query fecth for the Order id
  const SearchParams = useSearchParams()
  const sessionId = SearchParams.get('session_id')

  // Supabase CLient
  const supabase = createClientComponentClient<Database>()

  // Zustand Hook fto the store
  const cart = useStoreCart(useStore, (state) => state.cart)
  const emptyCart = useStoreCart(useStore, (state) => state.emptyCart)

  // Insert Order in supbase
  useEffect(() => {
    const insertOrder = async () => {
      await supabase.from('orders').insert({
        order_id: sessionId,
        total: cart?.map((item) => item.price).reduce((acc, curr) => acc + curr, 0),
        products_id: cart?.map(item => item.id)
      })
        .select()
    }

    if ((cart != null) && cart.length > 0) {
      insertOrder()
    } else {
      console.log('Nada')
    }
  }, [cart])

  if (emptyCart !== undefined) {
    setTimeout(() => { emptyCart() }, 10000)
  }

  return (
    <main className='max-w-[1000px] mx-auto px-5 flex flex-col justify-center items-center text-center md:gap-5 gap-2'>
      <header className='pt-48 py-10 space-y-2'>
        <h1 className='font-bold uppercase text-4xl xl:text-7xl'>Success Payment</h1>
        <h2 className='font-bold'>Your Order id is:  <span className='italic font-normal underline break-all'>{sessionId}</span></h2>
      </header>
      <section className='text-left w-full space-y-3'>
        <Image src={Success} alt='Champions Colliding' priority />
        <div className='flex justify-between items-center pt-2'>
          <Link href='/products/boxing/all' className='bg-black text-white uppercase px-3 py-1 md:px-4 md:text-base hover:bg-white hover:text-black transition-colors duration-200 font-bold text-sm'>Continue Shopping</Link>
          <Link href='/account/orders' className='bg-black text-white uppercase px-3 py-1 md:px-4 md:text-base hover:bg-white hover:text-black transition-colors duration-200 font-bold text-sm'>See My Orders</Link>
        </div>
      </section>
    </main>
  )
}
