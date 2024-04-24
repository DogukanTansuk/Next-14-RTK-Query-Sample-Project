// Util and Lib Imports
import {RootState} from '@/libs/reduxToolkit/models'

// Package Imports
import {createSelector} from '@reduxjs/toolkit'

export const getAppReady = createSelector(
  ({app: {appReady}}: RootState) => appReady,
  (appReady: any) => appReady
)
