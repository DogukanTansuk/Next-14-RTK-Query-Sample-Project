'use client'

// React Imports
import React, {useEffect} from 'react'

// Feature Imports
import {useLoginMutation} from '../apis'
import {LoginRequestModel, UserModel} from '../models'
import {setUserAction} from '../authAction'

// Hook Imports
import {useAppDispatch} from '@/hooks'

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
import {useRouter} from 'next/navigation'
import Cookies from 'js-cookie'
import * as Yup from 'yup'

export const LoginComponent = () => {
  const router = useRouter()

  const dispatch = useAppDispatch()
  const [login, {isLoading, data, isError, isSuccess}] = useLoginMutation()

  const initialValues: LoginRequestModel = {
    username: '',
    password: '',
  }
  const loginValidationSchema = Yup.object({
    username: Yup.string().required('Username Required'),
    password: Yup.string().required('Password Required'),
  })

  const {
    errors: {username, password},
    dirty,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema: loginValidationSchema,
    onSubmit: (values) => login(values),
  })

  useEffect(() => {
    Cookies.get('token') && router.push('/')
  }, [])

  useEffect(() => {
    if (isSuccess && data) {
      const setUser = (user: Nullable<UserModel>) => dispatch(setUserAction(user))
      setUser(data)
      Cookies.set('token', data.token, {path: '/', sameSite: 'strict', expires: 3600})

      router.push('/')
    }
  }, [isLoading, isSuccess, isError, data])

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
              error={!!username}
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
              error={!!password}
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
            />
            <Button
              type='button'
              disabled={isLoading || !!username || !!password || !dirty}
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
