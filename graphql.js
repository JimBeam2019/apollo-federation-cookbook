import { ApolloServer,gql } from 'apollo-server'

const typeDefs = gql`
    type Query {
        info: 'Hello world!'
    }
`;

const resolvers = {
    Query: {
        info: () => info
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});