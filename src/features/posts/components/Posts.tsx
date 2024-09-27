'use client'

import React from 'react'
import { PostCard } from './PostCard'
import { useGetPostsQuery } from '../apis'

export const Posts = () => {
  const {isSuccess, data, error} = useGetPostsQuery([])

  return (
    <div className='flex flex-wrap gap-4'>
       {isSuccess &&
          data?.posts.map((posts: any) => <PostCard key={posts.id} {...posts} />)}
    </div>
  )
}
