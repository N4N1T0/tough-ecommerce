'use client'

import useStore from '@/store/store'

function SpanCartNumber() {
  const { cart } = useStore()

  if (cart.length === 0) {
    return <></>
  }

  return (
    <span className='absolute bg-black rounded-full h-4 w-4 text-white text-xs top-0 left-1/2'>{cart.length}</span>
  )
}

export default SpanCartNumber
