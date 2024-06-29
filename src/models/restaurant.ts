import { Restaurant } from '@prisma/client'

export type UpdateRestaurantInput = Omit<Restaurant, 'createdAt' | 'updatedAt'>
export type CreateRestaurantInput = Omit<
  Restaurant,
  'id' | 'createdAt' | 'updatedAt'
>
export type SearchRestaurantInput = {
  searchTerm: string
}
