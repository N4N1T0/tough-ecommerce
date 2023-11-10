'use client'

// Next.js Imports
import { useSearchParams } from 'next/navigation'

// Components Imports
import CategoriesMobileSheet from '@/components/products/categories-mobile-sheet'

// Supabse Imports
import { type User, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useState, useEffect } from 'react'
import ProductsCard from '@/components/shared/products-card'

type WihsListProps = Array<{
  created_at: string
  id: number
  product_id: number
  user_id: string
}> | null

export default function FindPage() {
  const [products, setProducts] = useState<productsPropsWithReviews | null>(null)
  const [user, setUser] = useState<{ user: User } | { user: null }>({ user: null })
  const [wishList, setwishList] = useState<WihsListProps>(null)
  const supabase = createClientComponentClient<Database>()
  const SearchParams = useSearchParams()
  const sport = SearchParams.get('sport')
  const type = SearchParams.get('type')
  const price = SearchParams.get('price')

  useEffect(() => {
    const newProduct = type === 'new'
    const SaleProduct = type === 'sale' ? 0 : 1000
    const getProducts = async () => {
      const { data } = await supabase.from('products')
        .select('*, reviews(*)')
        .contains('sports', [sport])
        .eq('equipment_type', 'gloves')
        .eq('new', newProduct)
        .gt('price', price)
        .gt('sale', SaleProduct)
      setProducts(data)
    }
    getProducts()
  }, [])

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser()
      setUser(data)
    }
    getUser()
  }, [])

  useEffect(() => {
    const getWishList = async () => {
      const { data } = await supabase.from('wishlist').select()
      setwishList(data)
    }
    getWishList()
  }, [])

  if (products !== null && user.user !== null && wishList !== null) {
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
              <ProductsCard key={item.id} item={item} score={score} user={user.user} wishListData={wishList} />
            )
          })}
        </div>
      </section>
    )
  }
}
