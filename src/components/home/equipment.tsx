// Next.js Imports
import Image from 'next/image'
import Link from 'next/link'

// Assets Imports
import Pads from '@/assets/Pads.jpg'
import Handwraps from '@/assets/Handwraps.jpg'
import Headgear from '@/assets/Headgear.jpg'

const Equipment = () => {
  return (
    <section id='collection' className='flex flex-col md:flex-row px-5 py-10 gap-5 items-center justify-between'>
      {/* Pads Card */}
      <div className='space-y-2'>
        <Link href='/products/boxing/pads'>
          <Image placeholder='blur' src={Pads} alt='PowerLock Collection picture' width={890} height={708} />
        </Link>
        <h2 className='font-bold text-2xl uppercase font-kashua pt-1'>Shop Pads and Paddles</h2>
        <hr className='w-full h-[1px] border-none bg-border' />
        <div className='flex justify-between items-center w-full'>
          <p>Build, Impact & Endarence</p>
          <Link href='/products/boxing/pads' className='bg-black text-white px-5 py-2 hover:bg-white hover:text-black transition-colors duration-200 text-xs md:text-md'>Shop Now</Link>
        </div>
      </div>
      {/* Handwraps Card */}
      <div className='space-y-2'>
        <Link href='/products/boxing/handwraps'>
          <Image placeholder='blur' src={Handwraps} alt='Titan Collection picture' width={890} height={708} />
        </Link>
        <h2 className='font-bold text-2xl uppercase font-kashua pt-1'>Shop Hand Wraps</h2>
        <hr className='w-full h-[1px] border-none bg-border' />
        <div className='flex justify-between items-center w-full'>
          <p>Firm Grip, Wrapped Tight</p>
          <Link href='/products/boxing/handwraps' className='bg-black text-white px-5 py-2 hover:bg-white hover:text-black transition-colors duration-200 text-xs md:text-md'>Shop Now</Link>
        </div>
      </div>
      {/* Headgear Card */}
      <div className='space-y-2'>
        <Link href='/products/boxing/headgear'>
          <Image placeholder='blur' src={Headgear} alt='Titan Collection picture' width={890} height={708} />
        </Link>
        <h2 className='font-bold text-2xl uppercase font-kashua pt-1'>Shop Head Gear</h2>
        <hr className='w-full h-[1px] border-none bg-border' />
        <div className='flex justify-between items-center w-full'>
          <p>Protection, Comfort & style</p>
          <Link href='/products/boxing/headgear' className='bg-black text-white px-5 py-2 hover:bg-white hover:text-black transition-colors duration-200 text-xs md:text-md'>Shop Now</Link>
        </div>
      </div>
    </section>
  )
}

export default Equipment
