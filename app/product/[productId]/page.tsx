import React from 'react'

function ProductDetails({params}: {params: {productId: string}}) {
  return (
    <div>Prodcut Details {params.productId}</div>
  )
}

export default ProductDetails