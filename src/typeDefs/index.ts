const typeDefs = `
  schema {
    query: Query
    mutation: Mutation
  }
  
  type Restaurant {
    id: ID!
    name: String!
    address: String!
    email: String!
    phone: String!
  }

  type User {
    id: ID!
    email: String!
  }
  
  input CreateUserInput {
    email: String!
    password: String!
  }
  
  input CreateRestaurantInput {
    name: String!
    address: String!
    email: String!
    phone: String!
  }

  input UpdateRestaurantInput {
    id: ID!
    name: String
    address: String
    email: String
    phone: String
  }
    
  type Query {
    restaurants: [Restaurant!]!
    searchRestaurants(searchTerm: String): [Restaurant]
  }
  
  type Mutation {
    createRestaurant(restaurant: CreateRestaurantInput!): Restaurant!
    updateRestaurant(restaurant: UpdateRestaurantInput!): Restaurant!
    deleteRestaurant(id: ID!): Restaurant!
    createUser(user: CreateUserInput!): User!
  }
`

export default typeDefs