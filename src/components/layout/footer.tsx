import { footerLink } from '@/content'
import Image from 'next/image'
import Link from 'next/link'
import Badge from '@/assets/3.png'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

function Footer() {
  return (
    <footer className='bg-black flex flex-col md:flex-row justify-between items-center p-10 text-white mt-5 md:mt-10 gap-5 md:gap-0'>
      <div>
        <p className='text-3xl font-bold'>TOUGH</p>
      </div>
      <div className='hidden gap-5 md:flex'>
        {footerLink.map((item, idx) => (
          <ul key={`Footer-Link-${item.label}-${idx}`}>
            <li className='uppercase font-bold'>{item.label}</li>
            {
              item.links.map((item, idx) => (
                <li key={`Footer-link-${item.label}-${idx}`}>
                  <Link href={item.link} className='text-gray-400 hover:text-white transition-colors duration-200'>{item.label}</Link>
                </li>
              ))
            }
          </ul>
        ))}
        <div>
          <p className='uppercase font-bold'>CONNECT</p>
          <p>MONDAY-FRIDAY</p>
          <p>8 AM - 5 PM CST</p>
        </div>
      </div>
      <Accordion type='multiple' className='block md:hidden w-full'>
        {footerLink.map((item, idx) => (
          <AccordionItem value={item.label} key={`Footer-Link-Mobile-${item.label}-${idx}`}>
            <AccordionTrigger className='uppercase font-bold'>{item.label}</AccordionTrigger>
            <AccordionContent>
              <ul className='space-y-2'>
                {item.links.map((item, idx) => (
                  <li key={`Footer-Link-Mobile-${item.label}-${idx}`}>
                    <Link href={item.link} className='text-gray-400 hover:text-white transition-colors duration-200'>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <Image src={Badge} alt='Badge' width={100} height={100} />
    </footer>
  )
}

export default Footer
