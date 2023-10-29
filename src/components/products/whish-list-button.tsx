'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface Props {
  userId: string | undefined
  productId: number
  wishlist: Array<{
    created_at: string
    id: number
    product_id: number
    user_id: string | null
  }> | null
}

const WhishListButton = ({ userId, productId, wishlist }: Props) => {
  const [user, setUser] = useState<string | undefined>(undefined)
  const supabse = createClientComponentClient<Database>()
  const router = useRouter()

  useEffect(() => {
    const getUserId = async () => {
      const { data: { user } } = await supabse.auth.getUser()
      setUser(user?.id)
    }

    getUserId()
  }, [])

  const insertItemInWishList = async (userId: string | undefined, productId: number) => {
    if ((wishlist?.some(item => item.product_id === productId)) ?? false) {
      await supabse.from('wishlist').delete().eq('product_id', productId)
    } else {
      await supabse.from('wishlist').insert({ user_id: userId, product_id: productId })
    }

    router.refresh()
  }

  if (user === null) {
    <div>Login First</div>
  }

  return (
    <button
      onClick={async () => {
        await insertItemInWishList(userId, productId)
      }}
      className={((wishlist?.some(item => item.product_id === productId)) ?? false) ? 'text-red-700' : 'text-gray-800'}
    >
      &#10084;
    </button>
  )
}

export default WhishListButton
