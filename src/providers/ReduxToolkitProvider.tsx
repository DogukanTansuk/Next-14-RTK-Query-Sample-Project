// React Imports
import React, {FC, PropsWithChildren} from 'react'

// Util and Lib Imports
import {store} from '@/libs/reduxToolkit'

// Package Imports
import {Provider} from 'react-redux'

export const ReduxToolkitProvider: FC<PropsWithChildren> = ({children}) => {
  return <Provider store={store}>{children}</Provider>
}
