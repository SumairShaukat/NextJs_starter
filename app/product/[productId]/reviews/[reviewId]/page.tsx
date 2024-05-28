import React from 'react'

function ReviewDetails({params}: {params: {reviewId: string, productId: string}}) {
  return (
    <div>ReviewDetails {params.reviewId} an prduct {params.productId} </div>
  )
}

export default ReviewDetails