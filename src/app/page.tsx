import Hero from '@/components/home/hero'
import Collection from '@/components/home/collection'
import NewArrivals from '@/components/shared/new-arrivals'
import Equipment from '@/components/home/equipment'
import Personilzed from '@/components/home/personilzed'
import Banner from '@/components/home/banner'

export default function Home() {
  return (
    <main className='overflow-x-hidden space-y-5'>
      <Hero />
      <Collection />
      <NewArrivals title='New Arrivals' />
      <Equipment />
      <Personilzed />
      <Banner />
    </main>
  )
}
