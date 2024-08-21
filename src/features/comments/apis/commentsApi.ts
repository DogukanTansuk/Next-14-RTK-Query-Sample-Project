import {rtkQueryApi} from '@/libs/reduxToolkit'

export const commentsApi = rtkQueryApi.injectEndpoints({
  endpoints: (builder) => ({
    getComments: builder.query({
      query: () => ({
        url: '/comments',
        method: 'GET',
      }),
    }),
  }),
})

export const {useGetCommentsQuery} = commentsApi
