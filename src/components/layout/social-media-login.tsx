// Next.js Imports
import Image from 'next/image'

// Assets Imports
import Google from '@/assets/Google_2015_logo.svg'
import Facebook from '@/assets/Facebook_Logo_(2019).svg'

const SocialMediaLogin = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-5'>
      <h3 className='font-bold'>Login with Your Social Profile</h3>
      <div className='flex justify-between items-center w-full px-10'>
        <Image src={Google} alt='Google logo' width={150} height={50} />
        <Image src={Facebook} alt='Facebook logo' width={150} height={50} />
      </div>
    </div>
  )
}

export default SocialMediaLogin
