import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFileSync } from "fs";

const typeDefs = readFileSync(__dirname + "/nomadlist.graphql", {
  encoding: "utf-8",
});
const resolvers = require(__dirname + "/resolvers");
const NomadListAPI = require(__dirname + "/datasources/NomadListApi");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
