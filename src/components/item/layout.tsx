import Link from 'next/link'
import { getDeliverDays, getSizeOfProducts } from '@/lib/utils'
import ItemsBtn from './items-btn'

interface Props {
  itemInfo: {
    collection: string | null
    created_at: string
    description: string
    equipment_type: string
    id: number
    image: string
    name: string
    new: boolean
    price: number
    sale: number | null
    sports: string[] | null
  }
  children: React.ReactNode
}

function ItemLayout({ children, itemInfo }: Props) {
  const sizes = getSizeOfProducts(itemInfo.equipment_type)

  return (
    <section className='max-w-[1400px] px-5 mx-auto grid grid-cols-2 md:grid-cols-5 pt-48 gap-10'>
      <article className='col-span-3'>
        {children}
      </article>
      <aside className='col-span-2 hidden md:block pt-10 space-y-3'>
        <div className='space-y-3'>
          <h2 className='uppercase font-bold text-xl'>{itemInfo?.name}</h2>
          <div>
            {[...Array(5)].map((star, staridx) => {
              return (
                <span key={`Rating-${itemInfo.name}-${staridx}`} className='text-gray-400 text-2xl'>&#9733;</span>
              )
            })}
          </div>
          <div className='flex justify-between items-center'>
            {itemInfo.sale !== null ? <div className='text-xl'><span className='line-through text-gray-400'>{itemInfo.price}</span>${itemInfo.sale}</div> : <div className='text-xl'>{itemInfo.price}</div>}
            {itemInfo.new && <Link href='/products/new' className='uppercase px-2 py-1 bg-gray-400 w-fit hover:bg-white transition-colors duration-200'>New</Link>}
            {itemInfo.sale !== null && <Link href='/products/sale' className='uppercase px-2 py-1 bg-gray-400 w-fit hover:bg-white transition-colors duration-200'>Sale</Link>}
          </div>
          <strong className='pt-3'>In Stock</strong>
          <hr className='w-full border-0 bg-border h-[1px]' />
        </div>
        <div className='space-y-2 py-3'>
          <strong>Order Today. Delivery Estimate:</strong>
          <p>{getDeliverDays()}</p>
          <hr className='w-full border-0 bg-border h-[1px]' />
        </div>
        <div className='py-3 space-y-2'>
          <div className='flex gap-3'>
            {sizes.map((item, idx) => (
              <div className='p-3 border border-border' key={`Size-${item}-${idx}`}>{item}</div>
            ))}
          </div>
          <Link href='/size-chart' className='underline hover:text-gray-600 transition-colors duration-200 block text-sm'>Size Chart</Link>
          <hr className='w-full border-0 bg-border h-[1px]' />
        </div>
        <div className='py-1 space-y-2'>
          <small>{itemInfo.description}</small>
          <hr className='w-full border-0 bg-border h-[1px]' />
        </div>
        <ItemsBtn collection={itemInfo.collection} itemName={itemInfo.name} />
      </aside>
    </section>
  )
}

export default ItemLayout
