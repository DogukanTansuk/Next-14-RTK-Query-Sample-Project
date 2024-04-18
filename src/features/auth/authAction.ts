// Feature Imports
import {UserModel} from './models'
import {setUser} from './authSlice'

// Package Imports
import {createAsyncThunk} from '@reduxjs/toolkit'

export const setUserAction = createAsyncThunk(
  'auth/setUserAction',
  async (user: Nullable<UserModel>, {dispatch}) => {
    dispatch(setUser(user))
  }
)
