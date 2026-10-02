export type CarType =
  | 'sedan'
  | 'crossover'
  | 'hatchback'
  | 'premium'

export type Transmission =
  | 'automatic'
  | 'manual'

export type CarStatus =
  | 'available'
  | 'busy'

export interface Car {
  id: number
  brand: string
  model: string
  year: number
  type: CarType
  transmission: Transmission
  engine: number
  pricePerMinute: number
  distance: number
  status: CarStatus
  image: string
}