import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import AddToCartBtn from '../products/add-to-cart-btn'
import CompleteSet from './complete-set'
import { cookies } from 'next/headers'
import WhishListButton from '../products/whish-list-button'

interface ItemsBtnProps {
  itemInfo: productsPropsWithReviewsNoArray
  collection: string | null
}

const ItemsBtn = async ({ collection, itemInfo }: ItemsBtnProps) => {
  const supabase = createServerComponentClient<Database>({ cookies })
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
