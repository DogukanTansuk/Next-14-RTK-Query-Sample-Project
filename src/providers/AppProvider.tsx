'use client'

// React Imports
import React, {FC, PropsWithChildren} from 'react'
import {ReduxToolkitProvider} from './ReduxToolkitProvider'

interface AppProviderProps extends PropsWithChildren {}

export const AppProvider: FC<AppProviderProps> = ({children}) => {
  return <ReduxToolkitProvider>{children}</ReduxToolkitProvider>
}
