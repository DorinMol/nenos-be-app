import {
  CreateRestaurantInput,
  RestaurantInput,
  SearchRestaurantInput,
  UpdateRestaurantInput,
} from '../models/restaurant'
import RestaurantService from '../services/restaurant'

export default class RestaurantController {
  static async createRestaurant(
    _: unknown,
    { restaurant }: { restaurant: CreateRestaurantInput },
  ) {
    return RestaurantService.createRestaurant(restaurant)
  }
  static async restaurants(_: unknown, restaurantInput: RestaurantInput) {
    return RestaurantService.getRestaurants(restaurantInput)
  }
  static async searchRestaurants(
    _: unknown,
    searchRestaurantInput: SearchRestaurantInput,
  ) {
    return RestaurantService.searchRestaurants(searchRestaurantInput)
  }
  static async updateRestaurant(
    _: unknown,
    { restaurant }: { restaurant: UpdateRestaurantInput },
  ) {
    return RestaurantService.updateRestaurant(restaurant)
  }
  static async deleteRestaurant(_: unknown, { id }: { id: number }) {
    return RestaurantService.deleteRestaurant(id)
  }
}
