import { apiSlice } from '../../api/apiSlice'
import { setCredentials, logout } from './authSlice'


export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
      // When login is successful, automatically verify token
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCredentials(data));
        } catch {}
      },
    }),
    register: builder.mutation({
      query: (userData) => ({
        url: '/auth/register',
        method: 'POST',
        body: userData,
      }),
      // When registration is successful, automatically verify token
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCredentials(data));
        } catch {}
      },
    }),
    verify: builder.query({
      query: () => ({
        url: '/auth/verify',
        method: 'GET',
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          // Assuming the token is stored in localStorage
          const token = localStorage.getItem('token');
          dispatch(setCredentials({ user: data.user, token: token || '' }));
        } catch (err) {
          console.log(err)
          dispatch(logout());
        }
      },
    }),
  }),
})

export const { useLoginMutation, useRegisterMutation, useVerifyQuery } = authApiSlice 