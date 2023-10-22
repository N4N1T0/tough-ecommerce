import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function AccountCostuner() {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { user }
  } = await supabase.auth.getUser()
  const metadata = user?.user_metadata

  return (
    <section className='space-y-5'>
      <div>
        <h1 className='font-bold text-xl uppercase mb-5'>My Account</h1>
        < p className='mb-1' > Hello, Adrian Álvarez Alonso!</p >
        <small>From your My Account Dashboard you have the ability to view a snapshot of your recent account activity and update your account information. Select a link below to view or edit information.</small>
      </div >
      <div>
        <h2 className='font-bold mb-2'>ACCOUNT INFORMATION</h2>
        <hr className='w-full h-[2px] bg-gray-500' />
        <div className='flex justify-center items-center gap-10'>
          <div>
            <h3>Conctact Information</h3>
            <p>Adrian Alavrez Alon</p>
          </div>
          <div>
          </div>
        </div>
      </div>
    </section >
  )
}
