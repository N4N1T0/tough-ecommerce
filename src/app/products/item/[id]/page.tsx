// Next.js Imports
import Image from 'next/image'
import { cookies } from 'next/headers'

// Components Imports
import NewArrivals from '@/components/shared/new-arrivals'
import AddToRecentlyViewed from '@/components/item/add-to-recently-viewed'
import ItemLayout from '@/components/item/layout'
import Personilzed from '@/components/home/personilzed'
import Reviews from '@/components/item/rewiews'

// Supabase Imports
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

export default async function ItemPage({ params }: { params: { id: string } }) {
  // Supbase constant and fetch
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data, error } = await supabase.from('products').select('*, reviews(*)').eq('id', params.id)

  // Returning if there is an Error
  if (error !== null) {
    return <h1>{error.message}</h1>
  }

  // Score for the Rating
  const score = data[0].reviews.map(item => item.score).reduce((acc, current) => acc + current, 0)

  return (
    <main className='space-y-5'>
      <ItemLayout itemInfo={data[0]} score={score}>
        <Image src={data[0].image} alt={data[0].name} width={1000} height={1000} priority placeholder='blur' blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8+R8AApcByuTu2nIAAAAASUVORK5CYII' />
      </ItemLayout>
      <Reviews review={data[0].reviews} productId={data[0].id} />
      <NewArrivals title='You may also like' sport={data[0].sports[0]} />
      <Personilzed />
      <AddToRecentlyViewed product={data[0]} />
    </main>
  )
}
