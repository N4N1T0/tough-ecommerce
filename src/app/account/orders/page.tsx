import OrdersListCard from '@/components/account/orders-list-card'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import AccountMobileSheet from '@/components/account/account-mobile-sheet'

export default async function MyOrdersPage() {
  const supabse = createServerComponentClient<Database>({ cookies })
  const { data, error } = await supabse.from('orders').select()

  if (error !== null) {
    return (
      <h1>{error.message}</h1>
    )
  }

  return (
    <section className='space-y-5'>
      <div className='flex justify-between items-center mb-5'>
        <h1 className='font-bold text-xl uppercase'>My Wish List</h1>
        <p>{data.length} Orders</p>
        <div className='block md:hidden'>
          <AccountMobileSheet />
        </div>
      </div>
      <hr className='border-0 h-[1px] bg-border w-full' />
      {data.length === 0 && <div className='w-full bg-border text-white p-5'><p>You have placed no orders.</p></div>}
      <div className='w-full gap-5'>
        {data.map((item) => (
          <OrdersListCard items={item} key={item.id} />
        ))}
      </div>
      <hr className='border-0 h-[1px] bg-border w-full' />
    </section>
  )
}
