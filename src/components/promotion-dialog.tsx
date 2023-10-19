'use client'

import {
  Dialog,
  DialogContent,
  DialogTrigger
} from '@/components/ui/dialog'
import Image from 'next/image'
import PromoPic from '@/assets/promotion.jpg'
import { type FormEvent, useState } from 'react'

export default function PromotionDialog({
  children
}: {
  children: React.ReactNode
}) {
  const [open, setOpen] = useState<boolean>(false)
  const [label, setLabel] = useState<string>('Continue')

  const sendForm = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setLabel('Processing')
    setTimeout(() => { setOpen(false) }, 2000)
  }
  return (
    <Dialog open={open}>
      <DialogTrigger onClick={() => { setOpen(!open) }}>{children}</DialogTrigger>
      <DialogContent className='p-0 flex max-w-[700px] shadow-xl'>
        <div className='grid place-content-center'>
          <form onSubmit={(e) => { sendForm(e) }} className='text-center space-y-5 px-5'>
            <h3 className='font-bold text-5xl'>SIGN UP & TAKE 15% OFF*</h3>
            <p className='font-bold text-xl'>YOUR FIRST ORDER ON TOUGH.COM</p>
            <p className='text-gray-900 text-lg'>Save on your first order and get email only offers when you join.</p>
            <input type='email' className='block w-full border border-black font-bold p-2 rounded mt-2' placeholder='Email' required />
            <button className='block w-full bg-black text-white py-2 rounded'>{label}</button>
          </form>
        </div>
        <Image src={PromoPic} alt='Tough promotion picture' width={350} height={350} className='hidden md:block' />
      </DialogContent>
    </Dialog >

  )
}
