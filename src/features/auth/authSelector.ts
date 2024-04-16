// Util and Lib Imports
import {RootState} from '@/libs/reduxToolkit/models'

// Package Imports
import {createSelector} from '@reduxjs/toolkit'

export const getUserState = createSelector(
  ({auth: {user}}: RootState) => user,
  (user) => user
)
