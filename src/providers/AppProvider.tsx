'use client'

// React Imports
import React, {FC, PropsWithChildren} from 'react'
import {ReduxToolkitProvider} from './ReduxToolkitProvider'
import {MuiProvider} from './MuiProvider'
import {AppInitializeProvider} from './AppInitializeProvider'

interface AppProviderProps extends PropsWithChildren {}

export const AppProvider: FC<AppProviderProps> = ({children}) => {
  return (
    <ReduxToolkitProvider>
      <MuiProvider>
        <AppInitializeProvider>{children}</AppInitializeProvider>
      </MuiProvider>
    </ReduxToolkitProvider>
  )
}
