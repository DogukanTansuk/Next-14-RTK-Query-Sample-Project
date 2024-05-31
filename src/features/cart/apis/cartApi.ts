import {rtkQueryApi} from '@/libs/reduxToolkit'
import {get} from 'http'

export const cartApi = rtkQueryApi.injectEndpoints({
  endpoints: (builder) => ({
    getCarts: builder.query<any, any>({
      query: () => ({
        url: '/carts',
        method: 'GET',
      }),
    }),
    getCart: builder.query<any, any>({
      query: (id) => ({
        url: `/carts/${id}`,
        method: 'GET',
      }),
    }),
    getCartsByUser: builder.query<any, any>({
      query: (id) => ({
        url: `/carts/user/${id}`,
        method: 'GET',
      }),
    }),
    addToCart: builder.mutation<any, any>({
      query: (data) => ({
        url: '/carts/add',
        method: 'POST',
        body: data,
      }),
    }),
    updateCart: builder.mutation<any, any>({
      query: (data) => ({
        url: `/carts/${data.id}`,	
        method: 'PUT',
        body: data,
      }),
    }),
    removeFromCart: builder.mutation<any, any>({
      query: (data) => ({
        url: `/carts/${data.id}`,
        method: 'DELETE',
        body: data,
      }),
    }),
  }),
})

export const {useGetCartQuery, useGetCartsQuery, useGetCartsByUserQuery, useAddToCartMutation, useUpdateCartMutation, useRemoveFromCartMutation} = cartApi
