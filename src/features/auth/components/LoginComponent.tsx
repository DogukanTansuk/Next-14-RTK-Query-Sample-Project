'use client'

// React Imports
import React, {useEffect} from 'react'

// Feature Imports
import {useLoginMutation} from '../apis'
import {LoginRequestModel} from '../models'

// Next Imports
import Link from 'next/link'

// Package Imports
import {Copyright} from '@mui/icons-material'
import {
  Grid,
  CssBaseline,
  Paper,
  Box,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import {useFormik} from 'formik'

export const LoginComponent = () => {
  const [login, {isLoading, data, isError, isSuccess}] = useLoginMutation()

  const initialValues: LoginRequestModel = {
    username: '',
    password: '',
  }

  const {handleChange, handleSubmit} = useFormik({
    initialValues,
    onSubmit: (values) => login(values),
  })

  return (
    <Grid container component='main' sx={{height: '100vh'}}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <Box sx={{mt: 1}}>
            <TextField
              margin='normal'
              required
              onChange={handleChange}
              fullWidth
              id='username'
              label='Email Address'
              name='username'
              autoComplete='email'
              autoFocus
            />
            <TextField
              margin='normal'
              required
              fullWidth
              onChange={handleChange}
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
            />
            <Button
              type='button'
              disabled={isLoading}
              onClick={() => handleSubmit()}
              fullWidth
              variant='contained'
              sx={{mt: 3, mb: 2}}>
              {!isLoading ? 'Sign In' : 'Loading...'}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href='#'>Forgot password?</Link>
              </Grid>
              <Grid item>
                <Link href='#'>{"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
            <Copyright sx={{mt: 5}} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}
