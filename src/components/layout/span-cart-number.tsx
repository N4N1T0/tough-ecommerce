'use client'

import useStore from '@/store/store'
import useStoreCart from '@/store/useStore'

function SpanCartNumber() {
  const cart = useStoreCart(useStore, (state) => state.cart)

  console.log(cart)

  if (cart?.length === 0 || cart === undefined) {
    return <></>
  }

  return (
    <span className='absolute bg-black rounded-full h-4 w-4 text-white text-xs top-0 left-1/2'>{cart?.length}</span>
  )
}

export default SpanCartNumber
