'use client'

import useStore from '@/store/store'

const AddToCartBtn = ({ product }: { product: productsPropsWithReviewsNoArray | productsPropsWithoutReviewsNoArray }) => {
  const { addToCart } = useStore()

  return (
    <button onClick={() => { addToCart(product) }} className='bg-black text-white uppercase px-3 py-1 md:px-4 md:text-base hover:bg-white hover:text-black transition-colors duration-200 font-bold text-sm'>add to cart</button>
  )
}

export default AddToCartBtn
