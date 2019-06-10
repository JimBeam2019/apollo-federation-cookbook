import { ApolloServer, gql } from 'apollo-server';
import { buildFederatedSchema } from '@apollo/federation';

const typeDefs = gql`
    extend type Query {
        info: String!
    }
`;

const resolvers = {
    Query: {
        info: () => `Hello Chef!`,
    },
};

const server = new ApolloServer({
    schema: buildFederatedSchema([
        {
            typeDefs,
            resolvers
        }
    ])
});

server.listen({ port: 4001 }).then(({ url }) => {
    console.log(`Chef Server is ready at ${url}`);
});