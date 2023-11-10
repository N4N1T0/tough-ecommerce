'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

interface Props {
  userId: string | undefined
  productId: number
  wishlist: Array<{
    created_at: string
    id: number
    product_id: number
    user_id: string
  }> | null
  heart?: boolean
}

const WhishListButton = ({ userId, productId, wishlist, heart = false }: Props) => {
  const supabse = createClientComponentClient<Database>()
  const router = useRouter()

  const insertItemInWishList = async (userId: string, productId: number) => {
    if ((wishlist?.some(item => item.product_id === productId)) ?? false) {
      await supabse.from('wishlist').delete().eq('product_id', productId)
    } else {
      await supabse.from('wishlist').insert({ user_id: userId, product_id: productId })
    }

    router.refresh()
  }

  if (heart) {
    return (
      <button
        onClick={async () => {
          await insertItemInWishList(userId!, productId)
        }}
        className={((wishlist?.some(item => item.product_id === productId)) ?? false) ? 'text-red-700' : 'text-gray-800'}
      >
        &#10084;
      </button>
    )
  } else {
    return (
      <button onClick={async () => {
        await insertItemInWishList(userId!, productId)
      }} className='bg-black text-white uppercase px-3 py-1 md:px-4 md:text-base hover:bg-white hover:text-black transition-colors duration-200 font-bold text-sm'>add to Wishlist</button>
    )
  }
}

export default WhishListButton
