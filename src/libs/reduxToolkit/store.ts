// Util and Lib Imports
import {reducers} from './reducers'

// Package Imports
import {configureStore} from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: reducers,
  devTools: true,
})
