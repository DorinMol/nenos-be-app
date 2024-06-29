import {
  CreateRestaurantInput,
  SearchRestaurantInput,
  UpdateRestaurantInput,
} from '../models/restaurant'
import RestaurantService from '../services/restaurant'

export default class RestaurantController {
  static async createRestaurant(_: unknown, restaurant: CreateRestaurantInput) {
    return RestaurantService.createRestaurant(restaurant)
  }
  static async restaurants() {
    return RestaurantService.getRestaurants()
  }
  static async searchRestaurants(
    _: unknown,
    { searchTerm }: SearchRestaurantInput,
  ) {
    return RestaurantService.searchRestaurants(searchTerm)
  }
  static async updateRestaurant(
    _: unknown,
    updateRestaurant: UpdateRestaurantInput,
  ) {
    return RestaurantService.updateRestaurant(updateRestaurant)
  }
  static async deleteRestaurant(_: unknown, { id }: { id: number }) {
    return RestaurantService.deleteRestaurant(id)
  }
}
