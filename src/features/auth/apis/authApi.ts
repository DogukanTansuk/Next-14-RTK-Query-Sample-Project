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
  }),
})

export const {useLoginMutation} = authApi
export default authApi
