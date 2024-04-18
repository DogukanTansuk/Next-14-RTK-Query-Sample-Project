'use client'

// Feature Imports
import {LoginRequestModel} from '../models/loginRequestModel'
import {UserModel} from '../models/userModel'

// Util and Lib Imports
import {rtkQueryApi} from '@/libs/reduxToolkit'

export const authApi = rtkQueryApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<UserModel, LoginRequestModel>({
      query: (loginRequest) => {
        return {
          url: '/auth/login',
          method: 'POST',
          data: loginRequest,
        }
      },
    }),
    me: build.query<UserModel, any>({
      query: () => {
        return {
          url: '/auth/me',
          method: 'GET',
        }
      },
    }),
  }),
})

export const {useLoginMutation, useLazyMeQuery} = authApi
export default authApi
