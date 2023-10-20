'use client'

// Next.js Imports
import Image from 'next/image'

// React Imports
import { type FormEvent, useState } from 'react'

// Ui Imports
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose
} from '@/components/ui/dialog'

// Assets Imports
import PromoPic from '@/assets/Promotion.jpg'
import { X } from 'lucide-react'

export default function PromotionDialog({
  children
}: {
  children: React.ReactNode
}) {
  const [open, setOpen] = useState<boolean>(false)
  const [label, setLabel] = useState<string>('Continue')

  const sendForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLabel('Processing')
    // Function to send a Promo
    setTimeout(() => {
      setLabel('Continue')
      setOpen(false)
    }, 2000)
  }
  return (
    <Dialog open={open}>
      <DialogTrigger onClick={() => { setOpen(!open) }}>{children}</DialogTrigger>
      <DialogContent className='md:p-0 p-10 flex max-w-[700px] w-[300px] shadow-xl bg-white'>
        <div className='grid place-content-center'>
          <form onSubmit={(e) => { sendForm(e) }} className='text-center space-y-5 px-5'>
            <h3 className='font-bold md:text-5xl text-3xl'>SIGN UP & TAKE 15% OFF*</h3>
            <p className='font-bold md:text-xl text-lg'>YOUR FIRST ORDER ON TOUGH.COM</p>
            <p className='text-gray-900 text-lg'>Save on your first order and get email only offers when you join.</p>
            <input type='email' className='block w-full border border-black font-bold p-2 rounded mt-2' placeholder='Email' required />
            <button className='block w-full bg-black text-white py-2 rounded'>{label}</button>
          </form>
        </div>
        <DialogClose onClick={() => { setOpen(!open) }} className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground'>
          <X className='h-6 w-6 text-black md:text-white' />
          <span className='sr-only'>Close</span>
        </DialogClose>
        <Image src={PromoPic} alt='Tough promotion picture' width={350} height={350} className='hidden md:block' />
      </DialogContent>
    </Dialog >

  )
}
