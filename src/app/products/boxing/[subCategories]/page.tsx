// Next.js Imports
import { cookies } from 'next/headers'

// Components Imports
import ProductsLayout from '@/components/products/layout'
import CategoriesMobileSheet from '@/components/products/categories-mobile-sheet'
import ProductsCard from '@/components/shared/products-card'

// Supabse Imports
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

export default async function BoxingPage({ params }: { params: { subCategories: string } }) {
  // Supabse CLient
  const supabase = createServerComponentClient<Database>({ cookies })

  // User for the id
  const { data: { user } } = await supabase.auth.getUser()

  // initializing the products array
  let products: productsPropsWithReviews = []

  // fetching the Whislist
  const { data: wishListData } = await supabase.from('wishlist').select()

  // Conditionally fetching the products acording to the subCategory
  if (params.subCategories === 'all') {
    const { data } = await supabase.from('products').select('*, reviews(*)').contains('sports', ['boxing'])
    products = data as productsPropsWithReviews
  } else if (params.subCategories === 'others') {
    const { data } = await supabase.from('products').select('*, reviews(*)').contains('sports', ['boxing']).or('equipment_type.in.(cup,bag,mouthguard,jumprope,gadget,headgear)')
    products = data as productsPropsWithReviews
  } else {
    const { data } = await supabase.from('products').select('*, reviews(*)').contains('sports', ['boxing']).eq('equipment_type', params.subCategories)
    products = data as productsPropsWithReviews
  }

  return (
    <ProductsLayout subCategory={params.subCategories} category='boxing'>
      <section>
        <div className='flex justify-between items-center'>
          <h1 className='uppercase font-semibold text-lg md:text-2xl'>{params.subCategories === 'all' ? 'All Products' : params.subCategories}  <span className='text-xs md:text-sm font-normal lowercase'>({products?.length} Products)</span></h1>
          <CategoriesMobileSheet category='boxing' subCategory={params.subCategories} />
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
