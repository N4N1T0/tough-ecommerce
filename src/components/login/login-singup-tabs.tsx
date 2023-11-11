// Components Imports
import SocialMediaLogin from './social-media-login'
import SignUpForm from './sign-up-form'
import LoginForm from './login-form'

// Ui Imports
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Dialog,
  DialogContent,
  DialogTrigger
} from '@/components/ui/dialog'

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
            <LoginForm />
            <div className='flex flex-row justify-center items-center'>
              <hr className='border-none bg-gray-500 h-[1px] flex-1' />
              <p className='uppercase p-2 border rounded-full border-gray-500'>or</p>
              <hr className='border-none bg-gray-500 h-[1px] flex-1' />
            </div>
            <SocialMediaLogin />
          </TabsContent>
          <TabsContent value='signup' className='flex flex-col gap-5 w-full p-3'>
            <SignUpForm />
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
