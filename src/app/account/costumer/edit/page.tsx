'use client'

// Components Imports
import HeaderLine from '@/components/account/header-line'
import LabelInput from '@/components/account/label-input'

// Supabase Imports
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

// React-Hook-Fomr Imports
import { useForm, type FieldValues } from 'react-hook-form'

// UI Imports
import { useToast } from '@/components/ui/use-toast'

export default function CostumerEdit() {
  // Supabase Client and UI Toast
  const supabase = createClientComponentClient<Database>()
  const { toast } = useToast()

  // UseForm hook from React-Hook-Form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (user?.id !== undefined) {
        const { data } = await supabase.from('profiles').select('*').eq('id', user?.id)
        if (data !== null) {
          return data[0]
        }
      }
    }
  })

  // Onsubmnit function for the form
  const onSubmit = async (formData: FieldValues) => {
    const { data: { user } } = await supabase.auth.getUser()
    if (user?.id !== undefined) {
      const { data, error } = await supabase
        .from('profiles')
        .update({
          name: formData.name,
          email: formData.email,
          phone: formData.phone
        })
        .select()

      if (data !== null) {
        toast({
          title: 'Succesfully Updated',
          description: 'The account information was updated without a problem',
          duration: 4000
        })
      }

      if (error !== null) {
        toast({
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem updating the account information',
          variant: 'destructive',
          duration: 4000
        })
      }
    }
  }

  return (
    <section className='space-y-2'>
      <h1 className='font-bold text-xl uppercase mb-5'>Edit Account Information</h1>
      <HeaderLine text='account Information' />
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset disabled={isSubmitting} className='py-5 flex flex-col gap-5 group'>
          <LabelInput title='First Name' id='name' register={register('name', { required: true })} type='text' required />
          <LabelInput title='Email' id='email' register={register('email', { required: true })} type='text' required />
          <LabelInput title='Phone Number' id='phone' register={register('phone')} type='tel' />
          {(errors.confirm_password != null) && (
            <p className='text-red-700'>{errors.confirm_password.message?.toString()}</p>
          )}
          <button className='bg-black px-10 py-2 mt-5 text-white inline w-fit hover:bg-white hover:text-black transition-colors duration-200 group-disabled:pointer-events-none'>
            {isSubmitting
              ? (
                <>Saving...</>
              )
              : (
                <>Save</>
              )}
          </button>
        </fieldset>
      </form>
    </section>
  )
}
