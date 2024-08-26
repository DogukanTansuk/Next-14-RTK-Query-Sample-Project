import {rtkQueryApi} from '@/libs/reduxToolkit'
import {
  AllProductsCategoriesResponseModel,
  CategoriesResponseModel,
  ProductsResponseModel,
} from '../models'
import {ProductResponseModel} from '../models/productResponseModel'

export const productsApi = rtkQueryApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<ProductsResponseModel, any>({
      query: (query) => ({
        url: `/products${query ? `/search?q=${query}` : ''}`,
        method: 'GET',
      }),
    }),
    getProduct: builder.query<ProductResponseModel, any>({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'GET',
      }),
    }),
    getAllProductCategories: builder.query<AllProductsCategoriesResponseModel, any>({
      query: () => ({
        url: '/products/categories',
        method: 'GET',
      }),
    }),
    getProductsCategoryList: builder.query<CategoriesResponseModel, any>({
      query: (category) => ({
        url: '/products/category-list',
        method: 'GET',
      }),
    }),
    getProductsByACategory: builder.query<ProductsResponseModel, any>({
      query: (category) => ({
        url: `/products/category/${category}`,
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

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetAllProductCategoriesQuery,
  useGetProductsByACategoryQuery,
  useGetProductsCategoryListQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
} = productsApi
export default productsApi
