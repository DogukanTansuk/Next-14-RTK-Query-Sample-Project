// Util and Lib Imports
import {RootState} from '@/libs/reduxToolkit/models'

// Package Imports
import {createSelector} from '@reduxjs/toolkit'

export const getCartsState = createSelector(
  ({cart: {carts}}: RootState) => carts,
  (carts) => carts
)

export const getCartState = createSelector(
  ({cart: {cart}}: RootState) => cart,
  (cart) => cart
)
