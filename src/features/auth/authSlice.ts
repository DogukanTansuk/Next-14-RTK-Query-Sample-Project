'use client'
// Feature Imports
import {AuthStateModel} from './models/authStateModel'

// Package Imports
import {authApi} from './apis'
import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import {UserModel} from './models/userModel'

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
  extraReducers: (builder) => {
    builder.addMatcher(authApi?.endpoints?.login?.matchFulfilled, (state, {payload}) => {
      state.user = payload
    })
    builder.addMatcher(authApi?.endpoints?.login?.matchRejected, () => {
      // console.info('aaaa')
    })
  },
})

export const {setUser} = actions
export default reducer
