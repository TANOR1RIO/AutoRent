import type { Car } from '@/types/car'

export const cars: Car[] = [
  {
    id: 1,
    brand: 'Kia',
    model: 'Rio',
    year: 2024,
    type: 'sedan',
    transmission: 'automatic',
    engine: 1.6,
    pricePerMinute: 9.9,
    distance: 120,
    status: 'available',
    image: new URL('@/assets/images/Kia Rio.png', import.meta.url).href
  },
  {
    id: 2,
    brand: 'Hyundai',
    model: 'Solaris',
    year: 2023,
    type: 'sedan',
    transmission: 'automatic',
    engine: 1.6,
    pricePerMinute: 10.5,
    distance: 350,
    status: 'available',
    image: new URL('@/assets/images/Hyundai Solaris.png', import.meta.url).href
  },
  {
    id: 3,
    brand: 'Volkswagen',
    model: 'Polo',
    year: 2024,
    type: 'sedan',
    transmission: 'automatic',
    engine: 1.6,
    pricePerMinute: 11.2,
    distance: 520,
    status: 'available',
    image: new URL('@/assets/images/Volkswagen Polo.png', import.meta.url).href
  },
  {
    id: 4,
    brand: 'Lada',
    model: 'Vesta',
    year: 2023,
    type: 'sedan',
    transmission: 'manual',
    engine: 1.6,
    pricePerMinute: 8.7,
    distance: 680,
    status: 'available',
    image: new URL('@/assets/images/Lada Vesta.png', import.meta.url).href
  },
  {
    id: 5,
    brand: 'Toyota',
    model: 'RAV4',
    year: 2024,
    type: 'crossover',
    transmission: 'automatic',
    engine: 2.0,
    pricePerMinute: 15.9,
    distance: 850,
    status: 'available',
    image: new URL('@/assets/images/Toyota RAV4.png', import.meta.url).href
  },
  {
    id: 6,
    brand: 'Kia',
    model: 'Sportage',
    year: 2024,
    type: 'crossover',
    transmission: 'automatic',
    engine: 2.0,
    pricePerMinute: 17.5,
    distance: 1100,
    status: 'busy',
    image: new URL('@/assets/images/Kia Sportage.png', import.meta.url).href
  },
  {
    id: 7,
    brand: 'Haval',
    model: 'Jolion',
    year: 2024,
    type: 'crossover',
    transmission: 'automatic',
    engine: 1.5,
    pricePerMinute: 14.5,
    distance: 430,
    status: 'available',
    image: new URL('@/assets/images/Haval Jolion.png', import.meta.url).href
  },
  {
    id: 8,
    brand: 'BMW',
    model: '3 Series',
    year: 2024,
    type: 'premium',
    transmission: 'automatic',
    engine: 2.0,
    pricePerMinute: 24.9,
    distance: 1400,
    status: 'available',
    image: new URL('@/assets/images/BMW 3 Series.png', import.meta.url).href
  }
]