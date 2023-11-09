'use client'

import useStore from '@/store/store'

const RemoveFromCart = ({ product }: { product: productsPropsWithReviewsNoArray | productsPropsWithoutReviewsNoArray }) => {
  const { removeFromCart } = useStore()

  return (
    <button onClick={() => { removeFromCart(product) }} className='bg-black text-white uppercase px-3 py-1 hover:bg-white hover:text-black transition-colors duration-200 font-bold text-sm leading-none'>remove from cart</button>
  )
}

export default RemoveFromCart
