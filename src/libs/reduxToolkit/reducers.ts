// Feature Imports
import authSlice from '@/features/auth/authSlice'
import appSlice from '@/features/app/appSlice'
import userAccountSlice from '@/features/userAccount/userAccountSlice'

// Util and Lib Imports
import {rtkQueryApi} from './rtkQueryApi'

// Package Imports
import {combineReducers} from '@reduxjs/toolkit'
import cartSlice from '@/features/cart/cartSlice'

export const reducers = combineReducers({
  [rtkQueryApi.reducerPath]: rtkQueryApi.reducer, // reducerPath rtkQueryApi içinde tanımlanan ve belirleyici ad olarak kullanılan değişkendir. "splitApi" olarak tanımlanmıştır.
  auth: authSlice,
  app: appSlice,
  userAccount: userAccountSlice,
  cart: cartSlice,
})
