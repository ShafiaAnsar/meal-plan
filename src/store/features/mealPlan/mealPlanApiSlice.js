import { apiSlice } from "../../api/apiSlice"

export const mealPlanApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMealPlan: builder.query({
      query: (memberId) => ({
        url: memberId ? `family/member/${memberId}/mealplan` : '/mealplan',
        method: 'GET',
      }),
      skip: (memberId) => !memberId,
    }),
    getMealPlanForDay: builder.query({
      query: ({ memberId, day }) => ({
        url: `/${memberId}/meals`,
        method: 'GET',
        params: { day }
      }),
    })
  }),
})

export const { useGetMealPlanQuery, useGetMealPlanForDayQuery } = mealPlanApiSlice 