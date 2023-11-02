'use client'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter
} from '@/components/ui/sheet'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const CompleteSet = ({ collection, itemName }: { collection: string | null, itemName: string }) => {
  const [products, setProducts] = useState<Array<Database['public']['Tables']['products']['Row']> | null>([])
  const supabase = createClientComponentClient<Database>()

  useEffect(() => {
    const getProductsByCollection = async () => {
      if (collection !== null) {
        const { data } = await supabase.from('products').select().eq('collection', collection).neq('name', itemName)
        setProducts(data)
      }
    }

    getProductsByCollection()
  }, [])

  if (collection === null) {
    return <></>
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className='uppercase px-4 py-1 bg-gray-400 w-fit hover:bg-white transition-colors duration-200 cursor-pointer'>Complete the Set</div>
      </SheetTrigger>
      <SheetContent className='py-14'>
        <SheetHeader className='bg-gray-200 p-5'>
          <SheetTitle className='font-bold uppercase'>{itemName}</SheetTitle>
          <SheetDescription>
            Complete the set with items from the same collection
          </SheetDescription>
        </SheetHeader>
        <div className='space-y-10 py-10'>
          {products?.slice(0, 3).map((item) => (
            <div key={item.id}>
              <div className='flex justify-between items-center'>
                <p className='font-bold'>{item.name}</p>
                <p>${item.price}</p>
              </div>
              <Image src={item.image} alt={item.name} width={150} height={150} />
              <div className='py-3 flex flex-row justify-between items-center'>
                <button className='bg-black text-white px-4 text-sm py-1 uppercase hover:bg-white hover:text-black transition-colors duration-200'>Add to cart</button>
                <button className='bg-black text-white px-4 text-sm py-1 uppercase hover:bg-white hover:text-black transition-colors duration-200'>Add to WishList</button>
              </div>
            </div>
          ))}
        </div>
        <SheetFooter>
          <Link href={`/products/collection/${collection}`} className='uppercase px-4 py-1 bg-gray-400 w-fit hover:bg-white transition-colors duration-200 cursor-pointer'>{`More from ${collection}`}</Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>

  )
}

export default CompleteSet
