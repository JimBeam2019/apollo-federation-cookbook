import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
    type Query {
        info: String!
    }
`;

const resolvers = {
  Query: {
    info: () => `Hello World!`,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server is ready at ${url}`);
});
