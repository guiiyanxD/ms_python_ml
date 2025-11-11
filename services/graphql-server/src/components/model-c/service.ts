import { getParametersFromDatabase } from '../../db/gcpPostgres';
import { sendToInferenceService } from '../../utils/inferenceService';

export const fetchModelCParameters = async (id: string) => {
    const parameters = await getParametersFromDatabase(id);
    return parameters;
};

export const inferModelC = async (parameters: any) => {
    const result = await sendToInferenceService(parameters, 'model_c');
    return result;
};