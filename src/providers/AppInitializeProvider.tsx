'use client'

// React Imports
import {FC, PropsWithChildren, useEffect, useState} from 'react'

// Feature Imports
import {useLazyMeQuery} from '@/features/auth/apis'

// Hook Imports
import {useAppDispatch} from '@/hooks'

// Next Imports
import {useRouter} from 'next/navigation'

// Package Imports
import Cookies from 'js-cookie'
import {UserModel} from '@/features/auth/models'
import {setUserAction} from '@/features/auth'

export const AppInitializeProvider: FC<PropsWithChildren> = ({children}) => {
  const [isAppInitialized, setIsAppInitialized] = useState(false)
  const router = useRouter()
  const token = Cookies.get('token')

  const dispatch = useAppDispatch()
  const [me, {isLoading, isSuccess, isError, data}] = useLazyMeQuery()

  useEffect(() => {
    if (!token) {
      router.push('/auth/login')

      setIsAppInitialized(true)
    } else me({})
  }, [])

  useEffect(() => {
    if (isSuccess && data) {
      const setUser = (user: Nullable<UserModel>) => dispatch(setUserAction(user))
      setUser(data)
    }

    if (!isLoading && (isSuccess || isError)) setIsAppInitialized(true)
  }, [isLoading, isSuccess, isError, data])

  return (
    <>
      {isAppInitialized && <> {children} </>}
      {!isAppInitialized && <> Loading... </>}
    </>
  )
}
