// Next.js Imports
import Link from 'next/link'

export default function ShippingPage() {
  return (
    <main className='max-w-[1000px] mx-auto px-5 flex flex-col justify-center items-center text-center gap-10 leading-10'>
      <header className='pt-48 py-10'>
        <h1 className='font-bold uppercase text-5xl xl:text-8xl'>SHIPPING INFORMATION</h1>
      </header>
      <section className='space-y-4' id='shipping-info'>
        <p className='text-left'>The above map indicates transit time from our warehouse in Moberly, MO when selecting Ground Shipping. Please note that this is transit time only, and does not include order processing time. Express shipping options are available during checkout for an additional fee.</p>
        <h2 className='font-bold text-lg'>SHIPPING COSTS:</h2>
        <ul className='text-left list-disc'>
          <li>FREE Shipping over $99 and $6.99 flat rate Ground Shipping for most orders under $99 shipped within the continental US only.</li>
          <li>Flat rate price applies to orders shipped via UPS Ground only.</li>
          <li>Excludes heavy and overweight/oversized items.</li>
          <li>Shipping and tax (if applicable) will be calculated during checkout.</li>
          <li>If a minimum order total is required to qualify for free shipping, the cart must total that minimum after other discounts are taken and before taxes. Unless otherwise stated, heavy bags and overweight/oversized items are not eligible for free shipping.</li>
        </ul>
        <h2 className='font-bold text-lg'>ADDITIONAL DETAILS:</h2>
        <ul className='text-left list-disc'>
          <li>Everlast ships via UPS. You must have a physical street address for all Everlast.com deliveries.</li>
          <li>Orders are processed and shipped Monday-Friday only (excluding major holidays).</li>
          <li>Orders generally ship within 1-2 business days after the order is received. Due to the impact of the COVID-19 virus on US operations and shipping, orders will ship between 5-7 days after the order is received. Please note: this processing time occurs for all orders including those placed with expedited shipping. Delivery time depends on the level of service you select and where you are located.</li>
          <li>Everlast uses UPS SurePost. The UPS SurePost service provides the convenience of UPS shipping and USPS-delivery to your mailbox. Your order may be delivered by your local post office.</li>
          <li>We offer expedited shipping at an additional charge</li>
        </ul>
        <h2 className='font-bold text-lg'>IMPACT OF THE CORONAVIRUS ON UPS SERVICE GUARANTEE SUSPENSION OF SERVICE GUARANTEE</h2>
        <ul className='text-left list-disc'>
          <li>Effective March 24, 2020 the UPS Service Guarantee is suspended for all shipments from any origin to any destination at any service level. Commit times for some services have also changed. The majority of shipping services continue however with the same expected delivery time frames customers have come to expect.</li>
          <li>All UPS 2nd Day Air and Next Day Air orders must be placed online by 12:00 PM CST to ensure same day shipping. To accommodate expedited shipping needs after 12:00 PM CST, please call 800-821-7930 for delivery options.</li>
          <li>Next Day Air is available for all 50 states and Puerto Rico, with some limitations in Alaska and Hawaii. Delivery is guaranteed on the next business day at the following times depending on destination: 10:30am, 12pm, or end of day (not time zone-specific).</li>
          <li>2nd Day Air is available for all 50 states and Puerto Rico, with some limitations in Alaska and Hawaii.</li>
        </ul>
        <strong>Need assistance? <Link href='/info/contact-us' className='underline hover:text-gray-800 transition-colors duration-200'>Contact us</Link></strong>
      </section>
    </main>
  )
}
