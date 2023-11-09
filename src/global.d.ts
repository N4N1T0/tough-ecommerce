import { type Database as DB } from './types/database'

declare global {
  type Database = DB
}

declare global {
  type productsPropsWithReviews = Array<{
  collection: string | null
  created_at: string
  description: string
  equipment_type: string
  id: number
  image: string
  name: string
  new: boolean
  price: number
  sale: number | null
  sports: string[] | null
  stripe_id: string | null
  reviews: Array<{
    created_at: string
    id: number
    product_id: number
    score: number
    text: string
    user: string
  }>
}>
}
declare global {
  type productsPropsWithoutReviews = Array<{
  collection: string | null
  created_at: string
  description: string
  equipment_type: string
  id: number
  image: string
  name: string
  new: boolean
  price: number
  sale: number | null
  sports: string[] | null
  stripe_id: string | null
}>
}

// Interfaces of Single Prodcuts no Arrays
declare global {
  interface productsPropsWithoutReviewsNoArray {
  collection: string | null
  created_at: string
  description: string
  equipment_type: string
  id: number
  image: string
  name: string
  new: boolean
  price: number
  sale: number | null
  sports: string[] | null
  stripe_id: string | null
}
}

declare global {
  interface productsPropsWithReviewsNoArray {
  collection: string | null
  created_at: string
  description: string
  equipment_type: string
  id: number
  image: string
  name: string
  new: boolean
  price: number
  sale: number | null
  sports: string[] | null
  stripe_id: string | null
  reviews: Array<{
    created_at: string
    id: number
    product_id: number
    score: number
    text: string
    user: string
  }>
}
}
