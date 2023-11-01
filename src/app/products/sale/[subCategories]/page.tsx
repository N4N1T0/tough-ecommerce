// Next.js Imports
import Image from 'next/image'
import Link from 'next/link'
import { cookies } from 'next/headers'

// Components Imports
import ProductsLayout from '@/components/products/layout'
import WhishListButton from '@/components/products/whish-list-button'

// Supabse Imports
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import CategoriesMobileSheet from '@/components/products/categories-mobile-sheet'

export default async function SalePage({ params }: { params: { subCategories: string } }) {
  // Supabse CLient
  const supabase = createServerComponentClient<Database>({ cookies })

  // User for the id
  const { data: { user } } = await supabase.auth.getUser()

  // fetching the Whislist
  const { data: wishListData } = await supabase.from('wishlist').select()

  // fetching products
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  const { data: products } = await supabase.from('products').select('*, wishlist(*)').gt('sale', 0)

  return (
    <ProductsLayout subCategory={params.subCategories} category='sale'>
      <section>
        <div className='flex justify-between items-center'>
          <h1 className='uppercase font-semibold text-lg md:text-2xl'>{params.subCategories === 'all' ? 'All Products' : params.subCategories}  <span className='text-xs md:text-sm font-normal lowercase'>({products?.length} Products)</span></h1>
          <CategoriesMobileSheet category='sale' subCategory={params.subCategories} />
        </div>
        <div className='w-full grid grid-cols-2 md:grid-cols-3 grid-rows-1 gap-5 py-5'>
          {products?.map((item, idx) => (
            <div key={item.id} className='border p-2 col-span-1 border-border space-y-2'>
              <Image src={item.image} alt={item.name} width={350} height={400} />
              <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-3'>
                <h2 className='font-semibold text-sm md:text-base'>{item.name}</h2>
                <div>
                  {[...Array(5)].map((star, staridx) => {
                    return (
                      <span key={`Rating-${item.name}-${idx}-${staridx}`} className='text-gray-400 text-xl'>&#9733;</span>
                    )
                  })}
                </div>
              </div>
              <div className='flex justify-between items-center'>
                {item.sale !== null ? <div className='text-xl'><span className='line-through text-gray-400'>{item.price} </span> ${item.sale}</div> : <div className='text-xl'>{item.price}</div>}
                {item.new && <Link href='/products/new' className='uppercase px-2 py-1 bg-gray-400 w-fit hover:bg-white transition-colors duration-200'>New</Link>}
                {item.sale !== null && <Link href='/products/sale' className='uppercase px-2 py-1 bg-gray-400 w-fit hover:bg-white transition-colors duration-200'>Sale</Link>}
              </div>
              <hr className='bg-border/60 h-[1px] border-0' />
              <div className='flex justify-between items-center'>
                <button className='bg-black text-white uppercase px-3 py-1 hover:bg-white hover:text-black transition-colors duration-200 font-bold text-sm'>add to cart</button>
                <WhishListButton userId={user?.id} productId={item.id} wishlist={wishListData} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </ProductsLayout>
  )
}
