'use client'

// Zustand Imports
import useStore from '@/store/store'
import useStoreCart from '@/store/useStore'

// Components Imports
import CarrouselProductsCard from '../shared/carrousel-products-card'

const Personilzed = () => {
  // prodcust from the store RECENTLY ADDED
  const recentlyViewed = useStoreCart(useStore, (state) => state.recentlyViewed)

  // if theres more or iqual to 5 products show
  if (recentlyViewed !== undefined && recentlyViewed.length >= 5) {
    return (
      <section className='p-5 md:p-10 flex justify-between items-center flex-col w-full'>
        <h3 className='uppercase font-bold text-2xl'>Recently Viewed</h3>
        <div className='flex snap-x snap-mandatory items-center gap-3 overflow-auto pb-3 lg:gap-5 w-full px-5 md:justify-center'>
          {recentlyViewed.reverse().slice(0, 5).map((item) => {
            const score = item.reviews.map((item) => item.score).reduce((acc, current) => acc + current, 0)
            return (
              <CarrouselProductsCard key={item.id} item={item} score={score} />
            )
          })}
        </div>
      </section>
    )
  } else {
    return (
      <></>
    )
  }
}

export default Personilzed
