import {useGetCommentsQuery} from '@/features/comments'
import {rtkQueryApi} from '@/libs/reduxToolkit'
import {PostsResponseModel} from '../models'
import { PostCommentsResponseModel } from '../models/postCommentsResponseModel'

export const postsApi = rtkQueryApi.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<PostsResponseModel, any>({
      query: () => ({
        url: '/posts',
        method: 'GET',
      }),
    }),

    getPost: builder.query<PostsResponseModel, any>({
      query: (id) => ({
        url: `/posts/${id}`,
        method: 'GET',
      }),
    }),

    getPostComments: builder.query<PostCommentsResponseModel, string[]>({
      query: (slug) => ({
        url: `/posts/${slug}/comments`,
        method: 'GET',
      }),
    }),
  }),
})

export const {useGetPostsQuery, useGetPostCommentsQuery, useGetPostQuery} = postsApi
