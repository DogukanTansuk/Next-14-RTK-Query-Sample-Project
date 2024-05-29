// Feature Imports
import {UserModel, UserAccountStateModel} from './models'

// Package Imports
import {PayloadAction, createSlice} from '@reduxjs/toolkit'

const initialState: UserAccountStateModel = {
  userAccounts: null,
  userAccount: null,
}

export const {reducer, actions} = createSlice({
  name: 'userAccounts',
  initialState,
  reducers: {
    setUserAccounts: (
      state: UserAccountStateModel,
      {payload}: PayloadAction<Nullable<UserAccountModel[]>>
    ) => {
      state.userAccounts = payload
    },
    setUserAccount: (
      state: UserAccountStateModel,
      {payload}: PayloadAction<Nullable<UserAccountModel>>
    ) => {
      state.userAccount = payload
    },
  },
})

export const {setUserAccount, setUserAccounts} = actions
export default reducer
