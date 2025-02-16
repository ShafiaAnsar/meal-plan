"use client"

import { motion } from "framer-motion"
import { useMealPlan } from "@/context/MealPlanContext"

const weekdays = [
  { id: "monday", name: "Monday" },
  { id: "tuesday", name: "Tuesday" },
  { id: "wednesday", name: "Wednesday" },
  { id: "thursday", name: "Thursday" },
  { id: "friday", name: "Friday" },
  { id: "saturday", name: "Saturday" },
  { id: "sunday", name: "Sunday" },
]

export function FoodCategories() {
  const { selectedDay, setSelectedDay } = useMealPlan()

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Week Days</h2>
      <div style={{ scrollbarWidth: 'none' }} className="flex gap-2 overflow-x-auto  pb-2">
        {weekdays.map((day, index) => (
          <motion.button
            key={day.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`flex items-center gap-2 px-6 py-2 rounded-full border transition-colors min-w-[120px] justify-center
              ${selectedDay === day.id 
                ? 'bg-purple-500 text-white' 
                : 'bg-white hover:bg-gray-50'}`}
            onClick={() => setSelectedDay(day.id)}
          >
            <span>{day.name}</span>
          </motion.button>
        ))}
      </div>
    </div>
  )
}

