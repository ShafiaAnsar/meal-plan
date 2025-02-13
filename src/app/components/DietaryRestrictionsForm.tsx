"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const restrictions = [
  { id: "vegetarian", label: "Vegetarian" },
  { id: "vegan", label: "Vegan" },
  { id: "gluten-free", label: "Gluten-free" },
  { id: "dairy-free", label: "Dairy-free" },
  { id: "nut-free", label: "Nut-free" },
]

export function DietaryRestrictionsForm() {
  const [selectedRestrictions, setSelectedRestrictions] = useState<string[]>([])

  const handleRestrictionChange = (restriction: string) => {
    setSelectedRestrictions((prev) =>
      prev.includes(restriction) ? prev.filter((r) => r !== restriction) : [...prev, restriction],
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Submitted restrictions:", selectedRestrictions)
    // Here you would typically send this data to your backend
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {restrictions.map((restriction) => (
        <div key={restriction.id} className="flex items-center space-x-2">
          <Checkbox
            id={restriction.id}
            checked={selectedRestrictions.includes(restriction.id)}
            onCheckedChange={() => handleRestrictionChange(restriction.id)}
          />
          <Label htmlFor={restriction.id}>{restriction.label}</Label>
        </div>
      ))}
      <Button type="submit">Update Restrictions</Button>
    </form>
  )
}

