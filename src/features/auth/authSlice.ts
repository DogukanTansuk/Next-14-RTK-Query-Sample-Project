// Feature Imports
import {AuthStateModel} from './models/authStateModel'

// Package Imports
import {createSlice} from '@reduxjs/toolkit'

const initialState: AuthStateModel = {
  user: null,
}

export const {reducer, actions} = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: () => {},
  },
})

export const {setUser} = actions
export default reducer
