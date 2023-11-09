'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import GloveFinder from '@/assets/glovefinder-screen.jpg'

export default function GloveFinderPage() {
  const [slide, setSlide] = useState(0)
  const [productsType, setProductsType] = useState({
    sport: '',
    type: ''
  })

  const handleSLide = (slide: number, productType: keyof typeof productsType, setProduct: string) => {
    setSlide(slide)
    setProductsType({
      ...productsType,
      [productType]: setProduct
    })
  }

  return (
    <main>
      {slide === 0 &&
        <section className='relative'>
          <video autoPlay muted loop className='w-full h-full hidden md:block'>
            <source src='https://www.everlast.com/media/wysiwyg/glove_finder_video.mp4' type='video/mp4'></source>
          </video>
          <Image src={GloveFinder} alt='Glove Finder Page Banner' className='block md:hidden pt-28' />
          <div className='absolute top-1/2 left-1/2 text-white -translate-x-1/2 md:-translate-y-1/2 -translate-y-1/3 text-center space-y-5'>
            <h1 className='text-7xl md:text-9xl font-extrabold'>GLOVE FINDER</h1>
            <h2 className='text-xl md:text-2xl leading-8'>Don’t know where to start? Overwhelmed with options? We got you. Answer a few questions and we’ll get you to the perfect glove.</h2>
            <button onClick={() => { setSlide(1) }} className='p-5 font-bold border-white border-2 inline-block text-2xl hover:bg-white hover:text-black transition-colors duration-200'>GO</button>
          </div>
        </section >
      }

      {slide === 1 &&
        <section className='w-full flex flex-col md:flex-row pt-40 px-10 gap-10' id='sport'>
          <div className='flex-1 text-2xl md:text-5xl font-bold'>
            1. WHICH SPORT ARE YOUR GLOVES FOR?
          </div>
          <div className='flex-1 text-4xl md:text-9xl font-bold [&>button]:block py-10 space-y-5 md:space-y-10'>
            <button className='hover:text-gray-900 transition-colors duration-200' onClick={() => { handleSLide(2, 'sport', 'boxing') }}>BOXING</button>
            <button className='hover:text-gray-900 transition-colors duration-200' onClick={() => { handleSLide(2, 'sport', 'mma') }}>MMA</button>
          </div>
        </section>}

      {slide === 2 &&
        <section className='w-full flex flex-col md:flex-row pt-40 px-10 gap-10' id='type' >
          <div className='flex-1 text-2xl md:text-5xl font-bold'>
            2. IN SALE OR NEW GLOVES FROM OUR STORE?
          </div>
          <div className='flex-1 text-4xl md:text-9xl font-bold [&>button]:block py-10 space-y-5 md:space-y-10'>
            <button className='hover:text-gray-900 transition-colors duration-200' onClick={() => { handleSLide(3, 'type', 'sale') }}>SALE</button>
            <button className='hover:text-gray-900 transition-colors duration-200' onClick={() => { handleSLide(3, 'type', 'new') }}>NEW</button>
          </div>
        </section>}

      {slide === 3 &&
        <section className='w-full flex flex-col md:flex-row pt-40 px-10 gap-10' id='price' >
          <div className='flex-1 text-2xl md:text-5xl font-bold'>
            2. PRICE RANGE OF THE GLOVES?
          </div>
          <div className='flex-1 text-4xl md:text-9xl font-bold [&>a]:block py-10 space-y-5 md:space-y-10'>
            <Link href={`/products/find?sport=${productsType.sport}&type=${productsType.type}&price=20`} className='hover:text-gray-900 transition-colors duration-200' >OVER 20</Link>
            <Link href={`/products/find?sport=${productsType.sport}&type=${productsType.type}&price=50`} className='hover:text-gray-900 transition-colors duration-200' >OVER 50</Link>
          </div>
        </section>}
    </main >
  )
}
