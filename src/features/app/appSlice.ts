// Package Imports
import {PayloadAction, createSlice} from '@reduxjs/toolkit'

// Feature Imports
import {AppStateModel} from './models'

const initialState: AppStateModel = {
  appReady: false,
}

export const {reducer, actions} = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppReady: (state: AppStateModel, {payload}: PayloadAction<boolean>) => {
      state.appReady = payload
    },
  },
})

export const {setAppReady} = actions
export default reducer
