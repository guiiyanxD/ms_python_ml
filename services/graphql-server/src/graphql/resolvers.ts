import { ModelAService } from '../components/model-a/service';
import { ModelBService } from '../components/model-b/service';
import { ModelCService } from '../components/model-c/service';
import { ModelDImageService } from '../components/model-d-image/service';

const modelAService = new ModelAService();
const modelBService = new ModelBService();
const modelCService = new ModelCService();
const modelDImageService = new ModelDImageService();

const resolvers = {
  Query: {
    modelA: async (_, args) => {
      return await modelAService.getParameters(args);
    },
    modelB: async (_, args) => {
      return await modelBService.getParameters(args);
    },
    modelC: async (_, args) => {
      return await modelCService.getParameters(args);
    },
    modelDImage: async (_, args) => {
      return await modelDImageService.getParameters(args);
    },
  },
  Mutation: {
    inferModelA: async (_, args) => {
      return await modelAService.infer(args);
    },
    inferModelB: async (_, args) => {
      return await modelBService.infer(args);
    },
    inferModelC: async (_, args) => {
      return await modelCService.infer(args);
    },
    inferModelDImage: async (_, args) => {
      return await modelDImageService.infer(args);
    },
  },
};

export default resolvers;