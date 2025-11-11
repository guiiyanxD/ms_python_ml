import { getParametersFromDB } from '../../db/gcpPostgres';
import { sendToInferenceService } from '../../utils/inferenceService';

export const fetchModelBParameters = async (id: string) => {
    const parameters = await getParametersFromDB('model_b', id);
    return parameters;
};

export const inferModelB = async (parameters: any) => {
    const result = await sendToInferenceService('model_b', parameters);
    return result;
};