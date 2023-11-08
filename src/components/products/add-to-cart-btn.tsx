'use client'

import useStore from '@/store/store'
import { useState } from 'react'

const AddToCartBtn = ({ product }: { product: productsPropsWithReviewsNoArray | productsPropsWithoutReviewsNoArray }) => {
  const [isLoading, setIsLoading] = useState(false)
  const { addToCart } = useStore()

  const handleAddToCart = async (product: productsPropsWithReviewsNoArray | productsPropsWithoutReviewsNoArray) => {
    setIsLoading(true)
    await Promise.all([
      // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
      addToCart(product),
      new Promise((resolve) => setTimeout(resolve, 800))
    ])
    setIsLoading(false)
  }

  return (
    <button
      onClick={() => { handleAddToCart(product) }}
      disabled={isLoading}
      className='bg-black text-white uppercase px-3 py-1 md:px-4 md:text-base hover:bg-white hover:text-black transition-colors duration-200 font-bold text-sm disabled:bg-gray-700 disabled:pointer-events-none'>
      <span>{isLoading ? 'Adding...' : 'Add to Cart'}</span>
    </button >
  )
}

export default AddToCartBtn
