"use client"
import { useMealPlan } from "@/context/MealPlanContext"
import { useGetMealPlanQuery } from "@/store/features/mealPlan/mealPlanApiSlice"
import { Suspense } from 'react'
import MealCardSkeleton from "./MealCardSkelton"
import MealCard from "./MealCard"

export function MealGrid() {
  const { selectedDay, selectedMember } = useMealPlan()
  const { data: mealPlan, isLoading } = useGetMealPlanQuery(
    selectedMember?._id,
    { 
      skip: !selectedMember,
      refetchOnMountOrArgChange: true
    }
  )

  if (!selectedMember) return <div>Please select a family member</div>
  if (isLoading) return <div>Loading meals...</div>
  if (!mealPlan) return <div>No meal plan available</div>

  const dayMeals = mealPlan?.data?.weeklyPlan?.[selectedDay]
  
  const meals = [
    { id: 1, type: 'Breakfast', ...dayMeals?.breakfast },
    { id: 2, type: 'Lunch', ...dayMeals?.lunch },
    { id: 3, type: 'Dinner', ...dayMeals?.dinner },
  ]

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Daily Meals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {meals.map((meal, index) => (
          <Suspense key={index} fallback={<MealCardSkeleton />}>
            <MealCard key={index} meal={meal} />
          </Suspense>
        ))}
      </div>
    </div>
  )
}