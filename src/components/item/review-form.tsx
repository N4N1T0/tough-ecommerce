'use client'

// React Imports
import { useState } from 'react'

// Next.js Import
import { useRouter } from 'next/navigation'

// Components Imports
import { Rating } from 'react-simple-star-rating'

// Supabase Imports
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

// React-Hook-Fomr Imports
import { useForm, type FieldValues } from 'react-hook-form'

// UI Imports
import { useToast } from '@/components/ui/use-toast'

function ReviewForm({ productId }: { productId: number }) {
  const [score, setScore] = useState<number>(0)
  // Supabase Client and UI Toast
  const supabase = createClientComponentClient<Database>()
  const { toast } = useToast()
  const router = useRouter()

  // UseForm hook from React-Hook-Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm()

  // Onsubmnit function for the form
  const onSubmit = async (formData: FieldValues) => {
    const { data, error } = await supabase
      .from('reviews')
      .insert({
        user: formData.name,
        text: formData.review,
        score,
        product_id: productId
      })
      .select()

    if (data !== null) {
      toast({
        title: 'Succesfully Review Send',
        description: 'The Review information about the product was send without issues',
        duration: 4000
      })

      if (error !== null) {
        toast({
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem Sending the Review',
          variant: 'destructive',
          duration: 4000
        })
      }

      setScore(0)
      reset()
      setTimeout(() => { router.refresh() }, 5000)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='py-10 md:py-0 md:px-10 border-y-2 md:border-y-0 md:border-x-2 border-border/60'>
      <fieldset disabled={isSubmitting} className='flex flex-col gap-3 group'>
        <p className='font-medium'>Right a Review</p>
        <Rating
          className='rating'
          fillColor='#000000'
          emptyColor='#ffffff'
          SVGstrokeColor='#000000'
          SVGstorkeWidth={1}
          allowFraction
          initialValue={score}
          onClick={(e) => { setScore(e) }}
        />
        <input type='text' placeholder='Full Name' className='border-border border p-2 w-full' {...register('name', { required: 'Name is required' })} />
        {
          errors.name !== undefined
            ? (
              <p className='text-red-700'>{errors?.name?.message?.toString()}</p>
            )
            : null
        }
        <textarea cols={10} rows={3} className='border-border border p-2 w-full' {...register('review', { required: 'Review is required' })} />
        {
          errors.review !== undefined
            ? (
              <p className='text-red-700'>{errors?.review?.message?.toString()}</p>
            )
            : null
        }
        <button className='bg-black px-10 py-2 text-white inline w-fit hover:bg-white hover:text-black transition-colors duration-200 group-disabled:pointer-events-none'>
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
  )
}

export default ReviewForm
