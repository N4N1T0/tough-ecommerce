import ProductsLayout from '@/components/products/layout'

export default function SalePage({ params }: { params: { subCategories: string } }) {
  return (
    <ProductsLayout subCategory={params.subCategories} category='sale'>
      <section className='grid grid-cols-1 md:grid-cols-3 grid-rows-1'>
        <h1>{params.subCategories}</h1>
      </section>
    </ProductsLayout>
  )
}
