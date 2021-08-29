import logger from './logger/index'
import { ApolloServer } from 'apollo-server'
import { importSchema } from 'graphql-import'
import resolver from './resolvers'

const log = new logger
const schemaPath = './src/schema/index.graphql'

log.say(__filename, 'everything is fine')

const server = new ApolloServer({
    typeDefs: importSchema(schemaPath),
    resolvers: resolver
})

server.listen(8088).then(({ url }) => {
    log.say(__filename, `server started @ ${url}`)
})