import { rtkQueryApi } from "@/libs/reduxToolkit"
import { PostsResponseModel } from "../models"

export const postsApi = rtkQueryApi.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<PostsResponseModel, any>({
      query: () => ({
        url: '/posts',
        method: 'GET',
      }),
    }),
  }),
})


export const {useGetPostsQuery} = postsApi