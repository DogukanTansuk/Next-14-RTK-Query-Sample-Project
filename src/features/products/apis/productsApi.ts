import {rtkQueryApi} from '@/libs/reduxToolkit'
import {CategoriesResponseModel, ProductsResponseModel} from '../models'
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
    getCategories: builder.query<string[], any>({
      query: () => ({
        url: '/products/categories',
        method: 'GET',
      }),
    }),
    createProduct: builder.mutation<any, any>({
      query: (data) => ({
        url: '/products/add',
        method: 'POST',
        body: data,
      }),
    }),
    updateProduct: builder.mutation<any, any>({
      query: (data) => ({
        url: `/products/${data.id}`,
        method: 'PUT',
        body: data,
      }),
    }),
  }),
})

export const {useGetProductsQuery, useGetProductQuery, useGetCategoriesQuery, useCreateProductMutation, useUpdateProductMutation} = productsApi
export default productsApi
