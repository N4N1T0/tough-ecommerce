import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Function to merge the classname
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Function to create the date of the code promotion end
export const endCodeDate = () => {
  const today = new Date()
  const nextMonth = new Date(today)
  nextMonth.setMonth(today.getMonth() + 1)
  const formattedDate = nextMonth.toLocaleDateString()

  return (
    <h3 className='font-bold text-3xl'>UNLOCK UP TO 50% OFF NOW - {formattedDate}</h3>
  )
}

// Get holidays Text for the promotions
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

// Function to create the dalivery dat accordding to the today Date
export const getDeliverDays = () => {
  const hoy = new Date()
  const fechaDentroDeUnaSemana = new Date(hoy)
  fechaDentroDeUnaSemana.setDate(hoy.getDate() + 7)
  const fechaHoy = hoy.toDateString()
  const fechaEnUnaSemana = fechaDentroDeUnaSemana.toDateString()

  return (`${fechaHoy} - ${fechaEnUnaSemana}`)
}

// Functio to create the deliver day according to the date of the order
export const getDeliverDaysOrder = (startDate: any) => {
  const endDate = new Date(startDate)
  endDate.setDate(endDate.getDate() + 7)
  const endDateString = endDate.toDateString()

  return `${endDateString}`
}

// Size Chart for the products
export const getSizeOfProducts = (products: string) => {
  switch (products) {
    case 'gloves':
      return ['S/M', 'M/L', 'L/XL']
    case 'shoes':
      return ['6', '7', '8', '9', '10', '11', '12']
    case 'headgear':
      return ['S', 'M', 'L', 'XL']
    case 'handwraps':
      return ['150', '180', '200', '220']
    case 'cups':
      return ['S', 'M', 'L']
    case 'men':
      return ['S', 'M', 'L', 'XL']
    case 'women':
      return ['S', 'M', 'L', 'XL']
    default:
      return []
  }
}

// Encode Prodcut Date
export const encodeProductDate = (fecha: string) => {
  const d = new Date(fecha)
  return d.toDateString()
}
