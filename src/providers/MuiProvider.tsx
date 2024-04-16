'use client'

// React Imports
import React, {FC, PropsWithChildren} from 'react'

// Package Imports
import {ThemeProvider, createTheme} from '@mui/material'

const defaultTheme = createTheme()
export const MuiProvider: FC<PropsWithChildren> = ({children}) => {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
}
