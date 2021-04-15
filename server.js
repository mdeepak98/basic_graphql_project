import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema.js";
import { resolvers } from "./resolver.js";
const PORT = process.env.PORT || 5000;

const server = new ApolloServer({ typeDefs, resolvers });
server.listen(PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
