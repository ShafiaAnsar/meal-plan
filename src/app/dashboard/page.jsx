'use client'
import { HeroSection } from "@/components/HeroSection"
import { FamilyMembers } from "@/components/FamilyMembers"
import { FoodCategories } from "@/components/FoodCategories"
import { MealGrid } from "@/components/MealPlanGrid"
import { useGetFamilyMembersQuery } from "@/store/features/familyMember/familyMemberApiSlice"
import { MealPlanProvider } from "@/context/MealPlanContext"
import { Suspense } from "react"

export default function DashboardPage() {
  const { data, isLoading } = useGetFamilyMembersQuery()
  return (
    <MealPlanProvider>
      <div className="min-h-screen">
        <HeroSection />
        <div className="p-6">
          <Suspense fallback={<div>Loading family members...</div>}>
            <FamilyMembers data={data} isLoading={isLoading} />
          </Suspense>
          <Suspense fallback={<div>Loading calendar...</div>}>
            <FoodCategories />
          </Suspense>
          <Suspense fallback={<div>Loading meals...</div>}>
            <MealGrid data={data} isLoading={isLoading} />
          </Suspense>
        </div>
      </div>
    </MealPlanProvider>
  )
}