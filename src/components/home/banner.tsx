// Next.js Imports
import Image from 'next/image'
import Link from 'next/link'

// Assets Imports
import BannerDesktop from '@/assets/Desktop_banner.png'
import BannerMobile from '@/assets/Mobile_banner.png'

const Banner = () => {
  return (
    <section className='w-full flex justify-end items-center bg-black' id='banner'>
      <Link href='/'>
        <Image src={BannerDesktop} alt='App Tough Fitness Banner Desktop version' className='hidden sm:block' />
        <Image src={BannerMobile} alt='App Tough Fitness Banner Mobile version' className='block sm:hidden' />
      </Link>
    </section>
  )
}

export default Banner
