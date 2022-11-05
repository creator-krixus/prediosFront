import {GraphQLClient} from 'graphql-request'

const endpoint = 'http://localhost:3001/graphql'
const client = new GraphQLClient(endpoint)

export default client