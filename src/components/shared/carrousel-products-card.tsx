import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import RatingClient from './rating-client'

interface Props {
  item: productsPropsWithReviewsNoArray
  score: number
}

function CarrouselProductsCard({ item, score }: Props) {
  return (
    <Link href={`/products/item/${item.id}`} className='col-span-1 space-y-2 gap-5' key={item.id}>
      <Image src={item.image} alt={item.name} width={250} height={250} placeholder='blur' blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8+R8AApcByuTu2nIAAAAASUVORK5CYII' />
      <p className='font-semibold uppercase text-sm'>{item.name}</p>
      <p>{item.price}</p>
      <div className='flex justify-between items-center'>
        <RatingClient score={score} size={15} />
        <small>{item.reviews.length} Reviews</small>
      </div>
    </Link>
  )
}

export default CarrouselProductsCard
