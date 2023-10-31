// Next.js imports
import { cookies } from 'next/headers'
import Link from 'next/link'

// Supabase Imports
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

// Components Imports
import HeaderLine from '@/components/account/header-line'

export default async function AccountCostuner() {
  // Supabse Server and data fetching
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data, error } = await supabase.from('profiles').select('*, address(*)')

  if (error != null) {
    return <h1>{error.message}</h1>
  }

  return (
    <section className='md:space-y-10 space-y-5'>
      <div>
        <h1 className='font-bold text-xl uppercase mb-5'>My Account</h1>
        <p className='mb-1' > Hello, {data[0]?.name === null ? 'New User' : data[0]?.name}!</p >
        <small>From your My Account Dashboard you have the ability to view a snapshot of your recent account activity and update your account information. Select a link below to view or edit information.</small>
      </div >
      {/* Account Information */}
      <div>
        <HeaderLine text='Account information' />
        <div className='flex justify-between flex-col md:flex-row items-center md:gap-10 gap-5'>
          <div className='text-left py-5'>
            <h3 className='font-semibold mb-3'>Conctact Information</h3>
            <p>{data[0].name}</p>
            <p>{data[0].email}</p>
            <Link href='/account/costumer/edit' className='underline hover:text-gray-600 transition-colors duration-200'>Edit</Link>
          </div>
          <div className='text-left'>
            <h3 className='font-semibold mb-3'>Email Lists</h3>
            {data[0].future_deals_signup
              ? (
                <p>You are subscribed to &quot;Future Deals&quot;.</p>
              )
              : (
                <></>
              )}
            {data[0].new_products_alerts_signup
              ? (
                <p>You are subscribed to &quot;New Products&quot;.</p>
              )
              : (
                <></>
              )}
            <Link href='/account/costumer/email' className='underline hover:text-gray-600 transition-colors duration-200'>Edit</Link>
          </div>
          <div>
          </div>
        </div>
      </div>
      {/*  */}
      <div>
        <HeaderLine text='Address Book'><Link href='/account/costumer/address' className='underline hover:text-gray-600 transition-colors duration-200'>Manage adress</Link></HeaderLine>
        <div className='flex justify-between items-start flex-col md:flex-row md:gap-10 gap-5 py-5 md:py-0'>
          <div className='text-left md:py-5 py-2'>
            <h3 className='font-semibold mb-3'>Default Shipping Address</h3>
            {data[0].address.length === 0
              ? (
                <>
                  <p>You dont have any default shipping address</p>
                  <Link href='/account/costumer/address' className='underline hover:text-gray-600 transition-colors duration-200'>Add new address</Link>
                </>
              )
              : (
                <>
                  {data[0].address.filter((item) => item.default).map((item) => (
                    <ul key={item.id} className='border-[1px] p-5 border-black'>
                      {Object.keys(item).slice(1, 5).map((keyName) => (
                        <li className='travelcompany-input' key={item.id}>
                          <span className='input-label'>{item[keyName as keyof typeof item]}</span>
                        </li>
                      ))}
                    </ul>
                  ))}
                </>
              )}
          </div>
          <div className='text-left md:py-5 py-2'>
            <h3 className='font-semibold mb-3'>Other Shipping Address</h3>
            {data[0].address.length === 0
              ? (
                <>
                  <p>You dont have any shipping address in your address book</p>
                  <Link href='/account/costumer/address' className='underline hover:text-gray-600 transition-colors duration-200'>Add new address</Link>
                </>
              )
              : (
                <ul className='space-y-5 py-5'>
                  {data[0].address?.filter((item) => !item.default).map((item, idx) => (
                    <li key={`Address-${item.id}`} className='border-[1px] p-5 border-border' >
                      <p>{item.street} , {item.apartment} , {item.city} , {item.country}</p>
                      <Link href={`/account/costumer/address/${item.id}`} className='underline hover:text-gray-600 transition-colors duration-200'>Edit</Link>
                    </li>
                  ))}
                </ul>
              )}
          </div>
          <div>
          </div>
        </div>
      </div>
    </section >
  )
}
