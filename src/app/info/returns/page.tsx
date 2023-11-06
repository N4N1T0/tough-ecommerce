export default function ReturnsPage() {
  return (
    <main className='max-w-[1000px] mx-auto px-5 flex flex-col justify-center items-center text-center gap-10 leading-10'>
      <header className='pt-48 py-10'>
        <h1 className='font-bold uppercase text-5xl xl:text-8xl'>RETURNS & EXCHANGES</h1>
      </header>
      <section className='space-y-5' id='returns-info'>
        <p className='text-left'>You may return any item purchased from Tough.com for refund or exchange for any reason within 30 days, provided the item is unused and in its original packaging. Only items purchased from Tough.com can be returned through this process.</p>
        <h2 className='font-bold text-lg'>EASY RETURNS:</h2>
        <ul className='text-left list-disc'>
          <li>Please complete the Return Merchandise Form located on the website and follow the instructions on the form.</li>
          <li>Customers are responsible for return shipping fees, unless otherwise instructed by a member of the Tough Customer Service team.</li>
        </ul>
        <h2 className='font-bold text-lg'>QUICK EXCHANGES:</h2>
        <ul className='text-left list-disc'>
          <li>For exchanges, please contact Tough Customer Service.</li>
          <li>Please complete the Return Merchandise Form located on the website and follow the instructions on the form.</li>
          <li>For exchanges, customer is responsible for shipping costs associated with product return. Tough will pay cost of shipping the replacement merchandise.</li>
        </ul>
        <h2 className='font-bold text-lg'>Tough RETURN & EXCHANGE POLICY COMPLETE DETAILS:</h2>
        <ul className='text-left list-disc'>
          <li>Refunds will be credited by the same method in which items were originally purchased, provided the item is returned within 30 days of purchase.</li>
          <li>All products being returned must be returned in original, unopened packaging and must not be used. Tough reserves the right to decline a return request on opened, used merchandise that is not in a condition deemed acceptable.</li>
          <li>The customer will be responsible for shipping the item back to Tough prior to any refund being issued. Customer is also responsible for shipping costs associated with product return.</li>
          <li>For exchange requests, customer is responsible for shipping costs associated with product return. Tough will pay cost for shipping of the replacement merchandise.</li>
          <li>Tough cannot be responsible for lost or missing packages and recommends that customer place tracking numbers on returned merchandise.</li>
          <li>With all returns and exchanges, an RMA form must be completed and returned in the package containing the product. Returns or exchanges will not be processed</li>
        </ul>
      </section>
    </main>
  )
}
