'use client'

// Next.js Imports
import SocialMediaLogin from './social-media-login'

// React Hook Form Imports
import { useForm } from 'react-hook-form'

// Ui Imports
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Dialog,
  DialogContent,
  DialogTrigger
} from '@/components/ui/dialog'
import LabelInput from '../account/label-input'

const LoginSignTabs = ({ tab, children }: { tab: 'signup' | 'login', children: React.ReactNode }) => {
  const {
    register,
    formState: { errors, isSubmitting },
    getValues
  } = useForm({
    defaultValues: {
      full_name: '',
      email: '',
      password: '',
      confirm_password: ''
    }
  })

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
            <form action='/auth/login-with-password' method='post' className='space-y-5 py-5'>
              <input type='text' name='email' placeholder='Email' className='border-gray-500 border p-2 w-full' />
              <div className='text-right'>
                <input type='password' name='password' placeholder='Password' className='border-gray-500 border p-2 w-full' />
                <p className='text-sm font-bold pt-1'>Forgot Your Password?</p>
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
            <form action='auth/signup-with-password' method='post'>
              <fieldset disabled={isSubmitting} className='group flex flex-col gap-5'>
                <LabelInput id='full_name' title='Full Name' type='text' required register={register('full_name', { required: 'Full Name is required' })} error={errors?.full_name?.message?.toString()} />
                <LabelInput id='email' title='Email' type='email' required register={register('email', { required: 'Email is required' })} error={errors?.email?.message?.toString()} />
                <LabelInput id='password' title='Password' type='password' required register={register('password', { required: 'Password is required' })} error={errors?.password?.message?.toString()} />
                <LabelInput id='confirm_password' title='Confirm Password' type='password' required register={register('confirm_password', {
                  validate: (value: string) => value === getValues('password') || 'Password must match',
                  required: 'Confirm Password is required',
                  minLength: 6
                })} error={errors?.confirm_password?.message?.toString()} />
                <button className='uppercase bg-black text-white w-full py-2 hover:bg-white hover:text-black transition-colors duration-200 group-disabled:pointer-events-none'>Create an Account</button>
              </fieldset>
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
