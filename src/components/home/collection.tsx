// Next.js Imports
import Image from 'next/image'

// Assets Imports
import Powerlock from '@/assets/Powerlock-collection.jpg'
import Titan from '@/assets/Titan-collection.jpg'
import Link from 'next/link'

const Collection = () => {
  return (
    <section id='collection' className='flex flex-col md:flex-row px-5 py-10 gap-5 items-center justify-between'>
      {/* PowerLock Collection */}
      <div className='space-y-2'>
        <Link href='/products/collection/Powerlock'>
          <Image placeholder='blur' src={Powerlock} alt='PowerLock Collection picture' width={890} height={708} />
        </Link>
        <h2 className='font-bold text-2xl uppercase font-kashua pt-1'>Powerlock Collection</h2>
        <hr className='w-full h-[1px] border-none bg-border' />
        <div className='flex justify-between items-center w-full'>
          <p>Superior Comfort and Style, reinforced with kevlar</p>
          <Link href='/products/collection/Powerlock' className='bg-black text-white px-5 py-2 hover:bg-white hover:text-black transition-colors duration-200 text-xs md:text-md'>Shop Now</Link>
        </div>
      </div>
      {/* Titan Collection */}
      <div className='space-y-2'>
        <Link href='/products/collection/Titan'>
          <Image placeholder='blur' src={Titan} alt='Titan Collection picture' width={890} height={708} />
        </Link>
        <h2 className='font-bold text-2xl uppercase font-kashua pt-1'>Titan Collection</h2>
        <hr className='w-full h-[1px] border-none bg-border' />
        <div className='flex justify-between items-center w-full'>
          <p>Power and Precision, aerodynamic cut with inward stiches</p>
          <Link href='/products/collection/Titan' className='bg-black text-white px-5 py-2 hover:bg-white hover:text-black transition-colors duration-200 text-xs md:text-md'>Shop Now</Link>
        </div>
      </div>
    </section>
  )
}

export default Collection
