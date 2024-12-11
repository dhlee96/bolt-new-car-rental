import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface Car {
  id: string
  name: string
  image: string
  price: number
  seats: number
  transmission: string
  fuelType: string
  mileage: string
}

interface CarListProps {
  cars: Car[]
}

export function CarList({ cars }: CarListProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {cars.map((car) => (
        <Card key={car.id}>
          <CardHeader>
            <CardTitle>{car.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <img src={car.image} alt={car.name} className="w-full h-40 object-cover mb-4 rounded-md" />
            <Badge className="mb-2">${car.price}/day</Badge>
            <p className="text-sm text-gray-600">{car.seats} Seats • {car.transmission} • {car.fuelType}</p>
            <p className="text-sm text-gray-600">Mileage: {car.mileage}</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Book Now</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

