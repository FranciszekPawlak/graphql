import express from 'express'
import graphqlHTTP from 'express-graphql'
import {
  makeExecutableSchema
} from 'graphql-tools'
import resolvers from './resolvers'
import typeDefs from './schemas'
import models from './db/models'
import {
  getUserIdMiddleware
} from './services/user'
import DataLoader from 'DataLoader'

const batchUsers = async (keys, models) => {
  const users = await models.User.findAll({
    where: {
      id: {
        $in: keys,
      }
    }
  })
  return keys.map(key => users.find(user => user.id === key))
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

const app = express()
app.use(getUserIdMiddleware)
app.use('/graphql', graphqlHTTP(req => ({
  schema,
  context: {
    models,
    userId: req.userId,
    loaders: {
      user: new DataLoader(keys => batchUsers(keys, models))
    }
  },
  graphiql: true,
})))
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'))