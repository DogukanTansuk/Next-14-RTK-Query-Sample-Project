'use client'

import React, {FC, useState} from 'react'

// Material-UI Imports
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import {useParams} from 'next/navigation'

interface ProductDetailProps {
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

export const ProductDetail: FC<ProductDetailProps> = ({
  title,
  description,
  price,
  discountPercentage,
  rating,
  stock,
  brand,
  category,
  thumbnail,
  images,
}) => {

  return (
    <Card sx={{maxWidth: 800}}>
      {images && images.length > 0 ? (
        <CardMedia component='img' height='140' image={images[0]} alt={title} />
      ) : null}
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {description}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {price}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {discountPercentage}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {rating}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {stock}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {brand}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {category}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {thumbnail}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Share</Button>
      </CardActions>
    </Card>
  )
}
