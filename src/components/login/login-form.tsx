'use client'

// Next.js Imports
import { useRouter } from 'next/navigation'

// Components Imports
import LabelInput from '../account/label-input'

// Supabase Imports
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

// React Hook Form Imports
import { useToast } from '../ui/use-toast'

// UI Imports
import { useForm } from 'react-hook-form'

function LoginForm() {
  // Supabase Client and UI Toast
  const supabase = createClientComponentClient<Database>()
  const { toast } = useToast()

  // Next.js Route to refresh the Page
  const router = useRouter()

  // UseForm hook from React-Hook-Form
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })
  // SingIn function for the Login Tab
  const loginSubmit = async ({ email, password }: { email: string, password: string }) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error !== null) {
      console.log(error)
      toast({
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with the Login Try Again',
        variant: 'destructive',
        duration: 5000
      })
    }

    reset()
    router.refresh()
  }

  return (
    <form onSubmit={(handleSubmit(async (data) => { await loginSubmit(data) }))} >
      <fieldset disabled={isSubmitting} className='space-y-5 py-5'>
        <LabelInput id='email' title='Email' type='email' required register={register('email', { required: 'Email is required' })} error={errors?.email?.message?.toString()} />
        <div className='text-left'>
          <LabelInput id='password' title='Password' type='password' required register={register('password', { required: 'Password is required' })} error={errors?.password?.message?.toString()} />
          <p className='text-sm font-bold pt-1 text-right'>Forgot Your Password?</p>
        </div>
        <button className='uppercase bg-black text-white w-full py-2 hover:bg-white hover:text-black transition-colors duration-200 group-disabled:pointer-events-none disabled:bg-gray-700'>Login</button>
      </fieldset>
    </form>
  )
}

export default LoginForm
