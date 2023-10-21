// Ui Imports
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Dialog,
  DialogContent,
  DialogTrigger
} from '@/components/ui/dialog'

// Next.js Imports
import SocialMediaLogin from './social-media-login'

const LoginSignTabs = ({ tab, children }: { tab: 'signup' | 'login', children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className='bg-white'>
        <Tabs defaultValue={tab} className=''>
          <TabsList>
            <TabsTrigger value='login' className='uppercase text-lg hover:text-gray-600 transition-colors duration-200'>Login</TabsTrigger>
            <TabsTrigger value='signup' className='uppercase text-lg hover:text-gray-600 transition-colors duration-200'>Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value='login' className='flex flex-col gap-5 w-full p-3'>
            <form action='' className='space-y-5 py-5'>
              <input type='text' placeholder='Email' className='border-gray-500 border p-2 w-full' />
              <div className='text-right'>
                <input type='password' placeholder='Password' className='border-gray-500 border p-2 w-full' />
                <p className='text-sm font-bold'>Forgot Your Password?</p>
              </div>
              <button className='uppercase bg-black text-white w-full py-2 hover:bg-white hover:text-black transition-colors duration-200'>Sign In</button>
            </form>
            <div className='flex flex-row justify-center items-center'>
              <hr className='border-none bg-gray-500 h-[1px] flex-1' />
              <p className='uppercase p-2 border rounded-full border-gray-500'>or</p>
              <hr className='border-none bg-gray-500 h-[1px] flex-1' />
            </div>
            <SocialMediaLogin />
          </TabsContent>
          <TabsContent value='signup' className='flex flex-col gap-5 w-full p-3'>
            <form className='flex flex-col gap-5'>
              <div className='flex gap-5'>
                <label htmlFor='first name' className='font-bold'> First Name <span className='text-red-800'>*</span>
                  <input type='text' id='first name' className='border-gray-500 border p-2 w-full' />
                </label>
                <label htmlFor='last name' className='font-bold'> Last Name <span className='text-red-800'>*</span>
                  <input type='text' id='last name' className='border-gray-500 border p-2 w-full' />
                </label>
              </div>
              <label htmlFor='email' className='font-bold'> Email <span className='text-red-800'>*</span>
                <input type='email' id='email' className='border-gray-500 border p-2 w-full' />
              </label>
              <label htmlFor='password' className='font-bold'> Password <span className='text-red-800'>*</span>
                <input type='password' id='password' className='border-gray-500 border p-2 w-full' />
              </label>
              <label htmlFor='password' className='font-bold'> Confirm Password <span className='text-red-800'>*</span>
                <input type='password' id='password' className='border-gray-500 border p-2 w-full' />
              </label>
              <button className='uppercase bg-black text-white w-full py-2 hover:bg-white hover:text-black transition-colors duration-200'>Create an Account</button>
            </form>
            <div className='flex flex-row justify-center items-center'>
              <hr className='border-none bg-gray-500 h-[1px] flex-1' />
              <p className='uppercase p-2 border rounded-full border-gray-500'>or</p>
              <hr className='border-none bg-gray-500 h-[1px] flex-1' />
            </div>
            <SocialMediaLogin />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>

  )
}

export default LoginSignTabs
