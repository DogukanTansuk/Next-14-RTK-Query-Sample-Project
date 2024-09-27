'use client'
import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActionArea from '@mui/material/CardActionArea'
import {useGetPostsQuery} from '../apis'
import {faEye, faHeart, faTag} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import CardActions from '@mui/material/CardActions'
import Link from 'next/link'
import { Button } from '@mui/material'

interface PostCardProps {
  id: number
  title: string
  body: string
  tags: string[]
  reactions: {
    likes: number
    dislikes: number
  }
  views: number
}

export const PostCard: React.FC<PostCardProps> = ({id, title, body, tags, reactions, views}) => {
  const {data, isSuccess} = useGetPostsQuery([])

  const truncatedBody = body.length > 100 ? body.substring(0, 100) + '...' : body
  return (
    <Card sx={{maxWidth: 345}}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {truncatedBody}
          </Typography>
          <div className='mt-4'>
            <Typography variant='body2' color='text.secondary'>
              <FontAwesomeIcon icon={faTag} className=' me-4' />
              {tags}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              <FontAwesomeIcon icon={faHeart} className=' me-4' />
              {reactions.likes}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              <FontAwesomeIcon icon={faEye} className=' me-2' /> {views}
            </Typography>
          </div>
        </CardContent>
        <CardActions>
          <Button size='small'>Share</Button>
          <Link href='/posts/[slug]' as={`/posts/${id}`}>
            <Button size='small'>Learn More</Button>
          </Link>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}
