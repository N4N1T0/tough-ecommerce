// Next.js Import
import { cookies } from 'next/headers'

// Supabase Imports
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

// Components Import
import CarrouselProductsCard from './carrousel-products-card'

const NewArrivals = async ({ title, sport }: { title: string, sport?: string | undefined }) => {
  // Supbase server component initialized
  const supabase = createServerComponentClient<Database>({ cookies })
  // initializing the products array
  let products: productsPropsWithReviews = []

  // just the new ones in case there is no sport
  if (sport === undefined) {
    const { data } = await supabase.from('products').select('*, reviews(*)').eq('new', true)
    products = data as productsPropsWithReviews
  }

  // sport for the categories pages
  if (typeof sport === 'string') {
    const { data } = await supabase.from('products').select('*, reviews(*)').contains('sports', [sport])
    products = data as productsPropsWithReviews
  }

  return (
    <section className='flex justify-between items-center flex-col w-full gap-3'>
      <h3 className='uppercase font-bold text-2xl'>{title}</h3>
      <div className='flex snap-x snap-mandatory items-center gap-3 overflow-auto pb-3 lg:gap-5 w-full px-5 md:justify-center'>
        {products.slice(0, 5).map((item) => {
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
