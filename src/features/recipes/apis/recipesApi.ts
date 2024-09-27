
import {rtkQueryApi} from '@/libs/reduxToolkit'

export const recipesApi = rtkQueryApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRecipes: builder.query<any, any>({
      query: () => ({
        url: '/recipes',
        method: 'GET',
      }),
    }),
    getSingleRecipe: builder.query<any, any>({
      query: (id) => ({
        url: `/recipes/${id}`,
        method: 'GET',
      }),
    }),
  }),
})

export const {useGetAllRecipesQuery, useGetSingleRecipeQuery} = recipesApi
