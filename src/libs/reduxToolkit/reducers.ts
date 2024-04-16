// Feature Imports
import authSlice from '@/features/auth/authSlice'

// Package Imports
import {combineReducers} from '@reduxjs/toolkit'

export const reducers = combineReducers({
  auth: authSlice,
})
