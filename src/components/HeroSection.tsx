"use client"

import { motion } from "framer-motion"
import { Utensils } from "lucide-react"

export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
      <div className="container mx-auto px-4">
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
      </div>
    </section>
  )
}

