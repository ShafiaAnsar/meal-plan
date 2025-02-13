import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

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

export function MealPlan() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Day</TableHead>
          <TableHead>Meal</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {daysOfWeek.map((day) => (
          <TableRow key={day}>
            <TableCell className="font-medium">{day}</TableCell>
            <TableCell>{mockMealPlan[day]}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}


