import { IResolvers } from 'graphql-tools';
import { query } from 'express';

const resolversMap: IResolvers = {
  ...query,
};

export default resolversMap;
