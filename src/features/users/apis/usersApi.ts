import { rtkQueryApi } from "@/libs/reduxToolkit";
import { AllUsersResponseModel, UserModel } from "../models";

export const usersApi = rtkQueryApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllUsers: builder.query<AllUsersResponseModel, any>({
            query: () => ({
                url: '/users',
                method: 'GET',
            }),
        }),
        getUser: builder.query<UserModel, any>({
            query: (id) => ({
                url: `/users/${id}`,
                method: 'GET',
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
    }),

})

export const { useGetAllUsersQuery, useGetUserQuery, useCreateUserMutation, useUpdateUserMutation } = usersApi

    