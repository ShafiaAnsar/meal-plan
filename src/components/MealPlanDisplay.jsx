"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

// This is a mock meal plan. In a real application, this would be fetched from your backend.
const mockMealPlan = {
  Monday: "Vegetarian Lasagna",
  Tuesday: "Grilled Chicken with Roasted Vegetables",
  Wednesday: "Fish Tacos",
  Thursday: "Lentil Curry with Rice",
  Friday: "Homemade Pizza Night",
  Saturday: "Beef Stir Fry",
  Sunday: "Roast Dinner",
}

export function MealPlanDisplay() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {daysOfWeek.map((day, index) => (
        <motion.div
          key={day}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card>
            <CardHeader className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-t-lg">
              <CardTitle>{day}</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <p>{mockMealPlan[day]}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

