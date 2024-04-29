'use client'

import React from 'react'
import {ProductCard} from './ProductCard'
import {useGetProductsQuery} from '../apis'

export const Products = () => {
  const {isSuccess, data, isLoading} = useGetProductsQuery({})

  return (
    <div className='w-full'>
      <h1 className='text-3xl text-center w-full mb-6'>Products</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4'>
        {isLoading && <p>Loading...</p>}
        {isSuccess &&
          data?.products.map((product: any) => <ProductCard key={product.id} {...product} />)}
      </div>
    </div>
  )
}
