// console.log('hola academia');

import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import expressPlayGround from 'graphql-playground-middleware-express';
import schema from './schema';

const app = express();
app.use(cors());
app.use(compression());

const servApollo = new ApolloServer({
  schema,
  introspection: true,
});

servApollo.applyMiddleware({ app });
app.get('/', expressPlayGround({ endpoint: '/graphql' }));

const PORT = 5200;
app.listen(PORT, () => {
  console.log(
    `Server academia online - GraphQL Runing at:http://localhost:${PORT}/graphql`
  );
});
