'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Loader } from '@/components/ui/loader'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [hasToken, setHasToken] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('/sign-in')
    } else {
      setHasToken(true)
    }
    setIsLoading(false)
  }, [router])

  if (isLoading) {
    return <Loader />
  }

  if (!hasToken) {
    return null // Return null since we're redirecting
  }

  return <>{children}</>
} 