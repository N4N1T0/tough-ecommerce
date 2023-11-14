// Next.js Imports
import Link from 'next/link'

// Assets Imports
import { productsLinks } from '@/content'

// Ui Imports
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

// Components Imports
import HeaderLine from '../account/header-line'

export default async function ProductsLayout({ children, category, subCategory }: { children: React.ReactNode, category?: string, subCategory?: string }) {
  return (
    <main className='max-w-[1400px] px-5 mx-auto grid grid-cols-2 md:grid-cols-5 pt-48 gap-10'>
      <aside className='col-span-1 hidden md:block'>
        <div className='sticky top-48'>
          <HeaderLine text='Category' />
          <Accordion type='multiple' className='w-full' defaultValue={[`${category}`]}>
            {productsLinks.map((item, idx) => (
              <AccordionItem value={item.label.toLowerCase()} key={`Products-Link-${item.label}-${idx}`} className='border-border'>
                <AccordionTrigger className={`${category === item.label.toLowerCase() ? 'font-bold' : 'font-normal'}`}>{item.label}</AccordionTrigger>
                <AccordionContent>
                  {item.internalLinks !== null
                    ? (
                      <ul className='flex flex-col gap-2 px-5'>
                        {item.internalLinks?.map((item, idx) => (
                          <li key={`Products-Link-${item.label}-${idx}`}
                            className={`border-b py-3 last:border-b-0 border-border ${item.label.toLowerCase() === subCategory ? 'font-bold' : 'font-normal'}`}>
                            <Link href={item.link} className='hover:text-gray-500 hover:underline'>{item.label}</Link>
                          </li>
                        ))}
                      </ul>
                    )
                    : (
                      <>
                      </>
                    )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </aside>
      <article className='col-span-4'>
        {children}
      </article>
    </main>
  )
}
