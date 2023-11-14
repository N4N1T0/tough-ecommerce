// Next.js Imports
import Image from 'next/image'
import Link from 'next/link'

// Assets Imports
import { footerLink } from '@/content'
import Badge from '@/assets/3.png'

// UI Imports
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
        <Link href='/team-tough' className='italic hover:text-gray-600 transition-colors duration-200'>Become part of Team Tough</Link>
      </div>
      <div className='hidden gap-5 md:flex'>
        {/* Links of the Footer */}
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
      </div>ç
      {/* Mobile Footer */}
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
      <Image src={Badge} alt='Badge' width={100} height={100} placeholder='blur' blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8+R8AApcByuTu2nIAAAAASUVORK5CYII' />
    </footer>
  )
}

export default Footer
