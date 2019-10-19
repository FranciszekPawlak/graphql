import express from 'express'
import graphqlHTTP from 'express-graphql'
import {
  makeExecutableSchema
} from 'graphql-tools'
import resolvers from './resolvers'
import typeDefs from './schema'
import models from './db/models'
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

const app = express()
app.use('/graphql', graphqlHTTP({
  schema,
  context: {
    models
  },
  graphiql: true,
}))
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'))