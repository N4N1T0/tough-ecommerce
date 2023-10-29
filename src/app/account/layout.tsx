import { accountLinks } from '@/content'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import Link from 'next/link'

export default async function AccountLayout({ children }: { children: React.ReactNode }) {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  if (session == null) {
    redirect('/')
  }

  return (
    <main className='max-w-[1400px] px-5 mx-auto grid grid-cols-1 md:grid-cols-5 grid-rows-1 pt-48 gap-10'>
      <aside className='h-full col-span-1 row-span-1 hidden md:block'>
        <div className='sticky top-48'>
          <ul className='px-5'>
            {accountLinks.map((item, idx) => (
              <li key={`Account-link-${item.label}-${idx}`} className='uppercase text-md font-semibold w-full pt-5'>
                <Link className='hover:underline mt-4' href={item.link}>{item.label}</Link>
                <hr className='h-[1px] bg-border border-none mt-4' />
                {(item.internalLinks != null)
                  ? (
                    <ul className='pl-3'>
                      {item.internalLinks.map((item, idx) => (
                        <li className='uppercase text-md font-normal w-full pt-5' key={`Account-Internal-Link-${item.label}-${idx}`}>
                          <Link className='hover:underline mt-4' href={item.link}>{item.label}</Link>
                          <hr className='h-[1px] bg-border border-none mt-4' />
                        </li>
                      ))}
                    </ul>
                  )
                  : (
                    <>
                    </>
                  )}
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <article className='col-span-4 row-span-1'>
        {children}
      </article>
    </main>
  )
}
