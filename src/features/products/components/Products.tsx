'use client'

import React, {FC} from 'react'
import {ProductCard} from './ProductCard'
import {useGetProductsByACategoryQuery, useGetProductsQuery} from '../apis'
import Link from 'next/link'

interface ProductsProps {
  query?: string
}

export const Products: FC<ProductsProps> = ({query}) => {
  const {isSuccess, data, isLoading} = useGetProductsQuery(
    {},
    {
      skip: !!query,
    }
  )
  
  const {
    isSuccess: categoryIsSuccess,
    data: categoryData,
    isLoading: categoryIsLoading,
  } = useGetProductsByACategoryQuery(query, {
    skip: !query,
  })

  return (
    <div className='w-full'>
      <h1 className='text-3xl text-center w-full mb-4'>Products</h1>
      <Link href='/products/add' className='mb-6 flex w-full justify-end'>
        <span className='text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded'>
          Create Product
        </span>
      </Link>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4'>
        {(isLoading || categoryIsLoading) && <p>Loading...</p>}
        {isSuccess &&
          data?.products.map((product: any) => <ProductCard key={product.id} {...product} />)}

        {categoryIsSuccess &&
          categoryData?.products.map((product: any) => (
            <ProductCard key={product.id} {...product} />
          ))}
      </div>
    </div>
  )
}
