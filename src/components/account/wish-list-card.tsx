'use client'

// Next.js Imports
import Image from 'next/image'
import { useRouter } from 'next/navigation'

// Supabase Imports
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

// Props Types
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
  // Supbase Client and Router fro reffreshing
  const supabse = createClientComponentClient<Database>()
  const router = useRouter()

  // Const for removing the product from the list
  const removeFromWishList = async () => {
    await supabse.from('wishlist').delete().eq('id', item.id)
    router.refresh()
  }

  return (
    <div className='flex flex-col justify-start items-center gap-2 border border-border p-4 relative col-span-1'>
      {item.products?.image !== undefined && item.products?.name !== undefined && (
        <>
          <Image src={item?.products?.image} alt={item?.products?.name} width={200} height={200} placeholder='blur' blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8+R8AApcByuTu2nIAAAAASUVORK5CYII' />
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
