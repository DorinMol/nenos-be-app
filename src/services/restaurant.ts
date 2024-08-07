import { Restaurant } from '@prisma/client'
import prisma from '../../prisma/prisma'
import {
  CreateRestaurantInput,
  RestaurantInput,
  SearchRestaurantInput,
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
        id: Number(restaurant.id),
      },
      data: {
        // receiving the id as string...
        email: restaurant.email,
        name: restaurant.name,
        address: restaurant.address,
        phone: restaurant.phone,
      },
    })
  }

  static async deleteRestaurant(id: number | string): Promise<Restaurant> {
    return prisma.restaurant.delete({
      where: {
        id: Number(id),
      },
    })
  }

  static async getRestaurants({
    page,
    pageSize,
  }: RestaurantInput): Promise<Restaurant[]> {
    return prisma.restaurant.findMany({
      skip: (page - 1) * pageSize,
      take: pageSize,
      orderBy: {
        createdAt: 'desc',
      },
    })
  }

  static async searchRestaurants({
    searchTerm,
    page,
    pageSize,
  }: SearchRestaurantInput): Promise<Restaurant[]> {
    return prisma.restaurant.findMany({
      where: {
        name: {
          contains: searchTerm,
        },
      },
      skip: page * pageSize,
      take: pageSize,
    })
  }
}
