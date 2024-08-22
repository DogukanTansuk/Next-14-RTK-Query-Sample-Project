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

interface ProductCardProps {
  id: string
  title: string
  description: string
  price: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

export const ProductCard: FC<ProductCardProps> = ({
  title,
  description,
  price,
  brand,
  category,
  thumbnail,
  images,
  id,
}) => {
  const [showButton, setShowButton] = useState(false)
  const {slug} = useParams()

  return (
    <Card className='w-full'>
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
          {brand}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {category}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Share</Button>
        <Link href='/products/[slug]' as={`/products/${id}`}>
          <Button size='small'>Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  )
}
