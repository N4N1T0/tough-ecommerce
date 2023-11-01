import Hero from '@/components/home/hero'
import Collection from '@/components/home/collection'
import NewArrivals from '@/components/home/new-arrivals'
import Equipment from '@/components/home/equipment'
import Personilzed from '@/components/home/personilzed'
import Banner from '@/components/home/banner'

export default function Home() {
  return (
    <main>
      <Hero />
      <Collection />
      <NewArrivals />
      <Equipment />
      <Personilzed />
      <Banner />
    </main>
  )
}
