import express from 'express';
import compression from 'compression';
import cors from 'cors';

import { ApolloServer } from 'apollo-server-express';
import expressPlayGround from 'graphql-playground-middleware-express';

import schema from './schema';
import { dataSources } from './data';
const init = () => {
  const app = express();
  app.use(cors());
  app.use(compression());

  const server = new ApolloServer({
    schema,
    introspection: true, // Necesario
    dataSources: () => ({
      seasons: new dataSources.SeasonsData(),
      races: new dataSources.SeasonsData(),
    }),
  });

  server.applyMiddleware({ app });
  app.use('/', expressPlayGround({ endpoint: '/graphql' }));

  const PORT = process.env.PORT || 5000;

  app.listen({ port: PORT }, (): void => console.log(`http://localhost:${PORT}/graphql`));
};

init();
