import { IResolvers } from 'graphql-tools';
import { getModelBParameters } from './service';

const resolvers: IResolvers = {
  Query: {
    modelBParameters: async (_, args) => {
      try {
        const parameters = await getModelBParameters(args);
        return parameters;
      } catch (error) {
        throw new Error(`Error fetching Model B parameters: ${error.message}`);
      }
    },
  },
  Mutation: {
    // Add any mutations related to Model B here
  },
};

export default resolvers;