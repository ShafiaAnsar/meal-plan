'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export function AuthCheck() {
  const router = useRouter()
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null

  useEffect(() => {
    if (!token) {
      router.push('/sign-in')
    } else if (window.location.pathname === '/') {
      router.push('/dashboard')
    }
  }, [token, router])

  return null
} 