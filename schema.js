export default `
type User {
    id: Int!,
    firstName: String!
    lastName: String!
    email: String!
    creatorAt: String!
    updatedAt: String!
}

type Query{
    allUsers: [User!]!
    getUser(id: Int!): User
}

type Mutation {
    registerUser(firstName: String!, lastName: String!, email: String!, password: String!): User
    updateUser(id: Int!, firstName: String, lastName: String, email: String, password: String): [Int!]
    deleteUser(id: Int!): Int!
  }
`