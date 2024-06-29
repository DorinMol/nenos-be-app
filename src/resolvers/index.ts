import RestaurantController from '../controllers/restaurant'
import UserController from '../controllers/user'

const resolvers = {
  Query: {
    users: UserController.users,
    restaurants: RestaurantController.restaurants,
    searchRestaurants: RestaurantController.searchRestaurants,
  },
  Mutation: {
    createRestaurant: RestaurantController.createRestaurant,
    updateRestaurant: RestaurantController.updateRestaurant,
    deleteRestaurant: RestaurantController.deleteRestaurant,
    createUser: UserController.createUser,
    loginUser: UserController.loginUser,
  },
}

export default resolvers
