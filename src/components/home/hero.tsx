// Next.js Imports
import Image from 'next/image'
import Link from 'next/link'

// Assets Imports
import HeroDesktop from '@/assets/ELITE2-SHOES-Desktop.webp'
import HeroMobile from '@/assets/ELITE2-SHOES-Mobile.webp'

function Hero() {
  return (
    <section className='relative w-fit h-fit' id='hero'>
      <Image src={HeroDesktop} alt='Elite boxing shoes 2 Desktop version' className='hidden sm:block' />
      <Image src={HeroMobile} alt='Elite boxing shoes 2 Mobile version' className='block sm:hidden' />
      <Link href='/boxing/elite-shoes-2' className='bg-black absolute py-2 px-5 text-white font-bold md:right-20 bottom-10 right-1/2 translate-x-1/2 md:translate-x-0 text-xl hover:bg-white hover:text-black transition-colors duration-200'>
        SHOP NEW ELITE 2 SHOES
      </Link>
    </section>
  )
}

export default Hero
