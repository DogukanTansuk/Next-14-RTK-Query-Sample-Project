'use client'

import React from 'react'
import {ProductCard} from './ProductCard'
import {useGetProductsQuery} from '../apis'

export const Products = () => {
  const {isSuccess, data, isLoading} = useGetProductsQuery({})

  return (
    <div className='w-full'>
      <h1 className='text-3xl text-center w-full mb-6'>Products</h1>
      <div className='flex flex-wrap gap-4'>
        {isLoading && <p>Loading...</p>}
        {isSuccess &&
          data?.products.map((product: any) => <ProductCard key={product.id} {...product} />)}
      </div>
    </div>
  )
}
