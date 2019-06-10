import { ApolloServer, gql } from 'apollo-server';
import { buildFederatedSchema } from '@apollo/federation';

const typeDefs = gql`
    extend type Query {
        info: String!
    }
`;

const resolvers = {
    Query: {
        info: () => `Cookbooks on sales!`,
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

server.listen({ port: 4002 }).then(({ url }) => {
    console.log(`Recipe Server is ready at ${url}`);
});