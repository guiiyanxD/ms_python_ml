import { IResolvers } from 'graphql-tools';
import { getImageParameters } from './service';
import { processImage } from './imageReceiver';

const resolvers: IResolvers = {
  Query: {
    getImageData: async (_, { id }) => {
      const parameters = await getImageParameters(id);
      return parameters;
    },
  },
  Mutation: {
    uploadImage: async (_, { file }) => {
      const processedData = await processImage(file);
      return processedData;
    },
  },
};

export default resolvers;