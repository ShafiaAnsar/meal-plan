import type { Metadata } from "next"
import { FamilyMemberForm } from "@/components/FamilyMemberForm"
import { FamilyMembersList } from "@/components/FamilyMemberList"
import { MealPlanDisplay } from "@/components/MealPlanDisplay"
import { HeroSection } from "@/components/HeroSection"

export const metadata: Metadata = {
  title: "Family Meal Planner",
  description: "Plan meals for your family with ease",
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold mb-4">Family Members</h2>
            <FamilyMemberForm />
            <FamilyMembersList />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">This Week&apos;s Meal Plan</h2>
            <MealPlanDisplay />
          </div>
        </div>
      </main>
    </div>
  )
}

