import { IResolvers } from 'graphql-tools';

const type: IResolvers = {
  Season: {
    year: (parent) => parent.season,
  },
};

export default type;
