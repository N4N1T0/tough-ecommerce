'use client'

import useStore from '@/store/store'
import { useEffect } from 'react'

interface Props {
  product: productsPropsWithReviewsNoArray
}

const AddToRecentlyViewed = ({ product }: Props) => {
  const { addToRecentlyViewed } = useStore()

  useEffect(() => {
    addToRecentlyViewed(product)
  }, [])

  return (
    <></>
  )
}

export default AddToRecentlyViewed
