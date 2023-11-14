'use client'

// Zutstand Imports
import useStore from '@/store/store'

// React Imports
import { useEffect } from 'react'

// Props Type
interface Props {
  product: productsPropsWithReviewsNoArray
}

const AddToRecentlyViewed = ({ product }: Props) => {
  // Store function to add visited items
  const { addToRecentlyViewed } = useStore()

  // Just add to the list
  useEffect(() => {
    addToRecentlyViewed(product)
  }, [])

  return (
    <></>
  )
}

export default AddToRecentlyViewed
