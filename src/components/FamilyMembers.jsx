"use client"

import { Plus } from "lucide-react"
import { motion } from "framer-motion"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { AddFamilyMemberModal } from "./AddFamilyMemberModal.jsx"
import { useState, useEffect } from "react"
import { useGetFamilyMembersQuery } from "@/store/features/familyMember/familyMemberApiSlice"
import { useMealPlan } from "@/context/MealPlanContext"
import { Loader } from "@/components/ui/loader"
export function FamilyMembers() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { data, isLoading } = useGetFamilyMembersQuery()
  const { setSelectedMember, selectedMember } = useMealPlan()
  const familyMembers = data?.data

  // Set initial selected member
  useEffect(() => {
    if (familyMembers?.length > 0 && !selectedMember) {
      const firstMember = familyMembers[0];
      setSelectedMember({
        _id: firstMember._id,
        name: firstMember.name,
        email: firstMember.email,
        dietaryRestrictions: firstMember.dietaryRestrictions
      });
    }
  }, [familyMembers, selectedMember, setSelectedMember])

  if (isLoading) return <Loader />

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Family Members</h2>
        <Button onClick={() => setIsModalOpen(true)} variant="outline" size="sm">
          <Plus className="w-4 h-4 mr-2" /> Add Member
        </Button>
      </div>
      <div className="flex gap-4 overflow-x-auto p-4">
     {familyMembers?.map((member, index) => (
            <motion.div
            key={member._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`flex items-center gap-2 px-6 py-2 cursor-pointer rounded-md border  bg-white  transition-colors min-w-[120px] justify-center
              ${selectedMember?._id === member._id 
                ? 'border-purple-500 ' 
                : 'border-gray-300 hover:border-purple-500'}`}
            onClick={() => setSelectedMember(member)}
          >
            <div className="w-[130px] p-4 cursor-pointer transition-all flex flex-col items-center justify-center">
            <Avatar className="w-10 h-10">
              <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span>{member.name}</span>
            <span>{member.dietaryRestrictions?.length > 0 ? member.dietaryRestrictions[0].charAt(0).toUpperCase() + member.dietaryRestrictions[0].slice(1) : 'No restrictions'}</span>
            </div>
          </motion.div>
      ))}
      </div>
      <AddFamilyMemberModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

