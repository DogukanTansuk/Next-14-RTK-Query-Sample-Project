'use client'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActionArea from '@mui/material/CardActionArea'
import {faEye, faHeart, faTag, faThumbsDown, faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {FC} from 'react'
import {useGetPostCommentsQuery, useGetPostQuery} from '../apis'
import {Post} from './Post'
import {PostComments} from './PostComments'

interface PostCardProps {
  title: string
  body: string
  tags: string[]
  reactions: {
    likes: number
    dislikes: number
  }
  views: number
}

export const PostDetail: FC<PostCardProps> = ({title, body, tags, reactions, views}) => {
  const {isSuccess, data, isError} = useGetPostCommentsQuery([])

  return (
    <>
      <Card sx={{maxWidth: 500}}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {title}
            </Typography>
            <Typography variant='body1' color='text.secondary'>
              {body}
            </Typography>
            <div className='mt-4'>
              <Typography variant='body2' color='text.secondary'>
                <FontAwesomeIcon icon={faTag} className=' me-4' />
                {tags}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                <FontAwesomeIcon icon={faThumbsUp} className=' me-4' />
                {reactions.likes}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                <FontAwesomeIcon icon={faThumbsDown} className=' me-4' />
                {reactions.dislikes}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                <FontAwesomeIcon icon={faEye} className=' me-2' /> {views}
              </Typography>
              {isSuccess &&
                data?.comments.map((comment: any) => (
                  <PostComments key={comment.id} body={comment.body} user={comment.user} />
                ))}
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  )
}
