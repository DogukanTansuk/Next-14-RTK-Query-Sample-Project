'use client'

import {useGetAllProductCategoriesQuery} from '@/features'
//Package Imports
import {Box, List, ListItem, ListItemText, Divider, Collapse} from '@mui/material'
import Link from 'next/link'

// React Imports
import React, {useState} from 'react'

// Feature Imports

export const DrawerList = () => {
  const [open, setOpen] = React.useState(false)

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }
  const [openCategories, setOpenCategories] = useState(false)

  const handleCategoriesClick = () => {
    setOpenCategories(!openCategories)
  }

  const {isSuccess, data, isLoading} = useGetAllProductCategoriesQuery({})

  return (
    <Box sx={{width: 250}} role='presentation' onClick={toggleDrawer(false)}>
      <List>
        {['Users', 'Products'].map((text, index) => (
          <Link href={`/${text.toLowerCase()}`} key={text}>
            <ListItem button>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}

        <ListItem button onClick={handleCategoriesClick}>
          <ListItemText primary='Categories' />
          {openCategories ? <span>-</span> : <span>+</span>}
        </ListItem>
        <Collapse in={openCategories} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            {isLoading && <p>Loading...</p>}
            {isSuccess &&
              data?.map((category) => (
                <Link href={`/products/category/${category.slug}`} key={category.id}>
                  <ListItem button sx={{pl: 4}}>
                    <ListItemText primary={category.name} />
                  </ListItem>
                </Link>
              ))}
          </List>
        </Collapse>
      </List>
      <Divider />
    </Box>
  )
}
