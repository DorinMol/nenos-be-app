import { ApolloServer } from 'apollo-server'
import dotenv from 'dotenv'
import resolvers from './resolvers'
import typeDefs from './typeDefs'

dotenv.config()
const port = process.env.PORT || 4000

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen(port, () => {
  console.log(`Server is running on ::${port}/graphql`)
})
