// Next.js Imports
import { cookies } from 'next/headers'

// Supbase Imports
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

// Components Imports
import AddToCartBtn from '../products/add-to-cart-btn'
import CompleteSet from './complete-set'
import WhishListButton from '../products/whish-list-button'

// Props Type
interface ItemsBtnProps {
  itemInfo: productsPropsWithReviewsNoArray
  collection: string | null
}

const ItemsBtn = async ({ collection, itemInfo }: ItemsBtnProps) => {
  // Supabase Client
  const supabase = createServerComponentClient<Database>({ cookies })

  // Data fetching from Supabse
  const { data: { user } } = await supabase.auth.getUser()
  const { data: wishListData } = await supabase.from('wishlist').select()

  return (
    <div className='py-3 flex flex-row justify-between items-center gap-2'>
      <AddToCartBtn product={itemInfo} />
      <WhishListButton userId={user?.id} productId={itemInfo.id} wishlist={wishListData} />
      <CompleteSet collection={collection} itemName={itemInfo.name} />
    </div>
  )
}

export default ItemsBtn
