import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'

const NewArrivals = async () => {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data, error } = await supabase.from('products').select().eq('new', true)

  if (error !== null) {
    return error.message
  }

  return (
    <section className='p-10 flex justify-between items-center flex-col w-full'>
      <h3 className='uppercase font-bold text-2xl'>New Arrivals</h3>
      <div className='flex flex-col sm:flex-row gap-5 w-full md:w-4/5 justify-between p-5'>
        {data.slice(0, 4).map((item) => (
          <Link href={`products/item/${item.id}`} className='col-span-1 space-y-2 gap-5' key={item.id}>
            <Image src={item.image} alt={item.name} width={250} height={250} />
            <p className='font-semibold uppercase text-sm'>{item.name}</p>
            <p>{item.price}</p>
            <div>
              {[...Array(5)].map((star, staridx) => {
                return (
                  <span key={`Rating-${item.name}-${item.id}-${staridx}`} className='text-gray-400 text-xl'>&#9733;</span>
                )
              })}
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default NewArrivals
