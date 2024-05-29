import {rtkQueryApi} from '@/libs/reduxToolkit'
import {AllUsersResponseModel, DeleteUserResponseModel, UserAccountModel} from '../models'

export const usersApi = rtkQueryApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query<AllUsersResponseModel, any>({
      query: (usersRequest) => ({
        url: '/users',
        method: 'GET',
        params: usersRequest,
      }),
    }),
    getUser: builder.query<UserAccountModel, any>({
      query: (user) => ({
        url: `/users/${user.id}`,
        method: 'GET',
        params: user,
      }),
    }),
    createUser: builder.mutation<any, any>({
      query: (data) => ({
        url: '/users/add',
        method: 'POST',
        body: data,
      }),
    }),
    updateUser: builder.mutation<any, any>({
      query: (data) => ({
        url: `/users/${data.id}`,
        method: 'PUT',
        body: data,
      }),
    }),
    deleteUser: builder.mutation<DeleteUserResponseModel, any>({
      query: (user) => ({
        url: `/users/${user.id}`,
        method: 'DELETE',
        params: user,
      }),
    }),
  }),
})

export const {
  useGetAllUsersQuery,
  useGetUserQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = usersApi
