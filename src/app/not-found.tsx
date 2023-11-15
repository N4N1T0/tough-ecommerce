// Next.js Imports
import Link from 'next/link'

// Components Imports
import NewArrivals from '@/components/shared/new-arrivals'

function notFound() {
  return (
    <main className='w-full pt-40 flex flex-col justify-center items-center gap-3 text-center overflow-x-hidden'>
      <h1 className='font-bold md:text-9xl text-5xl'>We are Sorry!</h1>
      <h2 className='text-lg font-semibold'> The page you are looking for cannot be found.</h2>
      <small>We did find a couple of popular items that you can browse through before you retype the url.</small>
      <p>Or follow this link to get you back on track:</p>
      <div className='flex flex-col md:flex-row md:gap-5 gap-2'>
        <Link href='/products/sale/all' className='bg-black text-white uppercase px-3 py-1 md:px-4 md:text-base hover:bg-white hover:text-black transition-colors duration-200 font-bold text-sm'>Sales</Link>
        <Link href='/products/boxing/gloves' className='bg-black text-white uppercase px-3 py-1 md:px-4 md:text-base hover:bg-white hover:text-black transition-colors duration-200 font-bold text-sm'>Gloves</Link>
        <Link href='/products/fashion/all' className='bg-black text-white uppercase px-3 py-1 md:px-4 md:text-base hover:bg-white hover:text-black transition-colors duration-200 font-bold text-sm'>Fashion</Link>
      </div>
      <div className='pt-10'>
        <NewArrivals title='Recommended For You' />
      </div>
    </main>
  )
}

export default notFound
