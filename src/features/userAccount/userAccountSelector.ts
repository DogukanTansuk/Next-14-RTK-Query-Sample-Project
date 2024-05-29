import {RootState} from '../../libs/reduxToolkit/models/rootState'

export const getUserAccountsState =
  () =>
  ({userAccount: {userAccounts}}: RootState) =>
    userAccounts

export const getUserAccountState =
  () =>
  ({userAccount: {userAccount}}: RootState) =>
    userAccount
