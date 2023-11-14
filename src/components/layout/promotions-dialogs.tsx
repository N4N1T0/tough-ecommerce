'use client'

// Next.js Imports
import Link from 'next/link'
import Image from 'next/image'

// React Imports
import { useState, useRef } from 'react'

// Ui Imports
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose
} from '@/components/ui/dialog'

// Assets Imports
import PromoPic from '@/assets/Promotion.jpg'
import CodePic from '@/assets/Code-promotion.jpg'
import { X } from 'lucide-react'

// Components Imports
import LoginSignTabs from '../login/login-singup-tabs'

// Utils Imports
import { getHolidays, endCodeDate } from '@/lib/utils'

// PROMOTION
export const PromotionDialog = ({ children }: { children: React.ReactNode }) => {
  // Stae for the dialog, to make it a controlled Component
  const [open, setOpen] = useState<boolean>(false)

  return (
    <Dialog open={open}>
      <DialogTrigger onClick={() => { setOpen(!open) }}>{children}</DialogTrigger>
      <DialogContent className='md:p-0 p-10 flex max-w-[700px] w-[300px] shadow-xl bg-white'>
        <div className='grid place-content-center'>
          <form className='text-center space-y-5 px-5'>
            <h3 className='font-bold md:text-5xl text-3xl'>SIGN UP & TAKE 15% OFF*</h3>
            <p className='font-bold md:text-xl text-lg'>YOUR FIRST ORDER ON TOUGH.COM</p>
            <p className='text-gray-900 text-lg'>Save on your first order and get email only offers when you join.</p>
            <LoginSignTabs tab='signup'><button className='block w-full bg-black text-white py-2 px-10 rounded uppercase'>SignUp</button></LoginSignTabs>
          </form>
        </div>
        <DialogClose onClick={() => { setOpen(!open) }} className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground'>
          <X className='h-6 w-6 text-black md:text-white' />
          <span className='sr-only'>Close</span>
        </DialogClose>
        <Image src={PromoPic} alt='Tough promotion picture' width={350} height={350} className='hidden md:block' placeholder='blur' blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8+R8AApcByuTu2nIAAAAASUVORK5CYII' />
      </DialogContent>
    </Dialog >
  )
}

// CODE
export const CodeDialog = ({ children }: { children: React.ReactNode }) => {
  // Stae for the dialog, to make it a controlled Component
  const [open, setOpen] = useState<boolean>(false)
  const [codeOpen, setCodeOpen] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement | null>(null)

  // Funtion to copy to the clipbard
  const copyToClipboard = () => {
    if (inputRef.current !== null) {
      const textToCopy = inputRef.current.value

      navigator.clipboard.writeText(textToCopy).then(() => {
        console.log('Texto copiado al portapapeles: ', textToCopy)
      })
    }
  }

  return (
    <Dialog open={open}>
      <DialogTrigger onClick={() => { setOpen(!open) }}>{children}</DialogTrigger>
      <DialogContent className='md:p-0 p-10 flex max-w-[700px] w-[300px] shadow-xl bg-white'>
        <Image src={CodePic} alt='Tough promotion picture' width={350} height={350} className='hidden md:block' placeholder='blur' blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8+R8AApcByuTu2nIAAAAASUVORK5CYII' />
        <div className='grid place-content-center text-center p-0 md:px-5 space-y-7'>
          {codeOpen
            ? (
              <>
                <h3 className='uppercase font-bold text-2xl'>YOU’VE UNLOCKED 10%  OFF YOUR ENTIRE ORDER!</h3>
                <input type='text' value='PZ15CN' className='w-full border border-gray-500 text-center py-3 font-bold' readOnly ref={inputRef} />
                <small>Please use this coupon code when checking out <br />Your code will expire in 60 minutes</small>
                <div className='w-full flex flex-col gap-2'>
                  <button onClick={copyToClipboard} className='bg-black text-white hover:bg-white hover:text-black transition-colors duration-200 py-2 px-5'>Copy</button>
                  <Link href='/products/boxing/all' className='bg-black text-white hover:bg-white hover:text-black transition-colors duration-200 py-2 px-5'>Shop Now</Link>
                </div>
              </>
            )
            : (
              <>
                <h2 className='uppercase tracking-[0.3em] font-semibold'>GREATNESS IS WITHIN</h2>
                {endCodeDate()}
                <button onClick={() => { setCodeOpen(!codeOpen) }} className='bg-black text-white hover:bg-white hover:text-black transition-colors duration-200 py-2 px-5'>
                  Reveal the mistery code
                </button>
                <small className='underline text-xs uppercase'>sitewide promotion</small>
                {getHolidays()}
              </>
            )}
          <DialogClose onClick={() => { setOpen(!open) }} className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground'>
            <X className='h-6 w-6 text-black' />
            <span className='sr-only'>Close</span>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog >

  )
}
