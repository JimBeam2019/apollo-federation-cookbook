import { ApolloServer } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';

const gateway = new ApolloGateway({
  serviceList: [
    { name: "chef", url:"http://localhost:4001/graphql" },
    { name: "recipe", url:"http://localhost:4002/graphql" }
  ]
});

(async () =>{
  const {
    schema, 
    executor
  } = await gateway.load();
  const server = new ApolloServer({
    schema,
    executor
  });

  server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
  })
})();

// const typeDefs = gql`
//     type Query {
//         info: String!
//     }
// `;

// const resolvers = {
//   Query: {
//     info: () => `Hello World!`,
//   },
// };

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

// server.listen().then(({ url }) => {
//   console.log(`Server is ready at ${url}`);
// });
