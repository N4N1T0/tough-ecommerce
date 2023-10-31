import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import WishListCard from '@/components/account/wish-list-card'
import WishListMenu from '@/components/account/wish-list-menu'

export default async function WhishlistPage() {
  const supabse = createServerComponentClient<Database>({ cookies })
  const { data, error } = await supabse.from('wishlist').select('*, products(*)')

  if (error !== null) {
    return (
      <h1>{error.message}</h1>
    )
  }

  return (
    <section className='space-y-10'>
      <div className='flex justify-between items-center'>
        <h1 className='font-bold text-xl uppercase mb-5'>My Wish List</h1>
        <p>{data.length} Items</p>
      </div>
      <hr className='border-0 h-[1px] bg-border w-full' />
      {data.length === 0 && <div className='w-full bg-border text-white p-5'><p>You dont have any itmes in the Wishlist</p></div>}
      <div className='w-full gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {data.map((item) => (
          <WishListCard key={item.id} item={item} />
        ))}
      </div>
      <hr className='border-0 h-[1px] bg-border w-full' />
      {data.length !== 0 && <WishListMenu wishlist={data} />}
    </section>
  )
}
