import {rtkQueryApi} from '@/libs/reduxToolkit'
import {ProductsResponseModel} from '../models'
import {ProductResponseModel} from '../models/productResponseModel'

export const productsApi = rtkQueryApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<ProductsResponseModel, any>({
      query: () => ({
        url: '/products',
        method: 'GET',
      }),
    }),
    getProduct: builder.query<ProductResponseModel, any>({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'GET',
      }),
    }),
  }),
})

export const {useGetProductsQuery, useGetProductQuery} = productsApi
export default productsApi
