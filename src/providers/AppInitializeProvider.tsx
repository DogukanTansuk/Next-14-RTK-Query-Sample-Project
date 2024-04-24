'use client'

// React Imports
import {FC, PropsWithChildren, useEffect, useState} from 'react'

// Feature Imports
import {useLazyMeQuery} from '@/features/auth/apis'

// Hook Imports
import {useAppDispatch, useAppSelector} from '@/hooks'

// Next Imports
import {useRouter} from 'next/navigation'

// Package Imports
import Cookies from 'js-cookie'
import {UserModel} from '@/features/auth/models'
import {setUserAction} from '@/features/auth'
import {getAppReady, setAppReady} from '@/features/app'

export const AppInitializeProvider: FC<PropsWithChildren> = ({children}) => {
  const isAppInitialized = useAppSelector(getAppReady)
  const router = useRouter()
  const token = Cookies.get('token')

  const dispatch = useAppDispatch()
  const setAppInitialized = () => dispatch(setAppReady(true))
  const [me, {isLoading, isSuccess, isError, data}] = useLazyMeQuery()

  useEffect(() => {
    if (!token) {
      router.push('/auth/login')

      setAppInitialized()
    } else me({})
  }, [])

  useEffect(() => {
    if (isSuccess && data) {
      const setUser = (user: Nullable<UserModel>) => dispatch(setUserAction(user))
      setUser(data)
    }

    if (!isLoading && (isSuccess || isError)) setAppInitialized()
  }, [isLoading, isSuccess, isError, data])

  return (
    <>
      {isAppInitialized && children}
      {!isAppInitialized && <div>Loading...</div>}
    </>
  )
}
