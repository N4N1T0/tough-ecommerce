import Link from 'next/link'

export default function ConatactUsPage() {
  return (
    <main className='max-w-[1000px] mx-auto px-5 flex flex-col justify-center items-center text-center gap-10 leading-10'>
      <header className='pt-48 py-10'>
        <h1 className='font-bold uppercase text-5xl xl:text-8xl'>CONTACT US</h1>
      </header>
      <section className='space-y-4' id='contact-info'>
        <div>
          <h2 className='font-bold text-lg'>Phone:</h2>
          <Link href='/' className='underline hover:text-gray-800 transition-colors duration-200'>800.821.7930</Link>
          <p className='text-gray-800'>(Monday - Friday 8:00 a.m. - 5:00 p.m. CST)</p>
        </div>
        <div>
          <h2 className='font-bold text-lg'>Live Chat:</h2>
          <p className='text-gray-800'>(Monday - Friday 8:00 a.m. - 5:00 p.m. CST)</p>
          <Link href='/' className='underline hover:text-gray-800 transition-colors duration-200'>Chat with us.</Link>
        </div>
        <div>
          <h2 className='font-bold text-lg'>Email:</h2>
          <Link href='/' className='underline hover:text-gray-800 transition-colors duration-200'>orderpro@everlast.com</Link>
        </div>
        <div>
          <h2 className='font-bold text-lg'>Fax:</h2>
          <Link href='/' className='underline hover:text-gray-800 transition-colors duration-200'>800.480.0348</Link>
        </div>
        <div>
          <h2 className='font-bold text-lg'>Mailing Address:</h2>
          <p className='text-gray-800'>Tough Customer Service</p>
          <p className='text-gray-800'>1900 Highway DD </p>
          <p className='text-gray-800'>Moberly, MO 65270</p>
        </div>
        <div>
          <strong className='inline-block'>For sponsorship inquiries, please send an email to <Link href='/' className='underline hover:text-gray-800 transition-colors duration-200'>sponsorships@tough.com</Link></strong>
          <strong className='inline-block'>For Everlast Gym inquiries, please click <Link href='/' className='underline hover:text-gray-800 transition-colors duration-200'>here</Link></strong>
        </div>
      </section>
    </main>
  )
}
