"use client"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useAddFamilyMemberMutation } from "@/store/features/familyMember/familyMemberApiSlice"
import { toast } from 'sonner'

export function AddFamilyMemberModal({ isOpen, onClose }) {
  const { register, handleSubmit, setValue, reset } = useForm()
  const [addFamilyMember, { isLoading }] = useAddFamilyMemberMutation()

  const onSubmit = async (data) => {
    try {
      await addFamilyMember(data).unwrap()
      toast.success('Family member added successfully!')
      reset() // Reset form
      onClose()
    } catch (error) {
      // Extract the error message from the backend response
      const errorMessage = error?.data?.message || 
                          error?.error || 
                          'An unexpected error occurred'
      toast.error(errorMessage)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Add Family Member</h2>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" {...register("name")} required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" {...register("email")} required />
              </div>
              <div>
                <Label htmlFor="dietary-restriction">Dietary Restriction</Label>
                <Select onValueChange={(value) => setValue('dietaryRestrictions', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a dietary restriction" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">None</SelectItem>
                    <SelectItem value="vegetarian">Vegetarian</SelectItem>
                    <SelectItem value="vegan">Vegan</SelectItem>
                    <SelectItem value="gluten-free">Gluten-free</SelectItem>
                    <SelectItem value="dairy-free">Dairy-free</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full bg-purple-400 hover:bg-purple-500" disabled={isLoading}>
                {isLoading ? "Adding..." : "Add Member"}
              </Button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

