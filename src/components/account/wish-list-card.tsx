'use client'

import Image from 'next/image'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

interface Props {
  item: {
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
  }
}

const WishListCard = ({ item }: Props) => {
  const supabse = createClientComponentClient<Database>()
  const router = useRouter()

  const removeFromWishList = async () => {
    await supabse.from('wishlist').delete().eq('id', item.id)
    router.refresh()
  }

  return (
    <div key={item.id} className='w-fit flex flex-col justify-start items-center gap-2 border border-border p-4 relative'>
      {item.products?.image !== undefined && item.products?.name !== undefined && (
        <>
          <Image src={item?.products?.image} alt={item?.products?.name} width={200} height={200} />
          <p className='uppercase font-semibold'>{item.products.name}</p>
          {item.products.sale !== null ? <p>{item.products.sale}</p> : <p>{item.products.price}</p>}
          <button className='uppercase bg-black text-white px-3 py-2 hover:bg-white hover:text-black transition-colors duration-200'>add to cart</button>
          <button onClick={async () => {
            await removeFromWishList()
          }} className='absolute top-3 right-3 hover:text-gray-500 transition-colors duration-200'>X</button>
        </>
      )}
    </div>
  )
}

export default WishListCard
