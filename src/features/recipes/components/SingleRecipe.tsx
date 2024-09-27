'use client'
// Next Imports
import {useParams} from 'next/navigation'
import React from 'react'
import { RecipeDetail } from './RecipeDetail'
import { useGetSingleRecipeQuery } from '../apis'

export const SingleRecipe = () => {
    const {slug} = useParams()
    const {isSuccess, data, isLoading} = useGetSingleRecipeQuery(slug)
  
    return (
      <div className='w-full'>
        <h1 className='text-3xl text-center w-full mb-6'>{data?.title} </h1>
        <div className='flex justify-center items-center'>
          {isLoading && <p>Loading...</p>}
          {isSuccess && <RecipeDetail key={data?.id} {...data} />}
        </div>
      </div>
    )
}
