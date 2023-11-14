'use client'

// Supabse Imports
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

// React-Hook-Form Imports
import { useForm, type FieldValues } from 'react-hook-form'

// UI Imports
import { useToast } from '@/components/ui/use-toast'
import HeaderLine from '@/components/account/header-line'

export default function AccountEmailList() {
  // Constanst for the Supabase CLient and the toast
  const supabase = createClientComponentClient<Database>()
  const { toast } = useToast()

  // React Hook Form Destructuring
  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm({
    defaultValues: async () => {
      const { data } = await supabase.from('profiles').select('future_deals_signup, new_products_alerts_signup')
      if (data !== null) {
        return data[0]
      }
    }
  })

  // on Submit function for the Email Updated
  const onSubmit = async (formData: FieldValues) => {
    const { data: { user } } = await supabase.auth.getUser()
    if (user?.id !== undefined) {
      const { data, error } = await supabase
        .from('profiles')
        .update({
          new_products_alerts_signup: formData.new_products_alerts_signup,
          future_deals_signup: formData.future_deals_signup
        })
        .eq('id', user?.id)
        .select()

      // Toast fo the Succesfully Updated
      if (data !== null) {
        toast({
          title: 'Succesfully Updated',
          description: 'The account information was updated without a problem',
          duration: 3000
        })
      }

      // Toast for the Error
      if (error !== null) {
        toast({
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem updating the account information',
          variant: 'destructive',
          duration: 3000
        })
      }
    }
  }

  return (
    <section>
      <h1 className='uppercase font-bold text-xl'>Email Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className='flex flex-col gap-5 py-5 justify-start group' disabled={isSubmitting}>
          <HeaderLine text='Future Deals' />
          <label htmlFor='default' className='flex flex-row-reverse w-full gap-3 justify-end items-center my-3'>Sign up for Everlast Email to receive alerts for Future Deals and holidays disccounts
            <input type='checkbox'
              className='appearance-none w-4 h-4 border-2 border-border rounded-sm bg-white checked:bg-black checked:border-0 shrink-0'
              {...register('future_deals_signup')} />
          </label>
          <HeaderLine text='New Products' />
          <label htmlFor='default' className='flex flex-row-reverse w-full gap-3 justify-end items-center my-3'>Sign up for Everlast Email to receive alerts when new Products and Collections are added to the Catalog
            <input type='checkbox'
              className='appearance-none w-4 h-4 border-2 border-border rounded-sm bg-white checked:bg-black checked:border-0 shrink-0'
              {...register('new_products_alerts_signup')} />
          </label>
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
