import React from 'react'
import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from 'react'

const MealCard = ({meal}) => {
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <motion.div
      key={meal.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`rounded-2xl overflow-hidden bg-white p-4 shadow-md`}>
        <div className="relative mb-4">
          <div className="aspect-square rounded-xl overflow-hidden bg-gray-100">
            {meal.imageUrl && !imageError ? (
              <Image
                src={meal.imageUrl}
                alt={meal.name || meal.type}
                width={400}
                height={400}
                className="object-cover w-full h-full"
                loading="lazy"
                onError={handleImageError}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYvLy02Mi85OEI2PTZFOT5ZXWVlZY9nZ3p6dHR0Z2diZGRkZGT/2wBDARUXFyAeIB4aGh4gICAgZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGT/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-100">
                <span className="text-gray-400 text-sm">No image available</span>
              </div>
            )}
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-sm text-purple-600 font-medium">
            {meal.type[0].toUpperCase() + meal.type.slice(1)}
          </div>
          <h3 className="font-semibold text-gray-900">{meal.name || 'No meal planned'}</h3>
          {meal.dietaryRestriction && (
            <div className="text-xs text-gray-500">
              {meal.dietaryRestriction[0].toUpperCase() + meal.dietaryRestriction.slice(1)}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default MealCard