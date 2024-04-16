'use client'

// Feature Imports
import {LoginComponent} from '@/features/auth/components/LoginComponent'
import {withAuth} from '@/hocs'

// Next Imports
import Image from 'next/image'

export const HomePage = withAuth(() => {
  return <>Home Page</>
})

export default HomePage
