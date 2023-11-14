// Next.js Imports
import { cookies } from 'next/headers'
import Link from 'next/link'

// Utils Imports
import { getDeliverDaysOrder } from '@/lib/utils'

// Supabase Imports
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

// Props Type
interface Props {
  items: {
    created_at: string
    id: number
    order_id: string | null
    products_id: number[] | null
    total: number | null
    user_id: string | null
  }
}

async function OrdersListCard({ items }: Props) {
  // Supabase Client
  const supabse = createServerComponentClient<Database>({ cookies })

  // Fecthing Data from supabase for the Products
  const { data: productsItems } = await supabse.from('products').select().in('id', items.products_id!)
  const { data: address } = await supabse.from('address').select()

  return (
    <div className='flex flex-col border border-border w-full p-3 space-y-3'>
      <strong className='font-bold'>Order Id: <span className='font-normal italic underline text-sm break-words'>{items?.order_id}</span></strong>
      <div>
        <p>Items:</p>
        <ol className='list-decimal pl-5'>
          {productsItems?.map((item) => (
            <li key={item.id}><Link href={`/products/item/${item.id}`} className='hover:underline'>{item.name}</Link></li>
          ))}
        </ol>
      </div>
      <small>Default Shipping Addres: {address?.filter((item) => item.default).map((item) =>
        <span key={item.id}>{item.street} - {item.city} - {item.state_province} - {item.country}</span>
      )}</small>
      <small>Delivery at: {getDeliverDaysOrder(new Date(items.created_at))}</small>
    </div>
  )
}

export default OrdersListCard
