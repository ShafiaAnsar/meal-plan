"use client"

import { motion } from "framer-motion"
import { Utensils } from "lucide-react"

export function HeroSection() {
  return (
    <section className="bg-[#8B5CF6] text-white p-8 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="inline-block mb-4"
          >
            <Utensils size={48} />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Family Meal Planner</h1>
          <p className="text-xl md:text-2xl mb-8">Plan delicious and nutritious meals for your entire family</p>
        </motion.div>
    </section>
  )
}

