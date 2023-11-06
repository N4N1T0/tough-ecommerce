// Next.js Import
import { cookies } from 'next/headers'
import Link from 'next/link'
import Image from 'next/image'

// Supabase Imports
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

// Components Import
import RatingClient from '../shared/rating-client'

const NewArrivals = async ({ title, sport }: { title: string, sport?: string | undefined }) => {
  const supabase = createServerComponentClient<Database>({ cookies })
  // initializing the products array
  let products: productsPropsWithReviews = []

  if (sport === undefined) {
    const { data } = await supabase.from('products').select('*, reviews(*)').eq('new', true)
    products = data as productsPropsWithReviews
  }

  if (typeof sport === 'string') {
    const { data } = await supabase.from('products').select('*, reviews(*)').contains('sports', [sport])
    products = data as productsPropsWithReviews
  }

  return (
    <section className='p-5 md:p-10 flex justify-between items-center flex-col w-full'>
      <h3 className='uppercase font-bold text-2xl'>{title}</h3>
      <div className='flex flex-col sm:flex-row gap-5 w-full md:w-4/5 justify-between p-5'>
        {products.slice(0, 4).map((item) => {
          const score = item.reviews.map((item) => item.score).reduce((acc, current) => acc + current, 0)
          return (
            <Link href={`/products/item/${item.id}`} className='col-span-1 space-y-2 gap-5' key={item.id}>
              <Image src={item.image} alt={item.name} width={250} height={250} />
              <p className='font-semibold uppercase text-sm'>{item.name}</p>
              <p>{item.price}</p>
              <div className='flex justify-between items-center'>
                <RatingClient score={score} size={15} />
                <small>{item.reviews.length} Reviews</small>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default NewArrivals
