// Feature Imports
import {UserAccountModel} from './models'
import {setUserAccount, setUserAccounts} from './userAccountSlice'

// Package Imports
import {createAction, createAsyncThunk} from '@reduxjs/toolkit'

export const setUserAccountAction = createAsyncThunk(
  'userAcccount/setUserAccount',
  (userAccount: Nullable<UserAccountModel>, {dispatch}) => dispatch(setUserAccount(userAccount))
)

export const setUserAccountsAction = createAsyncThunk(
  'userAcccount/setUserAccounts',
  (userAccounts: Nullable<UserAccountModel[]>, {dispatch}) =>
    dispatch(setUserAccounts(userAccounts))
)
