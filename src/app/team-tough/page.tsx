import Image from 'next/image'
import Banner from '@/assets/Main_Banner_ProTeam.jpg'
import { teamTough } from '@/content'

export default function TeamToughPage() {
  return (
    <main className='flex flex-col justify-center items-center text-center gap-10 md:leading-10 leading-5'>
      <header className='md:pt-20 pt-32 py-14 gap-10 flex flex-col justify-center items-center'>
        <Image src={Banner} alt='Tough Team Header Banner' priority />
        <div className='md:w-1/2 w-full space-y-5 md:py-5 py-0'>
          <h1 className='font-bold uppercase text-5xl xl:text-8xl'>Team Tough</h1>
          <p>The athletes on our roster represent more than just the talent they bring to the world of fight sports. They each embody qualities that we value so greatly and represent much more than athletic ability. The champions we choose to be the choice of, are each legendary in their own right.</p>
        </div>
      </header>
      <section className='grid grid-cols-1 md:grid-cols-3 gap-16'>
        {teamTough.map((member, idx) => (
          <div key={`Team-Tough-${member.name}-${idx}`} className='col-span-1 space-y-2'>
            <Image src={member.image} alt={member.name} />
            <h2 className='font-bold'>{member.name}</h2>
            <small className='italic'>{member.division}</small>
          </div>
        ))}
      </section>
    </main>
  )
}
