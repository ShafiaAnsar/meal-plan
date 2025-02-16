import { apiSlice } from "../../api/apiSlice"

interface FamilyMember {
  name: string
  email: string
  dietaryRestriction: string
}

export const familyMemberApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFamilyMembers: builder.query<FamilyMember[], void>({
      query: () => ({
        url: '/family',
        method: 'GET',
      }),
      providesTags: ['Family'],
    }),
    addFamilyMember: builder.mutation<FamilyMember, FamilyMember>({
      query: (familyMember) => ({
        url: '/family',
        method: 'POST',
        body: familyMember,
      }),
      invalidatesTags: ['Family'],
    }),
  }),
})

export const { useGetFamilyMembersQuery, useAddFamilyMemberMutation } = familyMemberApiSlice
