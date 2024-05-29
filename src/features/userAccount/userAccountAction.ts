// Feature Imports
import {UserModel} from './models'
import {setUserAccount, setUserAccounts} from './userAccountSlice'

// Package Imports
import {createAction, createAsyncThunk} from '@reduxjs/toolkit'

export const setUserAccountAction = createAsyncThunk(
  'userAcccount/setUserAccount',
  (userAccount: Nullable<UserModel>, {dispatch}) => dispatch(setUserAccount(userAccount))
)

export const setUserAccountsAction = createAsyncThunk(
  'userAcccount/setUserAccounts',
  (userAccounts: Nullable<UserModel[]>, {dispatch}) =>
    dispatch(setUserAccounts(userAccounts))
)
