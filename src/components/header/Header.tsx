'use client'
// React Imports
import React, {FC, useState} from 'react'

// Package Imports
import {Box, AppBar, Toolbar, IconButton, Drawer, MenuItem, Menu} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping, faRightFromBracket} from '@fortawesome/free-solid-svg-icons'

// Feature Imports
import {withAuth} from '@/hocs'
import {AccountCircle} from '@mui/icons-material'
import {DrawerList} from './DrawerList'
import Link from 'next/link'
import {useAppDispatch} from '@/hooks'
import {logoutAction} from '@/features/auth'

const Header = withAuth(() => {
  const [auth, setAuth] = React.useState(true)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked)
  }

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const [open, setOpen] = React.useState(false)

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  const dispatch = useAppDispatch()
  const logout = () => dispatch(logoutAction())

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position='static'>
        <Toolbar className='flex justify-between w-full'>
          <div>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{mr: 2}}
              onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor='left' open={open} onClose={toggleDrawer(false)}>
              <DrawerList />
            </Drawer>
          </div>

          {auth && (
            <>
              <div className='flex'>
                <IconButton
                  size='large'
                  aria-label='account of current user'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  onClick={handleMenu}
                  color='inherit'>
                  <AccountCircle />
                </IconButton>
                <Menu
                  id='menu-appbar'
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
                <MenuItem>
                  <Link href='/cart'>
                    <div className='border-red-500 border-2 rounded-full relative w-4 h-4 items-center bg-red-500 -mb-2 ms-4'>
                      <span className='text-white absolute text-center text-xs px-[1px] '>1</span>
                    </div>
                    <FontAwesomeIcon icon={faCartShopping} />
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <FontAwesomeIcon icon={faRightFromBracket} onClick={() => logout()} />
                </MenuItem>
              </div>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
})
export default Header
