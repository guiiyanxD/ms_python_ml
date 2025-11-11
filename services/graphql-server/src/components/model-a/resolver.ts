import { Query, Resolver } from 'type-graphql';
import { getModelAParameters } from './service';
import { ModelAType } from '../../graphql/types';

@Resolver()
export class ModelAResolver {
  @Query(() => [ModelAType])
  async modelAParameters() {
    const parameters = await getModelAParameters();
    return parameters;
  }
}