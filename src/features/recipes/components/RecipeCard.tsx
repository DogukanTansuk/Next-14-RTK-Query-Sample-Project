'use client'
import React, {FC} from 'react'

// Material-UI Imports
import {styled} from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton, {IconButtonProps} from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import {red} from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Link from 'next/link'

export interface RecipeCardProps {
  id: number
  name: string
  prepTime: string
  cookTime: string
  difficulty: string
  image: string
  userId: number
}

export const RecipeCard: FC<RecipeCardProps> = ({
  id,
  name,
  prepTime,
  cookTime,
  difficulty,
  image,
  userId,
}) => {
  return (
    <div>
      <Card sx={{maxWidth: 345}}>
        <CardMedia component='img' height='194' image={image} alt={name} />
        <CardContent>
          <Typography variant='h5' color='text.secondary'>
            {name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {prepTime}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {cookTime}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {difficulty}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label='add to favorites'>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label='share'>
            <ShareIcon />
          </IconButton>
          <Link href='/recipes/[slug]' as={`/recipes/${id}`}>
            <IconButton aria-label='settings'>
              <MoreVertIcon />
            </IconButton>
          </Link>
        </CardActions>
      </Card>
    </div>
  )
}
