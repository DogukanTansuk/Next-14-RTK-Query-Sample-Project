'use client'
// Feature Imports
import {UserModel} from './models/userModel'
import {AuthStateModel} from './models/authStateModel'

// Package Imports
import {PayloadAction, createSlice} from '@reduxjs/toolkit'

const initialState: AuthStateModel = {
  user: null,
}

export const {reducer, actions} = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state: AuthStateModel, {payload}: PayloadAction<Nullable<UserModel>>) => {
      state.user = payload
    },
  },
})

export const {setUser} = actions
export default reducer
