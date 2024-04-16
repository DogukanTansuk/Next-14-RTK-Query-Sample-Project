// Feature Imports
import authSlice from '@/features/auth/authSlice'

// Util and Lib Imports
import {rtkQueryApi} from './rtkQueryApi'

// Package Imports
import {combineReducers} from '@reduxjs/toolkit'

export const reducers = combineReducers({
  [rtkQueryApi.reducerPath]: rtkQueryApi.reducer, // reducerPath rtkQueryApi içinde tanımlanan ve belirleyici ad olarak kullanılan değişkendir. "splitApi" olarak tanımlanmıştır.
  auth: authSlice,
})
