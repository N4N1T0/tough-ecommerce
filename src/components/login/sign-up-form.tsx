'use client'

// Next.js Imports
import Link from 'next/link'

// Components Imports
import LabelInput from '../account/label-input'

// Supabase Imports
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

// React Hook Form Imports
import { useToast } from '../ui/use-toast'

// UI Imports
import { useForm } from 'react-hook-form'

function SignUpForm() {
  // Supabase Client and UI Toast
  const supabase = createClientComponentClient<Database>()
  const { toast } = useToast()

  // UseForm hook from React-Hook-Form
  const {
    register,
    formState: { errors, isSubmitting },
    getValues,
    handleSubmit,
    reset
  } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirm_password: ''
    }
  })

  // SingUpSubmit function for SingUp Tab
  const singUpSubmit = async ({ email, password, fullName }: { email: string, password: string, fullName: string }) => {
    const { data: emailData } = await supabase.from('profiles').select('*').eq('email', email)

    if (emailData?.length === 0) {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name: fullName,
            email
          }
        }
      })

      if (data !== null) {
        toast({
          title: 'Succesfully SignUp',
          description: 'Please verified your email before login',
          duration: 5000,
          action: <Link className='uppercase bg-black text-white w-full py-2 hover:bg-white hover:text-black transition-colors duration-200 text-center' href='https://mail.google.com/mail/u/0/?q=noreply%40mail.app.supabase.io#search/noreply%40mail.app.supabase.io'>Link to the Email</Link>
        })
      }

      if (error !== null) {
        toast({
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem with the signUp, Try Again',
          variant: 'destructive',
          duration: 5000
        })
      }
    } else {
      toast({
        title: 'Your Already have an Account',
        description: 'Please Login, or if you forget your password try in the Login Tab',
        variant: 'destructive',
        duration: 5000
      })
    }

    reset()
  }

  return (
    <form onSubmit={(handleSubmit(async (data) => { await singUpSubmit(data) }))}>
      <fieldset disabled={isSubmitting} className='group flex flex-col gap-5'>
        <LabelInput id='fullName' title='Full Name' type='text' required register={register('fullName', { required: 'Full Name is required' })} error={errors?.fullName?.message?.toString()} />
        <LabelInput id='email' title='Email' type='email' required register={register('email', { required: 'Email is required' })} error={errors?.email?.message?.toString()} />
        <LabelInput id='password' title='Password' type='password' required register={register('password', {
          required: 'Password is required',
          minLength: {
            value: 7,
            message: 'Password minimum of 7 digits'
          }
        })} error={errors?.password?.message?.toString()} />
        <LabelInput id='confirm_password' title='Confirm Password' type='password' required register={register('confirm_password', {
          validate: (value: string) => value === getValues('password') || 'Password must match',
          required: 'Confirm Password is required'
        })} error={errors?.confirm_password?.message?.toString()} />
        <button className='uppercase bg-black text-white w-full py-2 hover:bg-white hover:text-black transition-colors duration-200 group-disabled:pointer-events-none disabled:bg-gray-700'>Create an Account</button>
      </fieldset>
    </form>
  )
}

export default SignUpForm
