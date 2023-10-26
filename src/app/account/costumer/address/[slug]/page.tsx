'use client'

import { useRouter } from 'next/navigation'

// React Imports
import { useState, useEffect } from 'react'

// Components Imports
import LabelInput from '@/components/account/label-input'

// Supabse Imports
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

// React-Hook-Form Imports
import { useForm, type FieldValues } from 'react-hook-form'

// UI Imports
import { useToast } from '@/components/ui/use-toast'
import { ToastAction } from '@/components/ui/toast'

// Info Imports
import { countryData } from '@/content'
import Link from 'next/link'

export default function EditAddress({ params }: { params: { slug: string } }) {
  const [address, setAddress] = useState<Array<Database['public']['Tables']['address']['Row']> | null>([])
  const [userId, setUserId] = useState<string | undefined>(undefined)
  const supabase = createClientComponentClient<Database>()
  const { toast } = useToast()
  const router = useRouter()

  useEffect(() => {
    const getAddress = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      const { data } = await supabase.from('address').select('*').eq('id', params.slug)
      setAddress(data)
      setUserId(user?.id)
    }

    getAddress()
  }, [])

  if (address !== null) {
    if (address?.length > 0) {
      if (address[0].user_id !== userId) {
        router.back()
      }
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: async () => {
      const { data } = await supabase.from('address').select('*').eq('id', params.slug)
      if (data !== null) {
        return data[0]
      }
    }
  })

  const onSubmit = async (formData: FieldValues) => {
    const { data: { user } } = await supabase.auth.getUser()
    const { data, error } = await supabase
      .from('address')
      .update({
        street: formData.street,
        apartment: formData.apartment,
        country: formData.country,
        state_province: formData.state_province,
        city: formData.city,
        zip_code: formData.zip_code,
        default: formData.default,
        user_id: user?.id
      })
      .eq('id', params.slug)
      .select()

    if (data !== null) {
      toast({
        title: 'Succesfully Updated',
        description: 'The account information was updated without a problem',
        duration: 3000,
        action: <ToastAction altText='go back to the list of address'><Link href='/account/costumer/address' className='bg-black px-10 py-2 mt-5 text-white inline w-fit hover:bg-white hover:text-black transition-colors duration-200'>Address List</Link></ToastAction>
      })
    }

    if (error !== null) {
      if (error.code === '23505') {
        toast({
          title: 'Default Shipping Address',
          description: 'it only can be one Default Shipping Address, use edit to change the default one if you wanna use this one',
          variant: 'destructive',
          duration: 7000
        })
      } else {
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
      <h1 className='uppercase font-bold text-xl'>Edit Address</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className='flex flex-col gap-5 py-5 justify-start group' disabled={isSubmitting}>
          <LabelInput title='Street Address' id='street' register={register('street', { required: 'The street Address is required' })} type='text' required error={errors?.street?.message?.toString()} />
          <LabelInput title='Apartament' id='apartment' register={register('apartment')} type='text' />
          <label htmlFor='countries' className='font-semibold [&>input]:font-normal space-y-2'>Country <span className='text-red-800'>*</span>
            <select className='border-border border p-3 w-full' {...register('country', { required: true })}>
              {countryData.map((country, idx) => (
                <option key={`Country-option-${country.label}-${idx}`} value={country.value}>{country.label}</option>
              ))}
            </select>
            {(errors.countries != null) && (
              <p className='text-red-700'>{errors.countries.message?.toString()}</p>
            )}
          </label>
          <LabelInput title='State/Province' id='state_province' register={register('state_province', { required: 'The State/Province is required' })} type='text' required error={errors?.state_province?.message?.toString()} />
          <LabelInput title='City' id='city' register={register('city', { required: 'The City is required' })} type='text' required error={errors?.city?.message?.toString()} />
          <LabelInput title='Zip Code' id='zip_code' register={register('zip_code', { required: 'The Zip Code is required' })} type='text' required error={errors?.zip_code?.message?.toString()} />
          <label htmlFor='default' className='flex flex-row-reverse w-full gap-3 font-semibold justify-center items-center'>Use as my default shipping address
            <input type='checkbox'
              className='appearance-none w-4 h-4 border-2 border-border rounded-sm bg-white checked:bg-black checked:border-0'
              {...register('default')} />
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
