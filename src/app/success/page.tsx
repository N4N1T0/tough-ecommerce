'use client'

import { useSearchParams } from 'next/navigation'

export default function SuccesPage() {
  const SearchParams = useSearchParams()
  const sessionId = SearchParams.get('session_id')
  return (
    <main className='max-w-[1000px] mx-auto px-5 flex flex-col justify-center items-center text-center gap-10 leading-10'>
      <header className='pt-48 py-10'>
        <h1>Succes Payment</h1>
        <h2>{sessionId}</h2>
      </header>
    </main>
  )
}
