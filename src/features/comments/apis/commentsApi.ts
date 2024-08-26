import {rtkQueryApi} from '@/libs/reduxToolkit'
import { CommentsResponseModel } from '../models'

export const commentsApi = rtkQueryApi.injectEndpoints({
  endpoints: (builder) => ({
    getComments: builder.query<CommentsResponseModel, any>({
      query: () => ({
        url: '/comments',
        method: 'GET',
      }),
    }),
  }),
})

export const {useGetCommentsQuery} = commentsApi
