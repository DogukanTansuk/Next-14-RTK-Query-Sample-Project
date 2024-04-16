// Package Importsƒ
import {AxiosRequestConfig, Method} from 'axios'
import {BaseQueryFn, createApi} from '@reduxjs/toolkit/query/react'

// Util and Lib Imports
import {axiosAgent} from '../axios'

interface ErrorModel {}

const axiosBaseQuery =
  (): BaseQueryFn<
    {
      url: string
      method: Method
      data?: AxiosRequestConfig['data']
      params?: AxiosRequestConfig['params']
      headers?: AxiosRequestConfig['headers']
    },
    unknown,
    ErrorModel
  > =>
  async ({url, method, data, params, headers}) => {
    try {
      const response = await axiosAgent({url, method, data, params, headers})

      return {data: response.data}
    } catch (axiosError) {
      const {response, status, data: errorData} = axiosError as any
      const errorObject = {
        status: status,
        code: response?.data?.errorDetails?.code || errorData?.errorDetails?.code || null,
        message: response?.data?.errorDetails?.message || errorData?.errorDetails?.message || null,
        detail: response?.data?.errorDetails?.detail || errorData?.errorDetails?.detail || null,
        date: response?.data?.errorDetails?.date || errorData?.errorDetails?.date || null,
      }

      return {
        error: errorObject,
      }
    }
  }

export const rtkQueryApi = createApi({
  reducerPath: 'splitApi',
  baseQuery: axiosBaseQuery(),
  keepUnusedDataFor: 30,
  tagTypes: ['Auth'],
  endpoints: () => ({}),
})
