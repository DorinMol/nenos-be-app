import RestaurantController from '../controllers/restaurant'

const resolvers = {
  Query: {
    restaurants: RestaurantController.restaurants,
    searchRestaurants: RestaurantController.searchRestaurants,
  },
}

export default resolvers
