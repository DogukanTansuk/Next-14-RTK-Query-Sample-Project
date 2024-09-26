import { rtkQueryApi } from "@/libs/reduxToolkit"

export const postsApi = rtkQueryApi.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<any, any>({
      query: () => ({
        url: '/posts',
        method: 'GET',
      }),
    }),
  }),
})


export const {useGetPostsQuery} = postsApi