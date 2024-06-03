// Feature Imports
import {UserModel} from './models'
import {setLogout, setUser} from './authSlice'

// Package Imports
import {createAsyncThunk} from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

export const setUserAction = createAsyncThunk(
  'auth/setUserAction',
  async (user: Nullable<UserModel>, {dispatch}) => {
    dispatch(setUser(user))
  }
)

export const logoutAction = createAsyncThunk('auth/logoutAction', async (_, {dispatch}) => {
  dispatch(setLogout())
  Cookies.remove('token')
  window.location.pathname = '/auth/login'
})
