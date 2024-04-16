/* eslint-disable react/display-name */
'use client'

// React Imports
import React from 'react'

// Feature Imports
import {getUserState} from '@/features/auth'

// Next Imports
import {useRouter} from 'next/navigation'

// Package Imports
import {useSelector} from 'react-redux'

export const withAuth = (Component: React.FC) => {
  return () => {
    const user = useSelector(getUserState)
    const router = useRouter()

    if (!user) {
      router.push('/auth/login')

      return null
    }

    return <Component />
  }
}
