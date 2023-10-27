'use client'

// Next.js Imports
import Link from 'next/link'

// React Imports
import { useState, useEffect } from 'react'

// Components Imports
import HeaderLine from '@/components/account/header-line'
import LabelInput from '@/components/account/label-input'

// Supabse Imports
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

// React-Hook-Form Imports
import { useForm, type FieldValues } from 'react-hook-form'

// UI Imports
import { useToast } from '@/components/ui/use-toast'

// Info Imports
import { countryData } from '@/content'

export default function AddressPage() {
  const [address, setAddress] = useState<Array<Database['public']['Tables']['address']['Row']> | null>([])
  const supabase = createClientComponentClient<Database>()
  const { toast } = useToast()

  useEffect(() => {
    const getAddress = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (user?.id !== undefined) {
        const { data } = await supabase.from('address').select('*').eq('user_id', user?.id)
        setAddress(data)
      }
    }

    getAddress()
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm()

  const onSubmit = async (formData: FieldValues) => {
    const { data: { user } } = await supabase.auth.getUser()
    const { data, error } = await supabase
      .from('address')
      .insert({
        street: formData.street,
        apartment: formData.apartment,
        country: formData.country,
        state_province: formData.state_province,
        city: formData.city,
        zip_code: formData.zip_code,
        default: formData.default,
        user_id: user?.id
      })
      .select()

    if (data !== null) {
      toast({
        title: 'Succesfully Updated',
        description: 'The account information was updated without a problem',
        duration: 3000
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

    reset()
  }

  return (
    <section>
      <h1 className='uppercase font-bold text-xl'>Address Book</h1>
      <div className='flex justify-center items-start gap-10 py-5'>
        <div className='flex-1'>
          <HeaderLine text='Address List' />
          <ul className='space-y-5 py-5'>
            {address?.map((item, idx) => (
              <li key={`Address-${item.id}`} className={`border-[1px] p-5 ${item.default ? 'border-black' : 'border-border'}`}>
                <p>{item.street} , {item.apartment} , {item.city} , {item.country}</p>
                <Link href={`/account/costumer/address/${item.id}`} className='underline hover:text-gray-600 transition-colors duration-200'>Edit</Link>
              </li>
            ))}
          </ul>
          {/* Addredd Lists */}
        </div>
        {/* New Address Form */}
        <div className='flex-1'>
          <HeaderLine text='New Address' />
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
        </div>
      </div>
    </section>
  )
}
