'use client'

import { Rating } from 'react-simple-star-rating'

const RatingClient = ({ score, size }: { score: number, size: number }) => {
  return (
    <Rating
      initialValue={score}
      readonly
      fillColor='#000000'
      emptyColor='#ffffff'
      SVGstrokeColor='#000000'
      SVGstorkeWidth={1}
      allowFraction
      size={size}
    />
  )
}

export default RatingClient
