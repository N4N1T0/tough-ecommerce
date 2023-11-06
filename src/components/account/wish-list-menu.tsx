'use client'

import useStore from '@/store/store'
import { useRouter } from 'next/navigation'

interface Props {
  wishlist?: Array<{
    created_at: string
    id: number
    product_id: number
    user_id: string | null
    products: {
      collection: string | null
      created_at: string
      description: string
      equipment_type: string
      id: number
      image: string
      name: string
      new: boolean
      price: number
      sale: number | null
      sports: string[] | null
    } | null
  }> | null
}

const WishListMenu = ({ wishlist }: Props) => {
  const { addAllToCart } = useStore()
  const router = useRouter()
  const products = wishlist?.map((item) => (item.products))

  if (products !== undefined) {
    return (
      <div className='flex w-full justify-start items-start gap-3'>
        <button onClick={() => { addAllToCart(products) }} className='uppercase bg-black text-white px-3 py-2 hover:bg-white hover:text-black transition-colors duration-200'>add all to cart</button>
        <button onClick={() => { router.refresh() }} className='uppercase bg-black text-white px-3 py-2 hover:bg-white hover:text-black transition-colors duration-200'>Update the List</button>
        <button className='uppercase bg-black text-white px-3 py-2 hover:bg-white hover:text-black transition-colors duration-200'>Share the List</button>
      </div>
    )
  }
}

export default WishListMenu
