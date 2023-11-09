// Next.js Imports
import { cookies } from 'next/headers'

// Components Imports
import ProductsLayout from '@/components/products/layout'
import CategoriesMobileSheet from '@/components/products/categories-mobile-sheet'

// Supabse Imports
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import ProductsCard from '@/components/shared/products-card'

export default async function SalePage({ params }: { params: { subCategories: string } }) {
  // Supabse CLient
  const supabase = createServerComponentClient<Database>({ cookies })

  // User for the id
  const { data: { user } } = await supabase.auth.getUser()

  // fetching the Whislist
  const { data: wishListData } = await supabase.from('wishlist').select()

  // fetching products
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  const { data: products } = await supabase.from('products').select('*, wishlist(*), reviews(*)').gt('sale', 0)

  return (
    <ProductsLayout subCategory={params.subCategories} category='sale'>
      <section>
        <div className='flex justify-between items-center'>
          <h1 className='uppercase font-semibold text-lg md:text-2xl'>{params.subCategories === 'all' ? 'All Products' : params.subCategories}  <span className='text-xs md:text-sm font-normal lowercase'>({products?.length} Products)</span></h1>
          <CategoriesMobileSheet category='sale' subCategory={params.subCategories} />
        </div>
        <div className='w-full grid grid-cols-2 md:grid-cols-3 grid-rows-1 gap-5 py-5'>
          {products?.map((item, idx) => {
            const score = item.reviews.map(item => item.score).reduce((acc, current) => acc + current, 0)
            return (
              <ProductsCard key={item.id} item={item} score={score} user={user} wishListData={wishListData} />
            )
          })}
        </div>
      </section>
    </ProductsLayout>
  )
}
