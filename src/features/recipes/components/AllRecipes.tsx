'use client'

import React from 'react'
import { RecipeCard } from './RecipeCard'
import Link from 'next/link'
import { useGetAllRecipesQuery } from '../apis'


export const AllRecipes = () => {
    const { data, isLoading, isSuccess } = useGetAllRecipesQuery({})
  return (
    <div className='w-full'>
      <h1 className='text-3xl text-center w-full mb-4'>Recipes</h1>
      <Link href='/recipes/add' className='mb-6 flex w-full justify-end'>
        <span className='text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded'>
          Create Recipe
        </span>
      </Link>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4'>
        {(isLoading || !isSuccess) && <p>Loading...</p>}
        {isSuccess &&
          data?.recipes.map((recipe: any) => <RecipeCard key={recipe.id} {...recipe} />)}
      </div>
    </div>
  )
}

