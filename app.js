const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { resolvers } = require("./resolvers");
const { typeDefs } = require("./typeDefs");
const { connectDb } = require("./db");

const app = express();
connectDb();

app.get("/", (req, res) => {
  res.send("Welcome to my api");
});

async function start() {
  // iniciando apollo server
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: "/api" });

  app.use((req, res, next) => {
    res.status(404).send("not found");
  });

  app.listen(3000, () =>
    console.log("Server on port",  3000)
  );

}

start();
