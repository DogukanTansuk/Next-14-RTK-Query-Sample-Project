'use client'

// React Imports
import React from 'react'

// Feature Imports
import { ProductDetail } from './ProductDetail'

// Hook Imports
import {useGetProductQuery} from '../apis'

// Next Imports
import {useParams} from 'next/navigation'

export const Product = () => {
  const {slug} = useParams()
  const {isSuccess, data, isLoading} = useGetProductQuery(slug)

  return (
    <div className='w-full'>
      <h1 className='text-3xl text-center w-full mb-6'>{data?.title} </h1>
      <div className='flex justify-center items-center'>
        {isLoading && <p>Loading...</p>}
        {isSuccess && <ProductDetail key={data?.id} {...data} />}
      </div>
    </div>
  )
}
