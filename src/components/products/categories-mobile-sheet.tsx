import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { productsLinks } from '@/content'
import Link from 'next/link'

const CategoriesMobileSheet = ({ category, subCategory }: { category?: string, subCategory?: string }) => {
  return (
    <nav className='md:hidden block'>
      <Sheet>
        <SheetTrigger asChild>
          <div className='px-3 py-1 bg-black text-white flex w-fit'>
            Shop by
          </div>
        </SheetTrigger>
        <SheetContent className='py-14'>
          <SheetHeader>
            <SheetTitle>Categories of Products</SheetTitle>
            <Accordion type='single' collapsible className='w-full' defaultValue={category}>
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
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>

  )
}

export default CategoriesMobileSheet
