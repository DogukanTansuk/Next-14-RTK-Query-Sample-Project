'use client'

import React, {FC} from 'react'

interface PostCommentsProps {
  body: string
  user: {
    id: number
    username: string
    fullName: string
  }
}

export const PostComments: FC<PostCommentsProps> = ({body, user}) => {
  return (
    <div className='mt-4'>
      <div className='flex'>
        <p className=' text-lg text-primary'>{user.fullName}</p>
        <p className=' text-lg text-primary pl-2'>({user.username})</p>
      </div>
      <p className='text-sm'>{body}</p>
    </div>
  )
}
