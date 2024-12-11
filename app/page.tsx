import { CarList } from '../components/car-list'
import { CarBookingForm } from '../components/car-booking-form'

const sampleCars = [
  {
    id: "1",
    name: "Tesla Model 3",
    image: "/placeholder.svg?height=200&width=300",
    price: 100,
    seats: 5,
    transmission: "Automatic",
    fuelType: "Electric",
    mileage: "Unlimited",
  },
  {
    id: "2",
    name: "BMW 3 Series",
    image: "/placeholder.svg?height=200&width=300",
    price: 120,
    seats: 5,
    transmission: "Automatic",
    fuelType: "Gasoline",
    mileage: "250 mi/day",
  },
  {
    id: "3",
    name: "Mercedes C-Class",
    image: "/placeholder.svg?height=200&width=300",
    price: 130,
    seats: 5,
    transmission: "Automatic",
    fuelType: "Gasoline",
    mileage: "250 mi/day",
  },
]

export default function Home() {
  return (
    <main className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-10">BOLT.NEW Car Rental</h1>
      <div className="space-y-10">
        <CarBookingForm />
        <CarList cars={sampleCars} />
      </div>
    </main>
  )
}

