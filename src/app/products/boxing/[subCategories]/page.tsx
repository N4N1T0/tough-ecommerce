// Next.js Imports
import Image from 'next/image'
import Link from 'next/link'
import { cookies } from 'next/headers'

// Components Imports
import ProductsLayout from '@/components/products/layout'
import WhishListButton from '@/components/products/whish-list-button'
import RatingClient from '@/components/shared/rating-client'
import CategoriesMobileSheet from '@/components/products/categories-mobile-sheet'
import AddToCartBtn from '@/components/products/add-to-cart-btn'

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
                  <WhishListButton userId={user?.id} productId={item.id} wishlist={wishListData} heart />
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </ProductsLayout>
  )
}
