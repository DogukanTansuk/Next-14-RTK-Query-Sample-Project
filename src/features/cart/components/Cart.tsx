'use client'

import { useAppSelector } from '@/hooks'
import {useGetCartQuery, useGetCartsByUserQuery, useGetCartsQuery} from '../apis'
import {CartModel} from '../models'
import { getUserState } from '@/features/auth'

export const Cart = () => {
  const user = useAppSelector(getUserState)
  const {data, isSuccess} = useGetCartsQuery([])

  return (
    <div>
      <h1 className='text-3xl text-center w-full mb-6'>Cart</h1>
      <div>
        {isSuccess &&
          data &&
          data.carts?.map((cart: CartModel) => {
            return cart.products?.map((product) => {
              return (
                <div
                  key={cart.id}
                  className='flex items-center justify-between p-4 border-b border-gray-200'>
                  <div>
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className='w-20 h-20 object-cover'
                    />
                    <h3 className='text-lg'>{product.title}</h3>
                  </div>
                  <div>
                    <p className='text-lg'>$ {product.price}</p>
                  </div>
                </div>
              )
            })
          })}
      </div>
    </div>
  )
}
