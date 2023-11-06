import NewArrivals from '@/components/home/new-arrivals'
import AddToRecentlyViewed from '@/components/item/add-to-recently-viewed'
import ItemLayout from '@/components/item/layout'
import Reviews from '@/components/item/rewiews'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Image from 'next/image'

export default async function ItemPage({ params }: { params: { id: string } }) {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data, error } = await supabase.from('products').select('*, reviews(*)').eq('id', params.id)

  if (error !== null) {
    return <h1>{error.message}</h1>
  }

  const score = data[0].reviews.map(item => item.score).reduce((acc, current) => acc + current, 0)

  return (
    <main>
      <ItemLayout itemInfo={data[0]} score={score}>
        <Image src={data[0].image} alt={data[0].name} width={1000} height={1000} priority />
      </ItemLayout>
      <Reviews review={data[0].reviews} productId={data[0].id} />
      <NewArrivals title='You may also like' sport={data[0].sports[0]} />
      <AddToRecentlyViewed product={data[0]} />
    </main>
  )
}
