import CompleteSet from './complete-set'

const ItemsBtn = ({ collection, itemName }: { collection: string | null, itemName: string }) => {
  return (
    <div className='py-3 flex flex-row justify-between items-center'>
      <button className='bg-black text-white px-4 py-1 uppercase hover:bg-white hover:text-black transition-colors duration-200'>Add to cart</button>
      <button className='bg-black text-white px-4 py-1 uppercase hover:bg-white hover:text-black transition-colors duration-200'>Add to WishList</button>
      <CompleteSet collection={collection} itemName={itemName} />
    </div>
  )
}

export default ItemsBtn
