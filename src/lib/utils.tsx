import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const endCodeDate = () => {
  const today = new Date()
  const nextMonth = new Date(today)
  nextMonth.setMonth(today.getMonth() + 1)
  const formattedDate = nextMonth.toLocaleDateString() // Formatear la fecha

  return (
    <h3 className='font-bold text-3xl'>UNLOCK UP TO 50% OFF NOW - {formattedDate}</h3>
  )
}

export const getHolidays = () => {
  const todayMonth = new Date().getMonth() + 1
  switch (todayMonth) {
    case 3:
      return <p className='text-sm'> This Easter, the hunt for savings is on! Discover your code and enjoy egg - citing discounts at checkout.</p>
    case 4:
      return <p className='text-sm'>As spring blossoms, so do your savings. Find your code and enjoy refreshing discounts at checkout.</p>
    case 6:
      return <p className='text-sm'>Make your summer sizzle with savings! Get your code and enjoy hot discounts at checkout</p>
    case 10:
      return <p className='text-sm'>This Halloween season, you can take a chance and unlock a treat. Reveal your code and enjoy a discount at checkout.</p>
    case 11:
      return <p className='text-sm'>This Black Friday, don&apos;t miss your chance to unlock amazing discounts. Grab your code and enjoy incredible savings at checkout.</p>
    case 12:
      return <p className='text-sm'>This Christmas season, unwrap the gift of savings. Reveal your code and enjoy holiday discounts at checkout.</p>
  }
}

export const discounts = () => {
  const discountsList = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
  const randomIndex = Math.floor(Math.random() * discountsList.length)
  const randomDiscount = discountsList[randomIndex]

  return randomDiscount
}
