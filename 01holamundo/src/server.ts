import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import expressPlayground from 'graphql-playground-middleware-express';
// import { graphqlHTTP } from "express-graphql";

import schema from './schema/index';
import { createServer } from 'http';

const app = express();
const PORT = 5300;

app.use(cors());
app.use(compression());

const server = new ApolloServer({
  schema,
  introspection: true,
});

server.applyMiddleware({ app });
app.use(
  '/',
  expressPlayground({
    endpoint: '/graphql',
  })
);
// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema,
//     graphiql: true,
//   })
// );
const httpServer = createServer(app);

httpServer.listen({ port: PORT }, () => {
  console.log(`Hola Mundo API GraphQL http://localhost:${PORT}/graphql`);
});
