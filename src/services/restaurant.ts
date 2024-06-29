import { Restaurant } from '@prisma/client'
import prisma from '../../prisma/prisma'
import {
  CreateRestaurantInput,
  UpdateRestaurantInput,
} from '../models/restaurant'

export default class RestaurantService {
  static async createRestaurant(
    restaurant: CreateRestaurantInput,
  ): Promise<Restaurant> {
    return prisma.restaurant.create({
      data: restaurant,
    })
  }

  static async updateRestaurant(
    restaurant: UpdateRestaurantInput,
  ): Promise<Restaurant> {
    return prisma.restaurant.update({
      where: {
        id: restaurant.id,
      },
      data: restaurant,
    })
  }

  static async deleteRestaurant(id: number): Promise<Restaurant> {
    return prisma.restaurant.delete({
      where: {
        id,
      },
    })
  }

  static async getRestaurants(): Promise<Restaurant[]> {
    return prisma.restaurant.findMany()
  }

  static async searchRestaurants(searchTerm: string): Promise<Restaurant[]> {
    return prisma.restaurant.findMany({
      where: {
        name: {
          contains: searchTerm,
        },
      },
    })
  }
}
