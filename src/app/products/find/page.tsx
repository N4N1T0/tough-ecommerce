'use client'

// Next.js Imports
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

// Components Imports
import RatingClient from '@/components/shared/rating-client'
import CategoriesMobileSheet from '@/components/products/categories-mobile-sheet'
import AddToCartBtn from '@/components/products/add-to-cart-btn'

// Supabse Imports
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useState, useEffect } from 'react'

export default function FindPage() {
  const [products, setProducts] = useState<productsPropsWithReviews | null>(null)
  const supabase = createClientComponentClient<Database>()
  const SearchParams = useSearchParams()
  const sport = SearchParams.get('sport')
  const type = SearchParams.get('type')
  const price = SearchParams.get('price')

  useEffect(() => {
    const newProduct = type === 'new'
    const SaleProduct = type === 'sale' ? 0 : 1000
    const getProducts = async () => {
      const { error, data } = await supabase.from('products')
        .select('*, reviews(*)')
        .contains('sports', [sport])
        .eq('equipment_type', 'gloves')
        .eq('new', newProduct)
        .gt('price', price)
        .gt('sale', SaleProduct)

      setProducts(data)
      console.log('Error', error)
      console.log('Data', data)
    }

    getProducts()
  }, [])

  return (
    <section className='max-w-[1400px] mx-auto pt-48'>
      <div className='flex justify-between items-center'>
        <h1 className='uppercase font-semibold text-lg md:text-2xl'> Glove Finder <span className='text-xs md:text-sm font-normal lowercase'>({products?.length} Products)</span></h1>
        <CategoriesMobileSheet category={sport!} />
      </div>
      <div className='w-full grid grid-cols-2 md:grid-cols-3 grid-rows-1 gap-5 py-5'>
        {products?.map((item, idx) => {
          const score = item.reviews.map(item => item.score).reduce((acc, current) => acc + current, 0)
          return (
            <div key={item.id} className='border p-2 col-span-1 border-border space-y-2'>
              <Link href={`/products/item/${item.id}`}>
                <Image src={item.image} alt={item.name} width={350} height={400} />
              </Link>
              <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-3'>
                <Link href={`/products/item/${item.id}`} className='font-semibold text-sm md:text-base hover:text-gray-700 hover:underline transition-all duration-100'>{item.name}</Link>
                <div>
                  <RatingClient score={score} size={15} />
                </div>
              </div>
              <div className='flex justify-between items-center'>
                {item.sale !== null ? <div className='text-xl'><span className='line-through text-gray-400'>{item.price} </span> ${item.sale}</div> : <div className='text-xl'>{item.price}</div>}
                {item.new && <Link href='/products/new' className='uppercase px-2 py-1 bg-gray-400 w-fit hover:bg-white transition-colors duration-200'>New</Link>}
                {item.sale !== null && <Link href='/products/sale' className='uppercase px-2 py-1 bg-gray-400 w-fit hover:bg-white transition-colors duration-200'>Sale</Link>}
              </div>
              <hr className='bg-border/60 h-[1px] border-0' />
              <div className='flex justify-between items-center'>
                <AddToCartBtn product={item} />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
