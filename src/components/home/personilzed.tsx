'use client'
import useStore from '@/store/store'
import CarrouselProductsCard from '../shared/carrousel-products-card'

const Personilzed = () => {
  const { recentlyViewed } = useStore()

  if (recentlyViewed.length >= 4) {
    return (
      <section className='p-5 md:p-10 flex justify-between items-center flex-col w-full'>
        <h3 className='uppercase font-bold text-2xl'>Recently Viewed</h3>
        <div className='flex flex-col sm:flex-row gap-5 w-full md:w-4/5 justify-between p-5'>
          {recentlyViewed.reverse().slice(0, 4).map((item) => {
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
