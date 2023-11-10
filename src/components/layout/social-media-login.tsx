// Next.js Imports
import Image from 'next/image'

// Components Imports
import { LoginBtn } from '../login/login-buttons'

// Assets Imports
import Google from '@/assets/Google_2015_logo.svg'
import Facebook from '@/assets/Facebook_Logo_(2019).svg'

const SocialMediaLogin = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-5'>
      <h3 className='font-bold'>Login with Your Social Profile</h3>
      <div className='flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center w-full px-10'>
        <LoginBtn provider='google'>
          <Image src={Google} alt='Google logo' width={150} height={50} placeholder='blur' blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8+R8AApcByuTu2nIAAAAASUVORK5CYII' />
        </LoginBtn>
        <LoginBtn provider='facebook'>
          <Image src={Facebook} alt='Facebook logo' width={150} height={50} placeholder='blur' blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8+R8AApcByuTu2nIAAAAASUVORK5CYII' />
        </LoginBtn>
      </div>
    </div>
  )
}

export default SocialMediaLogin
