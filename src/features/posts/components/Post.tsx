'use client'

// React Imports
import React from 'react'

// Feature Imports
import { PostDetail } from './PostDetail'

// Hook Imports
import {useGetPostQuery} from '../apis'

// Next Imports
import {useParams} from 'next/navigation'

export const Post = () => {
  const {slug} = useParams()
  const {isSuccess, data, isLoading} = useGetPostQuery(slug)

  return (
    <div className='w-full'>
      <h1 className='text-3xl text-center w-full mb-6'>{data?.title} </h1>
      <div className='flex justify-center items-center'>
        {isLoading && <p>Loading...</p>}
        {isSuccess && <PostDetail key={data?.id} {...data} />}
      </div>
    </div>
  )
}
