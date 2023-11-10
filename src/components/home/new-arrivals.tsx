// Next.js Import
import { cookies } from 'next/headers'

// Supabase Imports
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

// Components Import
import CarrouselProductsCard from '../shared/carrousel-products-card'

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
            <CarrouselProductsCard key={item.id} item={item} score={score} />
          )
        })}
      </div>
    </section>
  )
}

export default NewArrivals
