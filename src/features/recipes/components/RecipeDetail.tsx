'use client'

import React, {FC, useState} from 'react'

// Material-UI Imports
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

interface RecipeDetailProps {
  name: string
  ingredients: string[]
  instructions: string[]
  prepTimeMinutes: number
  cookTimeMinutes: number
  servings: number
  difficulty: string
  cuisine: string
  caloriesPerServing: number
  tags: string[]
  image: string
  rating: number
  reviewCount: number
  mealType: string[]
}

export const RecipeDetail:FC<RecipeDetailProps> = ({
  name,
  ingredients,
  instructions,
  prepTimeMinutes,
  cookTimeMinutes,
  servings,
  difficulty,
  cuisine,
  caloriesPerServing,
  tags,
  image,
  rating,
  reviewCount,
  mealType,
}) => {
  return (
    <Card sx={{maxWidth: 800}}>
      <CardMedia component='img' height='140' image={image} alt={name} />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {ingredients}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {instructions}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {prepTimeMinutes}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {cookTimeMinutes}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {servings}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {difficulty}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {cuisine}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {caloriesPerServing}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {tags}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {rating}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {reviewCount}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {mealType}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Share</Button>
      </CardActions>
    </Card>
  )
}
