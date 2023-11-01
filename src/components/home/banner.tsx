// Next.js Imports
import Image from 'next/image'
import Link from 'next/link'

// Assets Imports
import BannerDesktop from '@/assets/Desktop_banner.png'
import BannerMobile from '@/assets/Mobile_banner.png'

const Banner = () => {
  return (
    <section className='w-full flex justify-end items-center bg-black relative' id='banner'>
      <Image src={BannerDesktop} alt='App Tough Fitness Banner Desktop version' className='hidden sm:block' />
      <Image src={BannerMobile} alt='App Tough Fitness Banner Mobile version' className='block sm:hidden' />
      <Link href='/' className='bg-white absolute py-1 md:py-2 px-3 md:px-5 text-black font-bold md:bottom-10 bottom-5 right-1/2 translate-x-1/4 md:translate-x-1/2 md:text-xl text-xs hover:bg-black hover:text-white transition-colors duration-200'>
        GET TOUGH FITNESS APP
      </Link>
    </section>
  )
}

export default Banner
