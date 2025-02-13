"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

// This is mock data. In a real application, you would fetch this from your backend.
const mockFamilyMembers = [
  { id: 1, name: "John Doe", email: "john@example.com", dietaryRestriction: "None" },
  { id: 2, name: "Jane Doe", email: "jane@example.com", dietaryRestriction: "Vegetarian" },
  { id: 3, name: "Jimmy Doe", email: "jimmy@example.com", dietaryRestriction: "Gluten-free" },
]

export function FamilyMembersList() {
  return (
    <div className="space-y-4 mt-8">
      {mockFamilyMembers.map((member, index) => (
        <motion.div
          key={member.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card>
            <CardContent className="flex items-center p-4">
              <Avatar className="h-12 w-12 mr-4">
                <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${member.name}`} />
                <AvatarFallback>
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.email}</p>
                <p className="text-sm text-gray-500">Dietary Restriction: {member.dietaryRestriction}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

