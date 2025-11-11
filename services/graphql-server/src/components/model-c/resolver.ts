import { IResolvers } from 'graphql-tools';
import { getModelCParameters } from '../model-c/service';
import { inferModelC } from '../../../python-inference/app/api/infer';

const modelCResolvers: IResolvers = {
  Query: {
    modelCParameters: async (_, args) => {
      const parameters = await getModelCParameters(args.id);
      return parameters;
    },
  },
  Mutation: {
    inferModelC: async (_, { input }) => {
      const inferenceResult = await inferModelC(input);
      return inferenceResult;
    },
  },
};

export default modelCResolvers;