import { type Database as DB } from './types/database'

declare global {
  type Database = DB
}

declare global {
  type productsPropsWitReviews = Array<{
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
