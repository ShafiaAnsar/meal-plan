"use client"
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface FamilyMember {
  id: string;
  name: string;
  email: string;
  dietaryRestrictions: string[];
}

interface MealPlanContextType {
  selectedMember: FamilyMember | null;
  selectedDay: string;
  setSelectedMember: (member: FamilyMember) => void;
  setSelectedDay: (day: string) => void;
}

const MealPlanContext = createContext<MealPlanContextType | undefined>(undefined)

export function MealPlanProvider({ children }: { children: ReactNode }) {
  const [selectedMember, setSelectedMember] = useState<FamilyMember | null>(null)
  const [selectedDay, setSelectedDay] = useState("monday")
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    const today = new Date().getDay()
    setSelectedDay(days[today])
  }, [])

  const value = {
    selectedMember,
    selectedDay,
    setSelectedMember,
    setSelectedDay,
  }

  if (!isMounted) {
    return null
  }

  return (
    <MealPlanContext.Provider value={value}>
      {children}
    </MealPlanContext.Provider>
  )
}

export const useMealPlan = () => {
  const context = useContext(MealPlanContext)
  if (context === undefined) {
    throw new Error('useMealPlan must be used within a MealPlanProvider')
  }
  return context
} 