import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import RatingClient from './rating-client'
import AddToCartBtn from '../products/add-to-cart-btn'
import WhishListButton from '../products/whish-list-button'
import { type User } from '@supabase/supabase-js'

interface Props {
  item: productsPropsWithReviewsNoArray
  score: number
  user: User | null
  wishListData: Array<{
    created_at: string
    id: number
    product_id: number
    user_id: string
  }> | null
}

function ProductsCard({ item, score, user, wishListData }: Props) {
  return (
    <div key={item.id} className='border p-2 col-span-1 border-border space-y-2'>
      <Link href={`/products/item/${item.id}`}>
        <Image src={item.image} alt={item.name} width={350} height={400} placeholder='blur' blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8+R8AApcByuTu2nIAAAAASUVORK5CYII' />
      </Link>
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-3'>
        <Link href={`/products/item/${item.id}`} className='font-semibold text-sm md:text-base hover:text-gray-700 hover:underline transition-all duration-100'>{item.name}</Link>
        <div>
          <RatingClient score={score} size={15} />
        </div>
      </div>
      <div className='flex justify-between items-center'>
        {item.sale !== null ? <div className='text-xl'><span className='line-through text-gray-400'>{item.price} </span> ${item.sale}</div> : <div className='text-xl'>{item.price}</div>}
        {(Boolean(item.new)) && <Link href='/products/new' className='uppercase px-2 py-1 bg-gray-400 w-fit hover:bg-white transition-colors duration-200'>New</Link>}
        {item.sale !== null && <Link href='/products/sale' className='uppercase px-2 py-1 bg-gray-400 w-fit hover:bg-white transition-colors duration-200'>Sale</Link>}
      </div>
      <hr className='bg-border/60 h-[1px] border-0' />
      <div className='flex justify-between items-center'>
        <AddToCartBtn product={item} />
        <WhishListButton userId={user?.id} productId={item.id} wishlist={wishListData} heart />
      </div>
    </div>
  )
}

export default ProductsCard
