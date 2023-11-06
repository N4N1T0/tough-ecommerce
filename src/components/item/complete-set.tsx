import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter
} from '@/components/ui/sheet'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import AddToCartBtn from '../products/add-to-cart-btn'
import WhishListButton from '../products/whish-list-button'

const CompleteSet = async ({ collection, itemName }: { collection: string | null, itemName: string }) => {
  const supabase = createServerComponentClient<Database>({ cookies })

  // return null if there is no collection
  if (collection === null) {
    return <></>
  }

  // Fecthcing Products according to the collection
  const { data: products } = await supabase.from('products').select('*, reviews(*)').eq('collection', collection)

  // User for the id
  const { data: { user } } = await supabase.auth.getUser()

  // fetching the Whislist
  const { data: wishListData } = await supabase.from('wishlist').select()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className='uppercase px-2 md:px-4 py-1 text-sm md:text-base text-center bg-gray-400 w-fit hover:bg-white transition-colors duration-200 cursor-pointer'>Complete the Set</div>
      </SheetTrigger>
      <SheetContent className='py-14'>
        <SheetHeader className='bg-gray-200 p-5'>
          <SheetTitle className='font-bold uppercase'>{itemName}</SheetTitle>
          <SheetDescription>
            Complete the set with items from the same collection
          </SheetDescription>
        </SheetHeader>
        <div className='space-y-10 py-10'>
          {products?.slice(0, 3).map((item) => (
            <div key={item.id}>
              <div className='flex justify-between items-center'>
                <p className='font-bold'>{item.name}</p>
                <p>${item.price}</p>
              </div>
              <Image src={item.image} alt={item.name} width={150} height={150} />
              <div className='py-3 flex flex-row justify-between items-center'>
                <AddToCartBtn product={item} />
                <WhishListButton userId={user?.id} productId={item.id} wishlist={wishListData} />
              </div>
            </div>
          ))}
        </div>
        <SheetFooter>
          <Link href={`/products/collection/${collection}`} className='uppercase px-4 py-1 bg-gray-400 w-fit hover:bg-white transition-colors duration-200 cursor-pointer'>{`More from ${collection}`}</Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>

  )
}

export default CompleteSet
