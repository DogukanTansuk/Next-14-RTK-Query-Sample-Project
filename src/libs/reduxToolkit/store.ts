'use client'

// Util and Lib Imports
import {reducers} from './reducers'

// Package Imports
import {configureStore} from '@reduxjs/toolkit'
import {rtkQueryApi} from './rtkQueryApi'

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: false,
      immutableCheck: false,
    }).concat(rtkQueryApi.middleware),
  devTools: true,
})
