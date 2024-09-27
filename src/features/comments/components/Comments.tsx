'use client'

import React, {FC} from 'react'

interface CommentsProps {
  body: string
  user: {
    id: number
    username: string
    fullName: string
  }
  likes: number
}

export const Comments: FC<CommentsProps> = ({body, user, likes}) => {
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
