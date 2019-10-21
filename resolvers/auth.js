import {
    skip
} from 'graphql-resolvers'
export const isAuthenticated = (parent, arg, {
        userId
    }) =>
    userId ? skip : new Error('Unauthorized')