/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

interface AuthState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any | null
  token: string | null
  isAuthenticated: boolean
}

const getInitialToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token') || Cookies.get('token') || null
  }
  return null
}

const initialState: AuthState = {
  user: null,
  token: getInitialToken(),
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ user: any; token: string }>) => {
      state.user = action.payload.user
      state.token = action.payload.token
      state.isAuthenticated = true
      localStorage.setItem('token', action.payload.token)
      Cookies.set('token', action.payload.token)
    },
    logout: (state) => {
      state.user = null
      state.token = null
      state.isAuthenticated = false
      localStorage.removeItem('token')
      Cookies.remove('token')
    },
  },
})

export const { setCredentials, logout } = authSlice.actions
export default authSlice.reducer 