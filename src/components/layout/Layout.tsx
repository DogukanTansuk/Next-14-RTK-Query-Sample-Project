'use client'

// React Imports
import React, { FC, PropsWithChildren } from 'react'

// Feature imports
import { getUserState } from '@/features/auth'

// Hook Imports
import { useAppSelector } from '@/hooks'

export const Layout: FC<PropsWithChildren> = ({children}) => {
    const isAuthorized = useAppSelector(getUserState)
  return (
    <main className={isAuthorized ? 'my-10 mx-10' : ''}> {children} </main>
  )
}
