import ReviewForm from './review-form'
import { encodeProductDate } from '@/lib/utils'
import RatingClient from '../shared/rating-client'

interface Props {
  review: Array<{
    created_at: string
    id: number
    product_id: number
    text: string
    user: string
    score: number
  }>
  productId: number
}

const Reviews = ({ review, productId }: Props) => {
  const score = review.map((item) => item.score).reduce((acc, current) => acc + current, 0)

  return (
    <section className='max-w-[1400px] px-5 mx-auto pt-5 md:pt-0'>
      <p className='text-lg'>Products Review</p>
      <hr className='w-full border-0 bg-border h-[1px]' />
      <div className='flex flex-col md:flex-row md:items-start items-center justify-center p-5 md:p-10 gap-5 md:gap-0'>
        <div className='flex justify-center items-center flex-col gap-3 flex-1'>
          <p className='text-6xl font-medium'>{score}/5</p>
          <RatingClient score={score} size={50} />
          <p>{review.length} Reviews</p>
        </div>
        <div className='flex-1 w-full'>
          <ReviewForm productId={productId} />
        </div>
        <div className='flex-1 px-5'>
          {review.map((item) => (
            <div key={item.id}>
              <div className='flex justify-between items-center'>
                <strong>{item.user}</strong>
                <small>{encodeProductDate(item.created_at)}</small>
              </div>
              <p>{item.text}</p>
              <RatingClient size={15} score={item.score} />
            </div>
          ))}
        </div>
      </div>
      <hr className='w-full border-0 bg-border h-[1px]' />
    </section >
  )
}

export default Reviews
